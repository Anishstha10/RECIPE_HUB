import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Food from '../components/Food';
import Footer from '../components/Footer';

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
      <div className='justify-center'>
        <Food />
      </div>
      {favorites.length > 0 && (
        <div className="mt-8">
          <h2 className="text-center text-2xl font-bold">Favorite Recipes</h2>
          <div className="flex flex-wrap justify-center mt-4">
            {favorites.map(item => (
              <div key={item.id} className="m-4 bg-white rounded-lg shadow-md overflow-hidden w-56">
                <img src={item.image} alt={item.name} />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <span className="text-lg font-semibold text-red-500">Rs {item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
