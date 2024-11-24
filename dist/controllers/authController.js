"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../data/users");
const authenticateToken_1 = require("../middleware/authenticateToken");
const loginUser = (req, res, next) => {
    try {
        const { email, password } = req.body;
        // Ищем пользователя по email и паролю
        const user = users_1.users.find((u) => u.email === email && u.password === password);
        if (!user) {
            res.status(401).json({ message: 'Invalid email or password' });
            return; // Завершаем выполнение функции
        }
        // Генерируем токен
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, authenticateToken_1.SECRET_KEY, {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
        return; // Завершаем выполнение функции
    }
    catch (error) {
        next(error); // Передаём ошибку следующему middleware
    }
};
exports.loginUser = loginUser;
