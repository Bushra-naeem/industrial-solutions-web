import React from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import { useRef, useState } from "react";
import "./custom.css";
// import MobileIcons from "./MobileIcons";

export default function Header() {
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="">
      <div
        className="z-[9999] fixed w-full bg-white flex space-x-24 items-center py-5
       px-4 md:px-12 lg:px-28 gap-8"
      >
        <div>
          <Link to="home">
            <img src={logo} alt="" className="h-16 w-32 inline" />
          </Link>
          {/* <span>A2Z INDUSTRIAL SOLUTIONS</span> */}
        </div>

        <button
          className="text-3xl p-1 cursor-pointer bg-transparent border-none outline-none text-black md:hidden"
          onClick={toggleMobileMenu}
        >
          <FaBars />
        </button>

        {/* Desktop navigation */}
        <nav
          ref={navRef}
          className="hidden lg:flex lg:gap-9 font-normal lg:text-base"
        >
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="list-none cursor-pointer">HOME</li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="list-none cursor-pointer">ABOUT</li>
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="list-none cursor-pointer">SERVICES</li>
          </Link>

          <Link
            to="pages"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="list-none cursor-pointer">PAGES</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="list-none cursor-pointer">CONTACT US</li>
          </Link>
        </nav>

        <div className="hidden md:flex gap-2 md:text-sm lg:text-base">
          <span className="border-8 border-white bg-white md:p-1 lg:p-2 px-6 shadow-lg hover:text-red-400">
            <FaPhoneAlt className="md:w-5 md:h-5 lg:w-4 lg:h-4" />
          </span>
          <div>
            <span className="block">Call us any time</span>
            <span>+2590256215</span>
          </div>
        </div>

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
            <FaTimes
              className="mt-1 mr-1 text-black"
              onClick={handleCloseMenu}
            />
          </div>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <li
              className="list-none my-4 ml-3 text-center"
              onClick={handleCloseMenu}
            >
              HOME
            </li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li
              className="list-none my-4 ml-3 text-center"
              onClick={handleCloseMenu}
            >
              ABOUT
            </li>
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li
              className="list-none my-4 ml-3 text-center"
              onClick={handleCloseMenu}
            >
              SERVICES
            </li>
          </Link>
          <Link
            to="pages"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li
              className="list-none my-4 ml-3 text-center"
              onClick={handleCloseMenu}
            >
              PAGES
            </li>
          </Link>
          <Link to="blog" spy={true} smooth={true} offset={-100} duration={500}>
            <li
              className="list-none my-4 ml-3 text-center"
              onClick={handleCloseMenu}
            >
              BLOG
            </li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li
              className="list-none my-4 ml-3 text-center"
              onClick={handleCloseMenu}
            >
              CONTACT
            </li>
          </Link>
        </nav>
      </div>

      {/* <MobileIcons hidden={isMobileMenuOpen} /> */}
    </header>
  );
}
