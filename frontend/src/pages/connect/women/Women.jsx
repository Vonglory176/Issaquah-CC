import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'

const Women = () => {
    return (
        <PageWrapper name='women' className='flex flex-col gap-8'>

            <section>

                <h1 className='text-3xl font-bold flex gap-2 flex-wrap'>Women's Ministry</h1>

                {/* <p className='text-lg md:text-xl'>We have a three step process to become a member at Issaquah Christian Church:</p> */}

                <hr className='border border-[var(--border-color-3)]' />

            </section>

            <div className="flex flex-col gap-8 text-lg md:text-xl">
                <p>By seeking God's word and direction, ICC Women's Ministry exists for the purpose of nurturing, encouraging, and equipping the women of the church. We pray that through scripture study, prayer and walking alongside one another, we can help women emotionally and spiritually grow in their faith in Christ and live out their full purpose in God's Kingdom.</p>

                <p>Be sure to look at the Church Calendar for times & dates of women's activities, including Women's Bible Study dates. You can reach us at <a href="mailto:women@issaquah.cc" className='text-[var(--font-active-color)]'>women@issaquah.cc</a>.</p>
            </div>

        </PageWrapper>
    )
}

export default Women
