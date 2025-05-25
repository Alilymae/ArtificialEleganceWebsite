import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import maria from '../../assets/maria.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className="logo" />
        <img src={maria} alt="" className="maria" />
    </div>
  )
}

export default Navbar