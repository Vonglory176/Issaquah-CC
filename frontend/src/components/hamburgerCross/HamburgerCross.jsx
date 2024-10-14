// frontend/src/components/header/HamburgerCross.jsx
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const HamburgerCross = ({ isOpen, toggleMenu }) => {
  const location = useLocation()  

  return (
    <button className={`h-full lg:hidden text-white p-4 mr-[-16px] ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
      <FaBars size={28} />
      {/* <HamburgerCross /> */}
    </button>

    // <div className='hamburger-container' onClick={toggleMenu}>
    //   <div className={`bar ${isOpen ? 'bar1' : ''}`}></div>
    //   <div className={`bar ${isOpen ? 'bar2' : ''}`}></div>
    //   <div className={`bar ${isOpen ? 'bar3' : ''}`}></div>
    // </div>
  )
}

export default HamburgerCross