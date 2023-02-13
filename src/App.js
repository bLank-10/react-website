import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Footer from "./components/footer/Footer";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home"
import About from "./pages/about/about";
import Event from "./pages/event/event"
import Membership from "./pages/membership/membership"
import Magazine from "./pages/magazine/magazine"
import Contact from "./pages/contact/contact";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <>
      <GlobalStyles />
        <Navbar />
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event" element={<Event />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/magazine" element={<Magazine />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
