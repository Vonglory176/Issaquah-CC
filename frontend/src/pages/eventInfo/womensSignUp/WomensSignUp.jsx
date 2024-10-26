import React, { useEffect, useRef, useState } from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import autosize from 'autosize'

import forestInFall from '../../../assets/images/backgrounds/forestInFall.webp'
import forestInFallSmall from '../../../assets/images/backgrounds/forestInFall-small.webp'

const WomensSignUp = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        streetAddress: '',
        cityState: '',
        zipCode: '',
        allergies: '',
        emergencyContact: '',
        seatingPreference: '',
        attendance: '',
        paymentMethod: '',
    })
    const [formErrors, setFormErrors] = useState({
        fullname: false,
        email: false,
        streetAddress: false,
        cityState: false,
        zipCode: false,
        // allergies: false,
        emergencyContact: false,
        // seatingPreference: false,
        attendance: false,
        paymentMethod: false,
        errorExists: false
    })
    const [formSuccess, setFormSuccess] = useState(false)

    // Auto-resize textarea
    const textareaRef = useRef(null)
    useEffect(() => {
        if (textareaRef.current) {
            autosize(textareaRef.current)
        }
    }, [])

    // Handle form input changes
    const handleChange = (e) => {
        console.log(e.target.value)
        const fieldName = e.target.name.replace(/-/g, '')
        setFormData({ ...formData, [fieldName]: e.target.value })
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()

        setFormSuccess(false)

        if (validateForm()) {

            console.log('Form is valid')

        } else {
            console.error('Form is invalid')
        }
    }

    // For form validation
    const validateForm = () => {
        const { email, subject, message } = formData
        console.log(email, subject, message)

        const fullnameValid = Boolean(formData.fullname.trim())
        const emailValid = Boolean(email.trim())
        const streetAddressValid = Boolean(formData.streetAddress.trim())
        const cityStateValid = Boolean(formData.cityState.trim())
        const zipCodeValid = Boolean(formData.zipCode.trim())
        // const allergiesValid = Boolean(formData.allergies.trim())
        const emergencyContactValid = Boolean(formData.emergencyContact.trim())
        // const seatingPreferenceValid = Boolean(formData.seatingPreference)
        const attendanceValid = Boolean(formData.attendance)
        const paymentMethodValid = Boolean(formData.paymentMethod)

        const errorCheck = fullnameValid && emailValid && streetAddressValid && cityStateValid && zipCodeValid && emergencyContactValid && attendanceValid && paymentMethodValid

        console.log(errorCheck)

        setFormErrors({
            fullname: fullnameValid ? false : "Full name cannot be blank",
            email: emailValid ? false : "Email cannot be blank",
            streetAddress: streetAddressValid ? false : "Street address cannot be blank",
            cityState: cityStateValid ? false : "City, state, and zip code cannot be blank",
            zipCode: zipCodeValid ? false : "Zip code cannot be blank",
            emergencyContact: emergencyContactValid ? false : "Emergency contact cannot be blank",
            // seatingPreference: seatingPreferenceValid ? false : "Required", // "Seating preference cannot be blank",
            attendance: attendanceValid ? false : "Required", // "Attendance cannot be blank",
            paymentMethod: paymentMethodValid ? false : "Required", // "Payment method cannot be blank",
            errorExists: !errorCheck
        })

        return errorCheck
    }

    return (
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

            <form action="" onSubmit={handleSubmit} className='bg-[#f7f7f7] p-6 rounded-lg shadow-lg w-full'>

                <h3 className='text-xl font-bold text-center mb-8'>Womens Retreat Sign Up Form</h3>

                <div className="form-container">

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* Full Name */}
                        <div className={`form-group form-group-text-input  ${formData.fullname ? 'is-active' : ''} ${formErrors.fullname ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='fullname'
                                name='fullname'
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                            <label htmlFor="fullname" className='font-bold'>Full Name</label>
                            {formErrors.fullname && <p className='form-group-error-text'>{formErrors.fullname}</p>}
                        </div>

                        {/* Email */}
                        <div className={`form-group form-group-text-input  ${formData.email ? 'is-active' : ''} ${formErrors.email ? 'has-error' : ''}`}>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email" className='font-bold'>Email</label>
                            {formErrors.email && <p className='form-group-error-text'>{formErrors.email}</p>}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* Street Address */}
                        <div className={`form-group form-group-text-input  ${formData.streetAddress ? 'is-active' : ''} ${formErrors.streetAddress ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='streetAddress'
                                name='streetAddress'
                                value={formData.streetAddress}
                                onChange={handleChange}
                            />
                            <label htmlFor="streetAddress" className='font-bold'>Street Address</label>
                            {formErrors.streetAddress && <p className='form-group-error-text'>{formErrors.streetAddress}</p>}
                        </div>

                        {/* City State */}
                        <div className={`form-group form-group-text-input  ${formData.cityState ? 'is-active' : ''} ${formErrors.cityState ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='cityState'
                                name='cityState'
                                value={formData.cityState}
                                onChange={handleChange}
                            />
                            <label htmlFor="cityState" className='font-bold'>City, State</label>
                            {formErrors.cityState && <p className='form-group-error-text'>{formErrors.cityState}</p>}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* Zipcode */}
                        <div className={`form-group form-group-text-input  ${formData.zipCode ? 'is-active' : ''} ${formErrors.zipCode ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='zipCode'
                                name='zipCode'
                                value={formData.zipCode}
                                onChange={handleChange}
                            />
                            <label htmlFor="zipCode" className='font-bold'>Zip Code</label>
                            {formErrors.zipCode && <p className='form-group-error-text'>{formErrors.zipCode}</p>}
                        </div>

                        {/* Emergency Contact */}
                        <div className={`form-group form-group-text-input  ${formData.emergencyContact ? 'is-active' : ''} ${formErrors.emergencyContact ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='emergencyContact'
                                name='emergencyContact'
                                value={formData.emergencyContact}
                                onChange={handleChange}
                            />
                            <label htmlFor="emergencyContact" className='font-bold flex items-center gap-1'>Emergency Contact <span className='text-[12px] font-normal text-[var(--font-color-4)]'>(Name & Phone)</span></label>
                            {formErrors.emergencyContact && <p className='form-group-error-text'>{formErrors.emergencyContact}</p>}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                            <label htmlFor="seatingPreference" className='font-bold'>Seating Preference</label>
                            {formErrors.seatingPreference && <p className='form-group-error-text'>{formErrors.seatingPreference}</p>}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 form-row-radio">

                        {/* Attendance */}
                        <div className='form-group form-group-radio'>
                            <label htmlFor="attendance" className='font-bold'>Attendance {formErrors.attendance && <span className='form-group-error-text'>{formErrors.attendance}</span>}</label>
                            <div>
                                <div className="radio">
                                    <label><input aria-label="Attendance" type="radio" name="attendance" value="Friday Only" /> Friday Only ($15)</label>
                                </div>
                                <div className="radio">
                                    <label><input aria-label="Attendance" type="radio" name="attendance" value="Saturday Only" /> Saturday Only ($40)</label>
                                </div>
                                <div className="radio">
                                    <label><input aria-label="Attendance" type="radio" name="attendance" value="Both Days" /> Both Days ($45)</label>
                                </div>
                            </div>
                            {/* {formErrors.frequency && <p className='form-group-error-text'>{formErrors.frequency}</p>} */}
                        </div>

                        {/* Payment Method */}
                        <div className='form-group form-group-radio'>
                            <label htmlFor="paymentMethod" className='font-bold'>Payment Method {formErrors.paymentMethod && <span className='form-group-error-text'>{formErrors.paymentMethod}</span>}</label>
                            <div>
                                <div className="radio">
                                    <label><input aria-label="Payment Method" type="radio" name="paymentMethod" value="Cash" /> Cash</label>
                                </div>
                                <div className="radio">
                                    <label><input aria-label="Payment Method" type="radio" name="paymentMethod" value="Check" /> Check payable to Issaquah Christian Church</label>
                                </div>
                                <div className="radio flex flex-col gap-1">
                                    <label><input aria-label="Payment Method" type="radio" name="paymentMethod" value="Credit Card" /> ICC Website by Credit Card</label>
                                    <span className='text-[12px] font-normal text-[var(--font-color-4)]'>(**Note: To pay online, submit this form, then follow the "Giving" link above. Choose "Tithes and Offerings", select "Women's Retreat" and pay the appropriate amount owed.)</span>
                                </div>
                            </div>
                            {/* {formErrors.frequency && <p className='form-group-error-text'>{formErrors.frequency}</p>} */}
                        </div>

                    </div>

                    {/* Submit Button */}
                    <button type='submit' className='bg-[var(--button-background-color)] text-[var(--button-text-color)] rounded-lg font-semibold border-2 border-[var(--button-hover-background-color)] px-4 py-2 mt-6 rounded-md hover:text-[#D9D9D9] hover:bg-[var(--button-hover-background-color)]' aria-label='Submit the womens retreat sign up form' >Submit</button>

                </div>

            </form>

        </PageWrapper>
    )
}

export default WomensSignUp
