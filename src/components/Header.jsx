import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// import logo from "../assets/images/logo.png";
import { useRef, useState } from "react";
import './custom.css'
// import MobileIcons from "./MobileIcons";

export default function Header() {
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="">
      <div className="z-[9999] fixed w-full bg-white flex space-x-24 items-center py-8
       px-4 md:px-12 lg:px-28 gap-8">
        {/* <Link to="">
          <img src={logo} alt="" className="h-6 md:max-w-3xl" />
        </Link> */}
        <h1 className="h-6">A2Z INDUSTRIAL SOLUTIONS</h1>

      <button
        className="text-3xl p-1 cursor-pointer bg-transparent border-none outline-none text-black md:hidden"
        onClick={toggleMobileMenu}
      >
        <FaBars />
      </button>

        {/* Desktop navigation */}
        <nav ref={navRef} className="hidden lg:flex lg:gap-9 font-normal lg:text-base">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none cursor-pointer">Home</li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none cursor-pointer">About</li>
          </Link>
          <Link to="service" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none cursor-pointer">Services</li>
          </Link>
          <Link to="property" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none cursor-pointer">Pages</li>
          </Link>
          <Link to="blog" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none cursor-pointer">Blog</li>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none cursor-pointer">Contact</li>
          </Link>
        </nav>
        
        
        
        {/* Navigation links for mobile screens */}
        <nav
          ref={navRef}
          className={`absolute top-0 left-0 h-screen overflow-auto bg-white text-gray-500 font-semibold flex flex-col items-start px-2 md:px-4 ${
            isMobileMenuOpen ? "block custom-width md:w-[300px]" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between w-full pt-10 pb-6 px-1 mb-4 border-b border-gray-300">
          {/* <img src={logo} alt="" className="h-6" /> */}
          <h2 className="h-6">A2Z INDUSTRIAL SOLUTIONS</h2>
          <FaTimes className="mt-1 mr-1 text-black" onClick={handleCloseMenu} />
          </div>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none my-4 ml-3 text-center" onClick={handleCloseMenu}>HOME</li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none my-4 ml-3 text-center" onClick={handleCloseMenu}>ABOUT</li>
          </Link>
          <Link to="service" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none my-4 ml-3 text-center" onClick={handleCloseMenu}>SERVICE</li>
          </Link>
          <Link to="property" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none my-4 ml-3 text-center" onClick={handleCloseMenu}>PROPERTY</li>
          </Link>
          <Link to="blog" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none my-4 ml-3 text-center" onClick={handleCloseMenu}>BLOG</li>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none my-4 ml-3 text-center" onClick={handleCloseMenu}>CONTACT</li>
          </Link>
        </nav>
      </div>

      {/* <MobileIcons hidden={isMobileMenuOpen} /> */}
    </header>
  );
}


          