// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>

//       <nav className="bg-white border-gray-200 dark:bg-gray-900">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
//           <div className="flex items-center space-x-3 rtl:space-x-reverse">

//             <Link to='/' className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recipe Hub</Link>
//           </div>

//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

//             <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
//               <span className="sr-only">Open main menu</span>
//               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//               </svg>
//             </button>
//           </div>



//           <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <Link to='/' className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-black  md:hover:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</Link>
//               </li>
//               <li>
//                 <Link to='/menu' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Menu</Link>
//               </li>
//               <li>
//                 <Link to='/about' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
//               </li>
//               <li>

//                 <Link to='/contact' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
//               </li>

//               <li>
//                 <Link to='/create-recipe' className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create Recipe</Link>
//               </li>

//             </ul>

           


//           </div>


//         </div>
//       </nav>



//     </>
//   )
// }

// export default Navbar


import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-300 py-3">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-gray-800 tracking-wide hover:text-gray-600 transition duration-300"
        >
          Recipe Hub
        </Link>

        {/* Desktop Menu */}
        <div className="flex space-x-6 text-lg font-medium">
          <Link to="/" className="relative px-3 py-1 text-gray-700 hover:text-gray-900 transition duration-300">
            Home
          </Link>
          <Link to="/menu" className="relative px-3 py-1 text-gray-700 hover:text-gray-900 transition duration-300">
            Menu
          </Link>
          <Link to="/about" className="relative px-3 py-1 text-gray-700 hover:text-gray-900 transition duration-300">
            About
          </Link>
          <Link to="/contact" className="relative px-3 py-1 text-gray-700 hover:text-gray-900 transition duration-300">
            Contact
          </Link>
          <Link
            to="/create-recipe"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-sm"
          >
            + Create
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

