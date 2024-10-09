import React from "react";
import { service_list } from "../assets/assets";

export default function Service() {
  return (
    <section className="bg-gray-800 text-white py-16 sm:py-24" id="services">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our services that we provide
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {service_list.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg"
            >
              {/* Step */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-2xl font-bold bg-black text-white p-3 rounded-full">
                  {service.step}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
