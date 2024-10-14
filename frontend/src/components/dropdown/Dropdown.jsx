// frontend/src/components/Dropdown.jsx
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

const Dropdown = ({ children, title, openDropdown, toggleDropdown }) => {

    //   const [isOpen, setIsOpen] = useState(false)

    //   const toggleDropdown = () => {
    //     setIsOpen(!isOpen)
    //   }

    const isOpen = openDropdown === title

    return (
        <div 
        className={`dropdown ${isOpen ? 'open' : ''}`} 
        onMouseEnter={!isOpen ? () => toggleDropdown(title) : null}
        onMouseLeave={isOpen ? () => toggleDropdown(null) : null}
        >
            <button onClick={() => toggleDropdown(title)} className="dropdown-toggle">
                {title} <FaCaretDown />
            </button>

            {/* {isOpen && ( */}
            <nav className={`dropdown-nav`}>
                <ul>
                    {children}
                </ul>
            </nav>
            {/* )} */}
        </div>
    )
}

export default Dropdown