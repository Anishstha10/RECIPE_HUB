import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <a href="/" aria-label="Go home" className="flex items-center text-white">
              <svg
                className="w-8 h-8 text-yellow-500"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12"></rect>
                <rect x="3" y="17" width="7" height="6"></rect>
                <rect x="14" y="1" width="7" height="6"></rect>
                <rect x="14" y="11" width="7" height="12"></rect>
              </svg>
              <span className="ml-2 text-2xl font-bold tracking-wide">Recipe Hub</span>
            </a>
            <p className="mt-4 text-sm">
              Explore, create, and share culinary masterpieces with our community. Dive into a world of flavors and recipes tailored for every palate.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-yellow-500">Home</a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-yellow-500">About Us</a>
              </li>
              <li>
                <a href="/recipes" className="text-sm hover:text-yellow-500">Recipes</a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-yellow-500">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold text-white">Contact Us</h2>
            <p className="mt-2 text-sm">Phone: <a href="tel:+9779846100433" className="text-yellow-500 hover:underline">+977-9846100433</a></p>
            <p className="mt-1 text-sm">Email: <a href="mailto:RecipeHub@gmail.com" className="text-yellow-500 hover:underline">RecipeHub@gmail.com</a></p>
            <p className="mt-1 text-sm">Address: <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">Pokhara, Ratna Chowk</a></p>
          </div>

          {/* Social Media & Newsletter */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold text-white">Stay Connected</h2>
            <div className="flex mt-2 space-x-4">
              <a href="/" className="text-gray-400 hover:text-yellow-500">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="/" className="text-gray-400 hover:text-yellow-500">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="/" className="text-gray-400 hover:text-yellow-500">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="/" className="text-gray-400 hover:text-yellow-500">
                <i className="fab fa-pinterest text-xl"></i>
              </a>
            </div>
            <form className="mt-4">
              <label htmlFor="newsletter" className="block text-sm">Subscribe to our newsletter</label>
              <div className="flex mt-2">
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-900 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-r-md hover:bg-yellow-600 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between pt-6 mt-6 border-t border-gray-800 md:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Recipe Hub. All rights reserved.</p>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <a href="/faq" className="text-sm hover:text-yellow-500">F.A.Q</a>
            <a href="/privacy-policy" className="text-sm hover:text-yellow-500">Privacy Policy</a>
            <a href="/terms-conditions" className="text-sm hover:text-yellow-500">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from 'react'

// const Footer = () => {
//   return (
//     <>

// <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//   <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
//     <div class="sm:col-span-2">
//       <a href="/" aria-label="Go home" title="Recipe Hub" class="inline-flex items-center">
//         <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
//           <rect x="3" y="1" width="7" height="12"></rect>
//           <rect x="3" y="17" width="7" height="6"></rect>
//           <rect x="14" y="1" width="7" height="6"></rect>
//           <rect x="14" y="11" width="7" height="12"></rect>
//         </svg>
//         <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Recipe Hub</span>
//       </a>
//       <div class="mt-6 lg:max-w-sm">
//         <p class="text-sm text-gray-800">
//         Recipe Hub is an online platform designed for food enthusiasts who love exploring, creating, and sharing culinary ideas.
//         </p>
//         <p class="mt-4 text-sm text-gray-800">
//         Users can explore a vast collection of recipes uploaded by others. Registered users can create and publish their own recipes
//         </p>
//       </div>
//     </div>
//     <div class="space-y-2 text-sm">
//       <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
//       <div class="flex">
//         <p class="mr-1 text-gray-800">Phone:</p>
//         <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+977- 9846100433</a>
//       </div>
//       <div class="flex">
//         <p class="mr-1 text-gray-800">Email:</p>
//         <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">RecipeHub@gmail.com</a>
//       </div>
//       <div class="flex">
//         <p class="mr-1 text-gray-800">Address:</p>
//         <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
//           Pokhara, Ratna Chowk 
//         </a>
//       </div>
//     </div>
//     <div>
//       <span class="text-base font-bold tracking-wide text-gray-900">Social</span>
//       <div class="flex items-center mt-1 space-x-3">
//         <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
//           <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
//             <path
//               d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
//             ></path>
//           </svg>
//         </a>
//         <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
//           <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
//             <circle cx="15" cy="15" r="4"></circle>
//             <path
//               d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
//             ></path>
//           </svg>
//         </a>
//         <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
//           <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
//             <path
//               d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
//             ></path>
//           </svg>
//         </a>
//       </div>
//       <p class="mt-4 text-sm text-gray-500">
//        You can find us on social media
//       </p>
//     </div>
//   </div>
//   <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
//     <p class="text-sm text-gray-600">
//       © Copyright 2020 Lorem Inc. All rights reserved.
//     </p>
//     <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
//       <li>
//         <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
//       </li>
//       <li>
//         <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
//       </li>
//       <li>
//         <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
//       </li>
//     </ul>
//   </div>
// </div>
    
//     </>
//   )
// }

// export default Footer
