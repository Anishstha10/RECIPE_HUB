// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const ProductDescription = () => {
//   const { id } = useParams();
//   const [timer, setTimer] = useState(null);
//   const [isRunning, setIsRunning] = useState(false);
//   const [notification, setNotification] = useState(''); // State for the notification

//   // Sample data for recipes
//   const menuItems = [
//     { 
//       id: 1, 
//       name: 'Greek Salad', 
//       price: 200, 
//       image: '../assets/food_1.png', 
//       ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Olives', 'Feta Cheese', 'Olive Oil', 'Oregano'],
//       instructions: [
//         { step: 'Wash and chop lettuce, tomatoes, cucumber, and olives.' },
//         { step: 'Crumble feta cheese and add to the bowl.' },
//         { step: 'Drizzle olive oil and sprinkle oregano.' },
//         { step: 'Toss the salad and serve immediately.' }
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 2, 
//       name: 'Veg Salad', 
//       price: 100, 
//       image: '../assets/food_2.png', 
//       ingredients: ['Lettuce', 'Cucumber', 'Tomatoes', 'Carrots', 'Bell Peppers', 'Olive Oil', 'Lemon Juice'],
//       instructions: [
//         {step: 'Chop all vegetables: lettuce, cucumber, tomatoes, carrots, and bell peppers'},
//         {step:'Toss everything in a large bowl.'},
//         {step:'Drizzle with olive oil and lemon juice.'},
//         {step:'Mix well and serve chilled.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 3, 
//       name: 'Clover Salad', 
//       price: 150, 
//       image: '../assets/food_3.png', 
//       ingredients: ['Clover Leaves', 'Tomatoes', 'Cucumber', 'Olives', 'Red Onion', 'Olive Oil', 'Lemon'],
//       instructions: [
//         {step: 'Wash clover leaves and chop tomatoes, cucumber, and red onion.'},
//         {step:'Add olives to the mixture.'},
//         {step:'Drizzle with olive oil and a squeeze of lemon.'},
//         {step:'Toss gently and serve fresh.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 4, 
//       name: 'Chicken Salad', 
//       price: 220, 
//       image: '../assets/food_4.png', 
//       ingredients: ['Chicken Breast', 'Lettuce', 'Tomatoes', 'Cucumber', 'Olives', 'Feta Cheese', 'Olive Oil', 'Lemon'],
//       instructions: [
//         {step:'Grill or cook the chicken breast and slice it.'},
//         {step:'Chop lettuce, tomatoes, cucumber, and olives.'},
//         {step:'Crumble feta cheese and add to the salad.'},
//         {step:'Drizzle olive oil and lemon juice, toss the salad, and serve.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 5, 
//       name: 'Lasagna Rolls', 
//       price: 180, 
//       image: '../assets/food_5.png', 
//       ingredients: ['Lasagna Sheets', 'Ground Beef', 'Tomato Sauce', 'Mozzarella Cheese', 'Parmesan', 'Ricotta Cheese', 'Garlic'],
//       instructions: [
//         {step:'Cook lasagna sheets according to package instructions.'},
//         {step:'Brown ground beef and mix with tomato sauce.'},
//         {step:'Layer mozzarella, ricotta, and parmesan on the cooked lasagna sheets.'},
//         {step:'Roll up the sheets with the filling inside and bake until bubbly.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 6, 
//       name: 'Peri Peri Rolls', 
//       price: 250, 
//       image: '../assets/food_6.png', 
//       ingredients: ['Chicken Breast', 'Peri Peri Sauce', 'Bell Peppers', 'Lettuce', 'Tortilla Wraps', 'Garlic', 'Olive Oil'],
//       instructions: [
//         {step:'Cook chicken breast and slice it into strips.'},
//         {step:'Toss the chicken strips in peri peri sauce.'},
//         {step:'Slice bell peppers and mix with lettuce.'},
//         {step:'Heat tortilla wraps and assemble with the chicken, bell peppers, lettuce, and garlic.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 7, 
//       name: 'Chicken Rolls', 
//       price: 300, 
//       image: '../assets/food_7.png', 
//       ingredients: ['Chicken Breast', 'Lettuce', 'Tomatoes', 'Cucumber', 'Tortilla Wraps', 'Mayo', 'Mustard'],
//       instructions: [
//          {step:'Cook chicken breast and slice it into strips.'},
//          {step:'Chop lettuce, tomatoes, and cucumber.'},
//          {step:'Spread mayo and mustard on tortilla wraps.'},
//          {step:'Add chicken and chopped vegetables to the wraps.'},
       
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 8, 
//       name: 'Veg Rolls', 
//       price: 320, 
//       image: '../assets/food_8.png', 
//       ingredients: ['Lettuce', 'Tomatoes', 'Cucumber', 'Avocado', 'Carrots', 'Tortilla Wraps', 'Hummus'],
//       instructions: [
//          {step:'Chop lettuce, tomatoes, cucumber, avocado, and carrots.'},
//          {step:'Spread hummus on tortilla wraps.'},
//          {step:'Add chopped vegetables to the wraps.'},
//          {step:'Roll up and serve.' }
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 9, 
//       name: 'Ripple Ice Cream', 
//       price: 150, 
//       image: '../assets/food_9.png', 
//       ingredients: ['Milk', 'Sugar', 'Vanilla Extract', 'Chocolate Ripple', 'Cream'],
//       instructions: [
//         {step:'Heat milk and sugar in a pan until the sugar dissolves.'},
//         {step:'Add vanilla extract and cream, stirring constantly.'},
//         {step:'Cool the mixture and freeze in an ice cream maker.'},
//         {step:'Once frozen, swirl in chocolate ripple and serve.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 10, 
//       name: 'Fruit Ice Cream', 
//       price: 200, 
//       image: '../assets/food_10.png', 
//       ingredients: ['Milk', 'Sugar', 'Fresh Fruits (Strawberries, Mangoes, etc.)', 'Cream', 'Vanilla'],
//       instructions: [
//         {step:'Blend fresh fruits and mix with milk, sugar, and vanilla.'},
//         {step:'Add cream and blend until smooth.'},
//         {step:'Freeze the mixture in an ice cream maker.'},
//         {step:'Serve chilled after it has frozen.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 11, 
//       name: 'Vanilla Ice Cream', 
//       price: 250, 
//       image: '../assets/food_11.png', 
//       ingredients: ['Milk', 'Sugar', 'Vanilla Extract', 'Cream'],
//       instructions: [
//         {step:'Heat milk and sugar in a pan until dissolved.'},
//         {step:'Add vanilla extract and cream, mixing well.'},
//         {step:'Cool the mixture and freeze in an ice cream maker.'},
//         {step:'Serve once the ice cream has set.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 12, 
//       name: 'Vegan Sandwich', 
//       price: 400, 
//       image: '../assets/food_12.png', 
//       ingredients: ['Whole Wheat Bread', 'Lettuce', 'Tomatoes', 'Cucumber', 'Avocado', 'Hummus', 'Vegan Cheese'],
//       instructions: [
//         {step:' Toast the whole wheat bread.'},
//         {step:' Spread hummus on each slice of bread.'},
//         {step:' Layer lettuce, tomatoes, cucumber, and avocado on one slice.'},
//         {step:' Add vegan cheese and top with the second slice of bread.'},
//         {step:' Serve fresh and enjoy.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 13, 
//       name: 'Grilled Sandwich', 
//       price: 450, 
//       image: '../assets/food_13.png', 
//       ingredients: ['Whole Wheat Bread', 'Cheese', 'Tomatoes', 'Lettuce', 'Mayonnaise', 'Butter'],
//       instructions: [
//        {step:' Butter the outside of the bread slices.'},
//         {step:' Layer cheese, tomatoes, and lettuce between the slices.'},
//         {step:' Grill the sandwich until golden and crispy on both sides.'},
//         {step:' Serve warm with a side of mayo.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 14, 
//       name: 'Bread Sandwich', 
//       price: 300, 
//       image: '../assets/food_14.png', 
//       ingredients: ['Bread', 'Lettuce', 'Tomatoes', 'Cucumber', 'Mayonnaise'],
//       instructions: [
//        {step:' Toast the bread slices lightly.'},
//         {step:' Spread mayonnaise on one side of each slice.'},
//         {step:' Layer lettuce, tomatoes, and cucumber on one slice of bread.'},
//         {step:' Top with the second slice and serve.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 15, 
//       name: 'Cup Cake', 
//       price: 350, 
//       image: '../assets/food_15.png', 
//       ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Vanilla Extract', 'Baking Powder', 'Milk'],
//       instructions: [
//         {step:' Preheat the oven to 180°C.'},
//         {step:' Mix flour, sugar, and baking powder in a bowl.'},
//         {step:' Add butter, eggs, vanilla, and milk, mixing until smooth.'},
//         {step:' Pour into cupcake liners and bake for 20-25 minutes.'},
//         {step:' Cool and serve with frosting.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 16, 
//       name: 'Vegan Cake', 
//       price: 280, 
//       image: '../assets/food_16.png', 
//       ingredients: ['Flour', 'Sugar', 'Almond Milk', 'Baking Powder', 'Cocoa Powder', 'Vegan Butter'],
//       instructions: [
//         {step:' Preheat oven to 180°C.'},
//         {step:' Mix flour, sugar, cocoa powder, and baking powder.'},
//         {step:' Add almond milk and vegan butter, mixing until smooth.'},
//         {step:' Pour batter into cake pan and bake for 30 minutes.'},
//         {step:' Let the cake cool and serve.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
//     { 
//       id: 17, 
//       name: 'Sliced Cake', 
//       price: 350, 
//       image: '../assets/food_17.png', 
//       ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Butterscotch Syrup', 'Vanilla Extract', 'Milk'],
//       instructions: [
//         {step:' Preheat the oven to 180°C.'},
//         {step:'  Mix flour, sugar, and baking powder.'},
//         {step:' Add melted butter, eggs, butterscotch syrup, vanilla, and milk.'},
//         {step:'  Pour into a cake pan and bake for 25-30 minutes.'},
//         {step:'  Let cool and serve.'}
//       ],
//       totalCookingTime: 1 // Total cooking time in minutes
//     },
    
