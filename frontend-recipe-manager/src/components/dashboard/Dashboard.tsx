import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";

interface Recipe {
  _id: string;
  image: string;
  name: string;
  ingredients: string[];
  instructions: string;
  tags: string[];
  categories: string[];
}

const Dashboard: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [newRecipeName, setNewRecipeName] = useState<string>("");
  const [newRecipeImage, setNewRecipeImage] = useState<string>("");

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get<Recipe[]>(
        "http://localhost:5000/api/recipes"
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/recipes/${id}`);
      fetchRecipes();
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const handleCreateRecipe = async () => {
    try {
      const newRecipe = {
        name: newRecipeName,
        image: newRecipeImage,
      };
      await axios.post("http://localhost:5000/api/recipes", newRecipe);
      fetchRecipes();
      setNewRecipeName("");
      setNewRecipeImage("");
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <div className="bg-[#f4f2f0]  p-20 flex-1">
      <h1 className="text-2xl font-bold mt-8 mb-4">Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">Create New Recipe</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateRecipe();
          }}
          className="flex flex-col gap-4 max-w-xs"
        >
          <input
            type="text"
            placeholder="Recipe Name"
            value={newRecipeName}
            onChange={(e) => setNewRecipeName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newRecipeImage}
            onChange={(e) => setNewRecipeImage(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <Button type="submit">Create Recipe</Button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[1000px]">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white rounded shadow-lg p-4 flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="object-cover w-full h-48 mb-4 rounded"
            />
            <h2 className="text-lg font-bold mb-2">{recipe.name}</h2>
            <div className="flex justify-between">
              <Button onClick={() => console.log("Edit recipe")}>Edit</Button>
              <Button
                variant="destructive"
                onClick={() => handleDelete(recipe._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
