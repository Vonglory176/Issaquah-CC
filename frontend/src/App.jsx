import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Beliefs from "./pages/aboutUs/beliefs/Beliefs";
import WhatToExpect from "./pages/aboutUs/whatToExpect/WhatToExpect";
import Vision from "./pages/aboutUs/vision/Vision";
import Leadership from "./pages/aboutUs/leadership/Leadership";

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
          {/* Event Info */}

          {/* Sermons */}

          {/* Giving */}

          {/* Connect */}
          
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

  Figure out what to do with Video wrapper

  Set max-width for header/footer/page-wrapper

  Move resize event listener (in Dropdown.jsx) to Context

  Research "Animated banners" for pages

  Figure out what to do for Leadership page

*/