import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">

      <Header />

      <main>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* About Us */}
          <Route path="/about-us/beliefs" element={<Beliefs />} />
          <Route path="/about-us/what-to-expect" element={<WhatToExpect />} />
          <Route path="/about-us/vision-mission-and-values" element={<Vision />} />
          <Route path="/about-us/leadership" element={<Leadership />} />
          <Route path="/about-us/elder" element={<Elder />} />

          {/* Event Info */}
          {/* <Route path="/event-info/women-s-sign-up" element={<WomenSignUp />} />
          <Route path="/event-info/calendar" element={<Calendar />} /> */}
          <Route path="/event-info/bulletin" element={<Bulletin />} />

          {/* Sermons */}
          {/* <Route path="/sermons" element={<Sermons />} /> */}

          {/* Giving */}
          <Route path="/giving/stocks-and-crypto" element={<StocksAndCrypto />} />

          {/* Connect */}
          {/* <Route path="/connect/prayer-requests" element={<PrayerRequests />} /> */}
          <Route path="/connect/membership" element={<Membership />} />
          <Route path="/connect/kids" element={<Kids />} />
          {/* <Route path="/connect/teens" element={<Teens />} /> */}
          <Route path="/connect/women" element={<Women />} />
          <Route path="/connect/men" element={<Men />} />
          <Route path="/connect/outreach" element={<Outreach />} />
          <Route path="/connect/haiti" element={<Haiti />} />
          <Route path="/connect/recommended-bible-apps" element={<BibleApps />} />
          <Route path="/connect/employment" element={<Employment />} />
          
          {/* Contact */}

          {/* Care */}

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
    - Slideshows (Teens)
    - Google maps API (Contact)

  Move resize event listener (in Dropdown.jsx) to Context

  Research "Animated banners" for pages

  Figure out what to do for Leadership page

  Replace Gold colors

  Standardize font sizes

*/