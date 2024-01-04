import React, {useState} from 'react'
import {HomePage, Navbar, Footer, Products, About, Blog, Contact, SignUp} from './components';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth/auth';

const App = () => {

  const [user, setUser] = useState(false)

  if(!user){
    return (
      <>
        <Auth/>
      </>
    )
  }

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