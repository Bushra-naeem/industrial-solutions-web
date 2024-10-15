import React from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import { useRef, useState } from "react";
import "./custom.css";

export default function Header() {
  const navRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div
        className="z-[9999] fixed w-full bg-gray-100 bg-opacity-70 flex justify-between lg:space-x-24 items-center py-4
       px-4 md:px-12 lg:px-24 gap-2 sm:gap-8 border border-b-black"
      >
        <Link to="home">
          <img src={logo} alt="" className="h-14 w-28" />
        </Link>


        <button
          className="text-3xl flex justify-end items-center cursor-pointer bg-transparent border-none outline-none md:hidden"
          onClick={toggleMobileMenu}
        >
          <FaBars className="w-8 h-8 black" />
        </button>

        {/* Desktop navigation */}
        <nav
          ref={navRef}
          className="hidden md:flex gap-5 lg:gap-9 text-gray-900 font-medium text-sm"
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

        <div className="hidden lg:flex gap-2 text-base">
          <span className="border border-white bg-white py-0 px-5 flex justify-center items-center shadow-lg">
            <FaPhoneAlt className="w-4 h-4" />
          </span>
          <div className="text-gray-900">
            <span className="block">Call us any time</span>
            <span>+92-300-6360580</span>
          </div>
        </div>

        {/* Navigation links for mobile screens */}
        <nav
          ref={navRef}
          className={`fixed top-0 left-0 h-screen overflow-auto bg-white text-gray-500 font-semibold flex flex-col items-start px-2 md:px-4 ${
            isMobileMenuOpen ? "block custom-width md:w-[300px]" : "hidden"
          }`}
        >
          <div className="grid grid-cols-2 items-center w-full pt-10 pb-6 px-1 mb-4 border-b border-gray-300">
            <img src={logo} alt="" className="h-12 w-24" />
            <FaTimes
              className="mt-1 mr-1 top-10 center justify-self-end w-4 h-6 text-black"
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
    </header>
  );
}
