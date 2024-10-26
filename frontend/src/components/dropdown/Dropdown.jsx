// frontend/src/components/Dropdown.jsx
import React, { useEffect, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

const Dropdown = ({ children, title, openDropdown, toggleDropdown }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

    // Move to Context later !!! (Currently running for EVERY dropdown)
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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