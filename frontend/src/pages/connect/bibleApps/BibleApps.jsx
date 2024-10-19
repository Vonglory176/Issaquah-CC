import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import { FaAndroid, FaApple } from 'react-icons/fa'

const BibleApps = () => {
    return (
        <PageWrapper name='bible-apps' className='flex flex-col gap-8'>

            <section>

                <h1 className='text-3xl font-bold flex gap-2 flex-wrap'>Recommended Bible Apps</h1>

                <p className='text-lg md:text-xl'>Download a mobile Bible app for following along during the sermon. Both use the same login information as your Faithlife account (what you use to sign into our church website).</p>

                <hr className='border border-[var(--border-color-3)]' />

            </section>

            <section>
                <h2 className='text-2xl font-bold'>Faithlife Study Bible</h2>
                <p className='text-lg md:text-xl'>The Faithlife Study Bible will help you understand the Bible more fully. It contains several layers of notes and many graphics, making it the most advanced digital study Bible anywhere.</p>

                <ul className='text-lg list-disc pl-4 ml-4'>
                    <li>
                        <a className='flex gap-2 items-center text-[var(--font-active-color)]' href='https://itunes.apple.com/us/app/faithlife-study-bible/id485998842' target='_blank' rel='noopener noreferrer'>Download for iOS <FaApple size={24} className='mt-[-5px]' /> </a>
                    </li>
                    <li>
                        <a className='flex gap-2 items-center text-[var(--font-active-color)]' href='https://play.google.com/store/apps/details?id=com.logos.androidfaithlife' target='_blank' rel='noopener noreferrer'>Download for Android <FaAndroid size={24} className='mt-[1px]' /> </a>
                    </li>
                </ul>
            </section>

            <section>
                <h2 className='text-2xl font-bold'>Logos Bible Software</h2>
                <p className='text-lg md:text-xl'>The Logos Bible Software app is the mobile version of the world's leading Bible software. This free download comes with several Bible translations and other resources, and there are more than 100,000 books related to the Bible you can buy through the app.</p>

                <ul className='text-lg list-disc pl-4 ml-4'>
                    <li>
                        <a className='flex gap-2 items-center text-[var(--font-active-color)]' href='https://itunes.apple.com/app/apple-store/id336400266' target='_blank' rel='noopener noreferrer'>Download for iOS <FaApple size={24} className='mt-[-5px]' /> </a>
                    </li>
                    <li>
                        <a className='flex gap-2 items-center text-[var(--font-active-color)]' href='https://play.google.com/store/apps/details?id=com.logos.androidlogos' target='_blank' rel='noopener noreferrer'>Download for Android <FaAndroid size={24} className='mt-[1px]' /> </a>
                    </li>
                </ul>
            </section>

            <hr className='border border-[var(--border-color-3)]' />

            <section>
                <h2 className='text-2xl font-bold'>Understanding Signals</h2>
                <p className='text-lg md:text-xl'>The Faithlife Study Bible and Logos Bible Software mobile apps both listen for Signals from the slide presentation during a service.</p>
                <p className='text-lg md:text-xl'>Announcement slides will send a calendar signal to your phone, appearing as a hyperlink at the bottom of the app. Tap it to add events to your phone's calendar. And when Bible verses appear on screen, tap the Signal link to open the reference and follow along.</p>
                <p className='text-lg md:text-xl'>You can learn more about signals here. Be sure to allow the app to use your location, and then follow our church presentation when it is presented. You only need to do this once, and you'll be connected every week!</p>
            </section>

        </PageWrapper>
    )
}

export default BibleApps
