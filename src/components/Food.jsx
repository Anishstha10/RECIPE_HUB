import React from 'react';
import Navbar from './Navbar'; // Added import for Navbar
import Footer from './Footer';
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
  { id: 9, name: 'Ripple Ice Cream', price: 150, image: './assets/food_9.png' },
  { id: 10, name: 'Fruit Ice Cream', price: 200, image: './assets/food_10.png' },
];

const Food = () => {
  return (
    <>
      
      <div className="text-center font-bold text-2xl mt-10">Explore our menu</div>
      <div className="flex mt-8 flex-wrap justify-center">
        {FoodItems.map((item) => (
          <Link
            to={`/productdescription/${item.id}`}
            key={item.id}
            className="flex m-6 justify-center items-center"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-56 cursor-pointer">
              <img src={item.image} alt={item.name} />
              <div className="p-4">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-semibold text-red-500">
                    Rs {item.price}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
    </>
  );
};

export default Food;
