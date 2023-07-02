import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {

    const [isMobile, setIsMobile] = useState(false);
    
  return (
        <nav className="navbar">
        <h3 className="logo"><Link to="/" onClick={() => { window.scroll(0, 0); }} style={{ textDecoration: 'none'}} ><img src="https://yt3.googleusercontent.com/ztOkymaK-0VjXtDBelMxaIDwCqkeUHz_0GFEPdU48YTx94ND9MROPdzGf_J95sDdqQFcV3E-ryE=s176-c-k-c0x00ffffff-no-rj" alt="IEEE logo" width={50} height={50} mode='fit'/></Link></h3>
        <ul 
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
            <Link to="/" className="home" onClick={() => { window.scroll(0, 0); }}>
                <li>HOME</li>
            </Link>
             <Link to="/" className="about" onClick={() => { window.scroll(50, 570); }}>
                <li>ABOUT US</li>
            </Link>
            <Link to="https://www.ieee.org/membership/" className="membership">
                <li>MEMBERSHIP</li>
            </Link>
            <Link to="/team" className="team" onClick={() => { window.scroll(0, 0); }}>
                <li>TEAM</li>
            </Link>
           
            <Link to="/event" className="event" onClick={() => { window.scroll(0, 0); }}>
                <li>EVENT</li>
            </Link>
            <Link to="/contact" className="contact" onClick={() => { window.scroll(0, 0); }}>
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