import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDescription = () => {
  const { id } = useParams();  // Get the id from the URL
  const [product, setProduct] = useState(null);
  const [timer, setTimer] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Hardcoded recipes (like Greek Salad)
    const hardcodedRecipes = [
      {
        id: 1,
        name: 'Greek Salad',
        price: 200,
        image: '../assets/food_1.png',
        ingredients: 'Lettuce, Tomatoes, Cucumber, Olives, Feta Cheese, Olive Oil, Oregano',
        instructions: 'Wash and chop lettuce, tomatoes, cucumber, and olives.\nCrumble feta cheese and add to the bowl.\nDrizzle olive oil and sprinkle oregano.\nToss the salad and serve immediately.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 2,
        name: 'Veg Salad',
        price: 200,
        image: '../assets/food_2.png',
        ingredients: 'Lettuce, Tomatoes, Cucumber, Olives, Feta Cheese, Olive Oil, Oregano',
        instructions: 'Wash and chop lettuce, tomatoes, cucumber, and olives.\nCrumble feta cheese and add to the bowl.\nDrizzle olive oil and sprinkle oregano.\nToss the salad and serve immediately.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 3,
        name: 'Clover Salad',
        price: 150,
        image: '../assets/food_3.png',
        ingredients: 'Clover Leaves, Tomatoes, Cucumber, Olives, Red Onion, Olive Oil, Lemon',
        instructions: 'Wash clover leaves and chop tomatoes, cucumber, and red onion.\nAdd olives to the mixture.\nDrizzle with olive oil and a squeeze of lemon.\nToss gently and serve fresh.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 4,
        name: 'Chicken Salad',
        price: 220,
        image: '../assets/food_4.png',
        ingredients: 'Chicken Breast, Lettuce, Tomatoes, Cucumber, Olives, Feta Cheese, Olive Oil, Lemon',
        instructions: 'Grill or cook the chicken breast and slice it.\nChop lettuce, tomatoes, cucumber, and olives.\nCrumble feta cheese and add to the salad.\nDrizzle olive oil and lemon juice, toss the salad, and serve.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 5,
        name: 'Lasagna Rolls',
        price: 180,
        image: '../assets/food_5.png',
        ingredients: 'Lasagna Sheets, Ground Beef, Tomato Sauce, Mozzarella Cheese, Parmesan, Ricotta Cheese, Garlic',
        instructions: 'Cook lasagna sheets according to package instructions.\nBrown ground beef and mix with tomato sauce.\nLayer mozzarella, ricotta, and parmesan on the cooked lasagna sheets.\nRoll up the sheets with the filling inside and bake until bubbly.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 6,
        name: 'Peri Peri Rolls',
        price: 250,
        image: '../assets/food_6.png',
        ingredients: 'Chicken Breast, Peri Peri Sauce, Bell Peppers, Lettuce, Tortilla Wraps, Garlic, Olive Oil',
        instructions: 'Cook chicken breast and slice it into strips.\nToss the chicken strips in peri peri sauce.\nSlice bell peppers and mix with lettuce.\nHeat tortilla wraps and assemble with the chicken, bell peppers, lettuce, and garlic.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 7,
        name: 'Chicken Rolls',
        price: 300,
        image: '../assets/food_7.png',
        ingredients: 'Chicken Breast, Lettuce, Tomatoes, Cucumber, Tortilla Wraps, Mayo, Mustard',
        instructions: 'Cook chicken breast and slice it into strips.\nChop lettuce, tomatoes, and cucumber.\nSpread mayo and mustard on tortilla wraps.\nAdd chicken and chopped vegetables to the wraps.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 8,
        name: 'Veg Rolls',
        price: 320,
        image: '../assets/food_8.png',
        ingredients: 'Lettuce, Tomatoes, Cucumber, Avocado, Carrots, Tortilla Wraps, Hummus',
        instructions: 'Chop lettuce, tomatoes, cucumber, avocado, and carrots.\nSpread hummus on tortilla wraps.\nAdd chopped vegetables to the wraps.\nRoll up and serve.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 9,
        name: 'Ripple Ice Cream',
        price: 150,
        image: '../assets/food_9.png',
        ingredients: 'Milk, Sugar, Vanilla Extract, Chocolate Ripple, Cream',
        instructions: 'Heat milk and sugar in a pan until the sugar dissolves.\nAdd vanilla extract and cream, stirring constantly.\nCool the mixture and freeze in an ice cream maker.\nOnce frozen, swirl in chocolate ripple and serve.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 10,
        name: 'Fruit Ice Cream',
        price: 200,
        image: '../assets/food_10.png',
        ingredients: 'Milk, Sugar, Fresh Fruits (Strawberries, Mangoes, etc.), Cream, Vanilla',
        instructions: 'Blend fresh fruits and mix with milk, sugar, and vanilla.\nAdd cream and blend until smooth.\nFreeze the mixture in an ice cream maker.\nServe chilled after it has frozen.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 11,
        name: 'Vanilla Ice Cream',
        price: 250,
        image: '../assets/food_11.png',
        ingredients: 'Milk, Sugar, Vanilla Extract, Cream',
        instructions: 'Heat milk and sugar in a pan until dissolved.\nAdd vanilla extract and cream, mixing well.\nCool the mixture and freeze in an ice cream maker.\nServe once the ice cream has set.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 12,
        name: 'Vegan Sandwich',
        price: 400,
        image: '../assets/food_12.png',
        ingredients: 'Whole Wheat Bread, Lettuce, Tomatoes, Cucumber, Avocado, Hummus, Vegan Cheese',
        instructions: 'Toast the whole wheat bread.\nSpread hummus on each slice of bread.\nLayer lettuce, tomatoes, cucumber, and avocado on one slice.\nAdd vegan cheese and top with the second slice of bread.\nServe fresh and enjoy.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 13,
        name: 'Grilled Sandwich',
        price: 450,
        image: '../assets/food_13.png',
        ingredients: 'Whole Wheat Bread, Cheese, Tomatoes, Lettuce, Mayonnaise, Butter',
        instructions: 'Butter the outside of the bread slices.\nLayer cheese, tomatoes, and lettuce between the slices.\nGrill the sandwich until golden and crispy on both sides.\nServe warm with a side of mayo.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 14,
        name: 'Bread Sandwich',
        price: 300,
        image: '../assets/food_14.png',
        ingredients: 'Bread, Lettuce, Tomatoes, Cucumber, Mayonnaise',
        instructions: 'Toast the bread slices lightly.\nSpread mayonnaise on one side of each slice.\nLayer lettuce, tomatoes, and cucumber on one slice of bread.\nTop with the second slice and serve.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 15,
        name: 'Chocolate Cupcake',
        price: 250,
        image: '../assets/food_15.png',
        ingredients: 'Flour, Cocoa Powder, Sugar, Butter, Eggs, Milk, Baking Powder, Vanilla Extract',
        instructions: 'Preheat the oven to 350°F (175°C).\nLine a muffin tin with cupcake liners.\nMix flour, cocoa powder, sugar, and baking powder.\nAdd butter, eggs, milk, and vanilla extract; mix until smooth.\nFill liners 3/4 full with batter.\nBake for 18-20 minutes or until a toothpick comes out clean.\nLet cool before serving.',
        totalCookingTime: 20, // Total cooking time in minutes
      },      
      {
        id: 16,
        name: 'Vegan Cake',
        price: 280,
        image: '../assets/food_16.png',
        ingredients: 'Flour, Sugar, Almond Milk, Baking Powder, Cocoa Powder, Vegan Butter',
        instructions: 'Preheat oven to 180°C.\nMix flour, sugar, cocoa powder, and baking powder.\nAdd almond milk and vegan butter, mixing until smooth.\nPour batter into a cake pan and bake for 30 minutes.\nLet the cake cool and serve.',
        totalCookingTime: 30, // Total cooking time in minutes
      },
      
      {
        id: 17,
        name: 'Sliced Cake',
        price: 350,
        image: '../assets/food_17.png',
        ingredients: 'Flour, Butter, Sugar, Eggs, Butterscotch Syrup, Vanilla Extract, Milk',
        instructions: 'Preheat the oven to 180°C.\nMix flour, sugar, and baking powder.\nAdd melted butter, eggs, butterscotch syrup, vanilla, and milk.\nPour into a cake pan and bake for 25-30 minutes.\nLet cool and serve.',
        totalCookingTime: 30, // Total cooking time in minutes
      },
      {
        id: 18,
        name: 'Garlic Mushroom',
        price: 350,
        image: '../assets/food_18.png',
        ingredients: 'Mushrooms, Garlic, Butter, Parsley, Olive Oil',
        instructions: 'Clean and slice the mushrooms.\nHeat butter and olive oil in a pan.\nAdd garlic and sauté until fragrant.\nAdd mushrooms and cook until golden brown.\nSprinkle with parsley and serve.',
        totalCookingTime: 15, // Total cooking time in minutes
      },
      {
        id: 19,
        name: 'Fried Cauliflower',
        price: 400,
        image: '../assets/food_19.png',
        ingredients: 'Cauliflower, Flour, Cornstarch, Garlic, Chili Powder, Salt',
        instructions: 'Cut cauliflower into florets.\nMix flour, cornstarch, garlic, chili powder, and salt.\nDip cauliflower florets into the batter and fry until crispy.\nDrain on paper towels and serve hot.',
        totalCookingTime: 20, // Total cooking time in minutes
      },
      {
        id: 20,
        name: 'Mix Veg Pulao',
        price: 380,
        image: '../assets/food_20.png',
        ingredients: 'Rice, Carrots, Peas, Onions, Ginger, Garlic, Cinnamon',
        instructions: 'Rinse the rice and set aside.\nSauté onions, ginger, garlic, and cinnamon in oil.\nAdd chopped carrots, peas, and rice.\nAdd water and cook the rice until fluffy.\nServe hot with raita.',
        totalCookingTime: 30, // Total cooking time in minutes
      },
      {
        id: 21,
        name: 'Rice Zucchini',
        price: 350,
        image: '../assets/food_21.png',
        ingredients: 'Zucchini, Rice, Garlic, Olive Oil, Lemon',
        instructions: 'Cook rice according to package instructions.\nSauté zucchini and garlic in olive oil.\nMix the sautéed zucchini with the cooked rice.\nSqueeze lemon juice over the rice and serve.',
        totalCookingTime: 25, // Total cooking time in minutes
      },
      {
        id: 22,
        name: 'Cheese Pasta',
        price: 500,
        image: '../assets/food_22.png',
        ingredients: 'Pasta, Cheese, Cream, Garlic, Butter',
        instructions: 'Cook pasta according to package instructions.\nIn a separate pan, melt butter and sauté garlic.\nAdd cream and cheese, stirring until smooth.\nToss the cooked pasta in the cheese sauce.\nServe hot, garnished with herbs.',
        totalCookingTime: 20, // Total cooking time in minutes
      },
      {
        id: 23,
        name: 'Tomato Pasta',
        price: 450,
        image: '../assets/food_23.png',
        ingredients: 'Pasta, Tomatoes, Garlic, Olive Oil, Basil',
        instructions: 'Cook pasta according to package instructions.\nSauté garlic and chopped tomatoes in olive oil.\nAdd pasta to the sauce and toss to coat.\nGarnish with fresh basil and serve.',
        totalCookingTime: 20, // Total cooking time in minutes
      },
      {
        id: 24,
        name: 'Creamy Pasta',
        price: 500,
        image: '../assets/food_24.png',
        ingredients: 'Pasta, Cream, Cheese, Garlic, Olive Oil',
        instructions: 'Cook pasta according to package instructions.\nSauté garlic in olive oil.\nAdd cream and cheese, stirring until smooth.\nCombine the pasta with the sauce and serve hot.',
        totalCookingTime: 20, // Total cooking time in minutes
      },
      {
        id: 25,
        name: 'Chicken Pasta',
        price: 300,
        image: '../assets/food_25.png',
        ingredients: 'Chicken Breast, Pasta, Tomatoes, Cream, Garlic',
        instructions: 'Cook pasta according to package instructions.\nGrill or sauté chicken and slice into strips.\nSauté garlic and tomatoes in olive oil.\nAdd cooked pasta and chicken to the sauce.\nPour in cream, stir, and serve hot.',
        totalCookingTime: 25, // Total cooking time in minutes
      },
      {
        id: 26,
        name: 'Butter Noodles',
        price: 250,
        image: '../assets/food_26.png',
        ingredients: 'Noodles, Butter, Garlic, Parmesan, Parsley',
        instructions: 'Cook noodles according to package instructions.\nMelt butter in a pan and sauté garlic.\nAdd cooked noodles and toss in butter.\nSprinkle parmesan and parsley before serving.',
        totalCookingTime: 15, // Total cooking time in minutes
      },
      {
        id: 27,
        name: 'Veg Noodles',
        price: 350,
        image: '../assets/food_27.png',
        ingredients: 'Noodles, Carrots, Peas, Bell Peppers, Soy Sauce, Garlic',
        instructions: 'Cook noodles according to package instructions.\nSauté garlic and vegetables in soy sauce.\nAdd cooked noodles and stir-fry for a few minutes.\nServe hot with extra soy sauce if desired.',
        totalCookingTime: 20, // Total cooking time in minutes
      },
      {
        id: 28,
        name: 'Cooked Noodles',
        price: 180,
        image: '../assets/food_28.png',
        ingredients: 'Carrots, Potatoes, Onions, Tomatoes, Celery, Vegetable Broth, Garlic',
        instructions: 'Chop all vegetables (carrots, potatoes, onions, tomatoes, celery).\nIn a pot, sauté garlic and onions.\nAdd the rest of the vegetables and vegetable broth.\nBring to a boil, then reduce heat and simmer for 30 minutes.\nServe hot.',
        totalCookingTime: 45, // Total cooking time in minutes
      },
      {
        id: 29,
        name: 'Chicken Soup',
        price: 250,
        image: '../assets/food_29.png',
        ingredients: 'Chicken Breast, Carrots, Celery, Onions, Garlic, Chicken Broth',
        instructions: 'Chop chicken breast and vegetables (carrots, celery, onions).\nSauté garlic and onions in a pot.\nAdd chicken and cook until browned.\nPour in chicken broth and vegetables, and bring to a boil.\nSimmer for 30 minutes and serve hot.',
        totalCookingTime: 45, // Total cooking time in minutes
      },
      {
        id: 30,
        name: 'Tomato Soup',
        price: 220,
        image: '../assets/food_30.png',
        ingredients: 'Tomatoes, Onions, Garlic, Vegetable Broth, Cream, Basil',
        instructions: 'Sauté onions and garlic in a pot.\nAdd chopped tomatoes and vegetable broth.\nBring to a boil and then simmer for 20-25 minutes.\nBlend the soup until smooth, then add cream and basil.\nServe hot.',
        totalCookingTime: 40, // Total cooking time in minutes
      }
      
  ];

  // Retrieve the recipes from localStorage
  const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

  // Combine hardcoded and dynamic recipes
  const allRecipes = [...hardcodedRecipes, ...storedRecipes];

  // Find the product by ID
  const foundProduct = allRecipes.find(item => item.id.toString() === id);

  setProduct(foundProduct);
}, [id]);

