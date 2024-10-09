import React, { useState, useEffect } from "react";
import { client_list } from "../assets/assets";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically cycle through testimonials every 3 seconds (faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % client_list.length);
    }, 3000); // Faster switch interval (3 seconds)

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Side - Testimonial Content */}
        <div className="md:w-1/2 space-y-6 mx-0 sm:mx-12">
          <h2 className="text-orange-400 text-sm uppercase">Testimonials</h2>
          <h3 className="text-4xl font-bold">What client says</h3>

          {/* Testimonial Slider */}
          <div className="mt-6">
            <div className="transition-opacity duration-300 ease-in-out">
              {" "}
              {/* Faster transition */}
              <div className="flex items-center space-x-4">
                <img
                  src={client_list[activeIndex].image}
                  alt={client_list[activeIndex].name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-xl font-semibold">
                    {client_list[activeIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {client_list[activeIndex].position}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-300">
                {client_list[activeIndex].text}
              </p>
            </div>

            {/* Rating Stars */}
            <div className="flex mt-4 text-orange-400">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex space-x-2 mt-4">
            {client_list.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-orange-400" : "bg-gray-500"
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 mx-0 sm:mx-12 relative">
          <img
            src="https://via.placeholder.com/600x400" // Placeholder for large background image
            alt="Construction"
            className="rounded-lg object-cover w-full h-full clip-bottom" // Apply the clip-path class here
          />

          {/* Testimonial Circles Overlay */}
          <div className="absolute top-10 right-10 bg-gray-800 p-2 sm:p-4 rounded-lg">
            <span className="block text-orange-400 text-sm sm:text-lg font-bold">
              2M+
            </span>
            <span className="block text-gray-400 text-sm">
              Success Projects
            </span>
            <div className="flex items-center space-x-2 mt-4">
              {client_list.map((test, index) => (
                <img
                  key={index}
                  src={test.image}
                  alt={test.name}
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-1 sm:border-2 border-orange-400"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
