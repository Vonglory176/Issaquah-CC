import React from 'react'
import Banner from './banner/Banner'
// import SEO from '../seo/SEO'

// This component is used to wrap pages and provide a background image (If given).
const PageWrapper = ({ children, name = '', className = '', maxWidth = 'max-w-[1090px]', bannerSettings }) => {

  return (
    <main className={`page-wrapper ${name}-wrapper relative`}>
      
      {/* Banner */}
      {bannerSettings && <Banner {...bannerSettings} />}

      {/* Page Content */}
      <main className={`page-content ${name ? name + '-content' : ''} ${className} ${maxWidth} `}> {/* */}
        {children}
      </main>

    </main>
  )
}

export default PageWrapper
