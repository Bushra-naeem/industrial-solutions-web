import React from "react";

export default function Service() {
  const services = [
    {
      step: "01",
      title: "Meet and consultant about project",
      description:
        "Industry standard dummy text took since the when an unknown",
    },
    {
      step: "02",
      title: "Product design and planning",
      description:
        "Known printer took a galley of type and scrambled it to make",
    },
    {
      step: "03",
      title: "Testing and quality control",
      description:
        "It has survived not only centuries also the leap into electronic",
    },
    {
      step: "04",
      title: "Final assembly and project handover",
      description: "Electronic typesetting conta the popularised in the 1960s",
    },
    {
      step: "05",
      title: "Final assembly and project handover",
      description: "Electronic typesetting conta the popularised in the 1960s",
    },
    {
      step: "06",
      title: "Final assembly and project handover",
      description: "Electronic typesetting conta the popularised in the 1960s",
    },
    {
      step: "07",
      title: "Final assembly and project handover",
      description: "Electronic typesetting conta the popularised in the 1960s",
    },
    {
      step: "08",
      title: "Final assembly and project handover",
      description: "Electronic typesetting conta the popularised in the 1960s",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16" id="services">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our services that we provide
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg"
            >
              {/* Step */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-2xl font-bold bg-black text-white p-3 rounded-full">
                  {service.step}
                </div>
                <div className="text-lg text-gray-400">STEP</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Play Video Button */}
        <div className="flex justify-end items-center mt-12">
          <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full">
            <span>Play Video</span>
            <span className="text-2xl">&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
