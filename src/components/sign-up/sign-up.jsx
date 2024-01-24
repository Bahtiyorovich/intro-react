import { useState, useEffect } from "react";
import { SignUpImg } from "../../assets";
import Input from "../../FORM-UI/input/input"
import Button from './../../FORM-UI/button/button';
import AOS from 'aos'
import 'aos/dist/aos.css'
import SignIn from "../sign-in/sign-in";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signUserFailure, signUserStart, signUserSuccess } from './../../features/user/authSlice'
import {TbFaceIdError} from 'react-icons/tb'
import {registerUser} from './../../features/actions/authActions';
import { setItem } from "../../helpers/cookie-storage";

const SignUp = () => {
  const [sign, setSign] = useState(true)
  const [checked, setChecked] = useState()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const {isLoading, error} = useSelector(state => state.auth)

  // Navigation
  const navigate = useNavigate()

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { name, username, email, password };
  
    try {
      const response = await dispatch(registerUser(user));
      if (response.payload) {
        const { token } = response.payload.data;
        dispatch(signUserSuccess(response.payload)); 
        setItem('token', token);
        // DOM ni bir marta refresh qilish
        navigate('/home')
        window.location.reload();

      } 
    } catch (error) {
      dispatch(signUserFailure(error.message));
    }
  };

  const handleSign = () => {
    setSign((prevSign) => !prevSign);
  };
  
  const showPassword = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex gap-16 items-center justify-center h-screen bg-gradient-to-b from-green-400 to-white">
      <div 
        data-aos="fade-right"
        data-aos-duration="2000"
        className="h-[70vh] hidden lg:block">
        
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
        className=" sm:w-[280px] lg:w-[400px] bg-white p-8 shadow-md rounded h-auto">
        {error && (
          <div className="flex items-center gap-3 max-w-full px-4 py-4 bg-red-100/30 border border-red-300 rounded-md mb-3">
              <TbFaceIdError className="text-2xl text-red-700"/>
              <p className="text-red-700">{error}</p>
          </div>
        )}

        {sign ? (
          <form 
            className="flex flex-col gap-4">
            <Input 
              name="name"
              type="text"
              classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Fullname'}
              state={name}
              setState={setName}
              />
            <Input
              name="username" 
              type="text"
              classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Username'}
              state={username}
              setState={setUsername}
              />
            <Input 
              name="email"
              type="email"
              classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Email address'}
              state={email}
              setState={setEmail}
              />
            <Input 
              name="password"
              type={checked ? "text" : "password"}
              classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Password'}
              state={password}
              setState={setPassword}
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
            </div>

            <Button 
              className={"bg-green-500 p-3 rounded text-white text-[18px] cursor-pointer hover:bg-green-400"} 
              type={"submit"} 
              children={isLoading ? "Loading..." : "Sign Up"}
              disabled={isLoading}
              method={registerHandler}
              />
          </form> 
        ) : (
          <SignIn/>
        )}
        <h1 className="text-center mt-4">
          <span>
            {sign ? 'Already have an account?': 'Create an account'}  
          </span>
          <span className="text-sky-500 mx-2 hover:underline cursor-pointer" onClick={handleSign}>
            {sign ? 'Sign In' : 'Sign Up'}  
          </span> 
        </h1>
      </div>
    </div>
  )
}

export default SignUp

