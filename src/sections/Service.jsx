import React from "react";
import { service_list } from "../assets/assets";

export default function Service() {
  return (
    <section className="bg-gray-800 flex justify-center text-white py-16 sm:py-24" id="services">
      <div className="container px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Our services that we provide
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {service_list.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-4 rounded-lg shadow-lg"
            >
              {/* Step */}
              <div className="flex items-center mb-3">
                <div className="text-xl font-bold bg-black text-white p-2 rounded-full">
                  {service.step}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
