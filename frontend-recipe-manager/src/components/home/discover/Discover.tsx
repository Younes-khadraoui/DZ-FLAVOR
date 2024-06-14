import { useEffect, useState } from "react";
import { Recipe } from "@/types/recipe";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Discover = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get<Recipe[]>(
        `${BACKEND_URL}/api/recipes`
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div className="p-10">
      <div className="flex gap-10 justify-center items-center p-4">
        <h2 className="text-3xl font-semibold">Discover algerien cuisine</h2>
        <a className="text-green-600 text-lg font-semibold" href="/recipes">
          View all &gt;
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  ">
        {recipes.map(
          (recipe, idx) =>
            idx < 4 && (
              <div
                key={recipe._id}
                className="bg-white rounded shadow-lg p-4 flex flex-col cursor-pointer"
                onClick={() => navigate(`/recipe/${recipe._id}`)}
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="object-cover w-full h-56 mb-4 rounded"
                />
                <div className="flex justify-between">
                  <h2 className="text-lg font-bold mb-2">{recipe.name}</h2>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Discover;
