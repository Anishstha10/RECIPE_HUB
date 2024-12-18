import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = () => {

  const params = useParams().id



  // Sample data for a recipe
  const recipe = {
    name: 'Greek Salad',
    image: './assets/food_1.png',
    ingredients: [
      'Lettuce',
      'Cucumber',
      'Tomatoes',
      'Olives',
      'Feta Cheese',
      'Olive Oil',
      'Lemon Juice',
      'Salt & Pepper',
    ],
    steps: [
      'Wash and chop all vegetables into bite-sized pieces.',
      'Place lettuce at the base of a large salad bowl.',
      'Add cucumbers, tomatoes, olives, and feta cheese on top.',
      'Drizzle olive oil and lemon juice over the salad.',
      'Season with salt and pepper to taste.',
      'Toss gently to combine and serve fresh.',
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Steps:</h2>
        <ol className="list-decimal list-inside">
          {recipe.steps.map((step, index) => (
            <li key={index} className="text-lg text-gray-700 mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ProductDescription;
