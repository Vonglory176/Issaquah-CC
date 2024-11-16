// frontend/src/components/Dropdown.jsx
import React, { useEffect, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { useSiteContext } from '../../context/SiteContext'

const Dropdown = ({ children, title, openDropdown, toggleDropdown }) => {
    const { screenWidth } = useSiteContext()

    const isDesktop = screenWidth >= 1024

    const isOpen = openDropdown === title

    return (
        <div 
        className={`dropdown ${isOpen ? 'open' : ''}`} 
        onMouseEnter={isDesktop && !isOpen ? () => toggleDropdown(title) : null}
        onMouseLeave={isDesktop && isOpen ? () => toggleDropdown(null) : null}
        >
            <button onClick={() => toggleDropdown(title)} className="dropdown-toggle" aria-label={`Open the ${title} dropdown menu`} >
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