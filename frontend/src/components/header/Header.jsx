import React from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import { FaBars, FaCaretDown } from 'react-icons/fa'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom'
import HamburgerCross from '../hamburgerCross/HamburgerCross'

const Header = () => {
  return (
    <header className='header flex items-center justify-between h-[60px] px-4 bg-gray-300'>

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
      <button className='h-full lg:hidden'>
        <FaBars size={28} />
        {/* <HamburgerCross /> */}
      </button>

      {/* Navigation */}
      <nav className='lg:block hidden'>

        <ul className='flex items-center gap-4 font-semibold'>
          <li>
            <button>
              About Us <FaCaretDown />
            </button>
          </li>
          <li>
            <button>
              Event Info <FaCaretDown />
            </button>
          </li>
          <li>
            <Link to={'/sermons'}>
              Sermons
            </Link>
          </li>
          <li>
            <button>
              Giving <FaCaretDown />
            </button>
          </li>
          <li>
            <button>
              Connect <FaCaretDown />
            </button>
          </li>
          <li>
            <Link to={'/contact'}>
              Contact
            </Link>
          </li>
          <li>
            <button>
              Care <FaCaretDown />
            </button>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header
