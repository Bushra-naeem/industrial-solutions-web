import React from "react";
import whatsappLogo from "../assets/images/whatsapp-logo.png"

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-800 text-white flex flex-col space-y-2 lg:space-y-0 lg:flex-row px-8 md:px-32 lg:px-24 py-20 sm:py-28 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/3 flex flex-col text-sm lg:text-base gap-4 md:gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">
              A2Z INDUSTRIAL<span className="block">SOLUTIONS.</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Our strength lies in delivering tailored consulting solutions that
              cater to the unique needs of each client.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Useful Links</h1>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#pages" className="text-sm">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="text-gray-400 text-sm">
              Office# 30-F, J-1 Market, <br />
              Wapda Town, Lahore
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              hello@www.a2zindustrialsolutions.co.uk <br />
              www.a2zindustrialsolutions.co.uk
            </p>
            <p className="text-gray-400 text-sm mt-4">
              +92-300-6360580 <br />
              +92-300-0501866
            </p>
          </div>
        </div>

      <a
          href="https://wa.me/923006360580" 
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 text-black right-4 p-3 rounded-full shadow-lg hover:opacity-80 transition"
        >
          <img
            src={whatsappLogo}
            alt="WhatsApp Chat"
            className="w-12 h-12" 
          />
        </a>


      </footer>
      <div
        className="text-center text-white p-6 sm:p-7 text-sm md:text-base
       bg-slate-900 mb-0"
      >
        Copyright © 2024. All Rights Reserved
      </div>
    </>
  );
}
