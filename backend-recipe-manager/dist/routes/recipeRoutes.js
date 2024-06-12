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
exports.recipeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const recipeModel_1 = require("../models/recipeModel");
const userModel_1 = require("../models/userModel");
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router();
exports.recipeRoutes = router;
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image, name, ingredients, instructions, tags, categories } = req.body;
        const newRecipe = new recipeModel_1.Recipe({
            image,
            name,
            ingredients,
            instructions,
            tags,
            categories,
        });
        yield newRecipe.save();
        res.status(201).json(newRecipe);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield recipeModel_1.Recipe.find().populate("categories");
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield recipeModel_1.Recipe.findById(req.params.id).populate("categories");
        if (!recipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        res.status(200).json(recipe);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image, name, ingredients, instructions, tags, categories } = req.body;
        const updatedRecipe = yield recipeModel_1.Recipe.findByIdAndUpdate(req.params.id, { image, name, ingredients, instructions, tags, categories }, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        res.status(200).json(updatedRecipe);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedRecipe = yield recipeModel_1.Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        res.status(200).json({ message: "Recipe deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.post("/suggestions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image, name, ingredients, instructions, tags, categories } = req.body;
        const newRecipe = new recipeModel_1.Recipe({
            image,
            name,
            ingredients,
            instructions,
            tags,
            categories,
        });
        yield newRecipe.save();
        res.status(201).json(newRecipe);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.post("/:id/toggleFavorite", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { id } = req.params;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const recipe = yield recipeModel_1.Recipe.findById(id);
        const user = yield userModel_1.User.findById(userId);
        if (!recipe || !user) {
            return res.status(404).json({ error: "Recipe or user not found" });
        }
        const recipeId = new mongoose_1.default.Types.ObjectId((_b = recipe._id) === null || _b === void 0 ? void 0 : _b.toString());
        const index = user.likedRecipes.findIndex((likedRecipeId) => likedRecipeId.equals(recipeId));
        if (index === -1) {
            user.likedRecipes.push(recipeId);
        }
        else {
            user.likedRecipes.splice(index, 1);
        }
        yield user.save();
        res.status(200).json({ message: "Toggle favorite success" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
