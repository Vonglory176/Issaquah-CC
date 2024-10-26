import React, { useState, useEffect } from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
// import { FaCaretDown } from 'react-icons/fa'
import logo from '../../assets/images/logos/logo9.webp'
import { Link, NavLink, useLocation } from 'react-router-dom'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import Dropdown from '../dropdown/Dropdown'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  // Close menu when location changes
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false)
      setOpenDropdown(null)
    }
  }, [location])

  // Toggle menu (Hamburger)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Toggle dropdown (Sub-Menu)
  const toggleDropdown = (title) => {
    // console.log(title)
    setOpenDropdown(title === openDropdown ? null : title)
  }

  // useEffect(() => {
  //   console.log(openDropdown)
  // }, [openDropdown])

  return (
    <header className='header h-[var(--header-height)] sticky mb-[-60px] top-0 left-0 right-0 z-50 shadow-lg'>

      <div className="header-wrapper relative flex items-center justify-between h-full px-8 xl:px-[8vw]">

        {/* Logo */}
        <Link to={'/'} className='h-full' aria-label='Return to home page' title='Return to home page'>
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
                  <NavLink to={'/about-us/beliefs'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label='View the What We Believe page' >What We Believe</NavLink>
                </li>
                <li>
                  <NavLink to={'/about-us/what-to-expect'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label='View the What to Expect page' >What to Expect</NavLink>
                </li>
                <li>
                  <NavLink to={'/about-us/vision-mission-and-values'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label='View the Vision, Mission, and Values page' >Vision, Mission, and Values</NavLink>
                </li>
                <li>
                  <NavLink to={'/about-us/leadership'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label='View the Meet Our Leadership page' >Meet Our Leadership</NavLink>
                </li>
                <li>
                  <NavLink to={'/about-us/elder'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label='View the Elder Nominations page' >Elder Nominations</NavLink>
                </li>
              </Dropdown>
            </li>

            {/* Event Info Dropdown */}
            <li>
              <Dropdown title="Event Info" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <NavLink to={'/event-info/womens-sign-up'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Women's Retreat Sign Up page" >Women's Retreat Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to={'/event-info/calendar'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Church Calendar page" >Church Calendar</NavLink>
                </li>
                <li>
                  <NavLink to={'/event-info/bulletin'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Church Bulletin page" >Church Bulletin</NavLink>
                </li>
              </Dropdown>
            </li>

            {/* Other Menu Items */}
            <li>
              <Dropdown title="Sermons" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <NavLink to={'/sermons/library'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="See the ICC Sermon Video Library" title="See the ICC Sermon Video Library" >Video Library</NavLink>
                </li>
                <li>
                  <a href={'https://pastors.ai/church/@issaquahchristianchurch2266'} target='_blank' rel='noopener noreferrer' aria-label="Check out the ICC Sermon Chatbot" title="Check out the ICC Sermon Chatbot" >
                    AI Chatbot
                  </a>
                </li>
              </Dropdown>
              {/* <NavLink to={'/sermons'} className={({ isActive }) => isActive ? 'isActive nav-link' : 'nav-link'} aria-label="View the Sermons page" >Sermons</NavLink> */}
              {/* <a className='nav-link' href="https://www.issaquah.cc/sermons" target='_blank' rel='noopener noreferrer'>Sermons</a> */}
            </li>

            {/* Giving */}
            <li>
              <Dropdown title="Giving" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <a href={'https://giving.servantkeeper.com/issaquahcc'} target='_blank' rel='noopener noreferrer' aria-label="Open a new tab to the Tithes and Offerings page" >
                    Tithes and Offerings
                  </a>
                </li>
                <li>
                  <NavLink to={'/giving/stocks-and-crypto'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Stocks and Crypto page" >
                    Stocks and Crypto
                  </NavLink>
                </li>
              </Dropdown>
            </li>

            {/* Connect */}
            <li>
              <Dropdown title="Connect" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <NavLink to={'/connect/prayer-requests'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Prayer Requests page" >
                    Prayer Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/connect/membership'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Membership page" >
                    Membership
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/connect/kids'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Kids Ministry page" >
                    Kids
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/connect/teens'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Teens Ministry page" >
                    Teens
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/connect/women'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Women Ministry page" >
                    Women
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/connect/men'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Men Ministry page" >
                    Men
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/connect/outreach'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Outreach page" >
                    Outreach
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/connect/haiti'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Haiti page" >
                    Haiti
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/connect/recommended-bible-apps'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Recommended Bible Apps page" >
                    Recommended Bible Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/connect/employment'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Employment page" >
                    Employment
                  </NavLink>
                </li>
              </Dropdown>
            </li>

            {/* Contact */}
            <li>
              <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'isActive nav-link' : 'nav-link'} aria-label="View the Contact page" >
                Contact
              </NavLink>
              {/* <a className='nav-link' href="https://www.issaquah.cc/contact" target='_blank' rel='noopener noreferrer'>Contact</a> */}
            </li>

            {/* Care */}
            <li>
              <Dropdown title="Care" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                <li>
                  <NavLink to={'/care/helpful-resources'} className={({ isActive }) => isActive ? 'isActive' : ''} aria-label="View the Helpful Resources page" >
                    Helpful Resources
                  </NavLink>
                </li>
              </Dropdown>
            </li>
          </ul>
        </nav>

      </div >

    </header >
  )
}

export default Header
