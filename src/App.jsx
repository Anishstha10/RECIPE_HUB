import React from 'react'
import  {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ProductDescription from './pages/ProductDescription'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      
      <Route path ='/' element={<Home/>}/>
      <Route path ='/menu' element={<Menu/>}/>
      <Route path ='/about' element={<About/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path ='/productdescription/:id' element={<ProductDescription/>}/>
      
      
    
    </Routes>
    </BrowserRouter>
  
    
    
    </>
  )
}

export default App
