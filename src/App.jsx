import React, {useState, useEffect} from 'react'
import {HomePage, Navbar, Footer, Products, About, Blog, Contact, SignUp} from './components';
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/> 
    </div>
  )
}

export default App