import { Routes, Route } from "react-router-dom";

import "./styles.css" 
import Footer from "./components/footer/Footer";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home"
import About from "./pages/about/about";
import Event from "./pages/event/event"
import Membership from "./pages/membership/membership"
import Team from "./pages/team/team"
import Contact from "./pages/contact/contact";
import Navbar from "./components/Navbar/Navbar";
import E1 from "./pages/eventpage/e1";
import E2 from "./pages/eventpage/e2";
import E3 from "./pages/eventpage/e3";
import E4 from "./pages/eventpage/e4";
import E5 from "./pages/eventpage/e5";
import E6 from "./pages/eventpage/e6";
import E7 from "./pages/eventpage/e7";
import E8 from "./pages/eventpage/e8";
import E9 from "./pages/eventpage/e9";

function App() {

  return (
    <>
      <styles />
        <Navbar />
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event" element={<Event />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/team" element={<Team />} />
          <Route path="/e1" element={<E1 />} />
          <Route path="/e2" element={<E2 />} />
          <Route path="/e3" element={<E3 />} />
          <Route path="/e4" element={<E4 />} />
          <Route path="/e5" element={<E5 />} />
          <Route path="/e6" element={<E6 />} />
          <Route path="/e7" element={<E7 />} />
          <Route path="/e8" element={<E8 />} />
          <Route path="/e9" element={<E9 />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App;
