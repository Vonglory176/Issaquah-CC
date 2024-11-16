import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/images/logos/logo.webp'

const SEO = ({ title = '', description = process.env.REACT_APP_META_DESCRIPTION }) => {
    const location = useLocation()
    const pageTitle = title ? `${title} - ${process.env.REACT_APP_META_TITLE}` : process.env.REACT_APP_META_TITLE

    return (
        <Helmet>
            {pageTitle && <title>{pageTitle}</title>}
            {description && <meta name="description" content={description} />}
            {/* {keywords && <meta name="keywords" content={keywords} />} */}
            {/* {author && <meta name="author" content={author} />} */}

            {/* Open Graph tags for social media */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${process.env.REACT_APP_URL}${location.pathname}`} />
            <meta property="og:image" content={logo} />
            <meta property="og:site_name" content={process.env.REACT_APP_META_TITLE} />

            {/* Twitter Card tags */}
            {/* <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} /> */}
        </Helmet>
    )
}

export default SEO