import React from 'react'
import logo from '../../assets/logo.webp'
import ProgressiveImage from 'react-progressive-graceful-image'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaPhone, FaYoutubeSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>

      {/* Left Side */}
      <div className="footer-left">

        {/* Logo */}
        <Link to={'/'} className='flex h-[80px]'>
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
        <ul className='flex gap-4 text-blue-500'>
          <li><FaFacebookSquare size={32} /></li>
          <li><FaInstagramSquare size={32} /></li>
          <li><FaYoutubeSquare size={32} /></li>
        </ul>

      </div>

      {/* Right Side */}
      <div className="footer-right">
        <h2>Contact Us</h2>
        <ul className='flex flex-col gap-2 text-blue-500'>
          <li>
            <a
              aria-label="view on google maps"
              href="https://maps.app.goo.gl/9SGwb8z93WtezKxv6"
              target='_blank'
              className='flex items-center gap-2 hover:text-blue-500 duration-300'
            >
              <FaMapMarkerAlt size={18}/>
              <p>10328 Issaquah-Hobart Rd SE, Issaquah, WA 98027</p>
            </a>
          </li>
          <li>
            <a
              aria-label="send a text"
              href={`tel:${4253925848}`}
              className='flex items-center gap-2 hover:text-blue-500 duration-300'
            >
              <FaPhone size={18}/>
              <p>(425) 392-5848</p>
            </a>
          </li>
          <li>
            <a
              aria-label="send an email"
              href={`mailto:${'office@issaquah.cc'}`}
              className='flex items-center gap-2 hover:text-blue-500 duration-300'
            >
              <FaEnvelope size={18}/>
              <p>info@issaqahchristian.org</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer