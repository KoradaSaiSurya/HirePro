import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='navbar'>

        <div className="logo">
            <h1> HirePro </h1>
        </div>

        <div className='links'>
            <NavLink to='/' className='link'> Dashboard </NavLink>
            {/* <NavLink to='/employee' className='link'> Employee </NavLink> */}
            <NavLink to='/about' className='link' > About </NavLink>

        </div>
      
    </section>
  )
}

export default Navbar
