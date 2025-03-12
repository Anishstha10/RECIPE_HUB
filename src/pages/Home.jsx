// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Slider from '../components/Slider';
// import Food from '../components/Food';
// import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';  // Import Link

// function Home() {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Slider />
//       <div className='justify-center'>
//         <Food />
//       </div>
//       {favorites.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-center text-2xl font-bold">Favorite Recipes</h2>
//           <div className="flex flex-wrap justify-center mt-4">
//             {favorites.map(item => (
//               <Link to={`/productdescription/${item.id}`} key={item.id} className="m-4">
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden w-56">
//                   <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
//                   <div className="p-4">
//                     <h2 className="text-lg font-bold">{item.name}</h2>
//                     <span className="text-lg font-semibold text-red-500">Rs {item.price}</span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default Home;


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

