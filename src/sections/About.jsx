import React from "react";
import aboutImg1 from "../assets/images/checkimg.jpg";
import aboutImg2 from "../assets/images/checkimg.jpg";
import { FiArrowRight } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";
import { IoWineOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-scroll";

export default function About() {
  return (
    <section
      className="flex flex-col md:flex-col lg:flex-row py-6 sm:py-10 gap-10 sm:px-24 w-full text-xs sm:text-base"
      id="about"
    >
      <div className="w-full md:w-full lg:w-1/2">
        <div className="relative">
          <img src={aboutImg1} alt="" className="w-full" />
          <img
            src={aboutImg2}
            alt=""
            className="absolute top-[55%] left-2 w-1/2"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-6 space-y-7">
        <h3 className="text-4xl text-gray-900 font-bold">About Us</h3>
        <h1 className="text-4xl font-bold text-gray-800">
          We build everything that you need
        </h1>
        <p className="text-gray-600">
          We craft unique digital experiences. With more than 7 years of
          expertise, we design and code clean websites.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2">
          <li className="flex items-center text-gray-700">
            <span className="text-orange-500 mr-2">➤</span> Providing Solutions
            For Construction, Management
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-orange-500 mr-2">➤</span> Engineers design and
            build the structure
          </li>
        </ul>

        {/* Mission and Vision */}
        <div className="mt-8 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <img
                src="path-to-mission-icon.png"
                alt="Mission Icon"
                className="w-8 h-8"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                Our Mission
              </h4>
              <p className="text-gray-600">
                We craft unique digital experiences. With more years of
                expertise we design.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <img
                src="path-to-vision-icon.png"
                alt="Vision Icon"
                className="w-8 h-8"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                Our Vision
              </h4>
              <p className="text-gray-600">
                We craft unique digital experiences. With more years of
                expertise we design.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
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
