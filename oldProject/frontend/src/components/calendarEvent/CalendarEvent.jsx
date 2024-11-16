// import React from 'react'
// import { FaTimes } from 'react-icons/fa'

// const CalendarEvent = ({ event, onClose }) => {
//     if (!event) return null

//     console.log(event)

//     return (
//         <div className="modal calendar-event">

//             <div className="modal-overlay" onClick={onClose}></div>

//             <div className="modal-content flex flex-col gap-4 relative">

//                 <div className="modal-content-wrapper">

//                     <div className="modal-header relative">
//                         <h2 className='mr-[50px] md:mx-[50px] md:text-center md:text-3xl'>{event.title}</h2>

//                         <button onClick={onClose} className='w-10 max-h-10 absolute right-0 top-0 bottom-0' aria-label='Close the calendar event modal' >
//                             <FaTimes size={24} className="cursor-pointer mx-auto" />
//                         </button>
//                     </div>

//                     <hr />

//                     <div className={`calendar-event-details px-4 ${event.description ? '' : 'text-center'}`}>
//                         {event.startDate && <p><strong>Day:</strong> {event.startDate}</p>}
//                         {event.startTime && event.endTime && <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>}
//                         {event.location && <p><strong>Location:</strong> {event.location}</p>}
//                         {/* {event.organizerName && <p><strong>Organizer:</strong> {event.organizerName}</p>} */}
//                     </div>

//                     {event.description && <hr />}

//                     {event.description && <div className='calendar-event-description px-4' dangerouslySetInnerHTML={{ __html: event.description }} />}

//                     <hr />

//                     <div className='calendar-event-links flex flex-col gap-2 px-4 text-center'>
//                         <a href={event.htmlLink} target="_blank" rel="noopener noreferrer" aria-label='Redirect to view event in Google Calendar'>View in Google Calendar</a>
//                         <a href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${event.title}&dates=${event.startDate}T${event.startTime}Z/${event.endDate}T${event.endTime}Z`} target="_blank" rel="noopener noreferrer" aria-label='Redirect to add event to Google Calendar'>Add to Google Calendar</a>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CalendarEvent
