import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'

const Employment = () => {
    return (
        <PageWrapper name='employment' className='flex flex-col gap-8'
            metaSettings={{
                title: 'Employment',
                description: 'Do you love Jesus and his church? Do you align with our beliefs? Join the staff team at ICC. We have energetic teams already in place to support you in your new position.'
            }}
            bannerSettings={{
                text: {
                    heading: "Employment Opportunities",
                    // subheading: ""
                }
            }}>

            <section>

                <h2 className='font-bold flex gap-2 flex-wrap'>Become a Part of ICC</h2>

                <p className=''>Do you love Jesus and his church? Do you align with our beliefs? Join the staff team at ICC. We have energetic teams already in place to support you in your new position.</p>

                <hr className='border border-[var(--border-color-3)]' />

            </section>

            <div className="flex flex-col gap-8 ">

                <div>
                    <p>Issaquah Christian Church:</p>
                    <ul className=' list-disc pl-4 ml-4 sm:ml-6'>
                        <li>
                            <p><a href="https://d2114hmso7dut1.cloudfront.net/customers/e1c3587e-f418-11ed-8082-0614187498c1/sites/e1d55182-f418-11ed-a778-0614187498c1/files/7654bb22-f419-11ed-a9da-0614187498c1/original/file.pdf" target='_blank' rel='noopener noreferrer' className='text-[var(--font-active-color-1)]'>P/T Bookkeeper Wanted</a> $20-$25/hr</p>
                        </li>
                        <li>
                            <p><a href="https://d2114hmso7dut1.cloudfront.net/customers/e1c3587e-f418-11ed-8082-0614187498c1/sites/e1d55182-f418-11ed-a778-0614187498c1/files/76d60754-f419-11ed-9b58-0614187498c1/original/file.pdf" target='_blank' rel='noopener noreferrer' className='text-[var(--font-active-color-1)]'>P/T Janitor Needed <span className='font-semibold'>ASAP</span></a> $20/hr</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>Our friends at Vine Maple Place are seeking to hire as well:</p>
                    <ul className=' list-disc pl-4 ml-4 sm:ml-6'>
                        <li>
                            <p><a href="https://d2114hmso7dut1.cloudfront.net/customers/e1c3587e-f418-11ed-8082-0614187498c1/sites/e1d55182-f418-11ed-a778-0614187498c1/files/776c1b22-f419-11ed-a3a5-0614187498c1/original/file.pdf" target='_blank' rel='noopener noreferrer' className='text-[var(--font-active-color-1)]'>Housing Stability Specialist</a></p>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>Our local vendors:</p>
                    <ul className=' list-disc pl-4 ml-4 sm:ml-6'>
                        <li>
                            <p><a href="https://d2114hmso7dut1.cloudfront.net/customers/e1c3587e-f418-11ed-8082-0614187498c1/sites/e1d55182-f418-11ed-a778-0614187498c1/files/776c1b22-f419-11ed-a3a5-0614187498c1/original/file.pdf" target='_blank' rel='noopener noreferrer' className='text-[var(--font-active-color-1)]'>Costco Club Demonstration Services</a></p>
                        </li>
                    </ul>
                </div>
            </div>

        </PageWrapper>
    )
}

export default Employment
