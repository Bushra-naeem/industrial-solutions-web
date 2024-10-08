import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Bm Ashik",
    position: "Designer at Rainbow Themes",
    text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    image: "https://via.placeholder.com/150", // Placeholder for user image
  },
  {
    name: "John Doe",
    position: "CEO at Creative Agency",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ligula non mi varius sagittis.",
    image: "https://via.placeholder.com/150", // Placeholder for user image
  },
  {
    name: "Jane Smith",
    position: "Developer at TechCorp",
    text: "Vestibulum auctor dapibus neque. Nunc dignissim risus id metus. Cras ornare tristique elit.",
    image: "https://via.placeholder.com/150", // Placeholder for user image
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically cycle through testimonials every 3 seconds (faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Faster switch interval (3 seconds)

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-8">
        {/* Left Side - Testimonial Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-orange-400 text-sm uppercase">Testimonials</h2>
          <h3 className="text-4xl font-bold">What client says</h3>

          {/* Testimonial Slider */}
          <div className="mt-6">
            <div className="transition-opacity duration-300 ease-in-out">
              {" "}
              {/* Faster transition */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-xl font-semibold">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-300">
                {testimonials[activeIndex].text}
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
            {testimonials.map((_, index) => (
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
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <img
            src="https://via.placeholder.com/600x400" // Placeholder for large background image
            alt="Construction"
            className="rounded-lg object-cover w-full h-full clip-bottom" // Apply the clip-path class here
          />

          {/* Testimonial Circles Overlay */}
          <div className="absolute top-10 right-10 bg-gray-800 p-4 rounded-lg">
            <span className="block text-orange-400 text-lg font-bold">2M+</span>
            <span className="block text-gray-400 text-sm">
              Success Projects
            </span>
            <div className="flex items-center space-x-2 mt-4">
              {testimonials.map((test, index) => (
                <img
                  key={index}
                  src={test.image}
                  alt={test.name}
                  className="w-10 h-10 rounded-full border-2 border-orange-400"
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
