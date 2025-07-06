import React from 'react'
import {Link} from 'react-router'
function Navbar() {
  return (
    <div>
      <NavLink to="/ " style={({isActive})=>({color:isActive?"red:"})}> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/service">Service</NavLink>
    </div>
  )
}

export default Navbar
