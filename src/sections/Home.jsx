import React from "react";
import HeroBanner from "../assets/images/checkimg.jpg";
import { FaHome } from "react-icons/fa";
export default function Home() {
  return (
    <div
      className="w-full flex flex-col lg:flex-row lg:items-center bg-gray-700 py-20 md:py-36 gap-10 mb-12 pl-6 md:pl-12 lg:pl-24 lg:pr-14 text-white pt-40"
      id="home"
    >
      <div className="lg:w-1/2 md:pl-4">
        <p className="text-sm md:text-lg font-semibold mb-3">
          <span className="block underline">A2Z INDUSTRIAL</span>
          <span className="text-5xl underline">SOLUTIONS.</span>
        </p>

        <h2 className="font-semibold text-2xl mb-6">
          ULTIMATE BUSINESS
          <span className="block font-bold text-7xl">EXCELLENCE SERVICES</span>
        </h2>

        {/* <p className="text-xs md:text-sm lg:text-base text-slate-500 h-12 border-l border-gray-500 mb-6 md:mb-8 pl-4">
          <span>Lorem ipsum dolor sit amet, elit sed</span>
          <span className="block">do eiusmod tempor incididunt ut labore.</span>
        </p> */}

        <button className="bg-white text-gray-800 border-2 border-white hover:bg-white hover:text-black hover:border-white py-2 px-3 md:py-4 md:px-10 text-xs md:text-sm lg:text-lg">
          DISCOVER MORE
        </button>
      </div>
      <div className="lg:pt-20">
        <img
          className="w-full pr-6 md:pr-12"
          src={HeroBanner}
          alt="Modern house model"
        />
      </div>
    </div>
  );
}
