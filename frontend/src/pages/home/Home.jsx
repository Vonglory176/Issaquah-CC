import React from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import backgroundImage from '../../assets/images/backgrounds/woman-with-hands-up.webp'
import backgroundImageSmall from '../../assets/images/backgrounds/woman-with-hands-up-small.webp'

const Home = () => {
    return (
        <div className='home page'>

            {/* Landing Section */}
            <section className="landing relative p-4">

                {/* Background Image */}
                <ProgressiveImage src={backgroundImage} placeholder={backgroundImageSmall}>
                    {(src, loading) => (
                        <img
                            src={src}
                            alt={'Issaquah Christian Church Logo'}
                            className={`landing-background-image absolute inset-0 w-full h-full object-cover object-[20%] duration-300 ${loading ? 'blur-sm' : 'blur-0'}`}
                        />
                    )}
                </ProgressiveImage>

                {/* Content Container */}
                <div className="landing-content flex flex-col flex-1 justify-center gap-8 h-full mx-auto max-w-[608px] lg:ml-[50%] lg:max-w-[708px]">

                    {/* Welcome Text */}
                    <div className="landing-welcome-text text-white text-center flex flex-col gap-4 rounded-lg bg-white/50 p-4">
                        <h1 className="text-3xl font-bold lg:text-4xl">Welcome to Issaquah Christian Church</h1>
                        <h2 className="text-xl flex flex-col lg:text-2xl">
                            <span>Teaching Biblical life applications</span>
                            <span>as you learn to follow Jesus.</span>
                        </h2>
                    </div>

                    {/* Video */}
                    <div className="landing-video-container rounded-lg overflow-hidden bg-white/50">

                        <iframe
                            width="560"
                            height="682" // "315"
                            src="https://www.issaquah.cc/api/v1/page-sections/ca2283a0-3ae7-11ee-af78-2b9e2ed93972/iframe"
                            title="Embedded Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>                

            </section>

        </div>
    )
}

export default Home
