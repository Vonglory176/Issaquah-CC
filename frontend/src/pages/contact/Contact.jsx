import React, { useState } from 'react'
import PageWrapper from '../../components/pageWrapper/PageWrapper'
import Spinner from '../../components/spinner/Spinner'

const Contact = () => {
    const [mapLoaded, setMapLoaded] = useState(false)
    return (
        <PageWrapper name='contact' className='flex flex-col gap-12 mx-auto text-center' maxWidth='max-w-[800px]'
            metaSettings={{
                title: 'Contact',
                description: 'Get in touch with us by phone, email, or mailing address.'
            }}
            bannerSettings={{
                text: {
                    heading: "Contact Us",
                    // subheading: ""
                }
            }}>


            {/* <hr className='border border-[var(--border-color-3)]' /> */}

            <div className="flex flex-col gap-4">
                <h2 className='font-bold'>Mailing Address</h2>

                <p>P.O. Box 1028, Issaquah, WA 98027</p>
            </div>

            <div className="flex flex-col gap-4 max-w-[600px] mx-auto">
                <h2 className='font-bold'>Prayer Requests</h2>

                <p>If you have a prayer request, please contact us at <a href="mailto:office@issaquah.cc" target='_blank' rel='noopener noreferrer' aria-label="Email the ICC office" title="Email the ICC office" >office@issaquah.cc</a> and we will send it to our prayer team.</p>
            </div>

            <div className="map-container shadow-md rounded-lg overflow-hidden bg-white h-[300px] sm:h-[400px] md:h-[500px]" style={{ width: '100%', position: 'relative', margin: '20px auto' }}>

                {!mapLoaded && <Spinner />}

                <div className="google-map" style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                    <iframe
                        title="Google Map"
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=10328%20Issaquah-Hobart%20Rd%20SE%2C%20Issaquah%2C%20WA%2C%2098027&zoom=15`}
                        aria-label="Google Map"
                        style={{ width: '100%', height: '100%', minHeight: 'inherit', border: '0' }}
                        onLoad={() => setMapLoaded(true)}
                    />
                </div>
            </div>

            {/* <div className="map-container">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDBKKt_i8IgCGNJ6lznj6PdJb4BOvJM7dY&amp;q=10328%20Issaquah-Hobart%20Rd%20SE%2C%20Issaquah%2C%20WA%2C%2098027&amp;zoom=15" aria-label="Google Map" style={{ width: '100%', height: '100%', minHeight: 'inherit', border: '0px' }}></iframe>
            </div> */}

        </PageWrapper>
    )
}

export default Contact
