import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import ProgressiveImage from 'react-progressive-graceful-image'
import helpingHand from '../../../assets/images/helpingHand.webp'
import { Link } from 'react-router-dom'

const HelpfulResources = () => {
    return (
        <PageWrapper name='helpful-resources' className='flex flex-col gap-12 mx-auto text-center' maxWidth='max-w-[800px]' bannerSettings={{
            text: {
                heading: "Helpful Resources",
                // subheading: ""
            }
        }}>


            {/* <hr className='border border-[var(--border-color-3)]' /> */}

            <div className="flex flex-col gap-4">
                <h2 className='font-bold'>We're Here To Help</h2>

                <p>As the church, we are uniquely equipped to bring the light of Jesus to those around us.</p>

                <p>Whether you're in a position of needing help, or you're able to give help, you'll find everything you need to know on this page.</p>
            </div>

            <div className="helping-hand-image-container rounded-lg overflow-hidden">
                <ProgressiveImage src={helpingHand} placeholder={''}>
                    {(src, loading) => (
                        <img
                            src={src}
                            alt={''}
                            className={`w-full h-full duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                        />
                    )}
                </ProgressiveImage>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center md:flex-row'>
                {/* <p>Press the HELP button for various resources.</p> */}
                {/* <p>Press the donate button to give to the "Mercy Fund".</p> */}

                <Link to='/care/local-resources' className='interactive-button'>
                    <div>
                        <p>See Our Resources</p>
                    </div>
                </Link>

                <a href='https://giving.servantkeeper.com/issaquahcc' target='_blank' rel='noopener noreferrer' className='interactive-button'>
                    <div>
                        <p>Mercy Fund Donation</p>
                    </div>
                </a>

            </div>

            <p>For prayer requests, please email the ICC office at <a href="mailto:office@issaquah.cc" className='text-[var(--font-active-color-1)]'>office@issaquah.cc</a></p>

        </PageWrapper>
    )
}

export default HelpfulResources
