import React from "react";
import aboutImg1 from "../assets/images/aboutPage1.jpg";
import aboutImg2 from "../assets/images/aboutPage2.jpg";
import { FiArrowRight } from "react-icons/fi";
import missionImg from "../assets/images/missionImg.jpg";
import visionImg from "../assets/images/visionImg.jpg";

export default function About() {
  return (
    <section
      className="flex flex-col md:flex-col lg:flex-row py-6 sm:py-10 gap-10 px-6 sm:px-24 w-full text-xs sm:text-base"
      id="about"
    >
      <div className="w-full md:w-full pl-4 lg:w-1/2 mb-4 sm:mb-8">
        <div className="relative">
          <img src={aboutImg1} alt="" className="w-full" />
          <img
            src={aboutImg2}
            alt=""
            className="absolute bottom-[-6%] right-[55%] w-1/2"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        <h3 className="text-2xl sm:text-3xl text-gray-900 font-bold underline mt-0 sm:mt-2">
          ABOUT US
        </h3>
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          We build everything that you need
        </h1>
        <p className="text-gray-600">
          We craft unique digital experiences. With more than 7 years of
          expertise, we design and code clean websites.
        </p>

        <ul className="space-y-2">
          <li className="flex items-center text-gray-700">
            <span className="text-black mr-2">➤</span> Providing Solutions For
            Construction, Management
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-black mr-2">➤</span> Engineers design and
            build the structure
          </li>
        </ul>

        {/* Mission and Vision */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center">
            <img
              src={missionImg}
              alt="Mission Icon"
              className="w-14 h-14 border"
            />
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-gray-800">
                Our Mission
              </h4>
              <p className="text-gray-600">
                We offer unique consulting to build client confidence and
                achieve certification.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <img
              src={visionImg}
              alt="Vision Icon"
              className="w-14 h-14 border"
            />
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-gray-800">
                Our Vision
              </h4>
              <p className="text-gray-600">
                To provide customer-focused solutions and become a trusted
                leader in consultation services.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-black text-white py-2 px-6 rounded-md inline-flex items-center">
            Explore Our Company
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
