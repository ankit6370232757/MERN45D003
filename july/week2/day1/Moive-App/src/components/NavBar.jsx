import React from 'react'
import { NavLink } from 'react-router'


function NavBar() {
  return (
    <div className='flex bg-green-500 h-[50px] items-center w-screen fixed  top-0 z-10'>
      <div className='w-[80%]  px-3.5 py-2 text-5xl'>
        <div>🎞️</div>
      </div>
      <div className='w-[20%] flex justify-evenly font-bold'>
        <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
      </div>
    </div>
  )
}

export default NavBar
