import { Link } from "react-router-dom"
import { listItems } from "../../constants/data"
import { useState } from "react"
import Button from "../../FORM-UI/button/button";
import { useDispatch } from 'react-redux';
import { logoutUser, signUserFailure } from './../../features/user/authSlice';
import { removeItem } from "../../helpers/cookie-storage";

const Navbar = () => {
  const [isActive, setIsActive] = useState();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    try {
       // Redux actionni chaqirish
       dispatch(logoutUser());
       // Saqlangan tokenni o'chirib tashlash
       removeItem('token');
      
      window.location.reload();
    } catch (error) {
      dispatch(signUserFailure(error))
    }
  };

  const onIsActive = (navLink) => {
    setIsActive(navLink);
  }

  return (
    <div className="flex items-center justify-around h-[12vh] bg-slate-700">
      <h1 className="text-4xl font-bold text-white">V<span className="text-black">e</span>ge</h1>
      <ul className="flex items-center">
          {
            listItems.map(item => (
                <Link 
                  to={item.url} 
                  key={item.link} 
                  className={isActive === item.link 
                    ? 'bg-black text-white px-8 py-4'
                    : "flex items-center px-8 py-4 text-white font-medium text-lg duration-200 hover:text-red-600"}
                  onClick={() => onIsActive(item.link)}
                >
                  {item.link}
                </Link>
            ))
          }
          {/* <div>
            <CiSearch/>
          </div> */}
      </ul>
      <Button 
        className={'w-[100px] h-10 border-none rounded-xl bg-red-700 hover:bg-red-500 transition text-white font-semibold'} 
        type="submit" 
        children={"Sign Out"}
        method={logoutHandler}
      />
    </div>
  )
}

export default Navbar