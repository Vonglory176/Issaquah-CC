import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'

const Beliefs = () => {
    return (
        <PageWrapper name='beliefs' className='flex flex-col gap-8'
            metaSettings={{
                title: 'What We Believe',
                description: 'Our nine core beliefs-about God, People, the Church, the Bible and Christ\'s return-are the foundation of this church. There are, of course, many other aspects of our faith and practice that are important to emphasize, but these essentials must be first in our hearts and in our church.'
            }}
            bannerSettings={{
                // image: {
                //     large: '',
                //     small: '',
                //     className: 'object-top h-[100svh]'
                // },
                text: {
                    heading: 'What We Believe',
                    // className: ''
                }
            }}>

            <section className="beliefs-icc">

                <h2 className=''>ICC Beliefs</h2>

                {/* <p className='sm:text-lg md:text-xl'>Our nine core beliefs-about God, People, the Church, the Bible and Christ's return-are the foundation of this church. There are, of course, many other aspects of our faith and practice that are important to emphasize, but these essentials must be first in our hearts and in our church.</p> */}
                <p>Our nine core beliefs-about God, People, the Church, the Bible and Christ's return-are the foundation of this church. There are, of course, many other aspects of our faith and practice that are important to emphasize, but these essentials must be first in our hearts and in our church.</p>


                <div className="">
                    <p className='italic text-[var(--font-color-4)]'>"In essentials, unity; In non-essentials, liberty; In all things, charity."</p>
                    <hr className='border border-[var(--border-color-3)]' />
                </div>

            </section>

            <section className="beliefs-God">

                <h2 className=''>God</h2>

                <ul>
                    <li>
                        <p><span className='font-semibold'>#1</span> There is one living, sovereign God who eternally exists in three persons: Father, Son and Holy Spirit.</p>

                        <p className='text-sm md:text-base text-[var(--font-color-4)]'>(Deuteronomy 6:4; Revelation 1:8; Psalm 90:2; Matthew 28:19; 1 Peter 1:2)</p>
                    </li>

                    <li>
                        <p><span className='font-semibold'>#2</span> Jesus, the second person of the Trinity, took on flesh and was therefore truly God and truly human. Jesus lived among us without sin, laid down His life to save us, and after three days rose from the grave. Jesus then ascended to heaven.</p>

                        <p className='text-sm md:text-base text-[var(--font-color-4)]'>(Luke 1:35; John 1:1,14; Acts 1:9; Romans 1:3-4; 1 Corinthians 15:3-5; 2 Corinthians 5:21; Hebrews 4:15)</p>
                    </li>

                    <li>
                        <p><span className='font-semibold'>#3</span> The Holy Spirit, the third person of the Trinity, was sent by the Father and Son to convict the world of sin and to empower all who believe in Jesus Christ. He lives in every believer and is a constant Helper, Teacher and Guide.</p>

                        <p className='text-sm md:text-base text-[var(--font-color-4)]'>(John 14:16-17; John 16:7-13; Acts 1:8; Acts 2:38, 1 Corinthians 2:12; 1 Corinthians 3:16; Ephesians 1:13; Galatians 5:25; Ephesians 5:18)</p>
                    </li>
                </ul>

            </section>

            <section className="beliefs-people">

                <h2 className=''>People</h2>

                <ul>
                    <li>
                        <p><span className='font-semibold'>#4</span> God created humans in His image, and everyone matters to God.</p>

                        <p className='text-sm md:text-base text-[var(--font-color-4)]'>(Genesis 1:26-27; Genesis 5:1-2; John 4:24; Colossians 3:10; Ephesians 4:24)</p>
                    </li>

                    <li>
                        <p><span className='font-semibold'>#5</span> All people are sinners and need God's forgiveness.</p>

                        <p className='text-sm md:text-base text-[var(--font-color-4)]'>(Romans 3:23; Romans 5:12-21; 1 Corinthians 15:21-22)</p>
                    </li>

                    <li>
                        <p><span className='font-semibold'>#6</span> Those who confess and turn from their sin, trusting in Jesus Christ, will be saved by grace and become children of God, with the promise of eternal life. Water baptism marks the new life in Christ.</p>

                        <p className='text-sm md:text-base text-[var(--font-color-4)]'>(John 3:16-17; Romans 5:1; Romans 6:4; 2 Corinthians 5:20-21; Ephesians 2:8-9, Galatians 3:26)</p>
                    </li>
                </ul>



            </section>

            <section className="beliefs-faith">

                <h2 className=''>The Church, the Bible, and Christ's Return</h2>

                <ul>
                    <li>
                        <p><span className='font-semibold'>#7</span> Jesus Christ is head of the church and all believing people are members.</p>

                        <p className='text-sm md:text-base text-[var(--font-color-4)]'>(Matthew 16:13-20; Ephesians 4:15-16; Colossians 1:15-20; Revelation 1-3)</p>
                    </li>

                    <li>
                        <p><span className='font-semibold'>#8</span> The Bible is the inspired Word of God and is the supreme authority in all matters of faith and conduct.</p>

                        <p className='text-sm md:text-base text-[var(--font-color-4)]'>(2 Timothy 3:16-17; 2 Peter 1:20-21)</p>
                    </li>

                    <li>
                        <p><span className='font-semibold'>#9</span> Jesus Christ will return and there will be a final judgment.</p>

                        <p className='text-sm md:text-base text-[var(--font-color-4)]'>(John 14:3; Philippians 3:20-21; 1 Thessalonians 4:13-18; Hebrews 9:27-28)</p>
                    </li>
                </ul>

            </section>

        </PageWrapper>
    )
}

export default Beliefs
