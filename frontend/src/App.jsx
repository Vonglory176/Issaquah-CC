import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">

      <Header />

      <main>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </main>

      <Footer />
      
    </div>
  )
}

export default App;


/* TODO ---------------------------------------

  Figure out what to do with Video wrapper

*/