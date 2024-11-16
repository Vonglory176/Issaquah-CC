import Link from 'next/link'
import { FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaPhone, FaYoutubeSquare } from 'react-icons/fa'
import Image from 'next/image'

import logo from '@/src/assets/images/logos/logo9.webp'

const Footer = () => {

  return (
    <footer className='footer flex flex-col gap-10 py-4 px-8 pt-12 sm:px-[8vw]'>

      {/* Top Container (w/Left and Right) ------------------------------ */}
      <div className="footer-top grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">

        {/* Left Side Container ------------------------------ */}
        <div className="footer-left flex flex-col gap-4">

          {/* Logo */}
          <Link href={'/'} className='flex h-[80px] w-fit py-2' aria-label='Return to home page' title='Return to home page'>

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
              height={64}
              placeholder='blur'
              className='object-contain object-center'
            />
          </Link>

          {/* Social Media Icons */}
          <ul className='flex gap-4'>
            <li><a href={process.env.REACT_APP_FACEBOOK} target='_blank' rel='noopener noreferrer' aria-label="Visit the ICC Facebook page" title="Visit the ICC Facebook page" ><FaFacebookSquare size={32} /></a></li>
            <li><a href={process.env.REACT_APP_INSTAGRAM} target='_blank' rel='noopener noreferrer' aria-label="Visit the ICC Instagram page" title="Visit the ICC Instagram page" ><FaInstagramSquare size={32} /></a></li>
            <li><a href={process.env.REACT_APP_YOUTUBE} target='_blank' rel='noopener noreferrer' aria-label="Visit the ICC YouTube page" title="Visit the ICC YouTube page" ><FaYoutubeSquare size={32} /></a></li>
          </ul>

        </div>

        {/* Right Side Container ------------------------------ */}
        <div className="footer-right flex flex-col gap-4">
          <h2 className='text-2xl font-bold text-white'>Contact Us</h2>
          <ul className='flex flex-col gap-2'>

            {/* Address */}
            <li>
              <a
                aria-label="View ICC on Google Maps"
                title="View ICC on Google Maps"
                href={process.env.REACT_APP_ADDRESS_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='flex gap-2'
              >
                <FaMapMarkerAlt size={18} className='mt-[2px]' />
                <p>{process.env.REACT_APP_ADDRESS}</p>
              </a>
            </li>

            {/* Phone */}
            <li>
              <a
                aria-label="Call or Text ICC"
                title="Call or Text ICC"
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
                aria-label="Send an Email to ICC"
                title="Send an Email to ICC"
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
      <div className="footer-copyright flex flex-wrap justify-center items-center">
        <p>&copy; {new Date().getFullYear()} Issaquah Christian Church. </p>
        &nbsp;
        <p>All rights reserved.</p>
        &nbsp;
        <p>Website built by <a href="https://www.skylergconley.com/" target='_blank' rel='noopener noreferrer' aria-label="Visit Skyler's website" title="Visit Skyler's website">Skyler Conley</a>.</p>
      </div>
    </footer>
  )
}

export default Footer