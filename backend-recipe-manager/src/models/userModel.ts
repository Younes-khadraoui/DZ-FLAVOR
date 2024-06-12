import mongoose, { Schema, Document } from "mongoose";
import { IRecipe } from "./recipeModel";

export interface IUser extends Document {
  email: string;
  password: string;
  profilePic?: string;
  admin: boolean;
  likedRecipes: mongoose.Types.ObjectId[]; 
}

const userSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: "" },
  admin: { type: Boolean, default: false },
  likedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

export const User = mongoose.model<IUser>("User", userSchema);
