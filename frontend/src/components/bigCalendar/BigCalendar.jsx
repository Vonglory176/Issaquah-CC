import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getCalendarEventsHook } from '../../hooks/calendarHooks'
import CalendarEvent from '../calendarEvent/CalendarEvent'
import Spinner from '../spinner/Spinner'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [events, setEvents] = useState([])
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const fetchEvents = async (startDate, endDate) => {
        try {
            setIsLoading(true)

            const response = await getCalendarEventsHook({ timeMin: startDate.toISOString(), timeMax: endDate.toISOString(), maxResults: 1000 })
            const { items } = response.data

            const formattedEvents = items.map(event => {

                const startTime = new Date(event.start.dateTime || event.start.date)
                    .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    .replace(/^0/, '') // Remove leading zero

                const endTime = new Date(event.end.dateTime || event.end.date)
                    .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    .replace(/^0/, '') // Remove leading zero

                const startDate = new Date(event.start.dateTime || event.start.date).toLocaleDateString()
                const endDate = new Date(event.end.dateTime || event.end.date).toLocaleDateString()

                // const htmlTitle = <div><span className='text-xs'>{startTime}</span> <span>{event.summary}</span></div>

                return ({
                    title: event.summary, // htmlTitle, // 
                    start: new Date(event.start.dateTime || event.start.date),
                    end: new Date(event.end.dateTime || event.end.date),

                    // ...event,

                    summary: event.summary,
                    location: event.location,
                    description: event.description, // Add description
                    creatorEmail: event.creator.email, // Add creator's email
                    organizerEmail: event.organizer.email, // Add organizer's email
                    organizerName: event.organizer.displayName, // Add organizer's display name
                    htmlLink: event.htmlLink, // Add link to the event
                    // status: event.status, // Add event status
                    // transparency: event.transparency, // Add transparency
                    // iCalUID: event.iCalUID, // Add iCalUID
                    // sequence: event.sequence, // Add sequence
                    // eventType: event.eventType // Add event type
                    
                    startTime: startTime,
                    endTime: endTime,
                    startDate: startDate,
                    endDate: endDate,
                    
                })
            })
            setEvents(formattedEvents)
            setIsLoading(false)

        } catch (error) {
            console.error('Error fetching events:', error)
        }
    }

    useEffect(() => {
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
        fetchEvents(startOfMonth, endOfMonth)
    }, [currentDate])

    const handleSelectEvent = (event) => {
        setSelectedEvent(event)
    }

    const closeModal = () => {
        setSelectedEvent(null)
    }

    return (
        <div style={{ height: 600 }} className='big-calendar'>

            {isLoading && <Spinner className='z-10' />}

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                onNavigate={date => setCurrentDate(date)}
                onSelectEvent={handleSelectEvent}
            />

            <CalendarEvent event={selectedEvent} onClose={closeModal} />
        </div>
    )
}

export default BigCalendar
