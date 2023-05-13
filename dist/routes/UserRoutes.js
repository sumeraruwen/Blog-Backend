"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
class UserRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new UserController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.controller.saveUser);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = UserRoutes;
