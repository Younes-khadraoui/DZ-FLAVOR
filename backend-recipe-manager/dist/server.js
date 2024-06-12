"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = require("./routes/authRoutes");
const recipeRoutes_1 = require("./routes/recipeRoutes");
const categoryRoutes_1 = require("./routes/categoryRoutes");
const suggestionsRoutes_1 = require("./routes/suggestionsRoutes");
const cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: ["https://dzflavor.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(express_1.default.json());
app.use("/api/auth", authRoutes_1.authRoutes);
app.use("/api/recipes", recipeRoutes_1.recipeRoutes);
app.use("/api/categories", categoryRoutes_1.categoryRoutes);
app.use("/api/suggestions", suggestionsRoutes_1.suggestionsRoutes);
mongoose_1.default.set("debug", true);
const { MONGODB_URI } = process.env;
mongoose_1.default.connect(MONGODB_URI);
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB!");
});
app.get("/", (req, res) => {
    res.send("Welcome to DZFlavor API!");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
