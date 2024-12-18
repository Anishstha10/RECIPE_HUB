import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Food from '../components/Food'
import Footer from '../components/Footer'



function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className='justify-center '>
        <Food />
      </div>
      <Footer/>


    </div>
  )
}

export default Home
