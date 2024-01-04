import { useState } from "react";
import { SignUpImg } from "../../assets";
import Input from "../../form-elements/input/input"
import Button from './../../form-elements/button/button';

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

const SignUp = () => {

  const [sign, setSign] = useState(true)
  const [checked, setChecked] = useState()

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
      className="bg-white p-8 shadow-md rounded">
        {sign ? (
          <form className="flex flex-col w-[400px] gap-4">
            <Input 
              type="text"
              classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Fullname'}/>
            <Input 
              type="text"
              classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Username'}/>
            <Input 
              type="email"
              classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Email address'}/>
            <Input 
              type={checked ? "text" : "password"}
              classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} 
              placeholder={'Password'}/>
            <label className="flex items-center gap-2" onClick={showPassword}>
              <input type="checkbox"/>
              <span className="text-slate-500">{checked ? 'Hide Password?': 'Show password?'}</span>
            </label>
            <Button 
              className={"bg-green-500 p-3 rounded text-white text-[18px] cursor-pointer hover:bg-green-400"} 
              type={"button"} 
              children={"Sign Up"}/>
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


function SignIn(){

  const [checked, setChecked] = useState()
  
  const showPassword = () => {
    if(checked){
      setChecked(false)
    }else{
      setChecked(true)
    }
  }

  return (
    <form className="flex flex-col w-[400px] gap-4">
          <Input 
            type="email"
            classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} 
            placeholder={'Email address'}/>
          <Input 
            type={checked ? "text" : "password"}
            classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} 
            placeholder={'Password'}/>

          <label 
            className="flex items-center gap-2" 
            onClick={showPassword}
            >
            <input type="checkbox"/>
            <span className="text-slate-500">
              {checked ? 'Hide Password?' : 'Show password?'}
            </span>
          </label>

          <Button 
            className={"bg-green-500 p-3 rounded text-white text-[18px] cursor-pointer hover:bg-green-400"} 
            type={"button"} 
            children={"Sign In"}/>
        </form> 
  )
}