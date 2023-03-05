import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);
    
  return (
        <nav className="navbar">
        <h3 className="logo"><Link to="/" style={{ textDecoration: 'none'}} ><img src="https://yt3.googleusercontent.com/ztOkymaK-0VjXtDBelMxaIDwCqkeUHz_0GFEPdU48YTx94ND9MROPdzGf_J95sDdqQFcV3E-ryE=s176-c-k-c0x00ffffff-no-rj" alt="IEEE logo" width={60} height={50} mode='fit' />IEEE FCRIT</Link></h3>
        <ul 
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
            <Link to="/" className="home">
                <li>HOME</li>
            </Link>
            <Link to="/membership" className="membership">
                <li>MEMBERSHIP</li>
            </Link>
            <Link to="/magazine" className="magazine">
                <li>MAGAZINE</li>
            </Link>
            <Link to="/about" className="about">
                <li>ABOUT</li>
            </Link>
            <Link to="/event" className="event">
                <li>EVENT</li>
            </Link>
            <Link to="/contact" className="contact">
                <li>CONTACT</li>
            </Link>

        </ul>
        <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        >
            {isMobile ? (
                <i className="fas fa-times"></i> 
            ) : (
              <i className="fas fa-bars"></i>
            )}
        </button>
        
    </nav>
  )
}

export default Navbar