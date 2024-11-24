"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.fetchUserById = exports.fetchUsers = void 0;
const userService_1 = require("../services/userService");
/**
 * The list of all users
 */
const fetchUsers = async (req, res) => {
    try {
        const users = await (0, userService_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
};
exports.fetchUsers = fetchUsers;
/**
 * Single user by id
 */
const fetchUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await (0, userService_1.getUserById)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ message: `User with ID ${id} not found`, error });
    }
};
exports.fetchUserById = fetchUserById;
/**
 * Update user by id
 */
const updateUser = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const user = await (0, userService_1.updateUserById)(Number(id), updatedData);
        res.status(200).json(user);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Failed to update user with ID ${id}`, error });
    }
};
exports.updateUser = updateUser;
