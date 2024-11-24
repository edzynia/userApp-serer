"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes")); // Маршруты для пользователей
const authRoutes_1 = __importDefault(require("./routes/authRoutes")); // Маршруты для авторизации
dotenv_1.default.config(); // Загрузка переменных окружения из .env файла
const app = (0, express_1.default)();
// Middleware для обработки JSON запросов
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Подключение API маршрутов
app.use('/api/users', userRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
// Middleware для раздачи статических файлов React-приложения
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Обработка всех маршрутов, которые не относятся к API
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
exports.default = app; // Экспорт приложения
