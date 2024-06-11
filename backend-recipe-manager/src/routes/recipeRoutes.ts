import express, { Request, Response } from "express";
import { Recipe } from "../models/recipeModel";

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

export { router as recipeRoutes };
