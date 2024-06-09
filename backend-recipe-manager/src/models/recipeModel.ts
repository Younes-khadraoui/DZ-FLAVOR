import mongoose, { Schema, Document } from "mongoose";

export interface IRecipe extends Document {
  image: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  categories: mongoose.Types.ObjectId[];
}

const recipeSchema: Schema<IRecipe> = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
  tags: { type: [String], required: false },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

export const Recipe = mongoose.model<IRecipe>("Recipe", recipeSchema);
