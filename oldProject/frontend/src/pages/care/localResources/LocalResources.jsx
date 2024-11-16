import React from 'react'
import PageWrapper from '../../../components/pageWrapper/PageWrapper'
import ProgressiveImage from 'react-progressive-graceful-image'
import logo from '../../../assets/images/logos/logo8.webp'

const LocalResources = () => {
    return (
        <PageWrapper name='local-resources' className='flex flex-col gap-12 mx-auto' maxWidth=''
            metaSettings={{
                title: 'Local Resources',
                description: 'Issaquah Christian Church is here to help our community during this time of need.'
            }}
            bannerSettings={{
                text: {
                    heading: "Local Resources",
                    // subheading: ""
                }
            }}>


            <div className="logo-image-container mx-4">
                <ProgressiveImage src={logo} placeholder={''}>
                    {(src, loading) => (
                        <img
                            src={src}
                            alt={''}
                            className={`w-full max-w-[481px] h-full mx-auto duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                        />
                    )}
                </ProgressiveImage>
            </div>

            <section className="">
                <h2 className=''>Resources for unemployment services, financial assistance, housing/rental assistance, food assistance, legal services, student services, and more...</h2>

                <ul className=''>
                    <li><p><a href="http://www.seattle.gov/mayor/covid-19" target='_blank' rel='noopener noreferrer'>City of Seattle COVID-19 Resource Page</a> - <span className='italic'>Resources for utilities, immigrant-related info, internet access, healthcare, small business support, domestic violence support, home education support, and more.</span></p></li>

                    <li><a href="https://www.kingcounty.gov/depts/community-human-services/COVID.aspx" target='_blank' rel='noopener noreferrer'>King County DCHS COVID-19 Resource Page</a></li>

                    <li><p><a href="https://dfi.wa.gov/coronavirus/financial-resources" target='_blank' rel='noopener noreferrer'>Washington Department of Financial Institutions</a> - <span className='italic'>Financial Assistance</span></p></li> {/* */}

                    <li><a href="https://www.pse.com/" target='_blank' rel='noopener noreferrer'>Puget Sound Energy</a></li>
                    {/* <p>Check out links to bill payment assistance and other tools</p> */}

                    <li><p><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gL8e-2vYVUm72CrXWADf2pzMaps6WOZIhE32sXm4UmNURUwzOTBFOEhHUFRTQ0pBNE8wQVA2TVg5Ty4u" target='_blank' rel='noopener noreferrer'>United Way of King County</a> - <span className='italic'>Food Home Delivery (Seattle, North King County, and East King County)</span></p></li>

                    <li><a href="https://public.tableau.com/profile/city.of.seattle.human.services#!/vizhome/Covid-19Seattle-AreaEmergencyFoodResources/COVIDEmergencyFood" target='_blank' rel='noopener noreferrer'>Emergency Food Resource Map</a></li>

                    <li><a href="https://kingcounty.gov/depts/health/covid-19/support/emergency-food.aspx" target='_blank' rel='noopener noreferrer'>Emergency Food Access Resources</a></li>
                </ul>
            </section>

            <section className="">
                <h2 className=''>Support Services</h2>

                <ul className=''>
                    <li><a href="https://www.walistens.org/" target='_blank' rel='noopener noreferrer'>Nonclinical support to people experiencing elevated stress due to COVID-19</a></li>

                    <li><a href="https://aarpcommunityconnections.org/friendly-voices/" target='_blank' rel='noopener noreferrer'>AARP FRIENDLY VOICE - Connecting People to People</a></li>

                    <li><a href="http://www.vinemapleplace.org/" target='_blank' rel='noopener noreferrer'>Crisis Family Services</a></li>

                    <li><p><a href="https://www.tahomasd.us/news/announcements/tahoma_c_o_v_i_d-19_frequently_asked_questions" target='_blank' rel='noopener noreferrer'>Maple Valley Meals for Kids</a> - <span className='italic'>Vine Maple Place assists families in crisis, helping single parents and their children</span></p></li>

                    <li><p><a href="https://www.mesotheliomahope.com/" target='_blank' rel='noopener noreferrer'>Mesothelioma Hope</a> - <span className='italic'>At Mesothelioma Hope, they offer free resources that are reviewed by certified oncologists and provide detailed information about mesothelioma and its health impacts. Their mission is to raise awareness about cancer and other asbestos-related diseases.</span></p></li>
                </ul>
            </section>

            <section className="">
                <h2 className=''>Senior Services</h2>

                <ul className=''>

                    <li><p><a href="http://nursinghomesabuse.org/nursing-home-abuse/" target='_blank' rel='noopener noreferrer'>Nursing Homes Abuse</a> - <span className='italic'>Their mission is to be a complete resource center on abuse in nursing homes and to offer any help possible.</span></p></li>

                    <li><p><a href="https://www.caring.com/senior-living/nursing-homes/" target='_blank' rel='noopener noreferrer'>CARING.com</a> - <span className='italic'>Around the Clock Care or Nursing Home Options</span></p></li>

                    <li><p><a href="https://www.issaquahwa.gov/3022/Senior-Program" target='_blank' rel='noopener noreferrer'>Issaquah Senior Center </a> - <span className='italic'>Are you feeling isolated? Call 425-392-2381 and let them know. Their Senior Center staff will call you periodically to check-in and provide support.</span></p></li>

                    <li><p><a href="https://www.agingkingcounty.org/help-information/caregiver-support/" target='_blank' rel='noopener noreferrer'>Aging and Disabilities Caregiver Support</a> - <span className='italic'>You'd be surprised of what might qualify you as a caregiver. This is a good resource for you.</span></p></li>

                    <li><p><a href="http://camelotsociety.org/" target='_blank' rel='noopener noreferrer'>Camelot Society</a> - <span className='italic'>Inspiring hope. Fostering growth. They are a non-profit organization empowering people with disabilities, and those that support them, to live extraordinary lives.</span></p></li>

                    <li><a href="https://maplevalleyfoodbank.org/coronavirus-covid-19-information/" target='_blank' rel='noopener noreferrer'>Maple Valley Food Bank</a></li>

                    <li><a href="https://www.maplevalleycc.org/" target='_blank' rel='noopener noreferrer'>Maple Valley Senior Services</a></li>

                </ul>
            </section>

            <section className="">
                <h2 className=''>Veteran Services</h2>

                <ul className=''>

                    <li><p><a href="https://www.veteranscrisisline.net/" target='_blank' rel='noopener noreferrer'>VETERANS CRISIS LINE</a> - <span className='italic'>1-800-273-8255 then press 1</span></p></li>

                    <li><a href="https://www.dva.wa.gov/covid" target='_blank' rel='noopener noreferrer'>Washington State Dept. of Veterans Affairs</a></li>

                    <li><a href="https://www.worksourcewa.com/" target='_blank' rel='noopener noreferrer'>WorkSourceWA</a></li>

                    <li><a href="https://www.mentalhealth.va.gov/" target='_blank' rel='noopener noreferrer'>U.S. Dept. of Veterans Affairs/Mental Health</a></li>

                </ul>
            </section>

            <section className="">
                <h2 className=''>Services for Disabled</h2>

                <ul className=''>

                    <li><a href="https://www.dshs.wa.gov/dda/consumers-and-families/dda-coronavirus-information" target='_blank' rel='noopener noreferrer'>DSHS Developmental Disabilities Administration</a></li>

                    <li><p><a href="https://arcwa.org/covid-19/" target='_blank' rel='noopener noreferrer'>The Arc</a> - <span className='italic'>for people with intellectual and developmental disabilities</span></p></li>

                </ul>
            </section>

            <section className="">
                <h2 className=''>Addiction Services</h2>

                <ul className=''>

                    <li><a href="https://www.celebraterecovery.com/crcr" target='_blank' rel='noopener noreferrer'>Celebrate Recovery</a></li>

                    <li><a href="https://facesandvoicesofrecovery.org/" target='_blank' rel='noopener noreferrer'>Faces & Voices of Recovery</a></li>

                    <li><p><a href="http://www.warecoveryhelpline.org/" target='_blank' rel='noopener noreferrer'>Washington Recovery Help Line</a> - <span className='italic'>1-866-789-1511</span></p></li>

                    <li><p><a href="https://www.crisisconnections.org/wa-warm-line/" target='_blank' rel='noopener noreferrer'>WA Warm Line</a> - <span className='italic'>1-877-500-9276 (WARM)</span></p></li>

                    <li><a href="https://www.seattleaa.org/online-meetings/" target='_blank' rel='noopener noreferrer'>Alcoholics Anonymous</a></li>

                </ul>
            </section>

            <section className="">
                <h2 className=''>Addiction Services</h2>

                <ul className=''>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/childcare" target='_blank' rel='noopener noreferrer'>Childcare Services</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/digital-resources" target='_blank' rel='noopener noreferrer'>Digital Resources for Students</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/laptops" target='_blank' rel='noopener noreferrer'>Emergency Computer and Internet Hot Spot Check Out</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/employment" target='_blank' rel='noopener noreferrer'>Employment Assistance and Information</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/financial" target='_blank' rel='noopener noreferrer'>Financial Assistance</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/food-and-clothing" target='_blank' rel='noopener noreferrer'>Food and Clothing Services</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/health-care-services" target='_blank' rel='noopener noreferrer'>Health Care Services</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/utilities" target='_blank' rel='noopener noreferrer'>Housing, utility, and internet assistance</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/how-to-talk-to-my-child-about-coronavirus" target='_blank' rel='noopener noreferrer'>How to talk to my child about coronavirus</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/other-languages" target='_blank' rel='noopener noreferrer'>Support for families in Chinese, Spanish, and other languages</a></li>

                    <li><a href="https://www.issaquah.wednet.edu/family/supports/transportation" target='_blank' rel='noopener noreferrer'>Transportation Services</a></li>

                </ul>
            </section>

        </PageWrapper>
    )
}

export default LocalResources
