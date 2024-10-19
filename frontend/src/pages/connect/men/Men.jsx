import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import ProgressiveImage from 'react-progressive-graceful-image'
import guyTime from '../../../assets/images/guyTime.webp'

const Men = () => {
    return (
        <PageWrapper name='men' className='flex flex-col gap-8'>

            <section>

                <h1 className='text-3xl font-bold flex gap-2 flex-wrap'>Men's Ministry</h1>

                {/* <p className='text-lg md:text-xl'>We have a three step process to become a member at Issaquah Christian Church:</p> */}

                <hr className='border border-[var(--border-color-3)]' />

            </section>

            <div className="flex flex-col gap-8 text-lg md:text-xl">
                <p>We are excited to partner with <a href="https://www.impactplayers.org/" target='_blank' rel='noopener noreferrer' className='text-[var(--font-active-color)]'>Impact Players</a> for monthly Breakfasts and weekly cohorts for men.</p>
            </div>

            <ProgressiveImage src={guyTime} placeholder={''}>
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

export default Men
