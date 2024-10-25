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

function App() {
  return (
    <div className="App relative">

      <Header />

      <main>

        <Routes>
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
          <Route path="/sermons" element={<Sermons />} />

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

        </Routes>

      </main>

      <Footer />
      
    </div>
  )
}

export default App;


/* TODO ---------------------------------------

  Complicated features:
    - Sermon Player
    - Calendar
    - Forms

  Implement ReCaptcha for Forms (PrayerRequests/WomensSignUp)

  Clean/Hook up form-submission

  Weird issue with Canva video ui when scrolling in mobile view (Has to do with browser UI growing/shrinking)

  Do Aria-Label / Title / TabIndex(?) sweep

  ---------------------------------------

  Hamburger animation is kinda jank

  Margin issue in teens slideshow (?)

  Move resize event listener (in Dropdown.jsx) to Context

  Research "Animated banners" for pages

  Figure out what to do for Leadership page

  Look into centered content with larger text for certain pages

  Clean up theme.scss

  Move event listener (in Banner.jsx) to Context

  Tinker with line-height

*/