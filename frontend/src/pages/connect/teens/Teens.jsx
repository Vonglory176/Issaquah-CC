import React, { useState } from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import ProgressiveImage from 'react-progressive-graceful-image'
import Spinner from '../../../components/spinner/Spinner'

import youthGroup from '../../../assets/images/youthGroup.webp'
import dcVsMarvel from '../../../assets/images/dcVsMarvel.webp'



const Teens = () => {
    const [slideshowLoaded, setSlideshowLoaded] = useState(false)

    return (
        <PageWrapper name='teens' className='flex flex-col gap-8 text-center' maxWidth='max-w-[800px]'
            metaSettings={{
                title: 'Youth Group',
                description: 'Grades 6-12 meet on Wednesday Night at 7pm at Pastor Aaron\'s House. We eat dinner together and study the Bible together.'
            }}
            bannerSettings={{
                text: {
                    heading: 'Youth Group',
                    // className: ''
                }
            }}>

            {/* <section>

                <h2 className='text-2xl font-bold flex gap-2 flex-wrap'>Youth Group</h2>
                
                <hr className='border border-[var(--border-color-3)]' />
                
            </section> */}

            <h2 className='font-bold'>Welcome to The ICC Youth Group</h2>

            <div className="flex flex-col gap-8">
                <p>Grades 6-12 meet on Wednesday Night at 7pm at Pastor Aaron's House. We eat dinner together and study the Bible together.</p>
                <p>Email <a href="mailto:aaron@issaquah.cc" target='_blank' rel='noopener noreferrer' aria-label="Email Pastor Aaron" title="Email Pastor Aaron" >aaron@issaquah.cc</a> to stay updated on our activities.</p>
            </div>

            <div>
                <div className="slideshow-container shadow-md rounded-lg overflow-hidden bg-white" style={{ width: '100%', position: 'relative', margin: '20px auto', paddingBottom: '75%' }}>

                    {!slideshowLoaded && <Spinner />}

                    <iframe
                        title="Slideshow"
                        src={`https://www.canva.com/design/DADyJ2I9HMM/view?embed`}
                        aria-label="Slideshow"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '0' }}
                        onLoad={() => setSlideshowLoaded(true)}
                    />
                </div>
                <p><a href="https://www.canva.com/design/DADyJ2I9HMM/view?utm_content=DADyJ2I9HMM&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target='_blank' rel='noopener noreferrer' aria-label="View the slideshow on Canva" title='View the slideshow on Canva' >Winter Teen Retreat - January 2020</a> by <a href="https://www.canva.com/aaron3124?utm_campaign=designshare&utm_medium=embeds&utm_source=link" aria-label="Visit Aaron Bauer's profile on Canva" title="Visit Aaron Bauer's profile on Canva" >Aaron Bauer</a></p>
            </div>

            <ProgressiveImage src={youthGroup} placeholder={''}>
                {(src, loading) => (
                    <img
                        src={src}
                        alt={''}
                        className={`w-full h-full duration-300 rounded-lg ${loading ? 'opacity-0' : 'opacity-100'}`}
                    />
                )}
            </ProgressiveImage>

            <ProgressiveImage src={dcVsMarvel} placeholder={''}>
                {(src, loading) => (
                    <img
                        src={src}
                        alt={''}
                        className={`w-full h-full duration-300 rounded-lg ${loading ? 'opacity-0' : 'opacity-100'}`}
                    />
                )}
            </ProgressiveImage>

        </PageWrapper>
    )
}

export default Teens
