import axios from 'axios';
import dotenv from 'dotenv';
import { User } from '../types/user';

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL || '';

// All users
export const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_BASE_URL);
  return response.data;
};

// User by id
export const getUserById = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`${API_BASE_URL}/${id}`);
  return response.data;
};

// Update user data
export const updateUserById = async (
  id: number,
  updatedData: Partial<User>,
): Promise<User> => {
  const response = await axios.put<User>(`${API_BASE_URL}/${id}`, updatedData);
  return response.data;
};
