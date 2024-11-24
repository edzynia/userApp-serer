"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.SECRET_KEY = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET_KEY = 'cf665c84a67c3c768e6cc07ec9a5b7178471b4ab57865350e57e80a68d325c3159ccf0bcf9667501805bfea545cf23ca67adac501fec89d8d1327564ef557925';
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Access token required' });
        return; // Завершаем выполнение функции
    }
    jsonwebtoken_1.default.verify(token, exports.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Invalid token' });
            return; // Завершаем выполнение функции
        }
        req.user = decoded; // Явное приведение к нужному типу
        next(); // Переходим к следующему middleware
    });
};
exports.authenticateToken = authenticateToken;
