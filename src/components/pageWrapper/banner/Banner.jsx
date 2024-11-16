import ProgressiveImage from 'react-progressive-graceful-image'

import wheatField from '@/src/assets/images/backgrounds/wheat-field.webp'
import wheatFieldSmall from '@/src/assets/images/backgrounds/wheat-field-small.webp'
// import { useSiteContext } from '@/src/context/SiteContext'


const Banner = ({
    image = {
        large: wheatField,
        small: wheatFieldSmall,
        className: 'object-top h-[100svh]'
    },
    text = {
        heading: '', // 'Prayer Requests',
        subheading: '', // 'Please enter your information and requests below. If the form does not work or you are having trouble filling it out, please email us directly at office@issaquah.cc.',
        className: ''
    }
}) => {
    const { screenWidth, screenScrollY } = useSiteContext()

    // const [scrollY, setScrollY] = useState(0)
    // const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

    const isDesktop = screenWidth >= 1024


    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY)
    //     }

    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

    // Move to Context later !!! (Currently running for EVERY dropdown)
    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsDesktop(window.innerWidth >= 1024)
    //     }

    //     window.addEventListener('resize', handleResize)
    //     return () => window.removeEventListener('resize', handleResize)
    // }, [])

    return (

        <div className="banner min-h-[300px] bg-[#FA8072] px-4 py-[80px] overflow-hidden relative flex justify-center items-center text-center border-b-2 border-[var(--border-color-2)]"> {/* shadow-[0_-10px_10px_-5px_rgba(0,0,0,0.3)] */}

            {/* Banner - Background Image */}
            {/* <ProgressiveImage src={image?.large || wheatField} placeholder={image?.small || wheatFieldSmall}>
                {(src, loading) => (
                    <img
                        src={src}
                        alt={''}
                        className={`banner-image ${image?.className || 'object-top h-[100svh]'} ${loading ? 'blur-sm' : 'blur-0'}`}
                        style={isDesktop ? { transform: `translate3d(0, ${screenScrollY * 0.5}px, 0)` } : {}}
                    />
                )}
            </ProgressiveImage> */}

            <div className="banner-overlay" />

            {/* Banner - Text */}
            <div className="banner-text relative z-10 text-[var(--font-color-3)]">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{text.heading}</h1>
                <p className="text-2xl">{text.subheading}</p>
            </div>

        </div>
    )
}

export default Banner
