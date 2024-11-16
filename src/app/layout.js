// import localFont from "next/font/local";
import "../styles/index.css";

import Header from '@/src/components/header/Header'
import Footer from '@/src/components/footer/Footer'
import { SiteProvider } from '@/src/context/SiteContext'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = { // Interesting!
  title: 'Issaquah Christian Church',
  description: 'Welcome to Issaquah Christian Church. Teaching Biblical life applications as you learn to follow Jesus.',
  openGraph: {
    title: 'Issaquah Christian Church',
    description: 'Welcome to Issaquah Christian Church. Teaching Biblical life applications as you learn to follow Jesus.',
    // images: [
    //   {
    //     url: 'https://fluidcomm.vercel.app/fluidcomm-logo-black.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'FluidComm Logo',
    //   },
    // ],
    siteName: 'Issaquah Christian Church',
    type: 'website',
  },
}

// Register service worker
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then(registration => {
//         console.log('Service Worker registered with scope: ', registration.scope)
//       })
//       .catch(error => {
//         console.error('Service Worker registration failed: ', error)
//       })
//   })
// }

// Unregister service worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.getRegistrations().then(registrations => {
//     for (const registration of registrations) {
//       registration.unregister().then(() => {
//         console.log('Service Worker unregistered')
//       })
//     }
//   }).catch(error => {
//     console.error('Error unregistering service workers:', error)
//   })
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* App Providers */}
        <SiteProvider>

          <div className='App'>
            
            <Header />

            {children}

            <Footer />
            
          </div>

        </SiteProvider>
      </body>
    </html>
  )
}

/* TODO ////////////////////////////////////////////////////////////////


  UPDATE SERVICE WORKER NAME BEFORE DEPLOYMENT !!!!!!


  // Important ---------------------------------------


  UPDATE SEO STUFF 
    - https://johnsweetaccessibility.com/2020/05/accessibility-in-spas-part-2/
    - https://www.freecodecamp.org/news/how-to-make-seo-friendly-react-apps/ --> Especially for server stuff
    - https://synodus.com/blog/web-development/single-page-application-seo/

  Use proxy to get by 3rd part cookie/link blocking?

  Get ACTUAL ReCaptcha keys
  
  Re-Add CSP ?

  Look at proxies to mesh with CSP better?

  CSP Nonce generation? ( use in script-src + "strict-dynamic" )

  ERROR: Weird issue with Canva video ui when scrolling in mobile view (Has to do with browser UI growing/shrinking)


  // Moderate ----------------------------------------


  Change routes to match h1 header for SEO ?
  
  Research "Animated banners" for pages  
  
  Clean up theme.scss
  
  
  // Minor -------------------------------------------

  Compress images with --> https://tinypng.com/

  Lazy load all iframes

  Hamburger animation is kinda jank

  Margin issue in teens slideshow (?)

  Look into centered content with larger text for certain pages
  
  Tinker with line-height

*/

/*
Using a 404.html file for redirection in GitHub Pages to handle routing for a Single Page Application (SPA) can have some implications for SEO. Here's how it might impact your site's SEO:

1. Crawlability and Indexing:

  When using a 404.html file to redirect all unknown routes to index.html, search engines might not be able to distinguish between valid and invalid URLs. This can lead to issues with crawlability and indexing, as search engines may not correctly interpret the structure of your site.

  To mitigate this, ensure that your SPA uses the History API to manage URLs, which allows for clean URLs without hash fragments. This can help search engines understand the different views as separate pages.

2. Soft 404 Errors:

  Redirecting all requests to index.html can result in soft 404 errors, where a page that doesn't exist returns a 200 status code instead of a 404. This can confuse search engines and affect your site's SEO negatively.

  To address this, you can implement client-side logic to detect non-existent routes and display a custom 404 message, while also using JavaScript to set a noindex meta tag for these pages.

3. Content and Metadata:

  Ensure that each view in your SPA has unique titles, meta descriptions, and structured data. This helps search engines understand the content of each view and improves the chances of your pages being indexed correctly.

4. Server-Side Rendering (SSR) or Pre-rendering:

  Consider using SSR or pre-rendering techniques to generate static HTML versions of your pages. This can significantly improve SEO by providing search engines with content that is easier to crawl and index.

5. Analytics and Tracking:

  Ensure that your analytics setup is configured to track page views correctly in an SPA environment. This often involves using tools like Google Tag Manager to fire events on route changes.
  
  By carefully managing these aspects, you can minimize the negative SEO impacts of using a 404.html file for SPA routing on GitHub Pages. For more detailed guidance, you might want to explore resources like the spa-github-pages repository, which provides a comprehensive solution for deploying SPAs on GitHub Pages.
*/