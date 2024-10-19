import React from 'react'

// This component is used to wrap pages and provide a background image (If given).
const PageWrapper = ({ children, name='', className='', maxWidth='max-w-[1090px]', backgroundImages={ // 
    large: null, 
    small: null
} }) => {

  return (
    <div className={`page-wrapper ${name}-wrapper`}>

        <div className={`page-content ${name ? name + '-content' : ''} ${className} ${maxWidth} `}> {/* */}
            {children}
        </div>

    </div>
  )
}

export default PageWrapper
