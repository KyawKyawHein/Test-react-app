import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import Login from '../pages/Login'
import RouteGuard from '../components/RouteGuard'
import CreateContact from '../components/CreateContact'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RouteGuard><Dashboard/></RouteGuard>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/createContact' element={<CreateContact/>} />
      </Routes>
    </div>
  )
}

export default Path
