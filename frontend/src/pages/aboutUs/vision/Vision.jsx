import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import VideoContainer from '../../../components/videoContainer/VideoContainer'

const Vision = () => {
    return (
        <PageWrapper name='vision' className='flex flex-col gap-8'>

            <section>

                <h1 className='text-3xl font-bold'>Love God and Love Your Neighbor</h1>

                <p className='sm:text-lg md:text-xl'>Jesus has created a Family of Missionary Servants and we exist to Love God and Love our Neighbor. Our Mission is to help others Follow Jesus in the everyday stuff of life through our Gatherings and Groups.</p>


                <div>
                    <p className='italic text-[var(--font-color-4)]'>For an explanation of how our Vision, Values, and Mission are built see below.</p>
                    <hr className='border border-[var(--border-color-3)]' />
                </div>

            </section>

            <VideoContainer src="https://www.youtube.com/embed/99Ago_Y6AUw" className='' />

        </PageWrapper>
    )
}

export default Vision