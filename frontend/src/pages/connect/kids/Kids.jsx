import React from 'react'
import ProgressiveImage from 'react-progressive-graceful-image'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import whale from '../../../assets/images/whale.webp'

const Kids = () => {
    return (
        <PageWrapper name='kids' className='flex flex-col gap-8'>

            <section>

                <h1 className='text-3xl font-bold flex gap-2 flex-wrap'>
                    <span className='text-[#7D1E2C]'>WELCOME</span>
                    <span className='text-[#F37934]'>TO</span>
                    <span className='text-[#FAC51C]'>ICC</span>
                    <span className='text-[#41A85F]'>KIDS</span>
                    <span className='text-[#2C82C9]'>MINISTRY!</span>
                </h1>

                {/* <p className='text-lg md:text-xl'>We have a three step process to become a member at Issaquah Christian Church:</p> */}

                <hr className='border border-[var(--border-color-3)]' />

            </section>


            <div className='flex flex-col gap-12 md:gap-4 md:flex-row text-lg md:text-xl'>

                <div className="flex flex-col gap-8">
                    <p>The Main Worship Services are kid-friendly. We also have a great Kids Ministry at 10:30am. All children will check in at the Worship Center and enjoy worship with their parents. They will then be dismissed to their classes for age appropriate fun and learning. Parents will pick them up, in class, at the end of the service. We have a class for 2 years - Kindergarten and a class for 1st - 5th graders.</p>

                    <p><span className='font-semibold'>We will not be able to provide nursery at this time.</span> <span className='italic'>We do, however,</span> provide a crying room with a sermon monitor in the ladies room, if needed.</p>

                    <p>If you have any questions please contact us at <a href="mailto:office@issaquah.cc" className='text-[var(--font-active-color)]'>office@issaquah.cc</a></p>
                </div>

                <div className='max-w-[300px] min-w-[300px] h-[300px] mx-auto'>
                    <ProgressiveImage src={whale} placeholder={''}>
                        {(src, loading) => (
                            <img
                                src={src}
                                alt={'Staff Member'}
                                className={`w-full h-full duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                            />
                        )}
                    </ProgressiveImage>
                </div>
            </div>

        </PageWrapper>
    )
}

export default Kids