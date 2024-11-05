import React from 'react'
import PageWrapper from '../../components/pageWrapper/PageWrapper'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <PageWrapper name='not-found' className='flex flex-1 flex-col gap-8'
            metaSettings={{
                title: 'Page Not Found',
                description: 'The page you are looking for does not exist.'
            }}
        // bannerSettings={{
        //     // image: {
        //     //     large: '',
        //     //     small: '',
        //     //     className: 'object-top h-[100svh]'
        //     // },
        //     text: {
        //         heading: 'Page Not Found',
        //         subheading: 'The page you are looking for does not exist.',
        //         // className: ''
        //     }
        // }}
        >

            <section className='flex flex-1 flex-col justify-center items-center gap-4 absolute inset-0 w-[500px] max-w-[100%] mx-auto'>

                <h1 className='text-4xl md:text-5xl'>Page Not Found</h1>
                <p className='text-[var(--font-color-4)] mb-2'>The page you are looking for does not exist.</p>

                <hr className='max-w-[350px] md:max-w-[400px]' />

                <Link to='/' className='mt-4'>
                    <button className='w-fit px-4 py-2 rounded-lg font-semibold border-2 border-[var(--button-hover-background-color)] bg-[var(--button-background-color)] text-[var(--button-text-color)] hover:bg-[var(--button-hover-background-color)] hover:text-[var(--font-color-2)] hover:no-underline'>Return to Home</button>
                </Link>

            </section>

        </PageWrapper>
    )
}

export default NotFound
