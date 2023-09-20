import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/AppLogo.png'

const Header = () => {
   const [click, changeClick] = useState(false);
   const handleClick = () => changeClick(!click)
   return (
      <nav className='d-flex justify-content-start align-items-center nav-header'>
         <Link to='/' className='link'>
            <img className="header-logo" src={Logo} alt="Logo" />
         </Link>
         <ul className={click ? "d-flex flex-row justify-content-center align-items-center nav-list active" : "d-flex flex-row justify-content-center align-items-center nav-list"} onClick={handleClick}>
            <Link to='/' className='link'>
               <li className='active-list'>Home</li>
            </Link>
            <li className='active-list'>Health conditions</li>
            <li className='active active-list'>Lab tests</li>
            <li className='active-list'>Medicines</li>
         </ul>
         <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: "#fff" }} />) :
               (<FaBars size={30} style={{ color: "#000" }} />)}
         </div>
      </nav>
   )
}

export default Header