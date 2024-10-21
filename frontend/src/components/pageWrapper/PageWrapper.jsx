import React from 'react'
import Banner from '../banner/Banner'

// This component is used to wrap pages and provide a background image (If given).
const PageWrapper = ({ children, name = '', className = '', maxWidth = 'max-w-[1090px]', backgroundSettings = { image:{ large: null, small: null }}, bannerSettings }) => {

  return (
    <div className={`page-wrapper ${name}-wrapper`}>
      
      {/* Banner */}
      {bannerSettings && <Banner bannerSettings={bannerSettings} />}

      {/* Page Content */}
      <div className={`page-content ${name ? name + '-content' : ''} ${className} ${maxWidth} `}> {/* */}
        {children}
      </div>

    </div>
  )
}

export default PageWrapper
