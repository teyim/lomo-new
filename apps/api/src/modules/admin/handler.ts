import { Router, type Router as ExpressRouter } from 'express';
import {
  loginAdminController,
  verifyAdminController,
  logoutAdminController,
} from './controller';
import {
  createAdminController,
  getAllAdminsController,
  updateAdminStatusController,
  deleteAdminController,
} from './adminManagement';
import { adminAuthMiddleware } from '../../middleware/adminAuth';

const router: ExpressRouter = Router();

// Public admin authentication routes
router.post('/login', loginAdminController);
router.post('/verify', verifyAdminController);
router.post('/logout', logoutAdminController);

// Protected admin management routes (require admin authentication)
router.post('/create', adminAuthMiddleware, createAdminController);
router.get('/list', adminAuthMiddleware, getAllAdminsController);
router.patch('/:id/status', adminAuthMiddleware, updateAdminStatusController);
router.delete('/:id', adminAuthMiddleware, deleteAdminController);

export default router;