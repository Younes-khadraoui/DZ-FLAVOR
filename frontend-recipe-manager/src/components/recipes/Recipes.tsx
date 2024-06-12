import { useEffect, useState } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Recipe } from "@/types/recipe";

const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favourites, setFavourites] = useState<{ [key: string]: boolean }>({});

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

  const toggleFavourite = (id: string) => {
    setFavourites((prevFavourites) => ({
      ...prevFavourites,
      [id]: !prevFavourites[id],
    }));
  };

  return (
    <div className="bg-light flex-1 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10  ">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white rounded shadow-lg p-4 flex flex-col "
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="object-cover w-full h-48 mb-4 rounded cursor-pointer"
              onClick={() => navigate(`/recipe/${recipe._id}`)}
            />
            <div className="flex justify-between">
              <h2 className="text-lg font-bold mb-2">{recipe.name}</h2>
              <Heart
                className="cursor-pointer"
                fill={favourites[recipe._id] ? "red" : "white"}
                onClick={() => toggleFavourite(recipe._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
