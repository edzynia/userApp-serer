import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { users as mockUsers } from '../data/users';
import { SECRET_KEY } from '../middleware/authenticateToken';

export const loginUser: RequestHandler = (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user by email and password
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Generating token
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    });

    // Return token and id to client
    res.status(200).json({ token, userId: user.id });
    return;
  } catch (error) {
    next(error); // Resend the error to middleware
  }
};
