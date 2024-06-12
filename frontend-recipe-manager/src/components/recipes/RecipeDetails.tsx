import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Recipe {
  _id: string;
  image: string;
  name: string;
  ingredients: string[];
  instructions: string;
  tags: string[];
  categories: string[];
}

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get<Recipe>(
          `http://localhost:5000/api/recipes/${id}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-light flex-1 flex justify-center items-center">
      <div className="bg-white rounded shadow-lg p-4">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="object-cover w-full h-96 mb-4 rounded"
        />
        <h2 className="text-lg font-bold mb-2">{recipe.name}</h2>
        <p>{recipe.instructions}</p>
        <h3 className="font-bold mt-4">Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
