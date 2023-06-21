import { TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { useCreateContactsMutation } from '../redux/api/contactApi'
import Cookies from 'js-cookie'

const CreateContact = () => {
    const [name,setName] = useState("")
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const token = Cookies.get("token")
    const [createContact] = useCreateContactsMutation()

    const createContactHandler = async(e)=>{
        e.preventDefault()
        try {
            const user = {name,phone,email,address}
            const data = await createContact(token,user)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='flex justify-center h-screen items-center'>
        <form onSubmit={createContactHandler} className='inline-block'>
            <h1 className='text-2xl mb-2'>Create Contact</h1>
            <TextInput className='text-xl mb-2' withAsterisk label="Name" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <TextInput className='text-xl mb-2' withAsterisk label="Phone" placeholder="Enter your Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <TextInput className='text-xl mb-2' withAsterisk label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your@email.com"/>
            <TextInput className='text-xl mb-2' withAsterisk label="Address" placeholder="Enter your Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <button type='submit' className='bg-blue-500 text-white w-[100%] p-2 rounded mt-2'>Create</button>
        </form>
    </div>
  )
}

export default CreateContact
