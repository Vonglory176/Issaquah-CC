import PageWrapper from '@/src/components/pageWrapper/PageWrapper'
import VideoContainer from '@/src/components/videoContainer/VideoContainer'
import Image from 'next/image'

import backgroundImage from '@/src/assets/images/backgrounds/woman-with-hands-up.webp'
// import backgroundImageSmall from '@/src/assets/images/backgrounds/woman-with-hands-up-small.webp'

const Home = () => {

  const imageBlur = async () => await fetch(
    `${backgroundImage}`
  ).then(async (res) => {
    return Buffer.from(await res.arrayBuffer()).toString("base64");
  })

  return (
    <PageWrapper name='home' className=''
      metaSettings={{
        title: 'Home',
        // description: 'Teaching Biblical life applications as you learn to follow Jesus.'
      }}
    >

      {/* Landing Section */}
      <section className="landing relative p-4">

        {/* Background Image */}
        {/* <ProgressiveImage src={backgroundImage} placeholder={backgroundImageSmall}>
          {(src, loading) => (
            <img
              src={src}
              alt={'Issaquah Christian Church Logo'}
              className={`landing-background-image absolute inset-0 w-full h-full object-cover object-[20%] duration-300 ${loading ? 'blur-sm' : 'blur-0'}`}
            />
          )}
        </ProgressiveImage> */}

        <Image
          src={backgroundImage}
          alt='Issaquah Christian Church Logo'
          placeholder='blur'
          blurDataURL={`data:image/png;base64,${imageBlur}`}
          fill
          // layout='fill'
          // objectFit='cover'
          // objectPosition='20%'
          className='landing-background-image absolute inset-0 w-full h-full object-cover object-[20%] duration-300'
        />

        {/* Content Container */}
        <div className="landing-content flex flex-col flex-1 justify-center gap-8 h-full mx-auto max-w-[608px] lg:ml-[50%] lg:max-w-[708px]">

          {/* Welcome Text */}
          <div className="landing-welcome-text text-white text-center flex flex-col gap-4 rounded-lg bg-[#F7F7F7]/50 p-4 shadow-lg border-2">
            <h1 className="text-3xl font-bold lg:text-4xl"><span>Welcome to Issaquah</span> <span className='whitespace-nowrap'>Christian Church</span></h1>
            <p className="text-xl flex flex-col lg:text-2xl">
              <span>Teaching Biblical life applications</span>
              <span>as you learn to follow Jesus.</span>
            </p>
          </div>

          {/* Video */}
          {/* <VideoContainer src="https://www.canva.com/design/DAD2KnH2kKQ/watch?embed" className='bg-[#F7F7F7]/50' /> */}

        </div>

      </section>

    </PageWrapper>
  )
}

export default Home