import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import calendarImage from '../../../assets/images/backgrounds/calendar.webp'
import calendarImageSmall from '../../../assets/images/backgrounds/calendar-small.webp'
import BigCalendar from '../../../components/bigCalendar/BigCalendar'

const Calendar = () => {
    return (
        <PageWrapper name='calendar' className='flex flex-col gap-8' bannerSettings={{
            image: {
                large: calendarImage,
                small: calendarImageSmall,
                className: ''
            },
            text: {
                heading: 'Church Calendar',
                // className: ''
            }
        }}>

            <BigCalendar />

        </PageWrapper>
    )
}

export default Calendar