useEffect(() => {
  let interval;
  if (isRunning && timer > 0) {
    interval = setInterval(() => {
      setTimer(prevTime => prevTime - 1);
    }, 1000);
  } else if (timer === 0) {
    setIsRunning(false);
    setNotification('The recipe is ready. Start eating now!');
    window.alert('The recipe is ready. Start eating now!');
  }
  return () => clearInterval(interval);
}, [isRunning, timer]);

const startTimer = () => {
  if (product && product.totalCookingTime) {
    setTimer(10); // Set timer to 10 seconds instead of 1 minute
    setIsRunning(true);
    setNotification('');
  }
};

if (!product) {
  return <div className="text-center text-2xl text-gray-700 py-20">Product not found</div>;
}

return (
  <>
    <Navbar />
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 bg-white shadow-2xl rounded-lg p-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>
            <p className="text-2xl font-bold text-green-600">${product.price}</p>
            <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg">
              Add to Cart
            </button>
            <p className="text-gray-700 text-lg leading-relaxed">
              A healthy and refreshing salad packed with nutrients and flavor. Perfect for a quick meal or a light side dish.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ingredients</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
            {product.ingredients.split(',').map((ingredient, index) => (
              <li key={index} className="bg-gray-200 px-4 py-2 rounded-md shadow">{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Instructions</h3>
          <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
            {product.instructions.split('\n').map((step, index) => (
              <li key={index} className="bg-gray-100 px-4 py-2 rounded-md shadow">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 text-center">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Start Recipe Timer
            </button>
          ) : (
            <div className="mt-6 text-2xl font-semibold text-red-600">
              Timer: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
            </div>
          )}
        </div>

        {notification && (
          <div className="mt-6 text-xl text-center text-green-600 font-semibold">
            {notification}
          </div>
        )}
      </div>
    </div>
    <Footer />
  </>
);
};

export default ProductDescription;