import { Link } from "react-router-dom"
import { listItems } from "../../constants/data"
import { useState } from "react"
import { CiSearch } from "react-icons/ci"

const Navbar = () => {

  const [isActive, setIsActive] = useState();

  const onIsActive = (navLink) => {
    setIsActive(navLink);
  }

  return (
    <div className="flex items-center justify-around h-[12vh] bg-green-500">
      <h1 className="text-4xl font-bold text-white">V<span className="text-black">e</span>ge</h1>
      <ul className="flex items-center">
          {
            listItems.map(item => (
                <Link 
                  to={item.url} 
                  key={item.link} 
                  className={isActive === item.link 
                    ? 'bg-black text-white px-8 py-4'
                    : "flex items-center px-8 py-4 text-white font-medium text-lg duration-200 hover:text-black"}
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
    </div>
  )
}

export default Navbar