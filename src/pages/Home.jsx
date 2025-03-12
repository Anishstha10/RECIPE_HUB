import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Food from '../components/Food';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <Navbar />
      <Slider />
      <div className="max-w-screen-xl mx-auto px-4">
        <Food />
        {favorites.length > 0 && (
          <div className="mt-8">
            <h2 className="text-center font-extrabold text-4xl text-orange-600 drop-shadow-lg">Favorite Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-10 justify-center">
              {favorites.map(item => (
                <Link to={`/productdescription/${item.id}`} key={item.id} className="group block transform transition-all hover:scale-105">
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
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
