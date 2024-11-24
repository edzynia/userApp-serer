"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.getUserById = exports.getAllUsers = void 0;
const axios_1 = __importDefault(require("axios"));
const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';
/**
 * All users
 */
const getAllUsers = async () => {
    const response = await axios_1.default.get(API_BASE_URL);
    return response.data;
};
exports.getAllUsers = getAllUsers;
/**
 * User by id
 */
const getUserById = async (id) => {
    const response = await axios_1.default.get(`${API_BASE_URL}/${id}`);
    return response.data;
};
exports.getUserById = getUserById;
/**
 * Update user data
 */
const updateUserById = async (id, updatedData) => {
    const response = await axios_1.default.put(`${API_BASE_URL}/${id}`, updatedData);
    return response.data;
};
exports.updateUserById = updateUserById;
