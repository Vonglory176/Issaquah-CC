import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import VideoContainer from '../../../components/videoContainer/VideoContainer'

const Bulletin = () => {
  return (
    <PageWrapper name='bulletin' className='flex flex-col gap-8'>

      <section className='flex flex-col gap-4'>

        <h1 className='text-3xl font-bold'>Church Bulletin</h1>

        <hr className='border border-[var(--border-color-3)]' />

      </section>


      <div className='flex flex-col gap-4'>

        <VideoContainer src="https://www.canva.com/design/DAD2KnH2kKQ/watch?embed" className='' />

        <a
          href="https://www.canva.com/design/DAD2KnH2kKQ/view?utm_content=DAD2KnH2kKQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
          className='w-fit text-[var(--font-active-color)]'
        >
          ICC Bulletin Slide Show
        </a>

      </div>

      <hr className='border border-[var(--border-color-3)]' />

      <div className='max-w-[600px] text-center mx-auto flex flex-col items-center gap-4 text-lg'>
        <p>All of our bulletins are stored here at Faithlife and include sermon slides along with all other presentation content from each week we gather.</p>

        <a 
          href="https://faithlife.com/issaquahcc/bulletins"
          target='_blank'
          rel='noopener'
          className='w-fit px-2 py-1 rounded-lg font-semibold border-2 border-[var(--button-hover-background-color)] bg-[var(--button-background-color)] text-[var(--button-text-color)] hover:bg-[var(--button-hover-background-color)] hover:text-[var(--font-color-2)]'
        >
          Get the Current Bulletin
        </a>
      </div>

    </PageWrapper>
  )
}

export default Bulletin
