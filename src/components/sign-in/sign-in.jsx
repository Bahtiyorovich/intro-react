import React, { useState } from 'react'
import Input from '../../FORM-UI/input/input'
import Button from '../../FORM-UI/button/button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUserFailure, signUserStart, signUserSuccess } from '../../features/user/authSlice'
import { loginUser } from '../../features/actions/authActions'
import { setItem } from '../../helpers/cookie-storage'

const SignIn = () => {
  const [checked, setChecked] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const {isLoading, error} = useSelector(state => state.auth)

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart)
    const user = { email, password}

    try {
      const response = await dispatch(loginUser(user))
      if(response.payload){
        const { token } = response.payload.data
        dispatch(signUserSuccess(response.payload))
        setItem('token', token)
        // DOM ni bir marta refresh qilish
        navigate('/home')
        window.location.reload();
      }
    }catch(error){
      dispatch(signUserFailure(error.message))
    }
  }


  const showPassword = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <form className="flex flex-col gap-4">
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
        <p className="text-[12px] text-slate-500 hover:text-sky-500 cursor-pointer underline">Forgot Password?</p>
      </div>

    <Button 
      className={"bg-green-500 p-3 rounded text-white text-[18px] cursor-pointer hover:bg-green-400"} 
      type={"submit"} 
      children={isLoading ? "Loading..." : "Sign In"} disabled={isLoading} method={loginHandler}/>
  </form> 
  )
}

export default SignIn