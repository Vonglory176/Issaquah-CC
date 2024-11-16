// frontend/src/components/header/HamburgerCross.jsx
import React from 'react'
import { FaBars } from 'react-icons/fa'
// import { useLocation } from 'react-router-dom'

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  // const location = useLocation()  

  return (
    <button className={`hamburger-container h-full lg:hidden p-4 mr-[-16px] ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label='Open the hamburger menu' >
      
      
      {/* <FaBars size={28} /> */}

      <div className={`hamburger-icon duration-300`}>
        <div className='hamburger-icon-bar1'></div>
        <div className='hamburger-icon-bar2'></div>
        <div className='hamburger-icon-bar3'></div>
      </div>

    </button>
  )
}

export default HamburgerMenu