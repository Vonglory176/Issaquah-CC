import React, { useState } from 'react'
import PageWrapper from '../../components/pageWrapper/PageWrapper'
import Spinner from '../../components/spinner/Spinner';
import ProgressiveImage from 'react-progressive-graceful-image'

import podcast from '../../assets/images/podcast.webp'
import applePodcast from '../../assets/images/applePodcast.webp'
import amazonMusic from '../../assets/images/amazonMusic.webp'
import youtubeChannel from '../../assets/images/youtubeChannel.webp'

const Sermons = () => {
    const [playerLoaded, setPlayerLoaded] = useState(false);
    return (
        <PageWrapper name='sermons' className='flex flex-col gap-8'
            metaSettings={{
                title: 'Sermons',
                description: 'View our sermons here on our website or on our podcasting platforms.'
            }}
            bannerSettings={{
                text: {
                    heading: 'Sermons',
                // className: ''
            }
        }}>

            {/* <section className='flex flex-col gap-4'> */}

            {/* <h1 className='text-3xl font-bold'>Sermons</h1>

                <hr className='border border-[var(--border-color-3)]' /> */}

            <div className="player-container shadow-md rounded-lg overflow-hidden bg-white" style={{ width: '100%', position: 'relative', margin: '20px auto', paddingBottom: 'calc(56.25% + 368px)' }}>

                {!playerLoaded && <Spinner />}

                <iframe
                    title="Video Player"
                    src={`https://sermons.logos.com/embed/profile/2857448/recent?includePlaylist=true&defaultSort=datePresented:desc,dateSubmitted:desc`}
                    aria-label="Video Player"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '0' }}
                    onLoad={() => setPlayerLoaded(true)}
                />
            </div>
            {/* </section> */}

            <hr />


            <p className='max-w-[900px] text-center mx-auto'>Worship the Lord Jesus with us with on Sundays at 10:30am. We will be recording live sermons and later publishing them here and on our podcasting platforms at <a href="https://podcasts.apple.com/us/podcast/issaquah-christian-church/id1475686744" target='_blank' rel='noopener noreferrer' aria-label="Listen to ICC on Apple Podcasts" title="Listen to ICC on Apple Podcasts" >Apple</a> and <a href="https://music.amazon.com/podcasts/f35a0f7b-fd3a-4db2-88ea-38c1b927fd45/issaquah-christian-church" target='_blank' rel='noopener noreferrer' aria-label="Listen to ICC on Amazon Music" title="Listen to ICC on Amazon Music" >Amazon</a>. Don't forget to Subscribe to our <a href="https://www.youtube.com/channel/UCT0ZOk1ORNepZtu7E0IQaCQ" target='_blank' rel='noopener noreferrer' aria-label="Subscribe to the ICC YouTube Channel" title="Subscribe to the ICC YouTube Channel" >YouTube Page</a> and head over to our <a href="https://www.facebook.com/IssyCC/" target='_blank' rel='noopener noreferrer' aria-label="Visit the ICC Facebook Page" title="Visit the ICC Facebook Page" >Facebook Page</a> as well! Want to interact with the sermons and discuss with a chatbot the content or get discussion questions? <a href="https://pastors.ai/church/@issaquahchristianchurch2266" target='_blank' rel='noopener noreferrer' aria-label="Check out the ICC Sermon Chatbot" title="Check out the ICC Sermon Chatbot" >Check this out!</a></p>

            <div className="link-container grid grid-cols-2 gap-2 grid-cols-[176px_1fr] max-w-[356px] mx-auto sm:max-w-full sm:gap-6 sm:grid-cols-[122.19px_1fr]">

                <a href="https://podcasts.apple.com/us/podcast/issaquah-christian-church/id1475686744" target='_blank' rel='noopener' aria-label="Listen to ICC on Apple Podcasts" title="Listen to ICC on Apple Podcasts" >
                    <ProgressiveImage src={podcast} placeholder={''}>
                        {(src, loading) => (
                            <img
                                src={src}
                                alt={''}
                                className={` duration-300 sm:h-[122.19px] ${loading ? 'opacity-0' : 'opacity-100'}`}
                            />
                        )}
                    </ProgressiveImage>
                </a>

                <div className='grid sm:grid-cols-2 gap-2 sm:gap-6'>

                    <div className='flex flex-col gap-2 max-w-[207px]'>

                        <a href="https://podcasts.apple.com/us/podcast/issaquah-christian-church/id1475686744" target='_blank' rel='noopener' aria-label="Listen to ICC on Apple Podcasts" title="Listen to ICC on Apple Podcasts" >
                            <ProgressiveImage src={applePodcast} placeholder={''}>
                                {(src, loading) => (
                                    <img
                                        src={src}
                                        alt={''}
                                        className={`max-h-[64px] w-full duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                                    />
                                )}
                            </ProgressiveImage>
                        </a>

                        <a href="https://music.amazon.com/podcasts/f35a0f7b-fd3a-4db2-88ea-38c1b927fd45/issaquah-christian-church" target='_blank' rel='noopener' aria-label="Listen to ICC on Amazon Music" title="Listen to ICC on Amazon Music" >
                            <ProgressiveImage src={amazonMusic} placeholder={''}>
                                {(src, loading) => (
                                    <img
                                        src={src}
                                        alt={''}
                                        className={`max-h-[64px] w-full duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                                    />
                                )}
                            </ProgressiveImage>
                        </a>

                    </div>

                    <a href="https://www.youtube.com/channel/UCT0ZOk1ORNepZtu7E0IQaCQ" target='_blank' rel='noopener' aria-label="Subscribe to the ICC YouTube Channel" title="Subscribe to the ICC YouTube Channel" >
                    <ProgressiveImage src={youtubeChannel} placeholder={''}>
                        {(src, loading) => (
                            <img
                                src={src}
                                    alt={''}
                                    className={`max-h-[64px] w-full duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                                />
                            )}
                        </ProgressiveImage>
                    </a>

                </div>

            </div>

            <p className='max-w-[800px] text-center mx-auto'>This will keep you informed and also help the message of the Good News spread further. All past worship services are cataloged there as well.</p>

        </PageWrapper >
    )
}

export default Sermons

{/* <div className="" style={{ width: '890px', height: '870px', position: 'absolute', transform: 'translate(25px, 0px)' }}>
    <div style={{ position: 'relative' }}>
        <div style={{ height: 'auto' }}>
            <div>
                <iframe src="https://sermons.logos.com/embed/profile/2857448/recent?includePlaylist=true&defaultSort=datePresented:desc,dateSubmitted:desc" style={{ width: '100%', border: 'none' }} height="731px"></iframe>
            </div>
        </div>
        <div style={{ width: '100%', clear: 'both', height: '0px' }}></div>
    </div>
    <span className="react-resizable-handle react-resizable-handle-se"></span>
</div> */}