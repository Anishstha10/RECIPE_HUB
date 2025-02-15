import React, { useState } from 'react';

const RecipeCreation = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [recipePrice, setRecipePrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the image to a base64 string if it's available
    const imageBase64 = image ? new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result); // Get the base64 string
      reader.onerror = reject;
      reader.readAsDataURL(image);
    }) : Promise.resolve('./assets/default.png'); // Default image if no image is uploaded

    imageBase64.then((imageUrl) => {
      // Create a new recipe object
      const newRecipe = {
        id: Date.now(), // Unique ID
        name: recipeName,
        ingredients,
        instructions,
        price: recipePrice || '100', // Default price if not provided
        image: imageUrl, // Use the base64 string here
      };

      // Retrieve existing recipes and add the new one
      const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
      const updatedRecipes = [...storedRecipes, newRecipe];
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

      // Reset form
      setRecipeName('');
      setIngredients('');
      setInstructions('');
      setRecipePrice('');
      setImage(null);

      // Redirect to menu page to see the updated list
      window.location.href = "/menu";
    }).catch(error => console.error('Error converting image to base64', error));
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl mb-4">Create New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price (Rs)"
          value={recipePrice}
          onChange={(e) => setRecipePrice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border border-gray-300 rounded"
        />
        
        {/* Image Preview */}
        {image && (
          <div className="mt-4">
            <img src={URL.createObjectURL(image)} alt="Recipe Preview" className="w-32 h-32 object-cover" />
          </div>
        )}
        
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit Recipe</button>
      </form>
    </div>
  );
};

export default RecipeCreation;
