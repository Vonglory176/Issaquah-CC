import React, { useState } from 'react'
import Spinner from '../spinner/Spinner'

const VideoContainer = ({ src, className }) => {
    const [loading, setLoading] = useState(true)
    // const [consentGiven, setConsentGiven] = useState(false)

    // useEffect(() => {
    //     // Check if consent is given, this could be from a cookie or local storage
    //     const consent = localStorage.getItem('cookieConsent') === 'true'
    //     setConsentGiven(consent)
    // }, [])

    // const handleConsent = () => {
    //     // Logic to handle user consent
    //     localStorage.setItem('cookieConsent', 'true')
    //     setConsentGiven(true)
    // }

    // Canva videos need cookies to function (Remove 'allow-same-origin' in Sandbox to block)

    return (
        <div className={`video-container rounded-lg overflow-hidden shadow-lg bg-white ${className}`}>

            {loading && <Spinner />}

            <iframe
                className={loading ? '' : 'bg-black'}
                style={{ width: '100%', height: '100%', border: 'none' }}
                //   height="682"  "315"
                src={src}
                title="Embedded Video"
                sandbox="allow-scripts allow-same-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                onLoad={() => setLoading(false)}
            ></iframe>

        </div>
    )
}

export default VideoContainer
