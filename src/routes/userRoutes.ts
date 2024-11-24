import express from 'express';
import {
  fetchUsers,
  fetchUserById,
  updateUser,
} from '../controllers/userController';
import { authenticateToken } from '../middleware/authenticateToken';

const router = express.Router();

// All users route
router.get('/', fetchUsers);

// Protected routes to get and update user by :id
router.get('/:id', authenticateToken, fetchUserById);
router.put('/:id', authenticateToken, updateUser);

export default router;
