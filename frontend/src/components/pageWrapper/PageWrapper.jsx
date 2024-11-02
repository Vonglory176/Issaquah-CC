import React from 'react'
import Banner from '../banner/Banner'
import SEO from '../seo/SEO'

// This component is used to wrap pages and provide a background image (If given).
const PageWrapper = ({ children, name = '', className = '', maxWidth = 'max-w-[1090px]', bannerSettings, metaSettings, backgroundSettings, }) => {

  return (
    <div className={`page-wrapper ${name}-wrapper`}>

      {/* Meta */}
      <SEO {...metaSettings} />
      
      {/* Banner */}
      {bannerSettings && <Banner {...bannerSettings} />}

      {/* Page Content */}
      <div className={`page-content ${name ? name + '-content' : ''} ${className} ${maxWidth} `}> {/* */}
        {children}
      </div>

    </div>
  )
}

export default PageWrapper
