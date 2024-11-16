'use client'

import { useState } from 'react'
import { useSiteContext } from '@/src/context/SiteContext'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/src/assets/images/logos/logo9.webp'
import HamburgerMenu from './hamburgerMenu/HamburgerMenu'
import Navigation from './Navigation'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const { modal } = useSiteContext()

  // const location = useLocation()

  // Close menu when location changes
  // useEffect(() => {
  //   if (window.innerWidth < 1024) {
  //     setIsOpen(false)
  //     setOpenDropdown(null)
  //   }
  // }, [location])

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
    <header className={`header h-[var(--header-height)] mb-[-60px] top-0 left-0 right-0 z-50 shadow-lg ${modal ? 'fixed overflow-y-scroll' : 'sticky'}`}>

      <div className="header-wrapper relative flex items-center justify-end h-full px-8 xl:px-[8vw]">

        {/* Logo */}
        <Link href={'/'} className='h-full absolute left-8 top-0 py-2' aria-label='Return to home page' title='Return to home page'>
          {/* <ProgressiveImage src={logo} placeholder={''}>
            {(src, loading) => (
              <img
                src={src}
                alt={'Issaquah Christian Church Logo'}
                className={`h-full object-contain object-center duration-300 py-2 ${loading ? 'opacity-0' : 'opacity-100'}`}
              />
            )}
          </ProgressiveImage> */}

          <Image
            src={logo}
            alt='Issaquah Christian Church Logo'
            height={42}
            placeholder='blur'
            className='object-contain object-center'
          />
        </Link>

        {/* Hamburger Menu */}
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />

        {/* NavLinks */}
        <Navigation isOpen={isOpen} openDropdown={openDropdown} toggleDropdown={toggleDropdown} />
        

      </div >

    </header >
  )
}

export default Header
