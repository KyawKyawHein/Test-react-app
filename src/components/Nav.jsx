import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../redux/services/authSlice'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const user = JSON.parse(Cookies.get("user"))
    const nav = useNavigate()
    const dispatch = useDispatch()

    const logOut = ()=>{
        dispatch(logOutUser(user))
        nav("/login")
    }

  return (
    <div className='flex justify-around items-center'>
        <h1 >MMS</h1>
        <div className="flex items-center gap-3">
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <button onClick={logOut} className='bg-red-500 text-white p-3 rounded'>Logout</button>
        </div>
    </div>
  )
}

export default Nav
