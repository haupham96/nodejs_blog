"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const httpserver_1 = __importDefault(require("./services/httpserver"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
const server = (0, httpserver_1.default)(app);
server.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
