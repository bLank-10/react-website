import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Layout from "./components/Layout/Layout";
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";

import NotFound from "./pages/NotFound/NotFound";
import Landing from "./pages/Landing/Landing"
import About from "./pages/about/about";
import Event from "./pages/event/event"
import Membership from "./pages/membership/membership"
import Magazine from "./pages/magazine/magazine"
import Contact from "./pages/contact/contact";

function App() {
  const location = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [location])

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event" element={<Event />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/magazine" element={<Magazine />} />
        </Routes>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
