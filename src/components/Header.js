import React from "react";
// import components
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";

//import link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="bg-pink-200 fixed w-full px-[30px]
  lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <img src={Logo} style={{ width: 400 }} alt="" />
        </Link>

        {/* Nav - initially hidden - show on desktop mode */}
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link
            to={"/Home"}
            className="text-[#697c6d] 
      hover:text-primary transistion"
          >
            Home
          </Link>
        </nav>
        <nav className="hidden lg:flex">
          <Link
            to={"/About"}
            className="text-[#697c6d] 
      hover:text-primary transistion"
          >
            About
          </Link>
        </nav>
        <nav className="hidden lg:flex">
          <Link
            to={"/Portfolio"}
            className="text-[#697c6d] 
      hover:text-primary transistion"
          >
            Portfolio
          </Link>
        </nav>
        <nav className="hidden lg:flex">
          <Link
            to={"/Contact"}
            className="text-[#697c6d] 
      hover:text-primary transistion"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
