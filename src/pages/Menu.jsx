import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const menuItems = [
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
  { id: 11, name: 'Vanilla Ice Cream', price: 250, image: './assets/food_11.png' },
  { id: 12, name: 'Vegan Sandwich', price: 400, image: './assets/food_12.png' },
  { id: 13, name: 'Grilled Sandwich', price: 450, image: './assets/food_13.png' },
  { id: 14, name: 'Bread Sandwich', price: 300, image: './assets/food_14.png' },
  { id: 15, name: 'Cup Cake', price: 350, image: './assets/food_15.png' },
  { id: 16, name: 'Vegan Cake', price: 280, image: './assets/food_16.png' },
  { id: 17, name: 'Butterscotch Cake', price: 350, image: './assets/food_17.png' },
  { id: 18, name: 'Sliced Cake', price: 500, image: './assets/food_18.png' },
  { id: 19, name: 'Garlic Mushroom', price: 450, image: './assets/food_19.png' },
  { id: 20, name: 'Fried Cauliflower', price: 300, image: './assets/food_20.png' },
  { id: 21, name: 'Mix Veg Pulao', price: 200, image: './assets/food_21.png' },
  { id: 22, name: 'Rice Zucchini', price: 250, image: './assets/food_22.png' },
  { id: 23, name: 'Cheese Pasta', price: 550, image: './assets/food_23.png' },
  { id: 24, name: 'Tomato Pasta', price: 180, image: './assets/food_24.png' },
  { id: 25, name: 'Creamy Pasta', price: 220, image: './assets/food_25.png' },
  { id: 26, name: 'Chicken Pasta', price: 200, image: './assets/food_26.png' },
  { id: 27, name: 'Buttter Noodles', price: 50, image: './assets/food_27.png' },
  { id: 28, name: 'Veg Noodles', price: 100, image: './assets/food_28.png' },
  { id: 29, name: 'Somen Noodles', price: 150, image: './assets/food_29.png' },
  { id: 30, name: 'Cooked Noodles', price: 180, image: './assets/food_30.png' }
];

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setFilteredItems(menuItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase())));
  };

  const toggleFavorite = (item) => {
    let updatedFavorites;
    if (favorites.some(fav => fav.id === item.id)) {
      updatedFavorites = favorites.filter(fav => fav.id !== item.id);
    } else {
      updatedFavorites = [...favorites, item];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Navbar />
      <div className="text-center font-bold text-2xl mt-4">Explore our menu</div>
      <div className="flex justify-center mt-5">
        <input type="text" placeholder="Search for dishes..." value={searchQuery} onChange={handleSearch} className="px-4 py-2 border-2 border-blue-500 rounded" />
      </div>
      <div className="flex mt-8 flex-wrap justify-center">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <Link to={`/productdescription/${item.id}`} key={item.id} className="flex m-6 justify-center items-center">
              <div className="bg-white rounded-lg shadow-md overflow-hidden w-56 cursor-pointer">
                <img src={item.image} alt={item.name} />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-semibold text-red-500">Rs {item.price}</span>
                    <button onClick={() => toggleFavorite(item)} className="px-2 py-1 bg-yellow-400 rounded">
                      {favorites.some(fav => fav.id === item.id) ? 'Unfavorite' : 'Favorite'}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-lg">No items found matching your search.</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Menu;
