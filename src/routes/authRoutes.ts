import express from 'express';
import { loginUser } from '../controllers/authController';

const router = express.Router();

// Login route
router.post('/login', loginUser);

export default router;
