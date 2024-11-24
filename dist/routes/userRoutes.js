"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authenticateToken_1 = require("../middleware/authenticateToken");
const router = express_1.default.Router();
// Общедоступный маршрут для получения списка пользователей
router.get('/', userController_1.fetchUsers);
// Защищённые маршруты для получения и обновления пользователя
router.get('/:id', authenticateToken_1.authenticateToken, userController_1.fetchUserById);
router.put('/:id', authenticateToken_1.authenticateToken, userController_1.updateUser);
exports.default = router;
