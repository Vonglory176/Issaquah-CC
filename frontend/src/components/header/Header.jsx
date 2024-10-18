import React, { useState, useEffect } from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import { FaCaretDown } from 'react-icons/fa'
import logo from '../../assets/images/logos/logo7.webp'
import { Link, useLocation } from 'react-router-dom'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import Dropdown from '../dropdown/Dropdown'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [location])

  // Toggle menu (Hamburger)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Toggle dropdown (Sub-Menu)
  const toggleDropdown = (title) => {
    console.log(title)
    setOpenDropdown(title === openDropdown ? null : title)
  }

  useEffect(() => {
    console.log(openDropdown)
  }, [openDropdown])

  return (
    <header className='header h-[var(--header-height)] fixed top-0 left-0 right-0 z-50 shadow-lg'>

      <div className="header-wrapper relative flex items-center justify-between h-full px-8 xl:px-[8vw]">

        {/* Logo */}
        <Link to={'/'} className='h-full'>
          <ProgressiveImage src={logo} placeholder={''}>
            {(src, loading) => (
              <img
                src={src}
                alt={'Issaquah Christian Church Logo'}
                className={`h-full object-contain object-center duration-300 py-2 ${loading ? 'opacity-0' : 'opacity-100'}`}
              />
            )}
          </ProgressiveImage>
        </Link>

        {/* Hamburger Menu */}
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />

        {/* Navigation */}
        <nav className={`nav-menu shadow-lg lg:shadow-none ${isOpen ? 'open' : ''}`}>

          <ul className='flex flex-col font-semibold lg:gap-4 lg:flex-row lg:items-center'>

            {/* About Us */}
            <li>
              <Dropdown title="About Us" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <Link to={'/about-us/beliefs'}>What We Believe</Link>
                </li>
                <li>
                  <Link to={'/about-us/what-to-expect'}>What to Expect</Link>
                </li>
                <li>
                  <Link to={'/about-us/vision-mission-and-values'}>Vision, Mission, and Values</Link>
                </li>
                <li>
                  <Link to={'/about-us/leadership'}>Meet Our Leadership</Link>
                </li>
                <li>
                  <Link to={'/about-us/elder'}>Elder Nominations</Link>
                </li>
              </Dropdown>
            </li>

            {/* Event Info Dropdown */}
            <li>
              <Dropdown title="Event Info" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <Link to={'/event-info/women-s-sign-up'} className='disabled' disabled >Women's Retreat Sign Up</Link>
                </li>
                <li>
                  <Link to={'/event-info/calendar'} className='disabled' disabled >Calendar</Link>
                </li>
                <li>
                  <Link to={'/event-info/bulletin'}>Church Bulletin</Link>
                </li>
              </Dropdown>
            </li>

            {/* Other Menu Items */}
            <li>
              {/* <Link to={'/sermons'} className='nav-link'>Sermons</Link> */}
              <a className='nav-link' href="https://www.issaquah.cc/sermons" target='_blank' rel='noopener noreferrer'>Sermons</a>
            </li>

            {/* Giving */}
            <li>
              <Dropdown title="Giving" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <a href={'https://giving.servantkeeper.com/issaquahcc'} target='_blank' rel='noopener noreferrer'>
                    Tithes and Offerings
                  </a>
                </li>
                <li>
                  <Link to={'/giving/stocks-and-crypto'}>
                    Stocks and Crypto
                  </Link>
                </li>
              </Dropdown>
            </li>

            {/* Connect */}
            <li>
              <Dropdown title="Connect" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <Link to={'/connect/prayer-requests'} className='disabled' disabled >
                    Prayer Requests
                  </Link>
                </li>
                <li>
                  <Link to={'/connect/membership'}>
                    Membership
                  </Link>
                </li>
                <li>
                  <Link to={'/connect/kids'}>
                    Kids
                  </Link>
                </li>
                <li>
                  <Link to={'/connect/teens'} className='disabled' disabled >
                    Teens
                  </Link>
                </li>
                <li>
                  <Link to={'/connect/women'}>
                    Women
                  </Link>
                </li>
                <li>
                  <Link to={'/connect/men'}>
                    Men
                  </Link>
                </li>
                <li>
                  <Link to={'/connect/outreach'}>
                    Outreach
                  </Link>
                </li>
                <li>
                  <Link to={'/connect/haiti'}>
                    Haiti
                  </Link>
                </li>
                <li>
                  <Link to={'/connect/recommended-bible-apps'} className='disabled' disabled >
                    Recommended Bible Apps
                  </Link>
                </li>
                <li>
                  <Link to={'/connect/employment'}>
                    Employment
                  </Link>
                </li>
              </Dropdown>
            </li>

            {/* Contact */}
            <li>
              {/* <Link to={'/contact'} className='nav-link'>
                Contact
              </Link> */}
              <a className='nav-link' href="https://www.issaquah.cc/contact" target='_blank' rel='noopener noreferrer'>Contact</a>
            </li>

            {/* Care */}
            <li>
              <Dropdown title="Care" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <Link to={'/care/helpful-resources'} className='disabled' disabled >
                    Helpful Resources
                  </Link>
                </li>
              </Dropdown>
            </li>
          </ul>
        </nav>

      </div>

    </header>
  )
}

export default Header
