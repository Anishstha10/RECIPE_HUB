import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDescription = () => {
  const { id } = useParams();
  const [timer, setTimer] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [notification, setNotification] = useState(''); // State for the notification

  // Sample data for recipes
  const menuItems = [
    { 
      id: 1, 
      name: 'Greek Salad', 
      price: 200, 
      image: '../assets/food_1.png', 
      ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Olives', 'Feta Cheese', 'Olive Oil', 'Oregano'],
      instructions: [
        { step: 'Wash and chop lettuce, tomatoes, cucumber, and olives.' },
        { step: 'Crumble feta cheese and add to the bowl.' },
        { step: 'Drizzle olive oil and sprinkle oregano.' },
        { step: 'Toss the salad and serve immediately.' }
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 2, 
      name: 'Veg Salad', 
      price: 100, 
      image: '../assets/food_2.png', 
      ingredients: ['Lettuce', 'Cucumber', 'Tomatoes', 'Carrots', 'Bell Peppers', 'Olive Oil', 'Lemon Juice'],
      instructions: [
        {step: 'Chop all vegetables: lettuce, cucumber, tomatoes, carrots, and bell peppers'},
        {step:'Toss everything in a large bowl.'},
        {step:'Drizzle with olive oil and lemon juice.'},
        {step:'Mix well and serve chilled.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 3, 
      name: 'Clover Salad', 
      price: 150, 
      image: '../assets/food_3.png', 
      ingredients: ['Clover Leaves', 'Tomatoes', 'Cucumber', 'Olives', 'Red Onion', 'Olive Oil', 'Lemon'],
      instructions: [
        {step: 'Wash clover leaves and chop tomatoes, cucumber, and red onion.'},
        {step:'Add olives to the mixture.'},
        {step:'Drizzle with olive oil and a squeeze of lemon.'},
        {step:'Toss gently and serve fresh.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 4, 
      name: 'Chicken Salad', 
      price: 220, 
      image: '../assets/food_4.png', 
      ingredients: ['Chicken Breast', 'Lettuce', 'Tomatoes', 'Cucumber', 'Olives', 'Feta Cheese', 'Olive Oil', 'Lemon'],
      instructions: [
        {step:'Grill or cook the chicken breast and slice it.'},
        {step:'Chop lettuce, tomatoes, cucumber, and olives.'},
        {step:'Crumble feta cheese and add to the salad.'},
        {step:'Drizzle olive oil and lemon juice, toss the salad, and serve.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 5, 
      name: 'Lasagna Rolls', 
      price: 180, 
      image: '../assets/food_5.png', 
      ingredients: ['Lasagna Sheets', 'Ground Beef', 'Tomato Sauce', 'Mozzarella Cheese', 'Parmesan', 'Ricotta Cheese', 'Garlic'],
      instructions: [
        {step:'Cook lasagna sheets according to package instructions.'},
        {step:'Brown ground beef and mix with tomato sauce.'},
        {step:'Layer mozzarella, ricotta, and parmesan on the cooked lasagna sheets.'},
        {step:'Roll up the sheets with the filling inside and bake until bubbly.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 6, 
      name: 'Peri Peri Rolls', 
      price: 250, 
      image: '../assets/food_6.png', 
      ingredients: ['Chicken Breast', 'Peri Peri Sauce', 'Bell Peppers', 'Lettuce', 'Tortilla Wraps', 'Garlic', 'Olive Oil'],
      instructions: [
        {step:'Cook chicken breast and slice it into strips.'},
        {step:'Toss the chicken strips in peri peri sauce.'},
        {step:'Slice bell peppers and mix with lettuce.'},
        {step:'Heat tortilla wraps and assemble with the chicken, bell peppers, lettuce, and garlic.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 7, 
      name: 'Chicken Rolls', 
      price: 300, 
      image: '../assets/food_7.png', 
      ingredients: ['Chicken Breast', 'Lettuce', 'Tomatoes', 'Cucumber', 'Tortilla Wraps', 'Mayo', 'Mustard'],
      instructions: [
         {step:'Cook chicken breast and slice it into strips.'},
         {step:'Chop lettuce, tomatoes, and cucumber.'},
         {step:'Spread mayo and mustard on tortilla wraps.'},
         {step:'Add chicken and chopped vegetables to the wraps.'},
       
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 8, 
      name: 'Veg Rolls', 
      price: 320, 
      image: '../assets/food_8.png', 
      ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Avocado', 'Carrots', 'Tortilla Wraps', 'Hummus'],
      instructions: [
         {step:'Chop lettuce, tomatoes, cucumber, avocado, and carrots.'},
         {step:'Spread hummus on tortilla wraps.'},
         {step:'Add chopped vegetables to the wraps.'},
         {step:'Roll up and serve.' }
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 9, 
      name: 'Ripple Ice Cream', 
      price: 150, 
      image: '../assets/food_9.png', 
      ingredients: ['Milk', 'Sugar', 'Vanilla Extract', 'Chocolate Ripple', 'Cream'],
      instructions: [
        {step:'Heat milk and sugar in a pan until the sugar dissolves.'},
        {step:'Add vanilla extract and cream, stirring constantly.'},
        {step:'Cool the mixture and freeze in an ice cream maker.'},
        {step:'Once frozen, swirl in chocolate ripple and serve.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 10, 
      name: 'Fruit Ice Cream', 
      price: 200, 
      image: '../assets/food_10.png', 
      ingredients: ['Milk', 'Sugar', 'Fresh Fruits (Strawberries, Mangoes, etc.)', 'Cream', 'Vanilla'],
      instructions: [
        {step:'Blend fresh fruits and mix with milk, sugar, and vanilla.'},
        {step:'Add cream and blend until smooth.'},
        {step:'Freeze the mixture in an ice cream maker.'},
        {step:'Serve chilled after it has frozen.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 11, 
      name: 'Vanilla Ice Cream', 
      price: 250, 
      image: '../assets/food_11.png', 
      ingredients: ['Milk', 'Sugar', 'Vanilla Extract', 'Cream'],
      instructions: [
        {step:'Heat milk and sugar in a pan until dissolved.'},
        {step:'Add vanilla extract and cream, mixing well.'},
        {step:'Cool the mixture and freeze in an ice cream maker.'},
        {step:'Serve once the ice cream has set.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 12, 
      name: 'Vegan Sandwich', 
      price: 400, 
      image: '../assets/food_12.png', 
      ingredients: ['Whole Wheat Bread', 'Lettuce', 'Tomatoes', 'Cucumber', 'Avocado', 'Hummus', 'Vegan Cheese'],
      instructions: [
        {step:' Toast the whole wheat bread.'},
        {step:' Spread hummus on each slice of bread.'},
        {step:' Layer lettuce, tomatoes, cucumber, and avocado on one slice.'},
        {step:' Add vegan cheese and top with the second slice of bread.'},
        {step:' Serve fresh and enjoy.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 13, 
      name: 'Grilled Sandwich', 
      price: 450, 
      image: '../assets/food_13.png', 
      ingredients: ['Whole Wheat Bread', 'Cheese', 'Tomatoes', 'Lettuce', 'Mayonnaise', 'Butter'],
      instructions: [
       {step:' Butter the outside of the bread slices.'},
        {step:' Layer cheese, tomatoes, and lettuce between the slices.'},
        {step:' Grill the sandwich until golden and crispy on both sides.'},
        {step:' Serve warm with a side of mayo.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 14, 
      name: 'Bread Sandwich', 
      price: 300, 
      image: '../assets/food_14.png', 
      ingredients: ['Bread', 'Lettuce', 'Tomatoes', 'Cucumber', 'Mayonnaise'],
      instructions: [
       {step:' Toast the bread slices lightly.'},
        {step:' Spread mayonnaise on one side of each slice.'},
        {step:' Layer lettuce, tomatoes, and cucumber on one slice of bread.'},
        {step:' Top with the second slice and serve.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 15, 
      name: 'Cup Cake', 
      price: 350, 
      image: '../assets/food_15.png', 
      ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Vanilla Extract', 'Baking Powder', 'Milk'],
      instructions: [
        {step:' Preheat the oven to 180°C.'},
        {step:' Mix flour, sugar, and baking powder in a bowl.'},
        {step:' Add butter, eggs, vanilla, and milk, mixing until smooth.'},
        {step:' Pour into cupcake liners and bake for 20-25 minutes.'},
        {step:' Cool and serve with frosting.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 16, 
      name: 'Vegan Cake', 
      price: 280, 
      image: '../assets/food_16.png', 
      ingredients: ['Flour', 'Sugar', 'Almond Milk', 'Baking Powder', 'Cocoa Powder', 'Vegan Butter'],
      instructions: [
        {step:' Preheat oven to 180°C.'},
        {step:' Mix flour, sugar, cocoa powder, and baking powder.'},
        {step:' Add almond milk and vegan butter, mixing until smooth.'},
        {step:' Pour batter into cake pan and bake for 30 minutes.'},
        {step:' Let the cake cool and serve.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    { 
      id: 17, 
      name: 'Sliced Cake', 
      price: 350, 
      image: '../assets/food_17.png', 
      ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Butterscotch Syrup', 'Vanilla Extract', 'Milk'],
      instructions: [
        {step:' Preheat the oven to 180°C.'},
        {step:'  Mix flour, sugar, and baking powder.'},
        {step:' Add melted butter, eggs, butterscotch syrup, vanilla, and milk.'},
        {step:'  Pour into a cake pan and bake for 25-30 minutes.'},
        {step:'  Let cool and serve.'}
      ],
      totalCookingTime: 1 // Total cooking time in minutes
    },
    
      {
        id: 17, 
    name: 'Garlic Mushroom', 
    price: 350, 
    image: '../assets/food_17.png', 
    ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Butterscotch Syrup', 'Vanilla Extract', 'Milk'],
    instructions: [
      {step:'  Preheat the oven to 180°C.'},
      {step:'  Mix flour, sugar, and baking powder.'},
      {step:'  Add melted butter, eggs, butterscotch syrup, vanilla, and milk.'},
      {step:'  Pour into a cake pan and bake for 25-30 minutes.'},
      {step:'  Let cool and serve.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 18, 
    name: 'Fried Cauliflower', 
    price: 400, 
    image: '../assets/food_18.png', 
    ingredients: ['Flour', 'Cocoa Powder', 'Sugar', 'Butter', 'Eggs', 'Baking Powder', 'Milk', 'Chocolate Chips'],
    instructions: [
     {step:'  Preheat the oven to 180°C.'},
      {step:'  Mix flour, cocoa powder, sugar, and baking powder.'},
      {step:'  Add melted butter, eggs, and milk, stirring until smooth.'},
      {step:'  Fold in chocolate chips.'},
      {step:'  Pour batter into cake pans and bake for 30-35 minutes.'},
      {step:'  Cool before serving.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 19, 
    name: 'Mix Veg Pulao', 
    price: 380, 
    image: '../assets/food_19.png', 
    ingredients: ['Carrots', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Baking Powder', 'Vanilla Extract', 'Cinnamon'],
    instructions: [
      {step:'  Preheat the oven to 180°C.'},
      {step:'  Grate the carrots and set aside.'},
      {step:'  Mix flour, sugar, baking powder, and cinnamon.'},
      {step:' Add eggs, melted butter, vanilla extract, and grated carrots.'},
      {step:'  Bake for 30-35 minutes.'},
      {step:'  Cool before serving.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 20, 
    name: 'Rice Zucchini', 
    price: 350, 
    image: '../assets/food_20.png', 
    ingredients: ['Bananas', 'Flour', 'Sugar', 'Butter', 'Eggs', 'Baking Powder', 'Milk'],
    instructions: [
       {step:' Preheat the oven to 180°C.'},
       {step:' Mash the bananas and set aside.'},
       {step:' Mix flour, sugar, and baking powder.'},
       {step:' Add eggs, melted butter, milk, and mashed bananas.'},
       {step:' Bake for 30-35 minutes.'},
       {step:' Cool before serving.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 21, 
    name: 'Cheese Pasta', 
    price: 500, 
    image: '../assets/food_21.png', 
    ingredients: ['Apples', 'Sugar', 'Cinnamon', 'Butter', 'Pie Crust'],
    instructions: [
       {step:' Preheat the oven to 180°C.'},
      {step:' Peel and slice the apples.'},
       {step:' Toss apples with sugar and cinnamon.'},
       {step:' Fill the pie crust with the apple mixture.'},
       {step:' Top with another layer of pie crust and bake for 45-50 minutes.'},
       {step:' Cool before serving.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 22, 
    name: 'Tomato Pasta', 
    price: 450, 
    image: '../assets/food_22.png', 
    ingredients: ['Cherries', 'Sugar', 'Cornstarch', 'Butter', 'Pie Crust'],
    instructions: [
       {step:'  Preheat the oven to 180°C.'},
       {step:'  Pit and slice the cherries.'},
       {step:'  Mix cherries with sugar and cornstarch.'},
       {step:'  Fill the pie crust with the cherry mixture.'},
      {step:'  Top with another layer of pie crust and bake for 40-45 minutes.'},
       {step:'  Cool before serving.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 23, 
    name: 'Creamy Pasta', 
    price: 500, 
    image: '../assets/food_23.png', 
    ingredients: ['Pumpkin Puree', 'Sugar', 'Cinnamon', 'Nutmeg', 'Eggs', 'Pie Crust'],
    instructions: [
       {step:' Preheat the oven to 180°C.'},
      {step:'  Mix pumpkin puree with sugar, cinnamon, nutmeg, and eggs.'},
       {step:'  Pour the mixture into the pie crust.'},
       {step:'  Bake for 45-50 minutes.'},
       {step:'  Cool before serving.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 24, 
    name: 'Chicken Pasta', 
    price: 300, 
    image: '../assets/food_24.png', 
    ingredients: ['Beef Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
    instructions: [
      {step:' Cook the beef patty to your desired doneness.'},
      {step:' Toast the burger buns lightly.'},
      {step:' Place the cooked patty on the bun and top with a slice of cheese.'},
      {step:' Add lettuce, tomato, and onion.'},
      {step:' Close the bun and serve.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 25, 
    name: 'Butter Noodles', 
    price: 250, 
    image: '../assets/food_25.png', 
    ingredients: ['Veg Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
    instructions: [
     {step:' Cook the veg patty until crispy.'},
      {step:' Toast the burger buns lightly.'},
     {step:' Place the cooked patty on the bun and top with a slice of cheese.'},
     {step:' Add lettuce, tomato, and onion.'},
      {step:' Close the bun and serve.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 26, 
    name: 'Veg Noodles', 
    price: 350, 
    image: '../assets/food_26.png', 
    ingredients: ['Chicken Breast', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
    instructions: [
      {step:' Grill the chicken breast and slice it.'},
      {step:' Toast the burger buns lightly.'},
      {step:' Place the chicken slices on the bun and top with a slice of cheese.'},
      {step:' Add lettuce, tomato, and onion.'},
      {step:' Close the bun and serve.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 27, 
    name: 'Somen Noodles', 
    price: 400, 
    image: '../assets/food_27.png', 
    ingredients: ['Fish Fillet', 'Lettuce', 'Tomato', 'Cheese Slice', 'Burger Bun'],
    instructions: [
     {step:' Fry or grill the fish fillet.'},
      {step:' Toast the burger buns lightly.'},
     {step:' Place the fish fillet on the bun and top with a slice of cheese.'},
      {step:' Add lettuce and tomato.'},
      {step:'Close the bun and serve.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 28, 
    name: 'Cooke Noodles', 
    price: 180, 
    image: '../assets/food_28.png', 
    ingredients: ['Carrots', 'Potatoes', 'Onions', 'Tomatoes', 'Celery', 'Vegetable Broth', 'Garlic'],
    instructions: [
      {step:' Chop all vegetables (carrots, potatoes, onions, tomatoes, celery).'},
      {step:' In a pot, sauté garlic and onions.'},
      {step:' Add the rest of the vegetables and vegetable broth.'},
      {step:' Bring to a boil, then reduce heat and simmer for 30 minutes.'},
      {step:' Serve hot.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 29, 
    name: 'Chicken Soup', 
    price: 250, 
    image: '../assets/food_29.png', 
    ingredients: ['Chicken Breast', 'Carrots', 'Celery', 'Onions', 'Garlic', 'Chicken Broth'],
    instructions: [
     {step:' Chop chicken breast and vegetables (carrots, celery, onions).'},
      {step:'Sauté garlic and onions in a pot.'},
      {step:' Add chicken and cook until browned.'},
      {step:' Pour in chicken broth and vegetables, and bring to a boil.'},
      {step:' Simmer for 30 minutes and serve hot.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  },
  { 
    id: 30, 
    name: 'Tomato Soup', 
    price: 220, 
    image: '../assets/food_30.png', 
    ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Vegetable Broth', 'Cream', 'Basil'],
    instructions: [
      {step:' Sauté onions and garlic in a pot.'},
      {step:' Add chopped tomatoes and vegetable broth.'},
      {step:' Bring to a boil and then simmer for 20-25 minutes.'},
      {step:' Blend the soup until smooth, then add cream and basil.'},
      {step:' Serve hot.'}
    ],
    totalCookingTime: 1 // Total cooking time in minutes
  }
];

    


  const product = menuItems.find(item => item.id.toString() === id);

  if (!product) {
    return <div className="text-center text-2xl text-gray-700 py-20">Product not found</div>;
  }

  // Use the total cooking time from the product object
  const totalCookingTime = product.totalCookingTime * 60; // Convert minutes to seconds

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsRunning(false);
      setNotification('The recipe is ready. Start eating now!'); // Set notification when timer ends
      window.alert('The recipe is ready. Start eating now!'); // Display alert when the timer ends
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const startTimer = () => {
    setTimer(totalCookingTime); // Set timer for total recipe time in seconds
    setIsRunning(true);
    setNotification(''); // Reset notification when starting a new timer
  };

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
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="bg-gray-200 px-4 py-2 rounded-md shadow">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Instructions</h3>
            <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
              {product.instructions.map((step, index) => (
                <li key={index} className="bg-gray-100 px-4 py-2 rounded-md shadow">
                  {step.step}
                </li>
              ))}
            </ol>
          </div>

          {/* Start Timer Button */}
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

          {/* Display Notification */}
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



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const ProductDescription = () => {
//   const { id } = useParams();
//   const [timer, setTimer] = useState(null);
//   const [isRunning, setIsRunning] = useState(false);

//   // Sample data for recipes
//   const menuItems = [
//     { 
//             id: 1, 
//             name: 'Greek Salad', 
//             price: 200, 
//             image: '../assets/food_1.png', 
//             ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Olives', 'Feta Cheese', 'Olive Oil', 'Oregano'],
//             instructions: [
//               { step: 'Wash and chop lettuce, tomatoes, cucumber, and olives.', time: 5 },
//               { step: 'Crumble feta cheese and add to the bowl.', time: 2 },
//               { step: 'Drizzle olive oil and sprinkle oregano.', time: 3 },
//               { step: 'Toss the salad and serve immediately.', time: 1 }
//             ]
//           },
//           { 
//             id: 2, 
//             name: 'Veg Salad', 
//             price: 100, 
//             image: '../assets/food_2.png', 
//             ingredients: ['Lettuce', 'Cucumber', 'Tomatoes', 'Carrots', 'Bell Peppers', 'Olive Oil', 'Lemon Juice'],
//             instructions: [
//               {step: 'Chop all vegetables: lettuce, cucumber, tomatoes, carrots, and bell peppers', time: 5},
//               {step:'Toss everything in a large bowl.', time: 5},
//               {step:'Drizzle with olive oil and lemon juice.', time: 5},
//               {step:'Mix well and serve chilled.', time: 5}
//             ]
//           },
      //     { 
      //       id: 3, 
      //       name: 'Clover Salad', 
      //       price: 150, 
      //       image: '../assets/food_3.png', 
      //       ingredients: ['Clover Leaves', 'Tomatoes', 'Cucumber', 'Olives', 'Red Onion', 'Olive Oil', 'Lemon'],
      //       instructions: [
      //         'Wash clover leaves and chop tomatoes, cucumber, and red onion.',
      //         'Add olives to the mixture.',
      //         'Drizzle with olive oil and a squeeze of lemon.',
      //         'Toss gently and serve fresh.'
      //       ]
      //     },
      //     { 
      //       id: 4, 
      //       name: 'Chicken Salad', 
      //       price: 220, 
      //       image: '../assets/food_4.png', 
      //       ingredients: ['Chicken Breast', 'Lettuce', 'Tomatoes', 'Cucumber', 'Olives', 'Feta Cheese', 'Olive Oil', 'Lemon'],
      //       instructions: [
      //         'Grill or cook the chicken breast and slice it.',
      //         'Chop lettuce, tomatoes, cucumber, and olives.',
      //         'Crumble feta cheese and add to the salad.',
      //         'Drizzle olive oil and lemon juice, toss the salad, and serve.'
      //       ]
      //     },
      //     { 
      //       id: 5, 
      //       name: 'Lasagna Rolls', 
      //       price: 180, 
      //       image: '../assets/food_5.png', 
      //       ingredients: ['Lasagna Sheets', 'Ground Beef', 'Tomato Sauce', 'Mozzarella Cheese', 'Parmesan', 'Ricotta Cheese', 'Garlic'],
      //       instructions: [
      //         'Cook lasagna sheets according to package instructions.',
      //         'Brown ground beef and mix with tomato sauce.',
      //         'Layer mozzarella, ricotta, and parmesan on the cooked lasagna sheets.',
      //         'Roll up the sheets with the filling inside and bake until bubbly.'
      //       ]
      //     },
      //     { 
      //       id: 6, 
      //       name: 'Peri Peri Rolls', 
      //       price: 250, 
      //       image: '../assets/food_6.png', 
      //       ingredients: ['Chicken Breast', 'Peri Peri Sauce', 'Bell Peppers', 'Lettuce', 'Tortilla Wraps', 'Garlic', 'Olive Oil'],
      //       instructions: [
      //         'Cook chicken breast and slice it into strips.',
      //         'Toss the chicken strips in peri peri sauce.',
      //         'Slice bell peppers and mix with lettuce.',
      //         'Heat tortilla wraps and assemble with the chicken, bell peppers, lettuce, and garlic.',
      //         'Roll up the tortillas and serve.'
      //       ]
      //     },
      //     { 
      //       id: 7, 
      //       name: 'Chicken Rolls', 
      //       price: 300, 
      //       image: '../assets/food_7.png', 
      //       ingredients: ['Chicken Breast', 'Lettuce', 'Tomatoes', 'Cucumber', 'Tortilla Wraps', 'Mayo', 'Mustard'],
      //       instructions: [
      //         'Cook chicken breast and slice it into strips.',
      //         'Chop lettuce, tomatoes, and cucumber.',
      //         'Spread mayo and mustard on tortilla wraps.',
      //         'Add chicken and chopped vegetables to the wraps.',
      //         'Roll up and serve.'
      //       ]
      //     },
      //     { 
      //       id: 8, 
      //       name: 'Veg Rolls', 
      //       price: 320, 
      //       image: '../assets/food_8.png', 
      //       ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Avocado', 'Carrots', 'Tortilla Wraps', 'Hummus'],
      //       instructions: [
      //         'Chop lettuce, tomatoes, cucumber, avocado, and carrots.',
      //         'Spread hummus on tortilla wraps.',
      //         'Add chopped vegetables to the wraps.',
      //         'Roll up and serve.'
      //       ]
      //     },
      //     { 
      //       id: 9, 
      //       name: 'Ripple Ice Cream', 
      //       price: 150, 
      //       image: '../assets/food_9.png', 
      //       ingredients: ['Milk', 'Sugar', 'Vanilla Extract', 'Chocolate Ripple', 'Cream'],
      //       instructions: [
      //         'Heat milk and sugar in a pan until the sugar dissolves.',
      //         'Add vanilla extract and cream, stirring constantly.',
      //         'Cool the mixture and freeze in an ice cream maker.',
      //         'Once frozen, swirl in chocolate ripple and serve.'
      //       ]
      //     },
      //     { 
      //       id: 10, 
      //       name: 'Fruit Ice Cream', 
      //       price: 200, 
      //       image: '../assets/food_10.png', 
      //       ingredients: ['Milk', 'Sugar', 'Fresh Fruits (Strawberries, Mangoes, etc.)', 'Cream', 'Vanilla'],
      //       instructions: [
      //         'Blend fresh fruits and mix with milk, sugar, and vanilla.',
      //         'Add cream and blend until smooth.',
      //         'Freeze the mixture in an ice cream maker.',
      //         'Serve chilled after it has frozen.'
      //       ]
      //     },
      //     { 
      //       id: 11, 
      //       name: 'Vanilla Ice Cream', 
      //       price: 250, 
      //       image: '../assets/food_11.png', 
      //       ingredients: ['Milk', 'Sugar', 'Vanilla Extract', 'Cream'],
      //       instructions: [
      //         'Step 1: Heat milk and sugar in a pan until dissolved.',
      //         'Step 2: Add vanilla extract and cream, mixing well.',
      //         'Step 3: Cool the mixture and freeze in an ice cream maker.',
      //         'Step 4: Serve once the ice cream has set.'
      //       ]
      //     },
      //     { 
      //       id: 12, 
      //       name: 'Vegan Sandwich', 
      //       price: 400, 
      //       image: '../assets/food_12.png', 
      //       ingredients: ['Whole Wheat Bread', 'Lettuce', 'Tomatoes', 'Cucumber', 'Avocado', 'Hummus', 'Vegan Cheese'],
      //       instructions: [
      //         'Step 1: Toast the whole wheat bread.',
      //         'Step 2: Spread hummus on each slice of bread.',
      //         'Step 3: Layer lettuce, tomatoes, cucumber, and avocado on one slice.',
      //         'Step 4: Add vegan cheese and top with the second slice of bread.',
      //         'Step 5: Serve fresh and enjoy.'
      //       ]
      //     },
      //     { 
      //       id: 13, 
      //       name: 'Grilled Sandwich', 
      //       price: 450, 
      //       image: '../assets/food_13.png', 
      //       ingredients: ['Whole Wheat Bread', 'Cheese', 'Tomatoes', 'Lettuce', 'Mayonnaise', 'Butter'],
      //       instructions: [
      //         'Step 1: Butter the outside of the bread slices.',
      //         'Step 2: Layer cheese, tomatoes, and lettuce between the slices.',
      //         'Step 3: Grill the sandwich until golden and crispy on both sides.',
      //         'Step 4: Serve warm with a side of mayo.'
      //       ]
      //     },
      //     { 
      //       id: 14, 
      //       name: 'Bread Sandwich', 
      //       price: 300, 
      //       image: '../assets/food_14.png', 
      //       ingredients: ['Bread', 'Lettuce', 'Tomatoes', 'Cucumber', 'Mayonnaise'],
      //       instructions: [
      //         'Step 1: Toast the bread slices lightly.',
      //         'Step 2: Spread mayonnaise on one side of each slice.',
      //         'Step 3: Layer lettuce, tomatoes, and cucumber on one slice of bread.',
      //         'Step 4: Top with the second slice and serve.'
      //       ]
      //     },
      //     { 
      //       id: 15, 
      //       name: 'Cup Cake', 
      //       price: 350, 
      //       image: '../assets/food_15.png', 
      //       ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Vanilla Extract', 'Baking Powder', 'Milk'],
      //       instructions: [
      //         'Step 1: Preheat the oven to 180°C.',
      //         'Step 2: Mix flour, sugar, and baking powder in a bowl.',
      //         'Step 3: Add butter, eggs, vanilla, and milk, mixing until smooth.',
      //         'Step 4: Pour into cupcake liners and bake for 20-25 minutes.',
      //         'Step 5: Cool and serve with frosting.'
      //       ]
      //     },
      //     { 
      //       id: 16, 
      //       name: 'Vegan Cake', 
      //       price: 280, 
      //       image: '../assets/food_16.png', 
      //       ingredients: ['Flour', 'Sugar', 'Almond Milk', 'Baking Powder', 'Cocoa Powder', 'Vegan Butter'],
      //       instructions: [
      //         'Step 1: Preheat oven to 180°C.',
      //         'Step 2: Mix flour, sugar, cocoa powder, and baking powder.',
      //         'Step 3: Add almond milk and vegan butter, mixing until smooth.',
      //         'Step 4: Pour batter into cake pan and bake for 30 minutes.',
      //         'Step 5: Let the cake cool and serve.'
      //       ]
      //     },
      //     { 
      //       id: 17, 
      //       name: 'Butterscotch Cake', 
      //       price: 350, 
      //       image: '../assets/food_17.png', 
      //       ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Butterscotch Syrup', 'Vanilla Extract', 'Milk'],
      //       instructions: [
      //         'Step 1: Preheat the oven to 180°C.',
      //         'Step 2: Mix flour, sugar, and baking powder.',
      //         'Step 3: Add melted butter, eggs, butterscotch syrup, vanilla, and milk.',
      //         'Step 4: Pour into a cake pan and bake for 25-30 minutes.',
      //         'Step 5: Let cool and serve.'
      //       ]
      //     },
          
      //       {
      //         id: 17, 
      //     name: 'Butterscotch Cake', 
      //     price: 350, 
      //     image: '../assets/food_17.png', 
      //     ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Butterscotch Syrup', 'Vanilla Extract', 'Milk'],
      //     instructions: [
      //       'Step 1: Preheat the oven to 180°C.',
      //       'Step 2: Mix flour, sugar, and baking powder.',
      //       'Step 3: Add melted butter, eggs, butterscotch syrup, vanilla, and milk.',
      //       'Step 4: Pour into a cake pan and bake for 25-30 minutes.',
      //       'Step 5: Let cool and serve.'
      //     ]
      //   },
      //   { 
      //     id: 18, 
      //     name: 'Chocolate Cake', 
      //     price: 400, 
      //     image: '../assets/food_18.png', 
      //     ingredients: ['Flour', 'Cocoa Powder', 'Sugar', 'Butter', 'Eggs', 'Baking Powder', 'Milk', 'Chocolate Chips'],
      //     instructions: [
      //       'Step 1: Preheat the oven to 180°C.',
      //       'Step 2: Mix flour, cocoa powder, sugar, and baking powder.',
      //       'Step 3: Add melted butter, eggs, and milk, stirring until smooth.',
      //       'Step 4: Fold in chocolate chips.',
      //       'Step 5: Pour batter into cake pans and bake for 30-35 minutes.',
      //       'Step 6: Cool before serving.'
      //     ]
      //   },
      //   { 
      //     id: 19, 
      //     name: 'Carrot Cake', 
      //     price: 380, 
      //     image: '../assets/food_19.png', 
      //     ingredients: ['Carrots', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Baking Powder', 'Vanilla Extract', 'Cinnamon'],
      //     instructions: [
      //       'Step 1: Preheat the oven to 180°C.',
      //       'Step 2: Grate the carrots and set aside.',
      //       'Step 3: Mix flour, sugar, baking powder, and cinnamon.',
      //       'Step 4: Add eggs, melted butter, vanilla extract, and grated carrots.',
      //       'Step 5: Bake for 30-35 minutes.',
      //       'Step 6: Cool before serving.'
      //     ]
      //   },
      //   { 
      //     id: 20, 
      //     name: 'Banana Cake', 
      //     price: 350, 
      //     image: '../assets/food_20.png', 
      //     ingredients: ['Bananas', 'Flour', 'Sugar', 'Butter', 'Eggs', 'Baking Powder', 'Milk'],
      //     instructions: [
      //       'Step 1: Preheat the oven to 180°C.',
      //       'Step 2: Mash the bananas and set aside.',
      //       'Step 3: Mix flour, sugar, and baking powder.',
      //       'Step 4: Add eggs, melted butter, milk, and mashed bananas.',
      //       'Step 5: Bake for 30-35 minutes.',
      //       'Step 6: Cool before serving.'
      //     ]
      //   },
      //   { 
      //     id: 21, 
      //     name: 'Apple Pie', 
      //     price: 500, 
      //     image: '../assets/food_21.png', 
      //     ingredients: ['Apples', 'Sugar', 'Cinnamon', 'Butter', 'Pie Crust'],
      //     instructions: [
      //       'Step 1: Preheat the oven to 180°C.',
      //       'Step 2: Peel and slice the apples.',
      //       'Step 3: Toss apples with sugar and cinnamon.',
      //       'Step 4: Fill the pie crust with the apple mixture.',
      //       'Step 5: Top with another layer of pie crust and bake for 45-50 minutes.',
      //       'Step 6: Cool before serving.'
      //     ]
      //   },
      //   { 
      //     id: 22, 
      //     name: 'Cherry Pie', 
      //     price: 450, 
      //     image: '../assets/food_22.png', 
      //     ingredients: ['Cherries', 'Sugar', 'Cornstarch', 'Butter', 'Pie Crust'],
      //     instructions: [
      //       'Step 1: Preheat the oven to 180°C.',
      //       'Step 2: Pit and slice the cherries.',
      //       'Step 3: Mix cherries with sugar and cornstarch.',
      //       'Step 4: Fill the pie crust with the cherry mixture.',
      //       'Step 5: Top with another layer of pie crust and bake for 40-45 minutes.',
      //       'Step 6: Cool before serving.'
      //     ]
      //   },
      //   { 
      //     id: 23, 
      //     name: 'Pumpkin Pie', 
      //     price: 500, 
      //     image: '../assets/food_23.png', 
      //     ingredients: ['Pumpkin Puree', 'Sugar', 'Cinnamon', 'Nutmeg', 'Eggs', 'Pie Crust'],
      //     instructions: [
      //       'Step 1: Preheat the oven to 180°C.',
      //       'Step 2: Mix pumpkin puree with sugar, cinnamon, nutmeg, and eggs.',
      //       'Step 3: Pour the mixture into the pie crust.',
      //       'Step 4: Bake for 45-50 minutes.',
      //       'Step 5: Cool before serving.'
      //     ]
      //   },
      //   { 
      //     id: 24, 
      //     name: 'Cheese Burger', 
      //     price: 300, 
      //     image: '../assets/food_24.png', 
      //     ingredients: ['Beef Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
      //     instructions: [
      //       'Step 1: Cook the beef patty to your desired doneness.',
      //       'Step 2: Toast the burger buns lightly.',
      //       'Step 3: Place the cooked patty on the bun and top with a slice of cheese.',
      //       'Step 4: Add lettuce, tomato, and onion.',
      //       'Step 5: Close the bun and serve.'
      //     ]
      //   },
      //   { 
      //     id: 25, 
      //     name: 'Veg Burger', 
      //     price: 250, 
      //     image: '../assets/food_25.png', 
      //     ingredients: ['Veg Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
      //     instructions: [
      //       'Step 1: Cook the veg patty until crispy.',
      //       'Step 2: Toast the burger buns lightly.',
      //       'Step 3: Place the cooked patty on the bun and top with a slice of cheese.',
      //       'Step 4: Add lettuce, tomato, and onion.',
      //       'Step 5: Close the bun and serve.'
      //     ]
      //   },
      //   { 
      //     id: 26, 
      //     name: 'Chicken Burger', 
      //     price: 350, 
      //     image: '../assets/food_26.png', 
      //     ingredients: ['Chicken Breast', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
      //     instructions: [
      //       'Step 1: Grill the chicken breast and slice it.',
      //       'Step 2: Toast the burger buns lightly.',
      //       'Step 3: Place the chicken slices on the bun and top with a slice of cheese.',
      //       'Step 4: Add lettuce, tomato, and onion.',
      //       'Step 5: Close the bun and serve.'
      //     ]
      //   },
      //   { 
      //     id: 27, 
      //     name: 'Fish Burger', 
      //     price: 400, 
      //     image: '../assets/food_27.png', 
      //     ingredients: ['Fish Fillet', 'Lettuce', 'Tomato', 'Cheese Slice', 'Burger Bun'],
      //     instructions: [
      //       'Step 1: Fry or grill the fish fillet.',
      //       'Step 2: Toast the burger buns lightly.',
      //       'Step 3: Place the fish fillet on the bun and top with a slice of cheese.',
      //       'Step 4: Add lettuce and tomato.',
      //       'Step 5: Close the bun and serve.'
      //     ]
      //   },
      //   { 
      //     id: 28, 
      //     name: 'Vegetable Soup', 
      //     price: 180, 
      //     image: '../assets/food_28.png', 
      //     ingredients: ['Carrots', 'Potatoes', 'Onions', 'Tomatoes', 'Celery', 'Vegetable Broth', 'Garlic'],
      //     instructions: [
      //       'Step 1: Chop all vegetables (carrots, potatoes, onions, tomatoes, celery).',
      //       'Step 2: In a pot, sauté garlic and onions.',
      //       'Step 3: Add the rest of the vegetables and vegetable broth.',
      //       'Step 4: Bring to a boil, then reduce heat and simmer for 30 minutes.',
      //       'Step 5: Serve hot.'
      //     ]
      //   },
      //   { 
      //     id: 29, 
      //     name: 'Chicken Soup', 
      //     price: 250, 
      //     image: '../assets/food_29.png', 
      //     ingredients: ['Chicken Breast', 'Carrots', 'Celery', 'Onions', 'Garlic', 'Chicken Broth'],
      //     instructions: [
      //       'Step 1: Chop chicken breast and vegetables (carrots, celery, onions).',
      //       'Step 2: Sauté garlic and onions in a pot.',
      //       'Step 3: Add chicken and cook until browned.',
      //       'Step 4: Pour in chicken broth and vegetables, and bring to a boil.',
      //       'Step 5: Simmer for 30 minutes and serve hot.'
      //     ]
      //   },
      //   { 
      //     id: 30, 
      //     name: 'Tomato Soup', 
      //     price: 220, 
      //     image: '../assets/food_30.png', 
      //     ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Vegetable Broth', 'Cream', 'Basil'],
      //     instructions: [
      //       'Step 1: Sauté onions and garlic in a pot.',
      //       'Step 2: Add chopped tomatoes and vegetable broth.',
      //       'Step 3: Bring to a boil and then simmer for 20-25 minutes.',
      //       'Step 4: Blend the soup until smooth, then add cream and basil.',
      //       'Step 5: Serve hot.'
      //     ]
      //   }
      // ];

//       const product = menuItems.find(item => item.id.toString() === id);

//       if (!product) {
//         return <div className="text-center text-2xl text-gray-700 py-20">Product not found</div>;
//       }
    
//       useEffect(() => {
//         let interval;
//         if (isRunning && timer > 0) {
//           interval = setInterval(() => {
//             setTimer(prevTime => prevTime - 1);
//           }, 1000);
//         } else if (timer === 0) {
//           setIsRunning(false);
//         }
//         return () => clearInterval(interval);
//       }, [isRunning, timer]);
    
//       const startTimer = (time) => {
//         setTimer(time * 60);
//         setIsRunning(true);
//       };
    
//       return (
//         <>
//           <Navbar/>
//           <div className="bg-gray-100 py-16">
//             <div className="max-w-6xl mx-auto px-6 bg-white shadow-2xl rounded-lg p-10">
//               <div className="grid md:grid-cols-2 gap-12">
//                 <div className="relative group">
//                   <img 
//                     src={product.image} 
//                     alt={product.name} 
//                     className="w-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300"
//                   />
//                 </div>
//                 <div className="space-y-6">
//                   <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>
//                   <p className="text-2xl font-bold text-green-600">${product.price}</p>
//                   <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg">
//                     Add to Cart
//                   </button>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     A healthy and refreshing salad packed with nutrients and flavor. Perfect for a quick meal or a light side dish.
//                   </p>
//                 </div>
//               </div>
    
//               <div className="mt-12">
//                 <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ingredients</h3>
//                 <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
//                   {product.ingredients.map((ingredient, index) => (
//                     <li key={index} className="bg-gray-200 px-4 py-2 rounded-md shadow">{ingredient}</li>
//                   ))}
//                 </ul>
//               </div>
    
//               <div className="mt-12">
//                 <h3 className="text-3xl font-semibold text-gray-800 mb-4">Instructions</h3>
//                 <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
//                   {product.instructions.map((step, index) => (
//                     <li key={index} className="bg-gray-100 px-4 py-2 rounded-md shadow flex justify-between">
//                       {step.step}
//                       <button 
//                         className="ml-4 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                         onClick={() => startTimer(step.time)}
//                       >
//                         Start {step.time} min Timer
//                       </button>
//                     </li>
//                   ))}
//                 </ol>
//               </div>
    
//               {isRunning && (
//                 <div className="mt-6 text-center text-2xl font-semibold text-red-600">
//                   Timer: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//                 </div>
//               )}
//             </div>
//           </div>
//           <Footer/>
//         </>
//       );
//     };
    
//     export default ProductDescription;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const ProductDescription = () => {
//   const { id } = useParams(); // Get the id from URL

//   // Sample data for recipes
//   const menuItems = [
//     { 
//             id: 1, 
//             name: 'Greek Salad', 
//             price: 200, 
//             image: '../assets/food_1.png', 
//             ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Olives', 'Feta Cheese', 'Olive Oil', 'Oregano'],
//             instructions: [
//               'Wash and chop lettuce, tomatoes, cucumber, and olives.',
//               'Crumble feta cheese and add to the bowl.',
//               'Drizzle olive oil and sprinkle oregano.',
//               'Toss the salad and serve immediately.'
//             ]
//           },
//           { 
//             id: 2, 
//             name: 'Veg Salad', 
//             price: 100, 
//             image: '../assets/food_2.png', 
//             ingredients: ['Lettuce', 'Cucumber', 'Tomatoes', 'Carrots', 'Bell Peppers', 'Olive Oil', 'Lemon Juice'],
//             instructions: [
//               'Chop all vegetables: lettuce, cucumber, tomatoes, carrots, and bell peppers.',
//               'Toss everything in a large bowl.',
//               'Drizzle with olive oil and lemon juice.',
//               'Mix well and serve chilled.'
//             ]
//           },
//           { 
//             id: 3, 
//             name: 'Clover Salad', 
//             price: 150, 
//             image: '../assets/food_3.png', 
//             ingredients: ['Clover Leaves', 'Tomatoes', 'Cucumber', 'Olives', 'Red Onion', 'Olive Oil', 'Lemon'],
//             instructions: [
//               'Wash clover leaves and chop tomatoes, cucumber, and red onion.',
//               'Add olives to the mixture.',
//               'Drizzle with olive oil and a squeeze of lemon.',
//               'Toss gently and serve fresh.'
//             ]
//           },
//           { 
//             id: 4, 
//             name: 'Chicken Salad', 
//             price: 220, 
//             image: '../assets/food_4.png', 
//             ingredients: ['Chicken Breast', 'Lettuce', 'Tomatoes', 'Cucumber', 'Olives', 'Feta Cheese', 'Olive Oil', 'Lemon'],
//             instructions: [
//               'Grill or cook the chicken breast and slice it.',
//               'Chop lettuce, tomatoes, cucumber, and olives.',
//               'Crumble feta cheese and add to the salad.',
//               'Drizzle olive oil and lemon juice, toss the salad, and serve.'
//             ]
//           },
//           { 
//             id: 5, 
//             name: 'Lasagna Rolls', 
//             price: 180, 
//             image: '../assets/food_5.png', 
//             ingredients: ['Lasagna Sheets', 'Ground Beef', 'Tomato Sauce', 'Mozzarella Cheese', 'Parmesan', 'Ricotta Cheese', 'Garlic'],
//             instructions: [
//               'Cook lasagna sheets according to package instructions.',
//               'Brown ground beef and mix with tomato sauce.',
//               'Layer mozzarella, ricotta, and parmesan on the cooked lasagna sheets.',
//               'Roll up the sheets with the filling inside and bake until bubbly.'
//             ]
//           },
//           { 
//             id: 6, 
//             name: 'Peri Peri Rolls', 
//             price: 250, 
//             image: '../assets/food_6.png', 
//             ingredients: ['Chicken Breast', 'Peri Peri Sauce', 'Bell Peppers', 'Lettuce', 'Tortilla Wraps', 'Garlic', 'Olive Oil'],
//             instructions: [
//               'Cook chicken breast and slice it into strips.',
//               'Toss the chicken strips in peri peri sauce.',
//               'Slice bell peppers and mix with lettuce.',
//               'Heat tortilla wraps and assemble with the chicken, bell peppers, lettuce, and garlic.',
//               'Roll up the tortillas and serve.'
//             ]
//           },
//           { 
//             id: 7, 
//             name: 'Chicken Rolls', 
//             price: 300, 
//             image: '../assets/food_7.png', 
//             ingredients: ['Chicken Breast', 'Lettuce', 'Tomatoes', 'Cucumber', 'Tortilla Wraps', 'Mayo', 'Mustard'],
//             instructions: [
//               'Cook chicken breast and slice it into strips.',
//               'Chop lettuce, tomatoes, and cucumber.',
//               'Spread mayo and mustard on tortilla wraps.',
//               'Add chicken and chopped vegetables to the wraps.',
//               'Roll up and serve.'
//             ]
//           },
//           { 
//             id: 8, 
//             name: 'Veg Rolls', 
//             price: 320, 
//             image: '../assets/food_8.png', 
//             ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Avocado', 'Carrots', 'Tortilla Wraps', 'Hummus'],
//             instructions: [
//               'Chop lettuce, tomatoes, cucumber, avocado, and carrots.',
//               'Spread hummus on tortilla wraps.',
//               'Add chopped vegetables to the wraps.',
//               'Roll up and serve.'
//             ]
//           },
//           { 
//             id: 9, 
//             name: 'Ripple Ice Cream', 
//             price: 150, 
//             image: '../assets/food_9.png', 
//             ingredients: ['Milk', 'Sugar', 'Vanilla Extract', 'Chocolate Ripple', 'Cream'],
//             instructions: [
//               'Heat milk and sugar in a pan until the sugar dissolves.',
//               'Add vanilla extract and cream, stirring constantly.',
//               'Cool the mixture and freeze in an ice cream maker.',
//               'Once frozen, swirl in chocolate ripple and serve.'
//             ]
//           },
//           { 
//             id: 10, 
//             name: 'Fruit Ice Cream', 
//             price: 200, 
//             image: '../assets/food_10.png', 
//             ingredients: ['Milk', 'Sugar', 'Fresh Fruits (Strawberries, Mangoes, etc.)', 'Cream', 'Vanilla'],
//             instructions: [
//               'Blend fresh fruits and mix with milk, sugar, and vanilla.',
//               'Add cream and blend until smooth.',
//               'Freeze the mixture in an ice cream maker.',
//               'Serve chilled after it has frozen.'
//             ]
//           },
//           { 
//             id: 11, 
//             name: 'Vanilla Ice Cream', 
//             price: 250, 
//             image: '../assets/food_11.png', 
//             ingredients: ['Milk', 'Sugar', 'Vanilla Extract', 'Cream'],
//             instructions: [
//               'Step 1: Heat milk and sugar in a pan until dissolved.',
//               'Step 2: Add vanilla extract and cream, mixing well.',
//               'Step 3: Cool the mixture and freeze in an ice cream maker.',
//               'Step 4: Serve once the ice cream has set.'
//             ]
//           },
//           { 
//             id: 12, 
//             name: 'Vegan Sandwich', 
//             price: 400, 
//             image: '../assets/food_12.png', 
//             ingredients: ['Whole Wheat Bread', 'Lettuce', 'Tomatoes', 'Cucumber', 'Avocado', 'Hummus', 'Vegan Cheese'],
//             instructions: [
//               'Step 1: Toast the whole wheat bread.',
//               'Step 2: Spread hummus on each slice of bread.',
//               'Step 3: Layer lettuce, tomatoes, cucumber, and avocado on one slice.',
//               'Step 4: Add vegan cheese and top with the second slice of bread.',
//               'Step 5: Serve fresh and enjoy.'
//             ]
//           },
//           { 
//             id: 13, 
//             name: 'Grilled Sandwich', 
//             price: 450, 
//             image: '../assets/food_13.png', 
//             ingredients: ['Whole Wheat Bread', 'Cheese', 'Tomatoes', 'Lettuce', 'Mayonnaise', 'Butter'],
//             instructions: [
//               'Step 1: Butter the outside of the bread slices.',
//               'Step 2: Layer cheese, tomatoes, and lettuce between the slices.',
//               'Step 3: Grill the sandwich until golden and crispy on both sides.',
//               'Step 4: Serve warm with a side of mayo.'
//             ]
//           },
//           { 
//             id: 14, 
//             name: 'Bread Sandwich', 
//             price: 300, 
//             image: '../assets/food_14.png', 
//             ingredients: ['Bread', 'Lettuce', 'Tomatoes', 'Cucumber', 'Mayonnaise'],
//             instructions: [
//               'Step 1: Toast the bread slices lightly.',
//               'Step 2: Spread mayonnaise on one side of each slice.',
//               'Step 3: Layer lettuce, tomatoes, and cucumber on one slice of bread.',
//               'Step 4: Top with the second slice and serve.'
//             ]
//           },
//           { 
//             id: 15, 
//             name: 'Cup Cake', 
//             price: 350, 
//             image: '../assets/food_15.png', 
//             ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Vanilla Extract', 'Baking Powder', 'Milk'],
//             instructions: [
//               'Step 1: Preheat the oven to 180°C.',
//               'Step 2: Mix flour, sugar, and baking powder in a bowl.',
//               'Step 3: Add butter, eggs, vanilla, and milk, mixing until smooth.',
//               'Step 4: Pour into cupcake liners and bake for 20-25 minutes.',
//               'Step 5: Cool and serve with frosting.'
//             ]
//           },
//           { 
//             id: 16, 
//             name: 'Vegan Cake', 
//             price: 280, 
//             image: '../assets/food_16.png', 
//             ingredients: ['Flour', 'Sugar', 'Almond Milk', 'Baking Powder', 'Cocoa Powder', 'Vegan Butter'],
//             instructions: [
//               'Step 1: Preheat oven to 180°C.',
//               'Step 2: Mix flour, sugar, cocoa powder, and baking powder.',
//               'Step 3: Add almond milk and vegan butter, mixing until smooth.',
//               'Step 4: Pour batter into cake pan and bake for 30 minutes.',
//               'Step 5: Let the cake cool and serve.'
//             ]
//           },
//           { 
//             id: 17, 
//             name: 'Butterscotch Cake', 
//             price: 350, 
//             image: '../assets/food_17.png', 
//             ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Butterscotch Syrup', 'Vanilla Extract', 'Milk'],
//             instructions: [
//               'Step 1: Preheat the oven to 180°C.',
//               'Step 2: Mix flour, sugar, and baking powder.',
//               'Step 3: Add melted butter, eggs, butterscotch syrup, vanilla, and milk.',
//               'Step 4: Pour into a cake pan and bake for 25-30 minutes.',
//               'Step 5: Let cool and serve.'
//             ]
//           },
          
//             {
//               id: 17, 
//           name: 'Butterscotch Cake', 
//           price: 350, 
//           image: '../assets/food_17.png', 
//           ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Butterscotch Syrup', 'Vanilla Extract', 'Milk'],
//           instructions: [
//             'Step 1: Preheat the oven to 180°C.',
//             'Step 2: Mix flour, sugar, and baking powder.',
//             'Step 3: Add melted butter, eggs, butterscotch syrup, vanilla, and milk.',
//             'Step 4: Pour into a cake pan and bake for 25-30 minutes.',
//             'Step 5: Let cool and serve.'
//           ]
//         },
//         { 
//           id: 18, 
//           name: 'Chocolate Cake', 
//           price: 400, 
//           image: '../assets/food_18.png', 
//           ingredients: ['Flour', 'Cocoa Powder', 'Sugar', 'Butter', 'Eggs', 'Baking Powder', 'Milk', 'Chocolate Chips'],
//           instructions: [
//             'Step 1: Preheat the oven to 180°C.',
//             'Step 2: Mix flour, cocoa powder, sugar, and baking powder.',
//             'Step 3: Add melted butter, eggs, and milk, stirring until smooth.',
//             'Step 4: Fold in chocolate chips.',
//             'Step 5: Pour batter into cake pans and bake for 30-35 minutes.',
//             'Step 6: Cool before serving.'
//           ]
//         },
//         { 
//           id: 19, 
//           name: 'Carrot Cake', 
//           price: 380, 
//           image: '../assets/food_19.png', 
//           ingredients: ['Carrots', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Baking Powder', 'Vanilla Extract', 'Cinnamon'],
//           instructions: [
//             'Step 1: Preheat the oven to 180°C.',
//             'Step 2: Grate the carrots and set aside.',
//             'Step 3: Mix flour, sugar, baking powder, and cinnamon.',
//             'Step 4: Add eggs, melted butter, vanilla extract, and grated carrots.',
//             'Step 5: Bake for 30-35 minutes.',
//             'Step 6: Cool before serving.'
//           ]
//         },
//         { 
//           id: 20, 
//           name: 'Banana Cake', 
//           price: 350, 
//           image: '../assets/food_20.png', 
//           ingredients: ['Bananas', 'Flour', 'Sugar', 'Butter', 'Eggs', 'Baking Powder', 'Milk'],
//           instructions: [
//             'Step 1: Preheat the oven to 180°C.',
//             'Step 2: Mash the bananas and set aside.',
//             'Step 3: Mix flour, sugar, and baking powder.',
//             'Step 4: Add eggs, melted butter, milk, and mashed bananas.',
//             'Step 5: Bake for 30-35 minutes.',
//             'Step 6: Cool before serving.'
//           ]
//         },
//         { 
//           id: 21, 
//           name: 'Apple Pie', 
//           price: 500, 
//           image: '../assets/food_21.png', 
//           ingredients: ['Apples', 'Sugar', 'Cinnamon', 'Butter', 'Pie Crust'],
//           instructions: [
//             'Step 1: Preheat the oven to 180°C.',
//             'Step 2: Peel and slice the apples.',
//             'Step 3: Toss apples with sugar and cinnamon.',
//             'Step 4: Fill the pie crust with the apple mixture.',
//             'Step 5: Top with another layer of pie crust and bake for 45-50 minutes.',
//             'Step 6: Cool before serving.'
//           ]
//         },
//         { 
//           id: 22, 
//           name: 'Cherry Pie', 
//           price: 450, 
//           image: '../assets/food_22.png', 
//           ingredients: ['Cherries', 'Sugar', 'Cornstarch', 'Butter', 'Pie Crust'],
//           instructions: [
//             'Step 1: Preheat the oven to 180°C.',
//             'Step 2: Pit and slice the cherries.',
//             'Step 3: Mix cherries with sugar and cornstarch.',
//             'Step 4: Fill the pie crust with the cherry mixture.',
//             'Step 5: Top with another layer of pie crust and bake for 40-45 minutes.',
//             'Step 6: Cool before serving.'
//           ]
//         },
//         { 
//           id: 23, 
//           name: 'Pumpkin Pie', 
//           price: 500, 
//           image: '../assets/food_23.png', 
//           ingredients: ['Pumpkin Puree', 'Sugar', 'Cinnamon', 'Nutmeg', 'Eggs', 'Pie Crust'],
//           instructions: [
//             'Step 1: Preheat the oven to 180°C.',
//             'Step 2: Mix pumpkin puree with sugar, cinnamon, nutmeg, and eggs.',
//             'Step 3: Pour the mixture into the pie crust.',
//             'Step 4: Bake for 45-50 minutes.',
//             'Step 5: Cool before serving.'
//           ]
//         },
//         { 
//           id: 24, 
//           name: 'Cheese Burger', 
//           price: 300, 
//           image: '../assets/food_24.png', 
//           ingredients: ['Beef Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
//           instructions: [
//             'Step 1: Cook the beef patty to your desired doneness.',
//             'Step 2: Toast the burger buns lightly.',
//             'Step 3: Place the cooked patty on the bun and top with a slice of cheese.',
//             'Step 4: Add lettuce, tomato, and onion.',
//             'Step 5: Close the bun and serve.'
//           ]
//         },
//         { 
//           id: 25, 
//           name: 'Veg Burger', 
//           price: 250, 
//           image: '../assets/food_25.png', 
//           ingredients: ['Veg Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
//           instructions: [
//             'Step 1: Cook the veg patty until crispy.',
//             'Step 2: Toast the burger buns lightly.',
//             'Step 3: Place the cooked patty on the bun and top with a slice of cheese.',
//             'Step 4: Add lettuce, tomato, and onion.',
//             'Step 5: Close the bun and serve.'
//           ]
//         },
//         { 
//           id: 26, 
//           name: 'Chicken Burger', 
//           price: 350, 
//           image: '../assets/food_26.png', 
//           ingredients: ['Chicken Breast', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
//           instructions: [
//             'Step 1: Grill the chicken breast and slice it.',
//             'Step 2: Toast the burger buns lightly.',
//             'Step 3: Place the chicken slices on the bun and top with a slice of cheese.',
//             'Step 4: Add lettuce, tomato, and onion.',
//             'Step 5: Close the bun and serve.'
//           ]
//         },
//         { 
//           id: 27, 
//           name: 'Fish Burger', 
//           price: 400, 
//           image: '../assets/food_27.png', 
//           ingredients: ['Fish Fillet', 'Lettuce', 'Tomato', 'Cheese Slice', 'Burger Bun'],
//           instructions: [
//             'Step 1: Fry or grill the fish fillet.',
//             'Step 2: Toast the burger buns lightly.',
//             'Step 3: Place the fish fillet on the bun and top with a slice of cheese.',
//             'Step 4: Add lettuce and tomato.',
//             'Step 5: Close the bun and serve.'
//           ]
//         },
//         { 
//           id: 28, 
//           name: 'Vegetable Soup', 
//           price: 180, 
//           image: '../assets/food_28.png', 
//           ingredients: ['Carrots', 'Potatoes', 'Onions', 'Tomatoes', 'Celery', 'Vegetable Broth', 'Garlic'],
//           instructions: [
//             'Step 1: Chop all vegetables (carrots, potatoes, onions, tomatoes, celery).',
//             'Step 2: In a pot, sauté garlic and onions.',
//             'Step 3: Add the rest of the vegetables and vegetable broth.',
//             'Step 4: Bring to a boil, then reduce heat and simmer for 30 minutes.',
//             'Step 5: Serve hot.'
//           ]
//         },
//         { 
//           id: 29, 
//           name: 'Chicken Soup', 
//           price: 250, 
//           image: '../assets/food_29.png', 
//           ingredients: ['Chicken Breast', 'Carrots', 'Celery', 'Onions', 'Garlic', 'Chicken Broth'],
//           instructions: [
//             'Step 1: Chop chicken breast and vegetables (carrots, celery, onions).',
//             'Step 2: Sauté garlic and onions in a pot.',
//             'Step 3: Add chicken and cook until browned.',
//             'Step 4: Pour in chicken broth and vegetables, and bring to a boil.',
//             'Step 5: Simmer for 30 minutes and serve hot.'
//           ]
//         },
//         { 
//           id: 30, 
//           name: 'Tomato Soup', 
//           price: 220, 
//           image: '../assets/food_30.png', 
//           ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Vegetable Broth', 'Cream', 'Basil'],
//           instructions: [
//             'Step 1: Sauté onions and garlic in a pot.',
//             'Step 2: Add chopped tomatoes and vegetable broth.',
//             'Step 3: Bring to a boil and then simmer for 20-25 minutes.',
//             'Step 4: Blend the soup until smooth, then add cream and basil.',
//             'Step 5: Serve hot.'
//           ]
//         }
//       ];

//       const product = menuItems.find(item => item.id.toString() === id);

//       if (!product) {
//         return <div className="text-center text-2xl text-gray-700 py-20">Product not found</div>;
//       }
    
//       return (
//         <>
//         <Navbar/>
//         <div className="bg-gray-100 py-16">
//           <div className="max-w-6xl mx-auto px-6 bg-white shadow-2xl rounded-lg p-10">
//             <div className="grid md:grid-cols-2 gap-12">
//               <div className="relative group">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="w-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300"
//                 />
//               </div>
//               <div className="space-y-6">
//                 <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>
//                 <p className="text-2xl font-bold text-green-600">${product.price}</p>
//                 <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg">
//                   Add to Cart
//                 </button>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   A healthy and refreshing salad packed with nutrients and flavor. Perfect for a quick meal or a light side dish.
//                 </p>
//               </div>
//             </div>
    
//             <div className="mt-12">
//               <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ingredients</h3>
//               <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
//                 {product.ingredients.map((ingredient, index) => (
//                   <li key={index} className="bg-gray-200 px-4 py-2 rounded-md shadow">{ingredient}</li>
//                 ))}
//               </ul>
//             </div>
    
//             <div className="mt-12">
//               <h3 className="text-3xl font-semibold text-gray-800 mb-4">Instructions</h3>
//               <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
//                 {product.instructions.map((step, index) => (
//                   <li key={index} className="bg-gray-100 px-4 py-2 rounded-md shadow">{step}</li>
//                 ))}
//               </ol>
//             </div>
    
//             <div className="mt-12">
//               <h3 className="text-3xl font-semibold text-gray-800 mb-6">Customer Reviews</h3>
//               <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="w-12 h-12 rounded-full bg-gray-500"></div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900">John Doe</h4>
//                     <div className="text-yellow-500">★★★★★</div>
//                   </div>
//                 </div>
//                 <p className="text-lg text-gray-700">"This salad was amazing! Fresh, light, and so delicious. Will definitely make it again!"</p>
//               </div>
//               <button className="mt-6 py-2 px-6 bg-gray-200 text-gray-800 border border-gray-300 rounded-md hover:bg-gray-300 transition-colors shadow">
//                 Write a Review
//               </button>
//             </div>
//           </div>
//         </div>
//         <Footer/>
//         </>
//       );
//     };
    
//     export default ProductDescription;







