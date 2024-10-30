import React, { useEffect, useRef, useState } from 'react'
import ModalWrapper from '../../components/modalWrapper/ModalWrapper'
import ReCAPTCHA from 'react-google-recaptcha'
import Spinner from '../../components/spinner/Spinner'
import { useSiteContext } from '../../context/SiteContext'

const ReCaptchaModal = ({ submissionCallback }) => {
    const [wasVerified, setWasVerified] = useState(false)
    const { hideModal } = useSiteContext()
    const recaptchaRef = useRef(null)

    // const recaptchaResponse = recaptchaRef?.current?.getValue() || ''

    useEffect(() => {
        if (recaptchaRef.current) {
            recaptchaRef.current.reset()
        }
    }, [])

    useEffect(() => {
        if (wasVerified) {
            const timer = setTimeout(() => {
                hideModal()
            }, 500)

            return () => clearTimeout(timer) // Cleanup the timeout if the component unmounts or dependencies change
        }
    }, [wasVerified, hideModal])


    const handleRecaptchaChange = (value) => {
        if (value) {
            const recaptchaResponse = recaptchaRef.current.getValue()
            submissionCallback(recaptchaResponse)


            setWasVerified(true)
            // hideModal()
        }
    }

    return (
        <ModalWrapper className='re-captcha' title='ReCaptcha Verification'>

            {/* {wasVerified &&

                <>
                    <p className='text-center text-3xl text-green-500 font-semibold'>Success!</p>
                    <p className='text-center text-lg text-[var(--font-color-4)]'>You may now close this modal</p>
                </>
            } */}

            <div className={`flex items-center justify-center relative min-h-[78px]`}> {/*  ${wasVerified ? 'hidden' : ''} */}

                <Spinner />

                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    onChange={handleRecaptchaChange}
                    className='mx-auto z-10'
                />
            </div>

        </ModalWrapper>
    )
}

export default ReCaptchaModal
