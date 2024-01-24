import { Navbar, Footer, Products, About, Blog, Contact, SignUp, HomePage} from './components';
import { Route, Routes } from 'react-router-dom';
import { getItem } from './helpers/cookie-storage';

const App = () => {
  
  const userToken = getItem('token')

  if(!userToken){
    return (
      <SignUp/>
    )
  } else {
    return (
      <div className="overflow-hidden">
        <Navbar/>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/shop' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
        <Footer/> 
      </div>
    )
  }
 
}

export default App

// https://blog.stackademic.com/crud-operations-using-react-redux-toolkit-node-and-mongodb-ded42dfbd7d8