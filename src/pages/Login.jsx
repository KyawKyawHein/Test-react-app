import { PasswordInput, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../redux/services/authSlice'
import { useLoginMutation } from '../redux/api/authApi'

const Login = () => {
  const [email,setEmail] = useState("hetero226@gmail.com")
  const [password,setPassword] = useState("kyawkyawhein")
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [Login] = useLoginMutation()

  const loginHandler = async(e)=>{
    try {
      e.preventDefault()
      const user = {email,password}
      const {data} = await Login(user)
      dispatch(addUser(data))
      console.log(data);
      if(data?.success) nav("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex justify-center h-screen items-center'>
        <form onSubmit={loginHandler} className='inline-block'>
            <h1 className='text-2xl mb-2'>Log In</h1>
            <TextInput className='text-xl mb-2' withAsterisk label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your@email.com"/>
            <PasswordInput className='text-xl mb-2' placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" description="Password must include at least one letter, number and special character" withAsterisk />
            <p>
                Don't have account?
                <Link to={"/register"} className='text-blue-500'>Register</Link>
            </p>
            <button type='submit' className='bg-blue-500 text-white w-[100%] p-2 rounded mt-2'>Log in</button>
        </form>
    </div>
  )
}

export default Login
