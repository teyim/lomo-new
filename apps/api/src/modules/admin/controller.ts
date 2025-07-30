import { Request, Response, NextFunction } from 'express';
import { loginAdminService, verifyAdminTokenService, logoutAdminService } from './service';
import { ErrorWithStatus } from '../../types/error';
import { HttpStatusCode } from '../../constants';

export const loginAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorWithStatus('Email and password are required', HttpStatusCode.BadRequest));
    }

    const result = await loginAdminService(email, password);

    res.status(HttpStatusCode.OK).json({
      success: true,
      message: 'Login successful',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return next(new ErrorWithStatus('Authorization token is required', HttpStatusCode.Unauthorized));
    }

    const admin = await verifyAdminTokenService(token);

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: { admin },
    });
  } catch (error) {
    next(error);
  }
};

export const logoutAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return next(new ErrorWithStatus('Authorization token is required', HttpStatusCode.Unauthorized));
    }

    await logoutAdminService(token);

    res.status(HttpStatusCode.OK).json({
      success: true,
      message: 'Logout successful',
    });
  } catch (error) {
    next(error);
  }
};