import React, { useEffect, useRef, useState } from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import autosize from 'autosize'
import emailjs from 'emailjs-com'

import guyPraying from '../../../assets/images/backgrounds/guy-praying.webp'
import guyPrayingSmall from '../../../assets/images/backgrounds/guy-praying-small.webp'

const PrayerRequests = () => {

    const [formData, setFormData] = useState()
    const [formErrors, setFormErrors] = useState()
    const [formSuccess, setFormSuccess] = useState(false)

    // Initialize form data
    const resetForm = () => {
        setFormData({
            firstName: '', // 'John',
            lastName: '', // 'Doe',
            email: '', // 'john.doe@example.com',
            phone: '', // '123-456-7890',
            attendance: '', // 'Regular Attendee',
            referrer: {
                friend: false,
                walkIn: false,
                socialMedia: false,
                website: false,
                other: false
            },
            contact: {
                commitmentToChrist: false,
                baptism: false,
                testimony: false,
                membership: false,
                events: false, // bibleStudyWomenMenMinistry: false,
                other: false
            },
            service: {
                hospitalityServingTeam: false,
                propertyMaintenanceTeam: false,
                womensMinistryTeam: false,
                mensMinistryTeam: false,
                childrensMinistryTeam: false,
                youthMinistryTeam: false
            },
            message: '', // 'This is a test prayer request',
            privacy: {
                prayerChainEmails: false,
                privateExceptEldersPastor: false
            }
        })

        setFormErrors({
            firstName: false,
            lastName: false,
            email: false,
            phone: false,
            // attendance: false,
            // referrer: false,
            // contact: false,
            // service: false,
            message: false,

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

    const handleCheckboxChange = (e, checkboxCategory) => {
        // console.log(e.target.name, e.target.checked)

        setFormData({
            ...formData,
            [checkboxCategory]: {
                ...formData[checkboxCategory],
                [e.target.name]: e.target.checked
            }
        })
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()

        setFormSuccess(false)

        if (validateForm()) {

            console.log('Form is valid')

            const templateParams = {
                // to_name: 'ICC Office',
                // to_email: process.env.REACT_APP_EMAIL,

                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,

                attendance: formData.attendance,
                referrer: JSON.stringify(formData.referrer, null, 2), // Pretty print JSON
                contact: JSON.stringify(formData.contact, null, 2),
                service: JSON.stringify(formData.service, null, 2),

                message: formData.message,

                privacy: JSON.stringify(formData.privacy, null, 2)
            }

            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_PRAYER_REQUEST_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text)
                    setFormData({ email: '', subject: '', message: '' })
                    setFormSuccess("Message sent successfully, thank you for contacting me!")
                }, (error) => {
                    console.log('FAILED...', error)
                    setFormErrors({ ...formErrors, general: "Something went wrong, please try again later", errorExists: true })
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

        const firstNameValid = Boolean(formData.firstName.trim())
        const lastNameValid = Boolean(formData.lastName.trim())
        const emailValid = Boolean(email.trim())
        const phoneValid = Boolean(formData.phone.trim())
        // const attendanceValid = Boolean(formData.attendance)
        // const referrerValid = Boolean(formData.referrer)
        // const contactValid = Boolean(formData.contact)
        // const serveValid = Boolean(formData.serve)
        const messageValid = Boolean(message.trim())
        const errorCheck = firstNameValid && lastNameValid && emailValid && phoneValid && messageValid // && attendanceValid && referrerValid && messageValid // && contactValid && serveValid

        console.log(errorCheck)

        setFormErrors({
            firstName: firstNameValid ? false : "First name cannot be blank",
            lastName: lastNameValid ? false : "Last name cannot be blank",
            email: emailValid ? false : "Email cannot be blank",
            phone: phoneValid ? false : "Phone cannot be blank",
            // attendance: attendanceValid ? false : "Required", // "attendance cannot be blank",
            // referrer: referrerValid ? false : "Required", // "Referrer cannot be blank",
            // contact: contactValid ? false : "Required", // "Contact cannot be blank",
            // serve: serveValid ? false : "Required", // "Serve cannot be blank",
            message: messageValid ? false : "Message cannot be blank",
            errorExists: !errorCheck
        })

        return errorCheck
    }

    return formData && (
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
                <h2 className='font-bold'>Please enter your information below</h2> {/*  and requests */}
                <p className=''>If the form does not work or you are having trouble filling it out, please email us directly at <a href="mailto:office@issaquah.cc" target='_blank' rel='noopener noreferrer' aria-label="Email the ICC office" title="Email the ICC office" >office@issaquah.cc</a>.</p>
            </div>

            <hr className='border border-[var(--border-color-3)]  my-8' />

            <form action="" onSubmit={handleSubmit} className='bg-[#f7f7f7] p-6 rounded-lg shadow-lg'>

                <h3 className='text-xl font-bold text-center mb-8'>Prayer Request Form</h3>

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

                        {/* Phone */}
                        <div className={`form-group form-group-text-input  ${formData.phone ? 'is-active' : ''} ${formErrors.phone ? 'has-error' : ''}`}>
                            <input
                                type="tel"
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleTextChange}
                            />
                            <label htmlFor="phone" className='font-bold'>Phone</label>
                            {formErrors.phone && <p className='form-group-error-text'>{formErrors.phone}</p>}
                        </div>

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* I am a ... */}
                        <fieldset className='form-group form-group-radio'>
                            <legend className='font-bold'>I am a ... {formErrors.attendance && <span className='form-group-error-text'>{formErrors.attendance}</span>}</legend>
                            <ul>
                                <li className="radio">
                                    <input aria-label="I am a 1st Time Guest" type="radio" id="attendance-1st-time-guest" name="attendance" value="1st Time Guest" checked={formData.attendance === '1st Time Guest'} onChange={handleRadioChange} />
                                    <label htmlFor="attendance-1st-time-guest"> 1st Time Guest</label>
                                </li>
                                <li className="radio">
                                    <input aria-label="I am a 2nd Time Guest" type="radio" id="attendance-2nd-time-guest" name="attendance" value="2nd Time Guest" checked={formData.attendance === '2nd Time Guest'} onChange={handleRadioChange} />
                                    <label htmlFor="attendance-2nd-time-guest">2nd Time Guest</label>
                                </li>
                                <li className="radio">
                                    <input aria-label="I am a Regular Attendee" type="radio" id="attendance-regular-attendee" name="attendance" value="Regular Attendee" checked={formData.attendance === 'Regular Attendee'} onChange={handleRadioChange} />
                                    <label htmlFor="attendance-regular-attendee">Regular Attendee</label>
                                </li>
                                <li className="radio">
                                    <input aria-label="I am a Member" type="radio" id="attendance-member" name="attendance" value="Member" checked={formData.attendance === 'Member'} onChange={handleRadioChange} />
                                    <label htmlFor="attendance-member">Member</label>
                                </li>
                            </ul>
                            {/* {formErrors.attendance && <p className='form-group-error-text'>{formErrors.attendance}</p>} */}
                        </fieldset>

                        {/* How did you hear about us? */}
                        <fieldset className="form-group form-group-checkbox">
                            <legend htmlFor="form-field-referrer" className='font-bold'>How did you hear about us? {formErrors.referrer && <span className='form-group-error-text'>{formErrors.referrer}</span>}</legend>
                            <ul>
                                <li className="checkbox">
                                    <input aria-label="Referred by Friend" type="checkbox" id="referrer-friend" name="friend" checked={formData.referrer.friend} onChange={(e) => handleCheckboxChange(e, 'referrer', 'friend')} />
                                    <label htmlFor="referrer-friend">Friend</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Referred by Walk In" type="checkbox" id="referrer-walk-in" name="walkIn" checked={formData.referrer.walkIn} onChange={(e) => handleCheckboxChange(e, 'referrer', 'walkIn')} />
                                    <label htmlFor="referrer-walk-in">Walk In</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Referred by Social Media" type="checkbox" id="referrer-social-media" name="socialMedia" checked={formData.referrer.socialMedia} onChange={(e) => handleCheckboxChange(e, 'referrer', 'socialMedia')} />
                                    <label htmlFor="referrer-social-media">Social Media</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Referred by Website" type="checkbox" id="referrer-website" name="website" checked={formData.referrer.website} onChange={(e) => handleCheckboxChange(e, 'referrer', 'website')} />
                                    <label htmlFor="referrer-website">Website</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Referred by Other" type="checkbox" id="referrer-other" name="other" checked={formData.referrer.other} onChange={(e) => handleCheckboxChange(e, 'referrer', 'other')} />
                                    <label htmlFor="referrer-other">Other</label>
                                </li>
                            </ul>
                            {/* {formErrors.referrer && <p className='form-group-error-text form-group-error-text'>{formErrors.referrer}</p>} */}
                        </fieldset>

                    </div>

                    <div className="form-row flex flex-col gap-4 md:flex-row">

                        {/* Please contact me */}
                        <fieldset className="form-group form-group-checkbox">
                            <legend className='font-bold'>Please contact me: {formErrors.contact && <span className='form-group-error-text'>{formErrors.contact}</span>}</legend>
                            <ul>
                                <li className="checkbox">
                                    <input aria-label="I am committing my life to Christ." type="checkbox" id="contact-commitment-to-Christ" name="commitmentToChrist" checked={formData.contact.commitmentToChrist} onChange={(e) => handleCheckboxChange(e, 'contact')} />
                                    <label htmlFor='contact-commitment-to-Christ'>I am committing my life to Christ.</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="I want to be baptized." type="checkbox" id="contact-baptism" name="baptism" checked={formData.contact.baptism} onChange={(e) => handleCheckboxChange(e, 'contact')} />
                                    <label htmlFor='contact-baptism'>I want to be baptized.</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="I would like to share my testimony." type="checkbox" id="contact-testimony" name="testimony" checked={formData.contact.testimony} onChange={(e) => handleCheckboxChange(e, 'contact')} />
                                    <label htmlFor='contact-testimony'>I would like to share my testimony.</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="I am interested in membership." type="checkbox" id="contact-membership" name="membership" checked={formData.contact.membership} onChange={(e) => handleCheckboxChange(e, 'contact')} />
                                    <label htmlFor='contact-membership'>I am interested in membership.</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="I am interested in Bible Study, Women's and/or Men's Ministry." type="checkbox" id="contact-events" name="events" checked={formData.contact.events} onChange={(e) => handleCheckboxChange(e, 'contact')} />
                                    <label htmlFor='contact-events'>I am interested in Bible Study, Women's and/or Men's Ministry.</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Other." type="checkbox" id="contact-other" name="other" checked={formData.contact.other} onChange={(e) => handleCheckboxChange(e, 'contact', 'other')} />
                                    <label htmlFor='contact-other'>Other.</label>
                                </li>
                            </ul>
                            {/* {formErrors.contact && <p className='form-group-error-text'>{formErrors.contact}</p>} */}
                        </fieldset>

                        {/* I would to serve on the... */}
                        <div className="form-group form-group-checkbox">
                            <legend className='font-bold'>I would like to serve on the ... {formErrors.service && <span className='form-group-error-text'>{formErrors.service}</span>}</legend>
                            <ul>
                                <li className="checkbox">
                                    <input aria-label="Hospitality / Serving Team" type="checkbox" id="service-hospitality-serving-team" name="hospitalityServingTeam" checked={formData.service.hospitalityServingTeam} onChange={(e) => handleCheckboxChange(e, 'service')} />
                                    <label htmlFor="service-hospitality-serving-team">Hospitality / Serving Team</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Property Maintenance Team" type="checkbox" id="service-property-maintenance-team" name="propertyMaintenanceTeam" checked={formData.service.propertyMaintenanceTeam} onChange={(e) => handleCheckboxChange(e, 'service')} />
                                    <label htmlFor="service-property-maintenance-team">Property Maintenance Team</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Women's Ministry Team" type="checkbox" id="service-womens-ministry-team" name="womensMinistryTeam" checked={formData.service.womensMinistryTeam} onChange={(e) => handleCheckboxChange(e, 'service')} />
                                    <label htmlFor="service-womens-ministry-team">Women's Ministry Team</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Men's Ministry Team" type="checkbox" id="service-mens-ministry-team" name="mensMinistryTeam" checked={formData.service.mensMinistryTeam} onChange={(e) => handleCheckboxChange(e, 'service')} />
                                    <label htmlFor="service-mens-ministry-team">Men's Ministry Team</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Children's Ministry Team" type="checkbox" id="service-children-ministry-team" name="childrensMinistryTeam" checked={formData.service.childrensMinistryTeam} onChange={(e) => handleCheckboxChange(e, 'service')} />
                                    <label htmlFor="service-children-ministry-team">Children's Ministry Team</label>
                                </li>
                                <li className="checkbox">
                                    <input aria-label="Youth Ministry Team" type="checkbox" id="service-youth-ministry-team" name="youthMinistryTeam" checked={formData.service.youthMinistryTeam} onChange={(e) => handleCheckboxChange(e, 'service')} />
                                    <label htmlFor="service-youth-ministry-team">Youth Ministry Team</label>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Prayer Request */}
                    <div className={`form-group form-group-text-input mt-4  ${formData.message ? 'is-active' : ''} ${formErrors.message ? 'has-error' : ''}`}>
                        <textarea
                            ref={textareaRef}
                            aria-label="Please enter your prayer request or praise report here:"
                            // placeholder="Please feel free to also include any comments, questions or suggestions ..."
                            name="message"
                            id="message"
                            // className="form-control min-h-[196px]"
                            rows="2"
                            value={formData.message}
                            onChange={handleTextChange}
                        >
                        </textarea>
                        <label htmlFor="message" className='font-bold'>Prayer Request / Praise Report</label> {/* Enter your prayer request or praise report here: */}
                        <p className='hidden sm:block text-sm text-[var(--font-color-4)] absolute bottom-[-24px] left-[8px]'>Feel free to also include any comments, questions or suggestions ...</p>
                        {formErrors.message && <p className='form-group-error-text sm:right-[0px] text-right'>{formErrors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type='submit' className='bg-[var(--button-background-color)] text-[var(--button-text-color)] rounded-lg font-semibold border-2 border-[var(--button-hover-background-color)] px-4 py-2 mt-6 rounded-md hover:text-[#D9D9D9] hover:bg-[var(--button-hover-background-color)]' aria-label='Submit the prayer request form' >Submit</button>

                    {/* Privacy */}
                    <fieldset className="form-group form-group-checkbox">
                        <legend className='font-bold'>Privacy</legend>
                        <ul>
                            <li className="checkbox">
                                <input aria-label="Please include me in the Prayer Chain Emails" type="checkbox" id="privacy-prayer-chain-emails" name="prayerChainEmails" onChange={(e) => handleCheckboxChange(e, 'privacy')} />
                                <label htmlFor="privacy-prayer-chain-emails">Please include me in the Prayer Chain Emails. <span className='text-gray-500'>(Be sure to fill in contact info above).</span></label>
                            </li>
                            <li className="checkbox">
                                <input aria-label="Please keep private, except Elders/Pastor." type="checkbox" id="privacy-private-except-elders-pastor" name="privateExceptEldersPastor" onChange={(e) => handleCheckboxChange(e, 'privacy')} />
                                <label htmlFor="privacy-private-except-elders-pastor">Please keep private, except Elders/Pastor.</label>
                            </li>
                        </ul>
                    </fieldset>

                </div>

            </form>

        </PageWrapper>
    )
}

export default PrayerRequests
