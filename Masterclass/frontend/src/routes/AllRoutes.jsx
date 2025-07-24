import React from 'react'
import { Routes, Route } from 'react-router'
import Login from '../components/Login'
import Register from '../components/Register'
import AdminDashboard from '../components/AdminDashboard'
import Home from '../components/Home'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
    </Routes>
  )
}

export default AllRoutes