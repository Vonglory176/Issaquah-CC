import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'

const PrayerRequests = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <PageWrapper name='prayer-requests' className='flex flex-col gap-8 text-lg md:text-xl' maxWidth='max-w-[800px]'>

            <h1 className='text-3xl font-bold flex gap-2 flex-wrap'>Prayer Requests</h1>

            <hr className='border border-[var(--border-color-3)]' />

            <form action="" onSubmit={handleSubmit}>

                <div className="form-row flex flex-col gap-4 md:flex-row">

                    {/* First Name */}
                    <div className='form-group'>
                        <label htmlFor="first-name" className='font-bold'>First Name</label>
                        <input type="text" id='first-name' name='first-name' required />
                    </div>

                    {/* Last Name */}
                    <div className='form-group'>
                        <label htmlFor="last-name" className='font-bold'>Last Name</label>
                        <input type="text" id='last-name' name='last-name' required />
                    </div>

                </div>

                <div className="form-row flex flex-col gap-4 md:flex-row">

                    {/* Email */}
                    <div className='form-group'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="email" id='email' name='email' required />
                    </div>

                    {/* Phone */}
                    <div className='form-group'>
                        <label htmlFor="phone" className='font-bold'>Phone</label>
                        <input type="tel" id='phone' name='phone' />
                    </div>

                </div>

                <div className="form-row flex flex-col gap-4 md:flex-row">

                    {/* I am a ... */}
                    <div>
                        <label htmlFor="form-field-fbf71ca8-3f12-11ef-9dae-0614187498c1" className='font-bold'>I am a ...</label>
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

                    {/* How did you hear about us? */}
                    <div className="checkboxes">
                        <label htmlFor="form-field-4eb87a70-3f10-11ef-be19-0614187498c1" className='font-bold'>How did you hear about us?</label>
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
                    </div>

                </div>

                <div className="form-row flex flex-col gap-4 md:flex-row">

                    {/* Please contact me */}
                    <div className="checkboxes">
                        <label htmlFor="form-field-59ad036e-3f11-11ef-b029-0614187498c1" className='font-bold'>Please contact me:</label>
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
                    </div>

                    {/* I would to serve on the... */}
                    <div className="checkboxes">
                        <label htmlFor="form-field-7473709a-3f14-11ef-b635-0614187498c1" className='font-bold'>I would like to serve on the ...</label>
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
                <div className='form-group my-4'>
                    <label for="form-field-2bea9ed6-3f0d-11ef-b8ae-0614187498c1" className='font-bold'>Please enter your prayer request or praise report here:</label>
                    <textarea aria-label="Please enter your prayer request or praise report here:" tabindex="10100009" placeholder="Please feel free to also include any comments, questions or suggestions ..." name="form-field-2bea9ed6-3f0d-11ef-b8ae-0614187498c1" id="form-field-2bea9ed6-3f0d-11ef-b8ae-0614187498c1" className="form-control min-h-[196px]" rows="7"></textarea>
                </div>

                {/* Privacy */}
                <div data-field-id="8ac2417e-3f13-11ef-b4e1-0614187498c1" data-fw-model="FormField" className="my-4">
                    <div>
                        <div className="checkboxes">
                            <label htmlFor="form-field-8ac2417e-3f13-11ef-b4e1-0614187498c1" className='font-bold'></label>
                            <div>
                                <div className="checkbox">
                                    <label><input aria-label="Please keep private, except Elders/Pastor." type="checkbox" tabindex="10100010" name="form-field-8ac2417e-3f13-11ef-b4e1-0614187498c1[8ad7276a-3f13-11ef-a4b8-0614187498c1]" /> Please keep private, except Elders/Pastor.</label>
                                </div>
                                <div className="checkbox">
                                    <label><input aria-label="Please include me in the Prayer Chain Emails. (Be sure to fill in contact info above)." type="checkbox" tabindex="10100010" name="form-field-8ac2417e-3f13-11ef-b4e1-0614187498c1[8ad72346-3f13-11ef-844c-0614187498c1]" /> Please include me in the Prayer Chain Emails. (Be sure to fill in contact info above).</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <span className="react-resizable-handle react-resizable-handle-se"></span> */}
                </div>

                <button type='submit' className='bg-[var(--button-background-color)] text-[var(--button-text-color)] rounded-lg font-semibold border-2 border-[var(--button-hover-background-color)] px-4 py-2 mt-4 rounded-md hover:bg-[var(--button-hover-background-color)]'>Submit</button>

            </form>

        </PageWrapper>
    )
}

export default PrayerRequests
