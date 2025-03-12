import React from 'react';

import { Link } from 'react-router-dom';

const FoodItems = [
  { id: 1, name: 'Greek Salad', price: 200, image: './assets/food_1.png' },
  { id: 2, name: 'Veg Salad', price: 100, image: './assets/food_2.png' },
  { id: 3, name: 'Clover Salad', price: 150, image: './assets/food_3.png' },
  { id: 4, name: 'Chicken Salad', price: 220, image: './assets/food_4.png' },
  { id: 5, name: 'Lasagna Rolls', price: 180, image: './assets/food_5.png' },
  { id: 6, name: 'Peri Peri Rolls', price: 250, image: './assets/food_6.png' },
  { id: 7, name: 'Chicken Rolls', price: 300, image: './assets/food_7.png' },
  { id: 8, name: 'Veg Rolls', price: 320, image: './assets/food_8.png' },

];

const Food = () => {
  return (
    <>
      
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center font-extrabold text-4xl mt-6 text-orange-600 drop-shadow-lg">
          Explore our menu
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-10 justify-center">
          {FoodItems.map((item) => (
            <Link
              to={`/productdescription/${item.id}`}
              key={item.id}
              className="group block transform transition-all hover:scale-105"
            >
              <div className="bg-gradient-to-br from-yellow-100 to-orange-300 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all border border-orange-400 p-4 flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-white rounded-full overflow-hidden shadow-md">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mt-4">{item.name}</h2>
                <span className="text-xl font-bold text-red-600 mt-2">Rs {item.price}</span>
                <p className="text-blue-600 text-xl font-bold mt-1">View Recipe</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
     
    </>
  );
};

export default Food;