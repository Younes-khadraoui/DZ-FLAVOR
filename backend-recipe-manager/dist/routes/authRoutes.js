"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../models/userModel");
const authenticateToken_1 = require("../middlewares/authenticateToken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
exports.authRoutes = express_1.default.Router();
const createDefaultAdminUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const adminEmail = ADMIN_EMAIL;
    const adminPassword = ADMIN_PASSWORD;
    try {
        let adminUser = yield userModel_1.User.findOne({ email: adminEmail });
        if (!adminUser) {
            adminUser = new userModel_1.User({
                email: adminEmail,
                password: adminPassword,
                admin: true,
            });
            const salt = yield bcryptjs_1.default.genSalt(12);
            adminUser.password = yield bcryptjs_1.default.hash(adminPassword, salt);
            yield adminUser.save();
            console.log("Default admin user created successfully");
        }
    }
    catch (err) {
        console.error("Error creating default admin user:", err);
    }
});
createDefaultAdminUser();
exports.authRoutes.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        let user = yield userModel_1.User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }
        user = new userModel_1.User({ email, password });
        const salt = yield bcryptjs_1.default.genSalt(12);
        user.password = yield bcryptjs_1.default.hash(password, salt);
        yield user.save();
        res.json({ msg: "User registered successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
}));
exports.authRoutes.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        let user = yield userModel_1.User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        const payload = {
            user: {
                id: user.id,
            },
        };
        jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
            if (err)
                throw err;
            res.json({ token });
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
}));
exports.authRoutes.get("/account", authenticateToken_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield userModel_1.User.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a.id).select("-password");
        res.json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
}));
