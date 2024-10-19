import React from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import VideoContainer from '../../../components/videoContainer/VideoContainer'
import pestle from '../../../assets/images/pestle.webp'

const Elder = () => {
    return (
        <PageWrapper name='elder' className='flex flex-col gap-8'>

            <section className=''>

                <h1 className='text-3xl font-bold'>Elder Nominations</h1>

                <hr className='border border-[var(--border-color-3)]' />

            </section>

            <ProgressiveImage src={pestle} placeholder={''}>
                {(src, loading) => (
                    <img
                        src={src}
                        alt={''}
                        className={`w-full h-full duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                    />
                )}
            </ProgressiveImage>

            <VideoContainer src="https://www.youtube.com/embed/me2QWMAYEt8" className='' />

        </PageWrapper>
    )
}

export default Elder
