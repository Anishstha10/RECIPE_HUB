import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Navbar/>

    
     {/* Hero Section */}
     <div className="relative">
        <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 h-72 flex items-center justify-center text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
            Welcome to Recipe Hub
          </h1>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.09C237.73,36.39,153.67,20.22,69.43,10.74C46.41,8.31,23.08,6.9,0,6V120H1200V0C974.21,61.29,749.8,91.29,521.65,89.79C443.55,89.11,372.92,77.18,321.39,56.09Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>

      {/* About Content */}
      <div className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Recipe Hub is your ultimate destination for food enthusiasts. Our platform brings together a collection of curated recipes designed for everyone—whether you're a novice cook or an experienced chef. We aim to inspire creativity and a love for culinary adventures.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Join a growing community that believes in the power of food to connect and inspire. Discover recipes from different cultures, share your own creations, and celebrate the joy of cooking.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img src="./assets/AboutUs.png" alt="food image" className="rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-lg opacity-25"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-12">
            Why Choose Recipe Hub?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <div className="text-teal-500 mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.104.002 2.095.456 2.828 1.172m0 0A4 4 0 0118 12m-3.172-2.828A4 4 0 0012 8m6 4a6 6 0 10-12 0 6 6 0 0012 0zM12 8v.01m6 4a6 6 0 00-6-6v0a6 6 0 016 6zm0 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Diverse Recipes
              </h3>
              <p className="text-gray-600">
                Explore a vast collection of recipes from around the world, catering to every palate and skill level.
              </p>
            </div>

            {/* Another Feature Card */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <div className="text-teal-500 mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.104.002 2.095.456 2.828 1.172m0 0A4 4 0 0118 12m-3.172-2.828A4 4 0 0012 8m6 4a6 6 0 10-12 0 6 6 0 0012 0zM12 8v.01m6 4a6 6 0 00-6-6v0a6 6 0 016 6zm0 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Easy to Follow
              </h3>
              <p className="text-gray-600">
                Our recipes are designed to be easy to follow, with clear instructions that anyone can understand.
              </p>
            </div>

            {/* Another Feature Card */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <div className="text-teal-500 mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.104.002 2.095.456 2.828 1.172m0 0A4 4 0 0118 12m-3.172-2.828A4 4 0 0012 8m6 4a6 6 0 10-12 0 6 6 0 0012 0zM12 8v.01m6 4a6 6 0 00-6-6v0a6 6 0 016 6zm0 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Expert Tips
              </h3>
              <p className="text-gray-600">
                Get expert tips and tricks that will take your cooking skills to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 py-16 px-6 sm:px-12 lg:px-24 text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-lg mb-6">
          Sign up today and embark on a journey of culinary discovery with Recipe Hub!
        </p>
        <button className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition">
          Join Now
        </button>
      </div>
    <Footer/>
    
    </>
  )
}

export default About