//       {
//         id: 17, 
//     name: 'Garlic Mushroom', 
//     price: 350, 
//     image: '../assets/food_17.png', 
//     ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Butterscotch Syrup', 'Vanilla Extract', 'Milk'],
//     instructions: [
//       {step:'  Preheat the oven to 180°C.'},
//       {step:'  Mix flour, sugar, and baking powder.'},
//       {step:'  Add melted butter, eggs, butterscotch syrup, vanilla, and milk.'},
//       {step:'  Pour into a cake pan and bake for 25-30 minutes.'},
//       {step:'  Let cool and serve.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 18, 
//     name: 'Fried Cauliflower', 
//     price: 400, 
//     image: '../assets/food_18.png', 
//     ingredients: ['Flour', 'Cocoa Powder', 'Sugar', 'Butter', 'Eggs', 'Baking Powder', 'Milk', 'Chocolate Chips'],
//     instructions: [
//      {step:'  Preheat the oven to 180°C.'},
//       {step:'  Mix flour, cocoa powder, sugar, and baking powder.'},
//       {step:'  Add melted butter, eggs, and milk, stirring until smooth.'},
//       {step:'  Fold in chocolate chips.'},
//       {step:'  Pour batter into cake pans and bake for 30-35 minutes.'},
//       {step:'  Cool before serving.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 19, 
//     name: 'Mix Veg Pulao', 
//     price: 380, 
//     image: '../assets/food_19.png', 
//     ingredients: ['Carrots', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Baking Powder', 'Vanilla Extract', 'Cinnamon'],
//     instructions: [
//       {step:'  Preheat the oven to 180°C.'},
//       {step:'  Grate the carrots and set aside.'},
//       {step:'  Mix flour, sugar, baking powder, and cinnamon.'},
//       {step:' Add eggs, melted butter, vanilla extract, and grated carrots.'},
//       {step:'  Bake for 30-35 minutes.'},
//       {step:'  Cool before serving.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 20, 
//     name: 'Rice Zucchini', 
//     price: 350, 
//     image: '../assets/food_20.png', 
//     ingredients: ['Bananas', 'Flour', 'Sugar', 'Butter', 'Eggs', 'Baking Powder', 'Milk'],
//     instructions: [
//        {step:' Preheat the oven to 180°C.'},
//        {step:' Mash the bananas and set aside.'},
//        {step:' Mix flour, sugar, and baking powder.'},
//        {step:' Add eggs, melted butter, milk, and mashed bananas.'},
//        {step:' Bake for 30-35 minutes.'},
//        {step:' Cool before serving.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 21, 
//     name: 'Cheese Pasta', 
//     price: 500, 
//     image: '../assets/food_21.png', 
//     ingredients: ['Apples', 'Sugar', 'Cinnamon', 'Butter', 'Pie Crust'],
//     instructions: [
//        {step:' Preheat the oven to 180°C.'},
//       {step:' Peel and slice the apples.'},
//        {step:' Toss apples with sugar and cinnamon.'},
//        {step:' Fill the pie crust with the apple mixture.'},
//        {step:' Top with another layer of pie crust and bake for 45-50 minutes.'},
//        {step:' Cool before serving.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 22, 
//     name: 'Tomato Pasta', 
//     price: 450, 
//     image: '../assets/food_22.png', 
//     ingredients: ['Cherries', 'Sugar', 'Cornstarch', 'Butter', 'Pie Crust'],
//     instructions: [
//        {step:'  Preheat the oven to 180°C.'},
//        {step:'  Pit and slice the cherries.'},
//        {step:'  Mix cherries with sugar and cornstarch.'},
//        {step:'  Fill the pie crust with the cherry mixture.'},
//       {step:'  Top with another layer of pie crust and bake for 40-45 minutes.'},
//        {step:'  Cool before serving.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 23, 
//     name: 'Creamy Pasta', 
//     price: 500, 
//     image: '../assets/food_23.png', 
//     ingredients: ['Pumpkin Puree', 'Sugar', 'Cinnamon', 'Nutmeg', 'Eggs', 'Pie Crust'],
//     instructions: [
//        {step:' Preheat the oven to 180°C.'},
//       {step:'  Mix pumpkin puree with sugar, cinnamon, nutmeg, and eggs.'},
//        {step:'  Pour the mixture into the pie crust.'},
//        {step:'  Bake for 45-50 minutes.'},
//        {step:'  Cool before serving.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 24, 
//     name: 'Chicken Pasta', 
//     price: 300, 
//     image: '../assets/food_24.png', 
//     ingredients: ['Beef Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
//     instructions: [
//       {step:' Cook the beef patty to your desired doneness.'},
//       {step:' Toast the burger buns lightly.'},
//       {step:' Place the cooked patty on the bun and top with a slice of cheese.'},
//       {step:' Add lettuce, tomato, and onion.'},
//       {step:' Close the bun and serve.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 25, 
//     name: 'Butter Noodles', 
//     price: 250, 
//     image: '../assets/food_25.png', 
//     ingredients: ['Veg Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
//     instructions: [
//      {step:' Cook the veg patty until crispy.'},
//       {step:' Toast the burger buns lightly.'},
//      {step:' Place the cooked patty on the bun and top with a slice of cheese.'},
//      {step:' Add lettuce, tomato, and onion.'},
//       {step:' Close the bun and serve.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 26, 
//     name: 'Veg Noodles', 
//     price: 350, 
//     image: '../assets/food_26.png', 
//     ingredients: ['Chicken Breast', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Burger Bun'],
//     instructions: [
//       {step:' Grill the chicken breast and slice it.'},
//       {step:' Toast the burger buns lightly.'},
//       {step:' Place the chicken slices on the bun and top with a slice of cheese.'},
//       {step:' Add lettuce, tomato, and onion.'},
//       {step:' Close the bun and serve.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 27, 
//     name: 'Somen Noodles', 
//     price: 400, 
//     image: '../assets/food_27.png', 
//     ingredients: ['Fish Fillet', 'Lettuce', 'Tomato', 'Cheese Slice', 'Burger Bun'],
//     instructions: [
//      {step:' Fry or grill the fish fillet.'},
//       {step:' Toast the burger buns lightly.'},
//      {step:' Place the fish fillet on the bun and top with a slice of cheese.'},
//       {step:' Add lettuce and tomato.'},
//       {step:'Close the bun and serve.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 28, 
//     name: 'Cooke Noodles', 
//     price: 180, 
//     image: '../assets/food_28.png', 
//     ingredients: ['Carrots', 'Potatoes', 'Onions', 'Tomatoes', 'Celery', 'Vegetable Broth', 'Garlic'],
//     instructions: [
//       {step:' Chop all vegetables (carrots, potatoes, onions, tomatoes, celery).'},
//       {step:' In a pot, sauté garlic and onions.'},
//       {step:' Add the rest of the vegetables and vegetable broth.'},
//       {step:' Bring to a boil, then reduce heat and simmer for 30 minutes.'},
//       {step:' Serve hot.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 29, 
//     name: 'Chicken Soup', 
//     price: 250, 
//     image: '../assets/food_29.png', 
//     ingredients: ['Chicken Breast', 'Carrots', 'Celery', 'Onions', 'Garlic', 'Chicken Broth'],
//     instructions: [
//      {step:' Chop chicken breast and vegetables (carrots, celery, onions).'},
//       {step:'Sauté garlic and onions in a pot.'},
//       {step:' Add chicken and cook until browned.'},
//       {step:' Pour in chicken broth and vegetables, and bring to a boil.'},
//       {step:' Simmer for 30 minutes and serve hot.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   },
//   { 
//     id: 30, 
//     name: 'Tomato Soup', 
//     price: 220, 
//     image: '../assets/food_30.png', 
//     ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Vegetable Broth', 'Cream', 'Basil'],
//     instructions: [
//       {step:' Sauté onions and garlic in a pot.'},
//       {step:' Add chopped tomatoes and vegetable broth.'},
//       {step:' Bring to a boil and then simmer for 20-25 minutes.'},
//       {step:' Blend the soup until smooth, then add cream and basil.'},
//       {step:' Serve hot.'}
//     ],
//     totalCookingTime: 1 // Total cooking time in minutes
//   }
// ];

    


