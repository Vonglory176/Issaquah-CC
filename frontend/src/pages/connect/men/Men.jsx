import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import ProgressiveImage from 'react-progressive-graceful-image'
import mensGroup from '../../../assets/images/backgrounds/mens-group.webp'
import mensGroupSmall from '../../../assets/images/backgrounds/mens-group-small.webp'
import guyTime from '../../../assets/images/guyTime.webp'

const Men = () => {
    return (
        <PageWrapper name='men' className='flex flex-col gap-8 text-center' maxWidth='max-w-[800px]' bannerSettings={{
            image: {
                large: mensGroup,
                small: mensGroupSmall,
                className: 'object-[0%_60%] h-full'
            },
            text: {
                heading: "Men's Ministry"
            }
        }}>

            <h2 className='font-bold'>Welcome to The ICC Men's Ministry</h2>

            <p>We are excited to partner with <a href="https://www.impactplayers.org/" target='_blank' rel='noopener noreferrer' aria-label="Visit the Impact Players website" title="Visit the Impact Players website" >Impact Players</a> for monthly Breakfasts and weekly cohorts for men.</p>


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
