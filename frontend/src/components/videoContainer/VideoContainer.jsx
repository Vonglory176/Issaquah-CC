import React, { useState } from 'react'
import Spinner from '../spinner/Spinner'

const VideoContainer = ({ src, className }) => {
    const [loading, setLoading] = useState(true)

    return (
        <div className={`video-container rounded-lg overflow-hidden shadow-lg bg-white ${className}`}>

            {loading && <Spinner />}

            {/* <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    src={src}
                    title="Embedded Video"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" // accelerometer;  gyroscope;
                    allowFullScreen
                    loading="lazy"
                    onLoad={() => setLoading(false)}
                ></iframe>
            </div> */}

            <iframe
                style={{ width: '100%', height: '100%', border: 'none' }}
                // height="682" // "315"
                src={src}
                title="Embedded Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                onLoad={() => setLoading(false)}
            ></iframe>
        </div>
    )
}

export default VideoContainer
