import React, { useState } from 'react'
import Spinner from '../spinner/Spinner'

const VideoContainer = ({ src, className }) => {
    const [loading, setLoading] = useState(true)

    return (
        <div className={`video-container rounded-lg overflow-hidden shadow-lg bg-white ${className}`}>

            {loading && <Spinner />}

            <iframe
                style={{ width: '100%', height: '100%', border: 'none' }}
                // height="682" // "315"
                src={src}
                title="Embedded Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setLoading(false)}
            ></iframe>
        </div>
    )
}

export default VideoContainer