//   const product = menuItems.find(item => item.id.toString() === id);

//   if (!product) {
//     return <div className="text-center text-2xl text-gray-700 py-20">Product not found</div>;
//   }

//   // Use the total cooking time from the product object
//   const totalCookingTime = product.totalCookingTime * 60; // Convert minutes to seconds

//   useEffect(() => {
//     let interval;
//     if (isRunning && timer > 0) {
//       interval = setInterval(() => {
//         setTimer(prevTime => prevTime - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       setIsRunning(false);
//       setNotification('The recipe is ready. Start eating now!'); // Set notification when timer ends
//       window.alert('The recipe is ready. Start eating now!'); // Display alert when the timer ends
//     }
//     return () => clearInterval(interval);
//   }, [isRunning, timer]);

//   const startTimer = () => {
//     setTimer(totalCookingTime); // Set timer for total recipe time in seconds
//     setIsRunning(true);
//     setNotification(''); // Reset notification when starting a new timer
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gray-100 py-16">
//         <div className="max-w-6xl mx-auto px-6 bg-white shadow-2xl rounded-lg p-10">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="relative group">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300"
//               />
//             </div>
//             <div className="space-y-6">
//               <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>
//               <p className="text-2xl font-bold text-green-600">${product.price}</p>
//               <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg">
//                 Add to Cart
//               </button>
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 A healthy and refreshing salad packed with nutrients and flavor. Perfect for a quick meal or a light side dish.
//               </p>
//             </div>
//           </div>

