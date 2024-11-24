import { Request, Response } from 'express';
import {
  getAllUsers,
  getUserById,
  updateUserById,
} from '../services/userService';

// The list of all users
export const fetchUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
};

// Single user by id
export const fetchUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUserById(Number(id));
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: `User with ID ${id} not found`, error });
  }
};

// Update user by id
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const user = await updateUserById(Number(id), updatedData);
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to update user with ID ${id}`, error });
  }
};
