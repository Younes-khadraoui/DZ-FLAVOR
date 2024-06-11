import { useEffect, useState } from "react";
import { Recipe } from "@/types/recipe";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

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

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div className="h-screen">
      <div className="flex gap-10 justify-center items-center p-4">
        <h2 className="text-2xl font-semibold">Discover algerien cuisine</h2>
        <a className="text-green-600 text-lg" href="/recipes">
          View all &gt;
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[1300px] ">
        {recipes.map((recipe) => (
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
        ))}
      </div>
    </div>
  );
};

export default Discover;
