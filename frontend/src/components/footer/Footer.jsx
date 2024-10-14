import React from 'react'
import logo from '../../assets/images/logos/logo7.webp'
import ProgressiveImage from 'react-progressive-graceful-image'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaPhone, FaYoutubeSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer flex flex-col gap-10 py-4 px-8 pt-12 sm:px-[8vw]'>
      
      {/* Top Container (w/Left and Right) ------------------------------ */}
      <div className="footer-top grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">

        {/* Left Side Container ------------------------------ */}
        <div className="footer-left flex flex-col gap-4">

          {/* Logo */}
          <Link to={'/'} className='flex h-[80px] w-fit'>
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

          {/* Social Media Icons */}
          <ul className='flex gap-4'>
            <li><a href={process.env.REACT_APP_FACEBOOK} target='_blank' rel='noopener noreferrer'><FaFacebookSquare size={32} /></a></li>
            <li><a href={process.env.REACT_APP_INSTAGRAM} target='_blank' rel='noopener noreferrer'><FaInstagramSquare size={32} /></a></li>
            <li><a href={process.env.REACT_APP_YOUTUBE} target='_blank' rel='noopener noreferrer'><FaYoutubeSquare size={32} /></a></li>
          </ul>

        </div>

        {/* Right Side Container ------------------------------ */}
        <div className="footer-right flex flex-col gap-4">
          <h2 className='text-2xl font-bold text-white'>Contact Us</h2>
          <ul className='flex flex-col gap-2'>

            {/* Address */}
            <li>
              <a
                aria-label="view on google maps"
                href={process.env.REACT_APP_ADDRESS_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'
              >
                <FaMapMarkerAlt size={18} />
                <p>{process.env.REACT_APP_ADDRESS}</p>
              </a>
            </li>

            {/* Phone */}
            <li>
              <a
                aria-label="send a text"
                href={`tel:${process.env.REACT_APP_PHONE}`}
                className='flex items-center gap-2'
              >
                <FaPhone size={18} />
                <p>{process.env.REACT_APP_PHONE_FORMATTED}</p>
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                aria-label="send an email"
                href={`mailto:${process.env.REACT_APP_EMAIL}`}
                className='flex items-center gap-2'
              >
                <FaEnvelope size={18} />
                <p>{process.env.REACT_APP_EMAIL}</p>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <hr className='col-span-2' />

      {/* Copyright Container ------------------------------ */}
      <div className="footer-copyright flex flex-wrap justify-center items-center col-span-2 text-[#D4AF37]">
        <p>&copy; {new Date().getFullYear()} Issaquah Christian Church. </p>
        &nbsp;
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer