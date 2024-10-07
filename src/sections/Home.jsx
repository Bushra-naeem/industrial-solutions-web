import React from "react";
import HeroBanner from "../assets/images/hero_banner.png";
import { FaHome } from "react-icons/fa";
export default function Home() {
  return (
    <div
      className="w-full flex flex-col lg:flex-row lg:items-center bg-slate-50 py-20 md:py-36 gap-10 mb-12 pl-6 md:pl-12 lg:pl-28 lg:pr-14 pt-40"
      id="home"
    >
      <div className="lg:w-1/2 md:pl-4">
        <p className="text-sm md:text-xl font-semibold mb-5 flex">
          <span>A2Z INDUSTRIAL SOLUTIONS</span>
        </p>

        <h2 className="font-bold text-4xl md:text-6xl xl:text-5xl mb-10">
          QUALITY BUILD
          <span className="block">CONSTRUCTION SERVICE</span>
        </h2>

        <p className="text-xs md:text-sm lg:text-base text-slate-500 h-12 border-l border-gray-500 mb-6 md:mb-10 pl-4">
          <span>Lorem ipsum dolor sit amet, elit sed</span>
          <span className="block">do eiusmod tempor incididunt ut labore.</span>
        </p>

        
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