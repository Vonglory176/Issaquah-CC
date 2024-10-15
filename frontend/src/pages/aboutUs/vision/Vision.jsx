import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'

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


            {/* <iframe src="/api/v1/page-sections/1d5e8052-f419-11ed-9791-0614187498c1/iframe" id="1d5e8052-f419-11ed-9791-0614187498c1-iframe" style="width: 100%; border: none;" height="341"></iframe> */}

            <div className="video-container rounded-lg overflow-hidden shadow-lg">
                <iframe
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    // height="682" // "315"
                    src="https://www.youtube.com/embed/99Ago_Y6AUw"
                    title="Embedded Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

        </PageWrapper>
    )
}

export default Vision
