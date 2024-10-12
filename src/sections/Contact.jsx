import React from "react";

export default function Contact() {
  return (
    <div
      className="flex flex-col lg:flex-row  lg:space-x-10 p-6 lg:p-20 bg-white"
      id="contact"
    >
      {/* Left Section */}
      <div className="lg:w-1/2 mx-3 sm:mx-10 mb-8 lg:mb-0">
        <h2 className="text-3xl md:text-5xl xl:text-6xl text-gray-900 font-medium mb-8 mt-6">
          Are You Ready to Unleash Your Vision?
        </h2>
        <p className="text-gray-600 text-base">
          Whether you’re looking to build a custom software application, scale
          your current product, or digitally transform your business, we’ve got
          you covered.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="lg:w-1/2 bg-white p-6 shadow-lg rounded-lg">
        <form className="space-y-4">

          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">First Name *</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex-1 mt-4 lg:mt-0">
              <label className="block text-sm font-medium">Last Name *</label>
              <input
                type="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Your Email *</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex-1 mt-4 lg:mt-0">
              <label className="block text-sm font-medium">
                Phone Number *
              </label>
              <input
                type="tel"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Please tell us a bit about what you're looking for *
            </label>
            <textarea
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

          <div className="flex items-center">
            <div className="flex-1">
              <label className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" required />
                I'm not a robot
              </label>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-700 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
