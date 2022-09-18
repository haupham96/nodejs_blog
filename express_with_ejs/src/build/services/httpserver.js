"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ejs = __importStar(require("ejs"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const method_override_1 = __importDefault(require("method-override"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
function default_1(app) {
    app.use(express_1.default.static('public', {
        maxAge: '1d',
        cacheControl: true,
    }));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.json());
    app.use((0, method_override_1.default)('_method'));
    app.set('views', path_1.default.join(__dirname, '../../views'));
    app.set('view engine', 'html');
    app.engine('.html', ejs.renderFile);
    app.use('/product', ProductController_1.default.listProduct);
    return app;
}
exports.default = default_1;
