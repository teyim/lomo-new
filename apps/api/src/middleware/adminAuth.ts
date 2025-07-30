import { Request, Response, NextFunction } from 'express';
import { verifyAdminTokenService } from '../modules/admin/service';
import { ErrorWithStatus } from '../types/error';
import { HttpStatusCode } from '../constants';

// Extend Request interface to include admin
declare global {
  namespace Express {
    interface Request {
      admin?: {
        id: string;
        email: string;
        name: string | null;
      };
    }
  }
}

export const adminAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new ErrorWithStatus('Authorization token is required', HttpStatusCode.Unauthorized));
    }

    const token = authHeader.replace('Bearer ', '');
    
    if (!token) {
      return next(new ErrorWithStatus('Authorization token is required', HttpStatusCode.Unauthorized));
    }

    const admin = await verifyAdminTokenService(token);
    req.admin = admin;
    
    next();
  } catch (error) {
    next(error);
  }
};

// Optional admin auth middleware (doesn't throw error if no token)
export const optionalAdminAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.replace('Bearer ', '');
      
      if (token) {
        try {
          const admin = await verifyAdminTokenService(token);
          req.admin = admin;
        } catch (error) {
          // Ignore auth errors for optional middleware
        }
      }
    }
    
    next();
  } catch (error) {
    next();
  }
};