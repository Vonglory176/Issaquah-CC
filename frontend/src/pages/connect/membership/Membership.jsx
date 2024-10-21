import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'

const Membership = () => {
    return (
        <PageWrapper name='membership' className='flex flex-col gap-8' bannerSettings={{
            text: {
                heading: 'Becoming a Member',
                // className: ''
            }
        }}>

            {/* <section>

                <h1 className='text-3xl font-bold'>Becoming a Member</h1>

                <hr className='border border-[var(--border-color-3)]' />

            </section> */}

            <h2 className=''>We have a three step process to become a member at Issaquah Christian Church:</h2>

            <ul className=''>
                <li>
                    <p><span className='font-semibold'>1.</span> Listen to the sermon on the <a href="https://youtu.be/MzmwxTk3vXA" target='_blank' rel='noopener noreferrer' className='text-[var(--font-active-color-1)]'>Pathway Toward Becoming Family at ICC</a>.</p>
                </li>

                <li>
                    <p><span className='font-semibold'>2.</span> RSVP for a class time on our <a href="https://faithlife.com/issaquahcc/calendar?view=Month" target='_blank' rel='noopener noreferrer' className='text-[var(--font-active-color-1)]'>Church Calendar</a> for a discussion with staff and other prospective members on the first Sunday of the Month at 9:25am-10:15am.</p>
                </li>

                <li>
                    <p><span className='font-semibold'>3.</span> Schedule a conversation with an elder and spouse to share your faith stories after the class.</p>
                </li>
            </ul>

        </PageWrapper>
    )
}

export default Membership
