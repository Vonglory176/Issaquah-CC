import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import VideoContainer from '../../../components/videoContainer/VideoContainer'
// import ProgressiveImage from 'react-progressive-graceful-image'

const Outreach = () => {
    return (
        <PageWrapper name='outreach' className='flex flex-col gap-12'
            metaSettings={{
                title: 'Outreach',
                description: 'In addition to our regular, ongoing efforts to share the gospel through the services and ministries of Issaquah Christian Church, we are also involved in various missions that operate both locally and abroad.'
            }}
            bannerSettings={{
                text: {
                    heading: "Outreach"
                }
            }}>

            <section>

                <h2 className='font-bold flex gap-2 flex-wrap'>Global and Local Outreach</h2>

                <p className=''>In addition to our regular, ongoing efforts to share the gospel through the services and ministries of Issaquah Christian Church, we are also involved in various missions that operate both locally and abroad.</p>

                <hr className='border border-[var(--border-color-3)]' />

            </section>

            <div className='flex flex-col gap-4 md:flex-row md:justify-evenly'>

                <div>
                    <p className='font-semibold'>Local Missions:</p>
                    <ul className=' list-disc pl-4 ml-4 sm:ml-6'>
                        <li>
                            <a href="http://www.ugm.org/site/PageServer?pagename=default" target='_blank' rel='noopener noreferrer' >Seattle Union Gospel Mission</a>
                        </li>
                        <li>
                            <a href="https://www.issaquahfoodbank.org/" target='_blank' rel='noopener noreferrer'>Issaquah Food and Clothing Bank</a>
                        </li>
                        <li>
                            <a href="mailTo:office@issaquah.cc" target='_blank' rel='noopener noreferrer'>Issaquah Hot Meal Program</a>
                        </li>
                        <li>
                            <a href="https://www.pleasantvalleycamp.org/" target='_blank' rel='noopener noreferrer'>Pleasant Valley Christian Camp</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/EtI7Wncy7uk" target='_blank' rel='noopener noreferrer'>Arnold and Justin Corsiga (Philippines)</a>
                        </li>
                        <li>
                            <a href="http://www.goincmissions.org/" target='_blank' rel='noopener noreferrer'>GO Inc. Missions</a>
                        </li>
                        <li>
                            <a href="https://www.issaquah.cc/outreach#:~:text=International%20Disaster%20Emergency%20Services%20(IDES)" target='_blank' rel='noopener noreferrer'>International Disaster Emergency Services (IDES)</a>
                        </li>
                        <li>
                            <a href="https://www.issaquah.cc/outreach#:~:text=Global%20Vision%20Citadelle%20Ministries" target='_blank' rel='noopener noreferrer'>Global Vision Citadelle Ministries</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className='font-semibold'>International Missions:</p> {/* <p>Short term trips to:</p> */}
                    <ul className=' list-disc pl-4 ml-4 sm:ml-6'>
                        <li>
                            <a href="mailTo:office@issaquah.cc" target='_blank' rel='noopener noreferrer'>Mexico</a>
                        </li>
                        <li>
                            <a href="mailTo:office@issaquah.cc" target='_blank' rel='noopener noreferrer'>Haiti</a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className='border border-[var(--border-color-3)]' />

            <div className='flex flex-col items-center gap-4  text-center'>
                <div className='flex flex-col gap-4'>
                    <p className='font-semibold'>Send us a note here if you are interested in finding out how to support these mission endeavors.</p>
                    <p>Each year, Issaquah Christian Church has an opportunity to spread the Gospel through fundraising for missions trips to Mexico and Haiti through the sales of Christmas trees (November-December).</p>
                </div>

                <a
                    href="https://onedrive.live.com/edit.aspx?resid=99E8EB42333EFA02!174497&ithint=file%2cxlsx&wdo=2&authkey=!AhFiZ6jpKu4TNF8"
                    target='_blank'
                    rel='noopener'
                    className='w-fit px-3 py-2 mt-2 rounded-lg font-semibold border-2 border-[var(--button-hover-background-color)] bg-[var(--button-background-color)] text-[var(--button-text-color)] hover:bg-[var(--button-hover-background-color)] hover:text-[var(--font-color-2)] hover:no-underline'
                >
                    Sign Up for Help at the Tree Lot
                </a>
            </div>

            <hr className='border border-[var(--border-color-3)]' />

            <VideoContainer src="https://www.youtube.com/embed/ZmjyPM44Um0?playsinline=1&modestBranding=1&rel=0&autoplay=false&enablejsapi=1&origin=https%3A%2F%2Fwww.issaquah.cc&widgetid=1" />

            <VideoContainer src="https://www.youtube.com/embed/jlq0LIYFHBA?playsinline=1&modestBranding=1&rel=0&autoplay=false&enablejsapi=1&origin=https%3A%2F%2Fwww.issaquah.cc&widgetid=2" />

        </PageWrapper>
    )
}

export default Outreach
