import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side: Contact Information */}
            <div className="bg-gradient-to-tr from-cyan-100 to-teal-50 shadow-lg rounded-2xl p-10 space-y-8">
              <h2 className="text-3xl font-extrabold text-gray-800">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We’re here to answer any questions you might have. Feel free to reach out using the following contact details or the form.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full shadow">
                    <img src="./assets/phone_icon.png" alt="Phone" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Phone
                    </h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full shadow">
                    <img src="./assets/email_icon.png" alt="Email" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Email
                    </h4>
                    <p className="text-gray-600">support@foodbox.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full shadow">
                    <img src="./assets/location_icon.png" alt="Location" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">
                      Location
                    </h4>
                    <p className="text-gray-600">
                      123 Food Box Street, Culinary City, USA
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-6">
                  <a href="#" className="hover:scale-110 transition">
                    <img
                      src="./assets/facebook_icon.png"
                      alt="Facebook"
                      className="w-8 h-8"
                    />
                  </a>
                  <a href="#" className="hover:scale-110 transition">
                    <img
                      src="./assets/twitter_icon.png"
                      alt="Twitter"
                      className="w-8 h-8"
                    />
                  </a>
                  <a href="#" className="hover:scale-110 transition">
                    <img
                      src="./assets/instagram_icon.png"
                      alt="Instagram"
                      className="w-8 h-8"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-100 shadow-2xl rounded-2xl p-10 space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-800">
                Contact Form
              </h2>
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your full name"
                      className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 px-4 py-3 bg-teal-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 px-4 py-3 bg-teal-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Write your message here"
                      className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 px-4 py-3 bg-teal-50"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>


      <Footer />



    </>
  )
}

export default Contact
