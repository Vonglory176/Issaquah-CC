import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import womensGroup from '../../../assets/images/backgrounds/womens-group.webp'
import womensGroupSmall from '../../../assets/images/backgrounds/womens-group-small.webp'

const Women = () => {
    return (
        <PageWrapper name='women' className='flex flex-col gap-8 text-center' maxWidth="max-w-[800px]" bannerSettings={{
            image: {
                large: womensGroup,
                small: womensGroupSmall,
                className: 'object-top h-full'
            },
            text: {
                heading: "Women's Ministry",
            }
        }}>

            <h2 className='text-3xl font-bold'>Welcome to The ICC Womens Ministry</h2>

            <div className="flex flex-col gap-8">
                <p>By seeking God's word and direction, ICC Women's Ministry exists for the purpose of nurturing, encouraging, and equipping the women of the church. We pray that through scripture study, prayer and walking alongside one another, we can help women emotionally and spiritually grow in their faith in Christ and live out their full purpose in God's Kingdom.</p>

                <p>Be sure to look at the Church Calendar for times & dates of women's activities, including Women's Bible Study dates. You can reach us at <a href="mailto:women@issaquah.cc" className='text-[var(--font-active-color-1)]'>women@issaquah.cc</a>.</p>
            </div>

        </PageWrapper>
    )
}

export default Women
