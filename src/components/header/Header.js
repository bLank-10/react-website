// import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { HeaderStyle } from "./HeaderStyles";
import { elementHider, HeaderHider } from "./elementHider";

/** hiding/showing the top menu when scrolling  */
window.addEventListener("scroll", elementHider);

const Header = () => {
  return (
    <HeaderHider>
      <header className="header-wrapper">
        <HeaderStyle>
          {/* <div class="container"> */}
        <Link to="/"><img src="https://yt3.googleusercontent.com/ztOkymaK-0VjXtDBelMxaIDwCqkeUHz_0GFEPdU48YTx94ND9MROPdzGf_J95sDdqQFcV3E-ryE=s176-c-k-c0x00ffffff-no-rj" alt="IEEE logo" width={50} height={30} mode='fit' /></Link>
        {/* </div> */}
          <Navbar />
        </HeaderStyle>
      </header>
    </HeaderHider>
  );
};

export { Header };
