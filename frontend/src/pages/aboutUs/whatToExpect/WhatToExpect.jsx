import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import wheatField from '../../../assets/images/backgrounds/wheat-field.webp'
import wheatFieldSmall from '../../../assets/images/backgrounds/wheat-field-small.webp'

const WhatToExpect = () => {
    return (
        <PageWrapper name='what-to-expect' className='flex flex-col gap-8'
            metaSettings={{
                title: 'What to Expect',
                description: 'Issaquah Christian Church meets every Sunday Morning at 10:30am for our main service at 10328 Issaquah-Hobart Rd SE, Issaquah, 98027. We know meeting someone for the first time can be intimidating, and going to a new church for the first time can make folks a bit anxious. We want to help make your first experience at Issaquah Christian Church a great one!'
            }}
            bannerSettings={{
                image: {
                    large: wheatField,
                    small: wheatFieldSmall,
                    className: 'object-top h-[100svh]'
                },
                text: {
                    heading: 'What to Expect on Sunday Mornings',
                    subheading: '',
                    // className: ''
                }
            }}>

            <section>

                <h2 className=''>Getting to Know Each Other</h2>

                {/* <p className='sm:text-lg md:text-xl'>We know meeting someone for the first time can be intimidating, and going to a new church for the first time can make folks a bit anxious. We want to help make your first experience at Issaquah Christian Church a great one!</p> */}
                <p>We know meeting someone for the first time can be intimidating, and going to a new church for the first time can make folks a bit anxious. We want to help make your first experience at Issaquah Christian Church a great one!</p>

                {/* <p className='italic text-[var(--font-color-4)]'></p> */}

            </section>

            {/* <hr className='border border-[var(--border-color-3)]' /> */}

            <section>

                <h2 className=''>Worship Service</h2>

                <p>Issaquah Christian Church meets every Sunday Morning at 10:30am for our main service at <a className='text-[var(--font-active-color-1)]' href="https://goo.gl/maps/HYQADAVaDTs" target='_blank' rel='noopener noreferrer' aria-label="View ICC on Google Maps" title="View ICC on Google Maps">10328 Issaquah-Hobart Rd SE, Issaquah, 98027</a>. As you approach the parking lot, you will see the pathway down to our Worship Center. You can bring your kids with you to the Worship Service and we'll lead them to the Kid Ministry in the middle of the service after our singing time. You may pick up a cup of coffee or tea and an individual communion cup at the service counter. We have plenty of room for you to sit with those you want. We do not require Face Coverings, but respect you if you want to wear one. We can provide you with one if you like.</p>

            </section>

            <section>

                <h2 className=''>How long is an ICC service?</h2>

                <p>In total, an Issaquah Christian Church service is about 75 minutes in length 10:30am-11:45am. This will include some singing as a group with lyrics on the screen to help you participate. You can sing along and/or engage with worship however you feel most comfortable. After a few songs, our Lead Pastor or guest preacher will come share an encouraging and hope-filled message about Jesus. Then we will share Communion in the sanctuary with individual cups you pick up at the entrance.</p>

            </section>

            <section>

                <h2 className=''>What's The Culture Like At Issaquah Christian Church?</h2>

                <p>Sundays at ICC are exciting, casual, and relaxed. Come as you are and expect to feel welcomed as our guests. Kids are welcome in the Worship Service and we will be providing Kids Ministry as well across the way in the Ministry Center.</p>

            </section>

            <section>

                <h2 className=''>What about my kids?</h2>

                <p>Ages 2-4 will be together in a classroom downstairs and age 5 through 5th grade will be together in the large room in the Ministry Center Upstairs. Our teachers enjoy focusing on Jesus and helping kids get connected to each other. You can sign in your kids at the Worship Center.</p>

            </section>

        </PageWrapper>
    )
}

export default WhatToExpect
