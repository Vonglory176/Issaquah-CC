import React, { useEffect, useRef, useState } from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import autosize from 'autosize'

import guyPraying from '../../../assets/images/backgrounds/guy-praying.webp'
import guyPrayingSmall from '../../../assets/images/backgrounds/guy-praying-small.webp'

const PrayerRequests = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        frequency: '',
        referrer: '',
        contact: '',
        serve: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState({
        firstname: false,
        lastname: false,
        email: false,
        phone: false,
        frequency: false,
        referrer: false,
        contact: false,
        serve: false,
        message: false,

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

        const firstnameValid = Boolean(formData.firstname.trim())
        const lastnameValid = Boolean(formData.lastname.trim())
        const emailValid = Boolean(email.trim())
        const phoneValid = Boolean(formData.phone.trim())
        const frequencyValid = Boolean(formData.frequency)
        const referrerValid = Boolean(formData.referrer)
        // const contactValid = Boolean(formData.contact)
        // const serveValid = Boolean(formData.serve)
        const messageValid = Boolean(message.trim())
        const errorCheck = firstnameValid && lastnameValid && emailValid && phoneValid && frequencyValid && referrerValid && messageValid // && contactValid && serveValid

        console.log(errorCheck)

        setFormErrors({
            firstname: firstnameValid ? false : "First name cannot be blank",
            lastname: lastnameValid ? false : "Last name cannot be blank",
            email: emailValid ? false : "Email cannot be blank",
            phone: phoneValid ? false : "Phone cannot be blank",
            frequency: frequencyValid ? false : "Required", // "Frequency cannot be blank",
            referrer: referrerValid ? false : "Required", // "Referrer cannot be blank",
            // contact: contactValid ? false : "Required", // "Contact cannot be blank",
            // serve: serveValid ? false : "Required", // "Serve cannot be blank",
            message: messageValid ? false : "Message cannot be blank",
            errorExists: !errorCheck
        })

        return errorCheck
    }

    return (
        <PageWrapper name='prayer-requests' className='flex flex-col gap-8' maxWidth='max-w-[800px]' bannerSettings={{
            image: {
                large: guyPraying,
                small: guyPrayingSmall,
                className: 'object-center h-full'
            },
            text: {
                heading: 'Prayer Requests',
                // subheading: 'Please enter your information and requests below. If the form does not work or you are having trouble filling it out, please email us directly at office@issaquah.cc.',
                // className: ''
            }
        }}>

            {/* <h1 className='text-3xl font-bold flex gap-2 flex-wrap'>Prayer Requests</h1>

            <hr className='border border-[var(--border-color-3)]' /> */}

            <div className='flex flex-col gap-4 text-center'>
                <h2 className='text-3xl font-bold'>Please enter your information and requests below</h2>
                <p className=''>If the form does not work or you are having trouble filling it out, please email us directly at <a href="mailto:office@issaquah.cc" target='_blank' rel='noopener noreferrer'>office@issaquah.cc</a>.</p>
            </div>

            <hr className='border border-[var(--border-color-3)]  my-8' />

            <form action="" onSubmit={handleSubmit} className='bg-[#f7f7f7] p-6 rounded-lg shadow-lg'>

                <h3 className='text-xl font-bold text-center mb-8'>Prayer Request Form</h3>

                <div className="form-container">

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* First Name */}
                        <div className={`form-group form-group-text-input  ${formData.firstname ? 'is-active' : ''} ${formErrors.firstname ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='first-name'
                                name='first-name'
                                value={formData.firstname}
                                onChange={handleChange}
                            />
                            <label htmlFor="first-name" className='font-bold'>First Name</label>
                            {formErrors.firstname && <p className='form-group-error-text'>{formErrors.firstname}</p>}
                        </div>

                        {/* Last Name */}
                        <div className={`form-group form-group-text-input  ${formData.lastname ? 'is-active' : ''} ${formErrors.lastname ? 'has-error' : ''}`}>
                            <input
                                type="text"
                                id='last-name'
                                name='last-name'
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                            <label htmlFor="last-name" className='font-bold'>Last Name</label>
                            {formErrors.lastname && <p className='form-group-error-text'>{formErrors.lastname}</p>}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">

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

                        {/* Phone */}
                        <div className={`form-group form-group-text-input  ${formData.phone ? 'is-active' : ''} ${formErrors.phone ? 'has-error' : ''}`}>
                            <input
                                type="tel"
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <label htmlFor="phone" className='font-bold'>Phone</label>
                            {formErrors.phone && <p className='form-group-error-text'>{formErrors.phone}</p>}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* I am a ... */}
                        <div className='form-group form-group-radio'>
                            <label htmlFor="form-field-fbf71ca8-3f12-11ef-9dae-0614187498c1" className='font-bold'>I am a ... {formErrors.frequency && <span className='form-group-error-text'>{formErrors.frequency}</span>}</label>
                            <div>
                                <div className="radio">
                                    <label><input aria-label="I am a ..." type="radio" name="form-field-fbf71ca8-3f12-11ef-9dae-0614187498c1" tabindex="10100005" value="fbfb3176-3f12-11ef-ba61-0614187498c1" /> 1st Time Guest</label>
                                </div>
                                <div className="radio">
                                    <label><input aria-label="I am a ..." type="radio" name="form-field-fbf71ca8-3f12-11ef-9dae-0614187498c1" tabindex="10100005" value="fc089f3c-3f12-11ef-8bad-0614187498c1" /> 2nd Time Guest</label>
                                </div>
                                <div className="radio">
                                    <label><input aria-label="I am a ..." type="radio" name="form-field-fbf71ca8-3f12-11ef-9dae-0614187498c1" tabindex="10100005" value="fbff72ae-3f12-11ef-ad23-0614187498c1" /> Regular Attendee</label>
                                </div>
                                <div className="radio">
                                    <label><input aria-label="I am a ..." type="radio" name="form-field-fbf71ca8-3f12-11ef-9dae-0614187498c1" tabindex="10100005" value="fc120950-3f12-11ef-9149-0614187498c1" /> Member</label>
                                </div>
                            </div>
                            {/* {formErrors.frequency && <p className='form-group-error-text'>{formErrors.frequency}</p>} */}
                        </div>

                        {/* How did you hear about us? */}
                        <div className="form-group form-group-checkbox">
                            <label htmlFor="form-field-4eb87a70-3f10-11ef-be19-0614187498c1" className='font-bold'>How did you hear about us? {formErrors.referrer && <span className='form-group-error-text'>{formErrors.referrer}</span>}</label>
                            <div>
                                <div className="checkbox">
                                    <label><input aria-label="Friend / Other" type="checkbox" tabindex="10100006" name="form-field-4eb87a70-3f10-11ef-be19-0614187498c1[4ec5e188-3f10-11ef-8b10-0614187498c1]" /> Friend / Other</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Drive By" type="checkbox" tabindex="10100006" name="form-field-4eb87a70-3f10-11ef-be19-0614187498c1[86258d72-3f10-11ef-aa8e-0614187498c1]" /> Drive By</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Facebook / Youtube / Instagram" type="checkbox" tabindex="10100006" name="form-field-4eb87a70-3f10-11ef-be19-0614187498c1[4ec5ba46-3f10-11ef-836c-0614187498c1]" /> Facebook / Youtube / Instagram</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Website" type="checkbox" tabindex="10100006" name="form-field-4eb87a70-3f10-11ef-be19-0614187498c1[4ec60e2e-3f10-11ef-a26d-0614187498c1]" /> Website</label>
                                </div>
                            </div>
                            {/* {formErrors.referrer && <p className='form-group-error-text form-group-error-text'>{formErrors.referrer}</p>} */}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* Please contact me */}
                        <div className="form-group form-group-checkbox">
                            <label htmlFor="form-field-59ad036e-3f11-11ef-b029-0614187498c1" className='font-bold'>Please contact me: {formErrors.contact && <span className='form-group-error-text'>{formErrors.contact}</span>}</label>
                            <div>
                                <div className="checkbox">
                                    <label><input aria-label="I am committing my life to Christ." type="checkbox" tabindex="10100007" name="form-field-59ad036e-3f11-11ef-b029-0614187498c1[59b89f1c-3f11-11ef-b12f-0614187498c1]" /> I am committing my life to Christ.</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="I want to be baptized." type="checkbox" tabindex="10100007" name="form-field-59ad036e-3f11-11ef-b029-0614187498c1[59b9394a-3f11-11ef-9154-0614187498c1]" /> I want to be baptized.</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="I would like to share my testimony." type="checkbox" tabindex="10100007" name="form-field-59ad036e-3f11-11ef-b029-0614187498c1[b6fd295e-3f11-11ef-ac5c-0614187498c1]" /> I would like to share my testimony.</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="I am interested in membership." type="checkbox" tabindex="10100007" name="form-field-59ad036e-3f11-11ef-b029-0614187498c1[59b935d0-3f11-11ef-9fdb-0614187498c1]" /> I am interested in membership.</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="I am interested in Bible Study, Women's and/or Men's Ministry." type="checkbox" tabindex="10100007" name="form-field-59ad036e-3f11-11ef-b029-0614187498c1[dd19a6da-3f11-11ef-8d0c-0614187498c1]" /> I am interested in Bible Study, Women's and/or Men's Ministry.</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Other." type="checkbox" tabindex="10100007" name="form-field-59ad036e-3f11-11ef-b029-0614187498c1[eba2f2e2-3f11-11ef-8314-0614187498c1]" /> Other.</label>
                                </div>
                            </div>
                            {/* {formErrors.contact && <p className='form-group-error-text'>{formErrors.contact}</p>} */}
                        </div>

                        {/* I would to serve on the... */}
                        <div className="form-group form-group-checkbox">
                            <label htmlFor="form-field-7473709a-3f14-11ef-b635-0614187498c1" className='font-bold'>I would like to serve on the ... {formErrors.serve && <span className='form-group-error-text'>{formErrors.serve}</span>}</label>
                            <div>
                                <div className="checkbox">
                                    <label><input aria-label="Hospitality / Serving Team" type="checkbox" tabindex="10100008" name="form-field-7473709a-3f14-11ef-b635-0614187498c1[7481d6ee-3f14-11ef-8c4c-0614187498c1]" /> Hospitality / Serving Team</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Property Maintenance Team" type="checkbox" tabindex="10100008" name="form-field-7473709a-3f14-11ef-b635-0614187498c1[0bf555c8-3f15-11ef-ac56-0614187498c1]" /> Property Maintenance Team</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Women's Ministry Team" type="checkbox" tabindex="10100008" name="form-field-7473709a-3f14-11ef-b635-0614187498c1[b1bd5ccc-3f14-11ef-8eb4-0614187498c1]" /> Women's Ministry Team</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Men's Ministry Team" type="checkbox" tabindex="10100008" name="form-field-7473709a-3f14-11ef-b635-0614187498c1[fd52caf0-3f14-11ef-a6f3-0614187498c1]" /> Men's Ministry Team</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Children's Ministry Team" type="checkbox" tabindex="10100008" name="form-field-7473709a-3f14-11ef-b635-0614187498c1[7481f5fc-3f14-11ef-95eb-0614187498c1]" /> Children's Ministry Team</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Youth Ministry Team" type="checkbox" tabindex="10100008" name="form-field-7473709a-3f14-11ef-b635-0614187498c1[7484bd8c-3f14-11ef-a3b3-0614187498c1]" /> Youth Ministry Team</label>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Prayer Request */}
                    <div className={`form-group form-group-text-input mt-4  ${formData.message ? 'is-active' : ''} ${formErrors.message ? 'has-error' : ''}`}>
                        <textarea
                            ref={textareaRef}
                            aria-label="Please enter your prayer request or praise report here:"
                            tabindex="10100009"
                            // placeholder="Please feel free to also include any comments, questions or suggestions ..."
                            name="message" // "form-field-2bea9ed6-3f0d-11ef-b8ae-0614187498c1"
                            id="message" // "form-field-2bea9ed6-3f0d-11ef-b8ae-0614187498c1"
                            // className="form-control min-h-[196px]"
                            rows="2"
                            value={formData.message}
                            onChange={handleChange}
                        >
                        </textarea>
                        <label for="message" className='font-bold'>Prayer Request / Praise Report</label> {/* Enter your prayer request or praise report here: */}
                        <p className='text-sm text-[var(--font-color-4)] absolute bottom-[-24px] left-[8px]'>Feel free to also include any comments, questions or suggestions ...</p>
                        {formErrors.message && <p className='form-group-error-text right-[0px] text-right'>{formErrors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type='submit' className='bg-[var(--button-background-color)] text-[var(--button-text-color)] rounded-lg font-semibold border-2 border-[var(--button-hover-background-color)] px-4 py-2 mt-6 rounded-md hover:text-[#D9D9D9] hover:bg-[var(--button-hover-background-color)]'>Submit</button>

                    {/* Privacy */}
                    <div data-field-id="8ac2417e-3f13-11ef-b4e1-0614187498c1" data-fw-model="FormField" className="">
                        <div>
                            <div className="form-group form-group-checkbox">
                                <label htmlFor="form-field-8ac2417e-3f13-11ef-b4e1-0614187498c1" className='font-bold'></label>
                                <div>
                                    <div className="checkbox">
                                        <label><input aria-label="Please include me in the Prayer Chain Emails. (Be sure to fill in contact info above)." type="checkbox" tabindex="10100010" name="form-field-8ac2417e-3f13-11ef-b4e1-0614187498c1[8ad72346-3f13-11ef-844c-0614187498c1]" /> Please include me in the Prayer Chain Emails. (Be sure to fill in contact info above).</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input aria-label="Please keep private, except Elders/Pastor." type="checkbox" tabindex="10100010" name="form-field-8ac2417e-3f13-11ef-b4e1-0614187498c1[8ad7276a-3f13-11ef-a4b8-0614187498c1]" /> Please keep private, except Elders/Pastor.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <span className="react-resizable-handle react-resizable-handle-se"></span> */}
                    </div>

                </div>

            </form>

        </PageWrapper>
    )
}

export default PrayerRequests
