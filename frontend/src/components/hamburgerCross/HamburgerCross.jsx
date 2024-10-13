// frontend/src/components/header/HamburgerCross.jsx
import React, { useState } from 'react'

const HamburgerCross = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='hamburger-container' onClick={toggleMenu}>
      <div className={`bar ${isOpen ? 'bar1' : ''}`}></div>
      <div className={`bar ${isOpen ? 'bar2' : ''}`}></div>
      <div className={`bar ${isOpen ? 'bar3' : ''}`}></div>
    </div>
  )
}

export default HamburgerCross