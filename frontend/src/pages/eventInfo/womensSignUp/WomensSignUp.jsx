import React, { useEffect, useRef, useState } from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import autosize from 'autosize'
import { useSiteContext } from '../../../context/SiteContext'
import ReCaptchaModal from '../../../modals/reCaptchaModal/ReCaptchaModal'
import emailjs from 'emailjs-com'

import forestInFall from '../../../assets/images/backgrounds/forestInFall.webp'
import forestInFallSmall from '../../../assets/images/backgrounds/forestInFall-small.webp'
import OutcomeModal from '../../../modals/outcomeModal/OutcomeModal'

const WomensSignUp = () => {
    const { showModal } = useSiteContext()

    const [formData, setFormData] = useState()
    const [formErrors, setFormErrors] = useState()
    const [formSuccess, setFormSuccess] = useState(false)

    // Initialize form data
    const resetForm = () => {
        setFormData({
            firstName: '', // 'Jane',
            lastName: '', // 'Smith',
            email: '', // 'jane.smith@example.com',
            streetAddress: '', // '123 Main Street',
            cityState: '', // 'Issaquah, WA',
            zipCode: '', // '98027',
            emergencyContactName: '', // 'John Smith',
            emergencyContactPhone: '', // '123-456-7890',
            allergies: '', // 'None',
            seatingPreference: '', // 'No preference',
            attendance: '', // 'Both Days',
            paymentMethod: '', // 'Credit Card',
        })

        setFormErrors({
            firstName: false,
            lastName: false,
            email: false,
            streetAddress: false,
            cityState: false,
            zipCode: false,
            // allergies: false,
            emergencyContactName: false,
            emergencyContactPhone: false,
            // seatingPreference: false,
            attendance: false,
            paymentMethod: false,

            errorExists: false
        })
    }

    useEffect(() => {
        resetForm()
    }, [])

    // Auto-resize textarea
    const textareaRef = useRef(null)
    useEffect(() => {
        if (textareaRef.current) {
            autosize(textareaRef.current)
        }
    }, [])

    // Handle form input changes
    const handleTextChange = (e) => {
        console.log(e.target.value)
        // const fieldName = e.target.name.replace(/-/g, '')
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleRadioChange = (e) => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleReCaptchaSubmission = (e) => {
        console.log('ReCaptcha submission')
        e.preventDefault()

        showModal(<ReCaptchaModal submissionCallback={handleSubmitForm} />)
    }

    // Handle form submission
    const handleSubmitForm = (recaptchaResponse) => {
        // e.preventDefault()

        setFormSuccess(false)

        if (!recaptchaResponse) {
            alert('Something went wrong, please try again later')
            return
        }

        if (validateForm()) {

            console.log('Form is valid')

            const templateParams = {
                // to_name: 'ICC Office',
                // to_email: process.env.REACT_APP_EMAIL,

                'g-recaptcha-response': recaptchaResponse,

                templateIsWomensRetreatSignUp: true,
                formType: "Women's Retreat",

                ...formData,

                // fullname: formData.fullname,
                // email: formData.email,
                // streetAddress: formData.streetAddress,
                // cityState: formData.cityState,
                // zipCode: formData.zipCode,
                // allergies: formData.allergies,
                // emergencyContact: formData.emergencyContact,
                // seatingPreference: formData.seatingPreference,
                // attendance: formData.attendance,
                // paymentMethod: formData.paymentMethod,
            }

            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                // process.env.REACT_APP_EMAILJS_WOMENS_RETREAT_SIGN_UP_TEMPLATE_ID,
                process.env.REACT_APP_EMAILJS_PRAYER_REQUEST_TEMPLATE_ID, // Limit reached --> Combining Templates !
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text)
                    // setFormData({ email: '', subject: '', message: '' })
                    resetForm()
                    showModal(<OutcomeModal title="Email Sent" message="Thank you for signing up for the Womens Retreat. We will be in touch soon!" />)
                    // showModal(<OutcomeModal success={true} message="Message sent successfully, we'll be in touch soon!" />)

                    // setFormSuccess("Message sent successfully, thank you for contacting me!")

                }, (error) => {
                    console.log('FAILED...', error)
                    showModal(<OutcomeModal title="Something Went Wrong" message="We were unable to send your Womens Retreat sign up request. Please try again later or contact us directly at office@issaquah.cc." />)
                    // showModal(<OutcomeModal success={false} message="Something went wrong, your email was not sent. Please try again later" />)

                    // setFormErrors({ ...formErrors, general: "Something went wrong, please try again later", errorExists: true })
                })

            setFormSuccess(true)

        } else {
            console.error('Form is invalid')
            setFormSuccess(false)
        }
    }

    // For form validation
    const validateForm = () => {
        const { email, subject, message } = formData
        console.log(email, subject, message)

        // const fullNameValid = Boolean(formData.fullName.trim())
        const firstNameValid = Boolean(formData.firstName.trim())
        const lastNameValid = Boolean(formData.lastName.trim())
        const emailValid = Boolean(email.trim())
        const streetAddressValid = Boolean(formData.streetAddress.trim())
        const cityStateValid = Boolean(formData.cityState.trim())
        const zipCodeValid = Boolean(formData.zipCode.trim())
        // const allergiesValid = Boolean(formData.allergies.trim())
        const emergencyContactNameValid = Boolean(formData.emergencyContactName.trim())
        const emergencyContactPhoneValid = Boolean(formData.emergencyContactPhone.trim())
        // const seatingPreferenceValid = Boolean(formData.seatingPreference)
        const attendanceValid = Boolean(formData.attendance)
        const paymentMethodValid = Boolean(formData.paymentMethod)

        const errorCheck = firstNameValid && lastNameValid && emailValid && streetAddressValid && cityStateValid && zipCodeValid && emergencyContactNameValid && emergencyContactPhoneValid && attendanceValid && paymentMethodValid

        console.log(errorCheck)

        setFormErrors({
            firstName: firstNameValid ? false : "First name cannot be blank",
            lastName: lastNameValid ? false : "Last name cannot be blank",
            email: emailValid ? false : "Email cannot be blank",
            streetAddress: streetAddressValid ? false : "Street address cannot be blank",
            cityState: cityStateValid ? false : "City, State cannot be blank",
            zipCode: zipCodeValid ? false : "Zip code cannot be blank",
            emergencyContactName: emergencyContactNameValid ? false : "Emergency contact name cannot be blank",
            emergencyContactPhone: emergencyContactPhoneValid ? false : "Emergency contact phone cannot be blank",
            // seatingPreference: seatingPreferenceValid ? false : "Required", // "Seating preference cannot be blank",
            attendance: attendanceValid ? false : "Required", // "Attendance cannot be blank",
            paymentMethod: paymentMethodValid ? false : "Required", // "Payment method cannot be blank",
            errorExists: !errorCheck
        })

        return errorCheck
    }

    return formData && (
        <PageWrapper name='womens-sign-up' className='flex flex-col gap-8' maxWidth='max-w-[800px]' bannerSettings={{
            image: {
                large: forestInFall,
                small: forestInFallSmall,
                className: ''
            },
            text: {
                heading: 'Women\'s Retreat Sign Up',
                // subheading: 'Please enter your information and requests below. If the form does not work or you are having trouble filling it out, please email us directly at office@issaquah.cc.',
                // className: ''
            }
        }}>

            <div className='flex flex-col gap-4 text-center'>
                <h2 className='font-bold'>Please enter your information below</h2>
                <p className=''>If the form does not work or you are having trouble filling it out, please email us directly at <a href="mailto:office@issaquah.cc" target='_blank' rel='noopener noreferrer' aria-label="Email the ICC office" title="Email the ICC office" >office@issaquah.cc</a>.</p>
            </div>

            <hr className='border border-[var(--border-color-3)]  my-8' />

            <form action="" onSubmit={handleReCaptchaSubmission} className='bg-[#f7f7f7] p-6 rounded-lg shadow-lg w-full'>

                <h3 className='text-xl font-bold text-center mb-8'>Womens Retreat Sign Up Form</h3>

                <div className="form-container">

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* First Name */}
                        <div className={`form-group form-group-text-input  ${formData.firstName ? 'is-active' : ''} ${formErrors.firstName ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='first-name'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="first-name" className='font-bold'>First Name</label>
                            {formErrors.firstName && <p className='form-group-error-text'>{formErrors.firstName}</p>}
                        </div>

                        {/* Last Name */}
                        <div className={`form-group form-group-text-input  ${formData.lastName ? 'is-active' : ''} ${formErrors.lastName ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='last-name'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="last-name" className='font-bold'>Last Name</label>
                            {formErrors.lastName && <p className='form-group-error-text'>{formErrors.lastName}</p>}
                        </div>

                        {/* Full Name */}
                        {/* <div className={`form-group form-group-text-input  ${formData.fullName ? 'is-active' : ''} ${formErrors.fullName ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='full-name'
                                name='fullName'
                                value={formData.fullName}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="full-name" className='font-bold'>Full Name</label>
                            {formErrors.fullName && <p className='form-group-error-text'>{formErrors.fullName}</p>}
                        </div> */}

                        {/* Email */}
                        {/* <div className={`form-group form-group-text-input  ${formData.email ? 'is-active' : ''} ${formErrors.email ? 'has-error' : ''}`}>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="email" className='font-bold'>Email</label>
                            {formErrors.email && <p className='form-group-error-text'>{formErrors.email}</p>}
                        </div> */}

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* Email */}
                        <div className={`form-group form-group-text-input  ${formData.email ? 'is-active' : ''} ${formErrors.email ? 'has-error' : ''}`}>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="email" className='font-bold'>Email</label>
                            {formErrors.email && <p className='form-group-error-text'>{formErrors.email}</p>}
                        </div>

                        {/* Street Address */}
                        <div className={`form-group form-group-text-input  ${formData.streetAddress ? 'is-active' : ''} ${formErrors.streetAddress ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='streetAddress'
                                name='streetAddress'
                                value={formData.streetAddress}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="streetAddress" className='font-bold'>Street Address</label>
                            {formErrors.streetAddress && <p className='form-group-error-text'>{formErrors.streetAddress}</p>}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">
                        
                        {/* City State */}
                        <div className={`form-group form-group-text-input  ${formData.cityState ? 'is-active' : ''} ${formErrors.cityState ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='cityState'
                                name='cityState'
                                value={formData.cityState}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="cityState" className='font-bold'>City, State</label>
                            {formErrors.cityState && <p className='form-group-error-text'>{formErrors.cityState}</p>}
                        </div>

                        {/* Zipcode */}
                        <div className={`form-group form-group-text-input  ${formData.zipCode ? 'is-active' : ''} ${formErrors.zipCode ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='zipCode'
                                name='zipCode'
                                value={formData.zipCode}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="zipCode" className='font-bold'>Zip Code</label>
                            {formErrors.zipCode && <p className='form-group-error-text'>{formErrors.zipCode}</p>}
                        </div>

                    </div>
                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* Emergency Contact Name */}
                        <div className={`form-group form-group-text-input  ${formData.emergencyContactName ? 'is-active' : ''} ${formErrors.emergencyContactName ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='emergencyContactName'
                                name='emergencyContactName'
                                value={formData.emergencyContactName}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="emergencyContactName" className='font-bold flex items-center gap-1'>Emergency Contact (Name)</label> {/*  <span className='text-[12px] font-normal text-[var(--font-color-4)]'>(Name & Phone)</span> */}
                            {formErrors.emergencyContactName && <p className='form-group-error-text'>{formErrors.emergencyContactName}</p>}
                        </div>

                        {/* Emergency Contact Phone */}
                        <div className={`form-group form-group-text-input  ${formData.emergencyContactPhone ? 'is-active' : ''} ${formErrors.emergencyContactPhone ? 'has-error' : ''}`}>
                            <input
                                type="tel"
                                id='emergencyContactPhone'
                                name='emergencyContactPhone'
                                value={formData.emergencyContactPhone}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="emergencyContactPhone" className='font-bold'>Emergency Contact (Phone)</label>
                            {formErrors.emergencyContactPhone && <p className='form-group-error-text'>{formErrors.emergencyContactPhone}</p>}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* Allergies */}
                        <div className={`form-group form-group-text-input  ${formData.allergies ? 'is-active' : ''} ${formErrors.allergies ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='allergies'
                                name='allergies'
                                value={formData.allergies}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="allergies" className='font-bold'>Allergies</label>
                            {formErrors.allergies && <p className='form-group-error-text'>{formErrors.allergies}</p>}
                        </div>

                        {/* Seating Preference */}
                        <div className={`form-group form-group-text-input  ${formData.seatingPreference ? 'is-active' : ''} ${formErrors.seatingPreference ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='seatingPreference'
                                name='seatingPreference'
                                value={formData.seatingPreference}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="seatingPreference" className='font-bold'>Seating Preference</label>
                            {formErrors.seatingPreference && <p className='form-group-error-text'>{formErrors.seatingPreference}</p>}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 form-row-radio">

                        {/* Attendance */}
                        <fieldset className='form-group form-group-radio'>
                            <legend className='font-bold'>Attendance {formErrors.attendance && <span className='form-group-error-text'>{formErrors.attendance}</span>}</legend>
                            <ul>
                                <li className="radio">
                                    <input aria-label="I will attend only on Friday" type="radio" id="attendance-friday-only" name="attendance" value="Friday Only" checked={formData.attendance === 'Friday Only'} onChange={handleRadioChange} />
                                    <label htmlFor="attendance-friday-only"> Friday Only ($15)</label>
                                </li>
                                <li className="radio">
                                    <input aria-label="I will attend only on Saturday" type="radio" id="attendance-saturday-only" name="attendance" value="Saturday Only" checked={formData.attendance === 'Saturday Only'} onChange={handleRadioChange} />
                                    <label htmlFor="attendance-saturday-only">Saturday Only ($40)</label>
                                </li>
                                <li className="radio">
                                    <input aria-label="I will attend both days" type="radio" id="attendance-both-days" name="attendance" value="Both Days" checked={formData.attendance === 'Both Days'} onChange={handleRadioChange} />
                                    <label htmlFor="attendance-both-days">Both Days ($45)</label>
                                </li>
                            </ul>
                            {/* {formErrors.frequency && <p className='form-group-error-text'>{formErrors.frequency}</p>} */}
                        </fieldset>

                        {/* Payment Method */}
                        <fieldset className='form-group form-group-radio'>
                            <legend className='font-bold'>Payment Method {formErrors.paymentMethod && <span className='form-group-error-text'>{formErrors.paymentMethod}</span>}</legend>
                            <ul>
                                <li className="radio">
                                    <input aria-label="Payment Method" type="radio" id="paymentMethod-cash" name="paymentMethod" value="Cash" checked={formData.paymentMethod === 'Cash'} onChange={handleRadioChange} />
                                    <label htmlFor="paymentMethod-cash">Cash</label>
                                </li>
                                <li className="radio">
                                    <input aria-label="Payment Method" type="radio" id="paymentMethod-check" name="paymentMethod" value="Check" checked={formData.paymentMethod === 'Check'} onChange={handleRadioChange} />
                                    <label htmlFor="paymentMethod-check">Check payable to Issaquah Christian Church</label>
                                </li>
                                <li className="radio flex flex-col gap-1">
                                    <div className='flex gap-2'>
                                        <input aria-label="Payment Method" type="radio" id="paymentMethod-credit-card" name="paymentMethod" value="Credit Card" checked={formData.paymentMethod === 'Credit Card'} onChange={handleRadioChange} />
                                        <label htmlFor="paymentMethod-credit-card">ICC Website by Credit Card</label>
                                    </div>
                                    <span className='text-[12px] font-normal text-[var(--font-color-4)]'>(**Note: To pay online, submit this form, then follow the "Giving" link above. Choose "Tithes and Offerings", select "Women's Retreat" and pay the appropriate amount owed.)</span>
                                </li>
                            </ul>
                            {/* {formErrors.frequency && <p className='form-group-error-text'>{formErrors.frequency}</p>} */}
                        </fieldset>

                    </div>

                    {/* Submit Button */}
                    <button type='submit' className='bg-[var(--button-background-color)] text-[var(--button-text-color)] rounded-lg font-semibold border-2 border-[var(--button-hover-background-color)] px-4 py-2 mt-6 rounded-md hover:text-[#D9D9D9] hover:bg-[var(--button-hover-background-color)]' aria-label='Submit the womens retreat sign up form' >Submit</button>

                </div>

            </form>

        </PageWrapper>
    )
}

export default WomensSignUp
