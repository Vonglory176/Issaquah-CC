import axios, { AxiosError } from "axios"

// CALENDAR HOOKS ////////////////////////////////////////////////////////////////////////////////////////////////

// Get Calendar Events
export const getCalendarEventsHook = async ({timeMin, timeMax, maxResults=1000}) => {
    try {
        // Building the URL
        const baseUrl = 'https://www.googleapis.com/calendar/v3/calendars/c_4c6894481bbb1acf540b9797a51d2117b0dbb1a0888a3cb3c9b7ab6ea0d81581%40group.calendar.google.com/events?'
        const completeUrl = baseUrl + `key=${process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY}` + '&singleEvents=True' + `&timeMin=${timeMin}` + `&timeMax=${timeMax}` + `&maxResults=${maxResults}`
        
        // Fetching the data
        const response = await axios.get(completeUrl)
        console.log(response)

        return response
        
    } catch (error) {
        console.error("ERROR: Could not get calendar events")
        console.log(error)

        return error.response
    }
}