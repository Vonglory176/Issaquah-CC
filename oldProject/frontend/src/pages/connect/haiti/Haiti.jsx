import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import ProgressiveImage from 'react-progressive-graceful-image'
import sponsor from '../../../assets/images/sponsor.webp'

const Haiti = () => {
    return (
        <PageWrapper name='haiti' className='flex flex-col gap-8 text-center'
            metaSettings={{
                title: 'Haiti',
                description: 'Be Part Of The Solution'
            }}
            bannerSettings={{
                text: {
                    heading: "Haiti"
                }
            }}>

            <section className='justify-center text-center'>

                <h2 className='font-bold'>Be Part Of The Solution</h2>


                <a href="https://gvcm.reachapp.co/sponsorships?sponsorship_type=child-sponsorship-orphanage&status=unsponsored,partial" target='_blank' rel='noopener noreferrer' className='text-[var(--font-active-color-1)]'>Click here to Become a Sponsor</a>

                {/* <p className='text-lg md:text-xl'>We have a three step process to become a member at Issaquah Christian Church:</p> */}

                {/* <hr className='border border-[var(--border-color-3)]' /> */}

            </section>


            <ProgressiveImage src={sponsor} placeholder={''}>
                {(src, loading) => (
                    <img
                        src={src}
                        alt={''}
                        className={`w-full max-w-[500px] h-full mx-auto duration-300 rounded-lg ${loading ? 'opacity-0' : 'opacity-100'}`}
                    />
                )}
            </ProgressiveImage>

        </PageWrapper>
    )
}

export default Haiti
