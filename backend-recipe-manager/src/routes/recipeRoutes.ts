import express, { Request, Response } from "express";
import { Recipe } from "../models/recipeModel";
import { User } from "../models/userModel";
import mongoose from "mongoose";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { image, name, ingredients, instructions, tags, categories } =
      req.body;
    const newRecipe = new Recipe({
      image,
      name,
      ingredients,
      instructions,
      tags,
      categories,
    });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find().populate("categories");
    res.status(200).json(recipes);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("categories");
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { image, name, ingredients, instructions, tags, categories } =
      req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { image, name, ingredients, instructions, tags, categories },
      { new: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json(updatedRecipe);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/suggestions", async (req: Request, res: Response) => {
  try {
    const { image, name, ingredients, instructions, tags, categories } =
      req.body;
    const newRecipe = new Recipe({
      image,
      name,
      ingredients,
      instructions,
      tags,
      categories,
    });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/:id/toggleFavorite", async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user?.id;

  try {
    const recipe = await Recipe.findById(id);
    const user = await User.findById(userId);

    if (!recipe || !user) {
      return res.status(404).json({ error: "Recipe or user not found" });
    }

    const recipeId = new mongoose.Types.ObjectId(recipe._id?.toString());

    const index = user.likedRecipes.findIndex((likedRecipeId) =>
      likedRecipeId.equals(recipeId)
    );

    if (index === -1) {
      user.likedRecipes.push(recipeId);
    } else {
      user.likedRecipes.splice(index, 1);
    }

    await user.save();

    res.status(200).json({ message: "Toggle favorite success" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export { router as recipeRoutes };
