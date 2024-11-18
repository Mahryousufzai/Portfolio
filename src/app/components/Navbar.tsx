"use client"
import React from 'react'
import { LuMenu} from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState (false)
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container sm:py-4 py-3'>
        <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold'>Mahr Ali</div>
            <ul className='gap-10 lg:gap-10 hidden md:flex'>
            <li className='menuLink'><a href='#hero'>Home</a></li>
              <li className='menuLink'><a href='#about'>About</a></li>
              <li className='menuLink'><a href='#projects'>Projects</a></li>
              <li className='menuLink'><a href='#skils'>Skills</a></li>
              <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
         <div  className='md:hidden' onClick={toggleMenu}>
         {isMenuOpen ? <LuMenu size={30} /> :
         <LuMenu size={30} />
  }
         </div>
        </div>
      {isMenuOpen && (
        <ul className='flex flex-col  gap-4 mt-4 md:hidden'>
          <li className='menuLink'><a href='#hero' onClick={toggleMenu}>Home</a>
          </li>
          <li className='menuLink' >
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className='menuLink' >
            <a href="#project" onClick={toggleMenu}>Projects</a>
          </li>
          <li className='menuLink' >
            <a href="#skills" onClick={toggleMenu}>Skills</a>
            <li className='menuLink' >
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
          </li>
        </ul>
  )
}
    </div>
  );
}

export default Navbar
