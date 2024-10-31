import React from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'

import arronImage from '../../../assets/images/people/aaron.webp'
import dougImage from '../../../assets/images/people/doug.webp'
import patrickImage from '../../../assets/images/people/patrick.webp'
import mikeImage from '../../../assets/images/people/mike.webp'
import placeholderImage from '../../../assets/images/people/placeholder.webp'

const leadershipData = [
    {
        name: 'Aaron Bauer',
        role: 'Pastor',
        description: 'Aaron has been the Senior Pastor at ICC since July 2016. He married Heather in 1996. They have six children together. Aaron has been in pastoral church ministry since 1998.',
        quote: '"Only Jesus can tell you who you truly are!"', // - Pastor Aaron
        image: arronImage,
        email: 'aaron@issaquah.cc'
    },
    {
        name: 'Doug Ortega',
        role: 'Administrator',
        description: '',
        image: dougImage,
        quote: '"I am here to serve you. Reach out to me anytime."', // - Doug
        email: 'doug@issaquah.cc'
    },
    {
        name: 'Patrick Castillo',
        role: 'Elder',
        description: '',
        image: patrickImage,
        quote: '',
        email: ''
    },
    {
        name: 'Mike Davis',
        role: 'Elder',
        description: '',
        image: mikeImage,
        quote: '',
        email: ''
    },

    // https://via.placeholder.com/150
]

const Leadership = () => {
    return (
        <PageWrapper name='leadership' className='flex flex-col' bannerSettings={{
            text: {
                heading: 'Meet Our Leadership',
                // className: ''
            }
        }}>

            {/* <h1 className='text-3xl font-bold text-center'>Meet Our Leadership</h1> */}
            {/* <hr className='border border-[var(--border-color-3)] w-full mt-8' /> */}

            {/* Profile Printing */}
            <div className='flex flex-col justify-center items-center'> {/*  md:grid md:grid-cols-2 */}

                {leadershipData.map((person, index) => (


                    <div key={index} className='staff-member flex flex-col items-center mt-8 gap-2 mx-auto max-w-[320px] md:max-w-[400px]'> {/*  md:h-[304px]  border-b border-[var(--border-color-3)] */}

                        {/* Top */}
                        <div className="staff-member-image flex justify-center items-center gap-2 min-h-[120px]">
                            <div className='w-[120px] h-[120px]'>
                                <ProgressiveImage src={person.image} placeholder={placeholderImage}>
                                    {(src, loading) => (
                                        <img
                                            src={src}
                                            alt={'Staff Member'}
                                            className={`staff-member-image w-full h-full duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                                        />
                                    )}
                                </ProgressiveImage>
                            </div>

                            <div>
                                <h2 className='text-2xl font-bold w-[174px]'>{person.name}</h2>
                                <p className='text-xl'>{person.role}</p>
                            </div>
                        </div>

                        {/* Bottom */}
                        <div className='staff-member-info flex flex-col justify-center items-center gap-2'>

                            {/* <h2 className='text-xl font-bold'>{person.name} - {person.role}</h2> */}


                            <div className='text-center flex flex-col gap-2'>

                                <p className={`italic text-[var(--font-color-4)] text-sm md:text-base`}>{person.quote || '(No quote available)'}</p>



                                {person.description ?
                                    <p className='lg:text-lg'>{person.description}</p>
                                    :
                                    <p className='italic text-[var(--font-color-4)] text-sm md:text-base'>(No description available)</p>
                                }


                                {person.email ?
                                    <a href={`mailto:${person.email}`} className='text-sm md:text-base text-[var(--font-active-color-1)]' rel='noopener noreferrer' target='_blank' aria-label={`Send an Email to ${person.name}`} title={`Send an Email to ${person.name}`}>{person.email}</a>
                                    :
                                    <p className='italic text-sm md:text-base text-[var(--font-color-4)]'>(No email available)</p>
                                }
                            </div>


                            {/* <hr className='border border-[var(--border-color-3)] w-full' /> */}

                        </div>

                        {index < leadershipData.length - 1 && <hr className='border border-[var(--border-color-3)] w-[320px] mt-6' />}


                    </div>
                ))}
            </div>

            {/* <p className='sm:text-lg md:text-xl'>Jesus has created a Family of Missionary Servants and we exist to Love God and Love our Neighbor. Our Mission is to help others Follow Jesus in the everyday stuff of life through our Gatherings and Groups.</p>


                <div>
                    <p className='italic text-[var(--font-color-4)]'>For an explanation of how our Vision, Values, and Mission are built see below.</p>
                    <hr className='border border-[var(--border-color-3)]' />
                </div> */}

        </PageWrapper>
    )
}

export default Leadership