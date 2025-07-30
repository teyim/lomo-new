import { Request, Response, NextFunction } from 'express';
import { createAdminService } from './service';
import { findAdminByEmail } from './data-access';
import { prisma } from '@repo/db';
import { ErrorWithStatus } from '../../types/error';
import { HttpStatusCode } from '../../constants';

export const createAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return next(new ErrorWithStatus('Email and password are required', HttpStatusCode.BadRequest));
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return next(new ErrorWithStatus('Invalid email format', HttpStatusCode.BadRequest));
    }

    // Password strength validation
    if (password.length < 8) {
      return next(new ErrorWithStatus('Password must be at least 8 characters long', HttpStatusCode.BadRequest));
    }

    const admin = await createAdminService({ email, password, name });

    res.status(HttpStatusCode.Created).json({
      success: true,
      message: 'Admin created successfully',
      data: { admin },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAdminsController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Only return basic info, no passwords
    const admins = await prisma.admin.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        isActive: true,
        lastLoginAt: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: { admins },
    });
  } catch (error) {
    next(error);
  }
};

export const updateAdminStatusController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    if (typeof isActive !== 'boolean') {
      return next(new ErrorWithStatus('isActive must be a boolean value', HttpStatusCode.BadRequest));
    }

    // Prevent deactivating yourself
    if (req.admin?.id === id && !isActive) {
      return next(new ErrorWithStatus('You cannot deactivate your own account', HttpStatusCode.BadRequest));
    }

    const admin = await prisma.admin.update({
      where: { id },
      data: { isActive },
      select: {
        id: true,
        email: true,
        name: true,
        isActive: true,
        lastLoginAt: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(HttpStatusCode.OK).json({
      success: true,
      message: `Admin ${isActive ? 'activated' : 'deactivated'} successfully`,
      data: { admin },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    // Prevent deleting yourself
    if (req.admin?.id === id) {
      return next(new ErrorWithStatus('You cannot delete your own account', HttpStatusCode.BadRequest));
    }

    // Check if admin exists
    const admin = await findAdminByEmail(''); // We'll find by ID instead
    const existingAdmin = await prisma.admin.findUnique({
      where: { id },
    });

    if (!existingAdmin) {
      return next(new ErrorWithStatus('Admin not found', HttpStatusCode.NotFound));
    }

    // Delete all sessions first, then delete admin
    await prisma.adminSession.deleteMany({
      where: { adminId: id },
    });

    await prisma.admin.delete({
      where: { id },
    });

    res.status(HttpStatusCode.OK).json({
      success: true,
      message: 'Admin deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};