//           <div className="mt-12">
//             <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ingredients</h3>
//             <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
//               {product.ingredients.map((ingredient, index) => (
//                 <li key={index} className="bg-gray-200 px-4 py-2 rounded-md shadow">{ingredient}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="mt-12">
//             <h3 className="text-3xl font-semibold text-gray-800 mb-4">Instructions</h3>
//             <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
//               {product.instructions.map((step, index) => (
//                 <li key={index} className="bg-gray-100 px-4 py-2 rounded-md shadow">
//                   {step.step}
//                 </li>
//               ))}
//             </ol>
//           </div>

//           {/* Start Timer Button */}
//           <div className="mt-6 text-center">
//             {!isRunning ? (
//               <button
//                 onClick={startTimer}
//                 className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
//               >
//                 Start Recipe Timer
//               </button>
//             ) : (
//               <div className="mt-6 text-2xl font-semibold text-red-600">
//                 Timer: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
//               </div>
//             )}
//           </div>

//           {/* Display Notification */}
//           {notification && (
//             <div className="mt-6 text-xl text-center text-green-600 font-semibold">
//               {notification}
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductDescription;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDescription = () => {
  const { id } = useParams();  // Get the id from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Hardcoded recipes (like Greek Salad)
    const hardcodedRecipes = [
      {
        id: 1,
        name: 'Greek Salad',
        price: 200,
        image: '../assets/food_1.png',
        ingredients: 'Lettuce, Tomatoes, Cucumber, Olives, Feta Cheese, Olive Oil, Oregano',
        instructions: 'Wash and chop lettuce, tomatoes, cucumber, and olives. Crumble feta cheese and add to the bowl. Drizzle olive oil and sprinkle oregano. Toss the salad and serve immediately.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
      {
        id: 2,
        name: 'Veg Salad',
        price: 200,
        image: '../assets/food_2.png',
        ingredients: 'Lettuce, Tomatoes, Cucumber, Olives, Feta Cheese, Olive Oil, Oregano',
        instructions: 'Wash and chop lettuce, tomatoes, cucumber, and olives. Crumble feta cheese and add to the bowl. Drizzle olive oil and sprinkle oregano. Toss the salad and serve immediately.',
        totalCookingTime: 1, // Total cooking time in minutes
      },
   
    ];

    // Retrieve the recipes from localStorage
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Combine hardcoded and dynamic recipes
    const allRecipes = [...hardcodedRecipes, ...storedRecipes];

    // Find the product by ID (it should match the URL id)
    const foundProduct = allRecipes.find(item => item.id.toString() === id);

    setProduct(foundProduct);  // Set the product to state
  }, [id]);

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
              {product.instructions.split(',').map((step, index) => (
                <li key={index} className="bg-gray-100 px-4 py-2 rounded-md shadow">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDescription;
