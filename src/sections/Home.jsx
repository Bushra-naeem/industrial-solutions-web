import React from "react";
import HeroBanner from "../assets/images/homePage.png";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-gray-700 py-20 md:py-36 text-white mb-12 relative bg-cover bg-center"
      id="home"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col justify-center items-center top-40 h-full text-center px-3 sm:px-6">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-5xl mb-4">
          A2Z INDUSTRIAL SOLUTIONS
        </h1>

        <p className="text-sm md:text-base mb-6 max-w-2xl">
          Work with the most reputable registrars and certification bodies /
          agencies to ensure your certificate has the proper national and
          international recognition. A2Z Solutions is a branch of FAS
          International. The company achieved 100% success rate in
          Certification.
        </p>

        <div className="flex gap-4">
            <Link
                to="about"
                spy="true"
                smooth="true"
                offset={-100}
                duration={500}
                className="bg-white text-black text-sm sm:text-base font-bold py-1 px-3 md:py-3 md:px-6 rounded
                hover:bg-gray-700 hover:text-white transition"
              >
                LEARN MORE →
              </Link> 
              <Link
                to="services"
                spy="true"
                smooth="true"
                offset={-100}
                duration={500}
                className="bg-transparent text-white border-2 border-white text-sm sm:text-base font-bold py-1 px-3 md:py-3
                 md:px-6 rounded hover:bg-gray-700 hover:text-white transition"
              >
                OUR SERVICES
              </Link> 
        </div>
      </div>
    </div>
  );
}


