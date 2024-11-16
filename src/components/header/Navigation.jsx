import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Dropdown from './Dropdown'

const Navigation = ({ isOpen, openDropdown, toggleDropdown }) => {
    const pathname = usePathname()

    const generateNavLinks = (links) => {
        return links.map(({ to, label, ariaLabel }) => (
            <li key={to}>
                <Link
                    href={to}
                    aria-label={ariaLabel}
                    className={`nav-link ${pathname === to ? 'isActive' : ''}`}
                >
                    {label}
                </Link>
            </li>
        ))
    }

    return (
        <nav className={`nav-menu shadow-lg lg:shadow-none ${isOpen ? 'open' : ''}`}>
            <ul className='flex flex-col font-semibold lg:gap-4 lg:flex-row lg:items-center'>
                {/* About Us */}
                <li>
                    <Dropdown title="About Us" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                        {generateNavLinks([
                            { to: '/about-us/beliefs', label: 'What We Believe', ariaLabel: 'View the What We Believe page' },
                            { to: '/about-us/what-to-expect', label: 'What to Expect', ariaLabel: 'View the What to Expect page' },
                            { to: '/about-us/vision-mission-and-values', label: 'Vision, Mission, and Values', ariaLabel: 'View the Vision, Mission, and Values page' },
                            { to: '/about-us/leadership', label: 'Meet Our Leadership', ariaLabel: 'View the Meet Our Leadership page' },
                            { to: '/about-us/elder', label: 'Elder Nominations', ariaLabel: 'View the Elder Nominations page' }
                        ])}
                    </Dropdown>
                </li>

                {/* Event Info Dropdown */}
                <li>
                    <Dropdown title="Event Info" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                        {generateNavLinks([
                            { to: '/event-info/womens-sign-up', label: "Women's Retreat Sign Up", ariaLabel: "View the Women's Retreat Sign Up page" },
                            { to: '/event-info/calendar', label: 'Church Calendar', ariaLabel: 'View the Church Calendar page' },
                            { to: '/event-info/bulletin', label: 'Church Bulletin', ariaLabel: 'View the Church Bulletin page' }
                        ])}
                    </Dropdown>
                </li>

                {/* Other Menu Items */}
                <li>
                    <Dropdown title="Sermons" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                        {generateNavLinks([
                            { to: '/sermons/library', label: 'Video Library', ariaLabel: 'See the ICC Sermon Video Library' }
                        ])}
                        <li>
                            <a href={'https://pastors.ai/church/@issaquahchristianchurch2266'} target='_blank' rel='noopener noreferrer' aria-label="Check out the ICC Sermon Chatbot" title="Check out the ICC Sermon Chatbot">
                                AI Chatbot
                            </a>
                        </li>
                    </Dropdown>
                </li>

                {/* Giving */}
                <li>
                    <Dropdown title="Giving" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                        <li>
                            <a href={'https://giving.servantkeeper.com/issaquahcc'} target='_blank' rel='noopener noreferrer' aria-label="Open a new tab to the Tithes and Offerings page">
                                Tithes and Offerings
                            </a>
                        </li>
                        {generateNavLinks([
                            { to: '/giving/stocks-and-crypto', label: 'Stocks and Crypto', ariaLabel: 'View the Stocks and Crypto page' }
                        ])}
                    </Dropdown>
                </li>

                {/* Connect */}
                <li>
                    <Dropdown title="Connect" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                        {generateNavLinks([
                            { to: '/connect/prayer-requests', label: 'Prayer Requests', ariaLabel: 'View the Prayer Requests page' },
                            { to: '/connect/membership', label: 'Membership', ariaLabel: 'View the Membership page' },
                            { to: '/connect/kids', label: 'Kids', ariaLabel: 'View the Kids Ministry page' },
                            { to: '/connect/teens', label: 'Teens', ariaLabel: 'View the Teens Ministry page' },
                            { to: '/connect/women', label: 'Women', ariaLabel: 'View the Women Ministry page' },
                            { to: '/connect/men', label: 'Men', ariaLabel: 'View the Men Ministry page' },
                            { to: '/connect/outreach', label: 'Outreach', ariaLabel: 'View the Outreach page' },
                            { to: '/connect/haiti', label: 'Haiti', ariaLabel: 'View the Haiti page' },
                            { to: '/connect/recommended-bible-apps', label: 'Recommended Bible Apps', ariaLabel: 'View the Recommended Bible Apps page' },
                            { to: '/connect/employment', label: 'Employment', ariaLabel: 'View the Employment page' }
                        ])}
                    </Dropdown>
                </li>

                {/* Contact */}
                {generateNavLinks([
                    { to: '/contact', label: 'Contact', ariaLabel: 'View the Contact page' }
                ])}

                {/* Care */}
                <li>
                    <Dropdown title="Care" openDropdown={openDropdown} toggleDropdown={toggleDropdown}>
                        {generateNavLinks([
                            { to: '/care/helpful-resources', label: 'Helpful Resources', ariaLabel: 'View the Helpful Resources page' }
                        ])}
                    </Dropdown>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
