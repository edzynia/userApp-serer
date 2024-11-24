"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.SECRET_KEY = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.SECRET_KEY = process.env.SECRET_KEY || '';
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Access token required' });
        return;
    }
    jsonwebtoken_1.default.verify(token, exports.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Invalid token' });
            return;
        }
        req.user = decoded;
        next();
    });
};
exports.authenticateToken = authenticateToken;
