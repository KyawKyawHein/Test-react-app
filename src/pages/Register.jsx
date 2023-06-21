import React, { useState } from 'react'
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from "@mantine/form"
import { PasswordInput } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../redux/api/authApi';

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [password_confirmation,setPassword_confirmation] = useState("")
    const [Register] = useRegisterMutation()
    const navigate = useNavigate()
    const id = Date.now()

    const registerHandler = async(e)=>{
       try {
        e.preventDefault()  
        console.log(name,email,password,password_confirmation);
        const user = {name,email,password,password_confirmation};
        const {data} = await Register(user)
        console.log(data);
        if(data.success){
            navigate("/login")
        }
       } catch (error) {
        console.log(error);
       }
    }

  return (
    <div className='flex justify-center h-screen items-center'>
        <form onSubmit={registerHandler} className='inline-block'>
            <h1 className='text-2xl mb-2'>Register</h1>
            <TextInput className='text-xl mb-2' withAsterisk label="Name" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <TextInput className='text-xl mb-2' withAsterisk label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your@email.com"/>
            <PasswordInput className='text-xl mb-2' placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" description="Password must include at least one letter, number and special character" withAsterisk />
            <PasswordInput className='text-xl mb-2' placeholder="Confirm Password" value={password_confirmation} onChange={(e)=>setPassword_confirmation(e.target.value)} label="Confirm Password" description="Password must include at least one letter, number and special character" withAsterisk />
            <p>
                Already have an account?  
                <Link to={"/login"} className='text-blue-500'> Login</Link>
            </p>
            <button type='submit' className='bg-blue-500 text-white w-[100%] p-2 rounded mt-2'>Sign up</button>
        </form>
    </div>
  )
}

export default Register
