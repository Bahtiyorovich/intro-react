import React, { useState } from 'react'
import Input from '../../FORM-UI/input/input'
import Button from '../../FORM-UI/button/button'

const SignIn = () => {
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
      name="email" 
      type="email"
      classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
      placeholder={'Email address'}/>
    <Input 
      name="password"
      type={checked ? "text" : "password"}
      classes={"w-full h-12 rounded-md px-4 outline-none border-solid border"} 
      placeholder={'Password'}/>

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
      children={"Sign In"}/>
  </form> 
  )
}

export default SignIn