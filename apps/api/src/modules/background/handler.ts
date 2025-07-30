import { Router, type Router as ExpressRouter } from 'express';
import {
  addBackgroundController,
  deleteBackgroundController,
  getAllBackgroundsController,
  updateBackgroundController,
} from './controller';
import upload from '../../utils/upload';
import { adminAuthMiddleware } from '../../middleware/adminAuth';

const router: ExpressRouter = Router();

// Public routes (no auth required)
router.get('/', getAllBackgroundsController);

// Protected routes (admin auth required)
router.post('/', adminAuthMiddleware, upload().single('background'), addBackgroundController);
router.delete('/:id', adminAuthMiddleware, deleteBackgroundController);
router.put('/:id', adminAuthMiddleware, upload().single('background'), updateBackgroundController);

export default router;
