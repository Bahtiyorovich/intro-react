import { useState, useEffect } from "react";
import { SignUpImg } from "../../assets";
import Input from "../../FORM-UI/input/input"
import Button from './../../FORM-UI/button/button';
import { TbFaceIdError } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css'
import SignIn from "../sign-in/sign-in";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../../features/actions/authActions";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [sign, setSign] = useState(true)
  const [checked, setChecked] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));

    // Check if registration was successful and redirect
    if (!loading && !error) {
      navigate("/"); // Redirect to your desired path
    }
  };

  const handleSign = () => {
    if(sign){
      setSign(false)
    }else {
      setSign(true)
    }
  } 

  const showPassword = () => {
    if(checked){
      setChecked(false)
    }else{
      setChecked(true)
    }
  }

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="flex gap-16 items-center justify-center h-screen bg-gradient-to-b from-green-400 to-white">
      <div 
        data-aos="fade-right"
        data-aos-duration="2000"
        className="h-[70vh]">
        
        <h1 
          data-aos="fade-up"
          data-aos-duration="2000"
        className="text-3xl text-white font-bold">
          {sign ? 'Welcome to Sign Up page' : 'Welcome to Sign In page'}
          
        </h1>
        <img src={SignUpImg} alt="" 
          className="w-[530px] h-[350px] mt-16"
        />
      </div>
      <div 
        data-aos="fade-left"
        data-aos-duration="2000"
        className="bg-white p-8 shadow-md rounded h-auto">
        {error && (
          <div className="flex items-center gap-3 px-4 py-4 bg-red-100/30 border border-red-300 rounded-md mb-3">
          <TbFaceIdError className="text-2xl text-red-700"/>
          <p className="text-red-700">{error}</p>
        </div>
        )}
        {sign ? (
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col w-[400px] gap-4">
            <Input 
              name="name"
              type="text"
              classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Fullname'}
              value={formData.name}
              onChange={handleChange}
              />
            <Input
              name="username" 
              type="text"
              classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Username'}
              value={formData.username}
              onChange={handleChange}
              />
            <Input 
              name="email"
              type="email"
              classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Email address'}
              value={formData.email}
              onChange={handleChange}
              />
            <Input 
              name="password"
              type={checked ? "text" : "password"}
              classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Password'}
              value={formData.password}
              onChange={handleChange}
              />
             <div className="flex items-center justify-between">
              <label 
                className="flex items-center gap-2" 
                onClick={showPassword}
                >
                <input type="checkbox"/>
                <span className="text-slate-500 text-[12px]">
                  {checked ? 'Hide Password?' : 'Show password?'}
                </span>
              </label>
              <p className="text-[12px] text-slate-500 hover:text-sky-500 cursor-pointer underline">Forgot Password?</p>
            </div>

            <Button 
              className={"bg-green-500 p-3 rounded text-white text-[18px] cursor-pointer hover:bg-green-400"} 
              type={"submit"} 
              children={loading ? "Signing Up..." : "Sign Up"}
              disabled={loading}
              />
          </form> 
        ) : (
          <SignIn/>
        )}
        <h1 className="text-center mt-4">
          <span>
            {sign ? 'Already have an account?': 'Create an account'}  
          </span>
          <NavLink to="/sign-in">
            <span className="text-sky-500 mx-2 hover:underline cursor-pointer" onClick={handleSign}>
              {sign ? 'Sign In' : 'Sign Up'}  
            </span> 
          </NavLink> 
        </h1>
      </div>
    </div>
  )
}

export default SignUp

