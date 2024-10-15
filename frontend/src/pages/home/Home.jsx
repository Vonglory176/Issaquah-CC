import React from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import backgroundImage from '../../assets/images/backgrounds/woman-with-hands-up.webp'
import backgroundImageSmall from '../../assets/images/backgrounds/woman-with-hands-up-small.webp'
import PageWrapper from '../../components/pageWrapper/PageWrapper'

const Home = () => {
    return (
        <PageWrapper name='home' className='' >

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
                    <div className="landing-welcome-text text-white text-center flex flex-col gap-4 rounded-lg bg-[#F7F7F7]/50 p-4 shadow-lg border-2">
                        <h1 className="text-3xl font-bold lg:text-4xl"><span>Welcome to Issaquah</span> <span className='whitespace-nowrap'>Christian Church</span></h1>
                        <h2 className="text-xl flex flex-col lg:text-2xl">
                            <span>Teaching Biblical life applications</span>
                            <span>as you learn to follow Jesus.</span>
                        </h2>
                    </div>

                    {/* Video */}
                    <div className="video-container rounded-lg overflow-hidden bg-[#F7F7F7]/50 shadow-lg border-2">

                        <iframe
                            style={{ width: '100%', height: '100%' }}
                            src="https://www.canva.com/design/DAD2KnH2kKQ/watch?embed"
                            title="Embedded Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>

            </section>

        </PageWrapper>
    )
}

export default Home
