import { Router, type Router as ExpressRouter } from 'express';

import upload from '../../utils/upload';
import { adminAuthMiddleware } from '../../middleware/adminAuth';
import {
  addAssetController,
  deleteAssetController,
  getAllAssetsController,
  getAssetByCategoryController,
  updateAssetController,
} from './controller';

const router: ExpressRouter = Router();

// Public routes (no auth required)
router.get('/', getAllAssetsController);
router.get('/:categoryId', getAssetByCategoryController);

// Protected routes (admin auth required)
router.post('/', adminAuthMiddleware, upload().single('asset'), addAssetController);
router.delete('/:id', adminAuthMiddleware, deleteAssetController);
router.put('/:id', adminAuthMiddleware, upload().single('asset'), updateAssetController);

export default router;
