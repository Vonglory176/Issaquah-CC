import { Route, Routes, Navigate } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Beliefs from "./pages/aboutUs/beliefs/Beliefs";
import WhatToExpect from "./pages/aboutUs/whatToExpect/WhatToExpect";
import Vision from "./pages/aboutUs/vision/Vision";
import Leadership from "./pages/aboutUs/leadership/Leadership";
import Elder from "./pages/aboutUs/elder/Elder";
import Bulletin from "./pages/eventInfo/bulletin/Bulletin";
import StocksAndCrypto from "./pages/giving/stocksAndCrypto/StocksAndCrypto";
import Membership from "./pages/connect/membership/Membership";
import Kids from "./pages/connect/kids/Kids";
import Women from "./pages/connect/women/Women";
import Men from "./pages/connect/men/Men";
import Outreach from "./pages/connect/outreach/Outreach";
import Haiti from "./pages/connect/haiti/Haiti";
import Employment from "./pages/connect/employment/Employment";
import BibleApps from "./pages/connect/bibleApps/BibleApps";
import HelpfulResources from "./pages/care/helpfulResources/HelpfulResources";
import LocalResources from "./pages/care/localResources/LocalResources";
import Contact from "./pages/contact/Contact";
import Sermons from "./pages/sermons/Sermons";
import Teens from "./pages/connect/teens/Teens";
import PrayerRequests from "./pages/connect/prayerRequests/PrayerRequests";
import WomensSignUp from "./pages/eventInfo/womensSignUp/WomensSignUp";
import Calendar from "./pages/eventInfo/calendar/Calendar";
import { useSiteContext } from "./context/SiteContext";
import NotFound from "./pages/notFound/NotFound";

function App() {
  const { modal } = useSiteContext()

  return (
    <div className={`App relative ${modal ? 'overflow-y-scroll' : ''}`}>

      <Header className={modal ? 'fixed overflow-y-scroll' : 'sticky'} />

      <main>

        {modal} {/* MODAL DISPLAY */}

        <Routes>  {/* PAGE DISPLAY */}

          <Route path="/" element={<Home />} />

          {/* About Us */}
          <Route path="/about-us" element={<Navigate to="/" />} />
          <Route path="/about-us/beliefs" element={<Beliefs />} />
          <Route path="/about-us/what-to-expect" element={<WhatToExpect />} />
          <Route path="/about-us/vision-mission-and-values" element={<Vision />} />
          <Route path="/about-us/leadership" element={<Leadership />} />
          <Route path="/about-us/elder" element={<Elder />} />

          {/* Event Info */}
          <Route path="/event-info" element={<Navigate to="/" />} />
          <Route path="/event-info/womens-sign-up" element={<WomensSignUp />} />
          <Route path="/event-info/calendar" element={<Calendar />} />
          <Route path="/event-info/bulletin" element={<Bulletin />} />

          {/* Sermons */}
          <Route path="/sermons" element={<Navigate to="/sermons/library" />} />
          <Route path="/sermons/library" element={<Sermons />} />

          {/* Giving */}
          <Route path="/giving" element={<Navigate to="/" />} />
          <Route path="/giving/stocks-and-crypto" element={<StocksAndCrypto />} />

          {/* Connect */}
          <Route path="/connect" element={<Navigate to="/" />} />
          <Route path="/connect/prayer-requests" element={<PrayerRequests />} />
          <Route path="/connect/membership" element={<Membership />} />
          <Route path="/connect/kids" element={<Kids />} />
          <Route path="/connect/teens" element={<Teens />} />
          <Route path="/connect/women" element={<Women />} />
          <Route path="/connect/men" element={<Men />} />
          <Route path="/connect/outreach" element={<Outreach />} />
          <Route path="/connect/haiti" element={<Haiti />} />
          <Route path="/connect/recommended-bible-apps" element={<BibleApps />} />
          <Route path="/connect/employment" element={<Employment />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Care */}
          <Route path="/care" element={<Navigate to="/" />} />
          <Route path="/care/helpful-resources" element={<HelpfulResources />} />
          <Route path="/care/local-resources" element={<LocalResources />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      </main>

      <Footer />

    </div>
  )
}

export default App;


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