import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import {
  findAdminByEmail,
  createAdmin,
  updateAdminLastLogin,
  createAdminSession,
  findAdminSession,
  deleteAdminSession,
  deleteExpiredSessions,
  deleteAllAdminSessions,
} from './data-access';
import { ErrorWithStatus } from '../../types/error';
import { HttpStatusCode } from '../../constants';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const SALT_ROUNDS = 12;

export interface LoginResponse {
  admin: {
    id: string;
    email: string;
    name: string | null;
    lastLoginAt: Date | null;
  };
  token: string;
  expiresAt: Date;
}

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export const createJWT = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyJWT = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new ErrorWithStatus('Invalid or expired token', HttpStatusCode.Unauthorized);
  }
};

export const loginAdminService = async (email: string, password: string): Promise<LoginResponse> => {
  // Clean up expired sessions
  await deleteExpiredSessions();

  // Find admin by email
  const admin = await findAdminByEmail(email);
  if (!admin) {
    throw new ErrorWithStatus('Invalid credentials', HttpStatusCode.Unauthorized);
  }

  // Check if admin is active
  if (!admin.isActive) {
    throw new ErrorWithStatus('Account is deactivated', HttpStatusCode.Forbidden);
  }

  // Verify password
  const isPasswordValid = await comparePassword(password, admin.password);
  if (!isPasswordValid) {
    throw new ErrorWithStatus('Invalid credentials', HttpStatusCode.Unauthorized);
  }

  // Update last login
  await updateAdminLastLogin(admin.id);

  // Generate session token
  const sessionToken = generateToken();
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

  // Create session
  await createAdminSession({
    adminId: admin.id,
    token: sessionToken,
    expiresAt,
  });

  return {
    admin: {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      lastLoginAt: admin.lastLoginAt,
    },
    token: sessionToken,
    expiresAt,
  };
};

export const verifyAdminTokenService = async (token: string) => {
  const session = await findAdminSession(token);
  
  if (!session) {
    throw new ErrorWithStatus('Invalid session', HttpStatusCode.Unauthorized);
  }

  if (session.expiresAt < new Date()) {
    await deleteAdminSession(token);
    throw new ErrorWithStatus('Session expired', HttpStatusCode.Unauthorized);
  }

  if (!session.admin.isActive) {
    throw new ErrorWithStatus('Account is deactivated', HttpStatusCode.Forbidden);
  }

  return {
    id: session.admin.id,
    email: session.admin.email,
    name: session.admin.name,
  };
};

export const logoutAdminService = async (token: string): Promise<void> => {
  await deleteAdminSession(token);
};

export const logoutAllAdminService = async (adminId: string): Promise<void> => {
  await deleteAllAdminSessions(adminId);
};

export const createAdminService = async (data: {
  email: string;
  password: string;
  name?: string;
}) => {
  // Check if admin already exists
  const existingAdmin = await findAdminByEmail(data.email);
  if (existingAdmin) {
    throw new ErrorWithStatus('Admin with this email already exists', HttpStatusCode.Conflict);
  }

  // Hash password
  const hashedPassword = await hashPassword(data.password);

  // Create admin
  const admin = await createAdmin({
    ...data,
    password: hashedPassword,
  });

  return {
    id: admin.id,
    email: admin.email,
    name: admin.name,
    createdAt: admin.createdAt,
  };
};