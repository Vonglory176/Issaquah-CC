import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import VideoContainer from '../../../components/videoContainer/VideoContainer'

const StocksAndCrypto = () => {
    return (
        <PageWrapper name='stocks-and-crypto' className='flex flex-col gap-8'
            metaSettings={{
                title: 'Stocks and Crypto',
                description: 'Consider using Daffy to send ICC some of your stocks with a high Cost Basis or CryptoCurrency you don\'t want to pay the high tax rate on.'
            }}
            bannerSettings={{
                text: {
                    heading: 'Alternate Ways To Be Generous',
                    subheading: 'When you need a Tax Break',
                    // className: ''
                }
            }}>

            {/* <section className='flex flex-col gap-4 text-center'>

                <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:items-baseline'>
                    <h1 className='text-3xl font-bold'>Alternate Ways To Be Generous</h1>
                    <p className='sm:text-lg md:text-xl italic text-[var(--font-color-4)] h-fit'>When you need a Tax Break</p>
                </div>

                <hr className='border border-[var(--border-color-3)]' />

            </section> */}

            <div className='flex flex-col gap-4'>
                <h2 className=''>Check out Daffy</h2>
                <p>Consider using <a href="https://daffy.org/charities/237326840" target='_blank' rel='noopener noreferrer' aria-label="Donate to ICC using Daffy" title="Donate to ICC using Daffy" >Daffy</a> to send ICC some of your stocks with a high Cost Basis or CryptoCurrency you don't want to pay the high tax rate on. <a href="https://daffy.org/charities/237326840" target='_blank' rel='noopener noreferrer' aria-label="Return to the ICC home page" title="Return to the ICC home page" >Issaquah Christian Church</a> has a page all set up and ready to receive your charitable donations. When you donate, they immediately cash it out into their Donor Advised Fund and you have it waiting to assign. They send you all the tax documents and don't charge the church any transaction fees.</p>
            </div>

            <hr />

            <VideoContainer src="https://www.youtube.com/embed/t93mpNpVgh8?si=XJzJW5K16OVqRgKL" className='' />

        </PageWrapper>
    )
}

export default StocksAndCrypto
