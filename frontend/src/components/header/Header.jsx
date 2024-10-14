import React, { useState, useEffect } from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import { FaCaretDown } from 'react-icons/fa'
import logo from '../../assets/images/logos/logo5.webp'
import { Link, useLocation } from 'react-router-dom'
import HamburgerCross from '../hamburgerCross/HamburgerCross'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])  

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='header h-[60px] fixed top-0 left-0 right-0 z-50 shadow-lg'>

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
        <HamburgerCross isOpen={isOpen} toggleMenu={toggleMenu} />

        {/* Navigation */}
        <nav className={`nav-menu shadow-lg lg:shadow-none ${isOpen ? 'open' : ''}`}>

          <ul className='flex flex-col font-semibold lg:gap-4 lg:flex-row lg:items-center'>

            {/* About Us */}
            <li>
              <button>
                About Us <FaCaretDown />
              </button>
              <nav className='nav-sub-menu'>
                <ul>
                  <li>
                    <Link to={'/about-us/beliefs'}>
                      What We Believe
                    </Link>
                  </li>
                  <li>
                    <Link to={'/about-us/what-to-expect'}>
                      What to Expect
                    </Link>
                  </li>
                  <li>
                    <Link to={'/about-us/vision-mission-and-values'}>
                      Vision, Mission, and Values
                    </Link>
                  </li>
                  <li>
                    <Link to={'/about-us/staff'}>
                      Meet Our Leadership
                    </Link>
                  </li>
                  <li>
                    <Link to={'/about-us/elder'}>
                      Elder Nominations
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>

            {/* Event Info */}
            <li>
              <button>
                Event Info <FaCaretDown />
              </button>
              <nav className="nav-sub-menu">
                <ul>
                  <li>
                    <Link to={'/event-info/women-s-sign-up'}>
                      Women's Retreat Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to={'/event-info/calendar'}>
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link to={'/event-info/bulletin'}>
                      Church Bulletin
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>

            {/* Sermons */}
            <li>
              <Link to={'/sermons'}>
                Sermons
              </Link>
            </li>

            {/* Giving */}
            <li>
              <button>
                Giving <FaCaretDown />
              </button>

              <nav className="nav-sub-menu">
                <ul>
                  <li>
                    <a href={'https://giving.servantkeeper.com/issaquahcc'} target='_blank'>
                      Tithes and Offerings
                    </a>
                  </li>
                  <li>
                    <Link to={'/giving/stocks-and-crypto'}>
                      Stocks and Crypto
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>

            {/* Connect */}
            <li>
              <button>
                Connect <FaCaretDown />
              </button>

              <nav className="nav-sub-menu">
                <ul>
                  <li>
                    <Link to={'/connect/prayer-requests'}>
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
                    <Link to={'/connect/teens'}>
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
                    <Link to={'/connect/recommended-bible-apps'}>
                      Recommended Bible Apps
                    </Link>
                  </li>
                  <li>
                    <Link to={'/connect/employment'}>
                      Employment
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>

            {/* Contact */}
            <li>
              <Link to={'/contact'}>
                Contact
              </Link>
            </li>

            {/* Care */}
            <li>
              <button>
                Care <FaCaretDown />
              </button>

              <nav className="nav-sub-menu">
                <ul>
                  <li>
                    <Link to={'/care/helpful-resources'}>
                      Helpful Resources
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
          </ul>
        </nav>

      </div>

    </header>
  )
}

export default Header
