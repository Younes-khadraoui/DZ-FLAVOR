import express, { Request, Response } from "express";
import { Suggestion } from "../models/suggestionsModel";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { image, name, ingredients, instructions, tags, categories } =
      req.body;
    const newRecipe = new Suggestion({
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

export { router as suggestionsRoutes };
