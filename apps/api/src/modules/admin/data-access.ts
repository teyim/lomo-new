import { prisma } from '@repo/db';
import type { Admin, AdminSession } from '@repo/db';

export const findAdminByEmail = async (email: string): Promise<Admin | null> => {
  return await prisma.admin.findUnique({
    where: { email },
  });
};

export const createAdmin = async (data: {
  email: string;
  password: string;
  name?: string;
}): Promise<Admin> => {
  return await prisma.admin.create({
    data,
  });
};

export const updateAdminLastLogin = async (adminId: string): Promise<Admin> => {
  return await prisma.admin.update({
    where: { id: adminId },
    data: { lastLoginAt: new Date() },
  });
};

export const createAdminSession = async (data: {
  adminId: string;
  token: string;
  expiresAt: Date;
}): Promise<AdminSession> => {
  return await prisma.adminSession.create({
    data,
  });
};

export const findAdminSession = async (token: string): Promise<AdminSession | null> => {
  return await prisma.adminSession.findUnique({
    where: { token },
    include: { admin: true },
  });
};

export const deleteAdminSession = async (token: string): Promise<void> => {
  await prisma.adminSession.delete({
    where: { token },
  });
};

export const deleteExpiredSessions = async (): Promise<void> => {
  await prisma.adminSession.deleteMany({
    where: {
      expiresAt: {
        lt: new Date(),
      },
    },
  });
};

export const deleteAllAdminSessions = async (adminId: string): Promise<void> => {
  await prisma.adminSession.deleteMany({
    where: { adminId },
  });
};