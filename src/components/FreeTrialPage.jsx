import React from "react";

const FreeTrialPage = () => {
  return (
    <div className="min-h-[70vh] flex justify-center px-6 mb-10">
      <div className="max-w-[1300px] w-full bg-[#D9DEEF] rounded-lg shadow-lg p-8 lg:flex items-center">
        {/* Left Section - Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <img
            src="/images/doctor.png"
            alt="Doctor"
            className="w-[80%] lg:w-[70%] rounded-lg" 
          />
        </div>

        {/* Right Section - Text */}
        <div className="lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            We work on a month-to-month basis, try for free with no commitments
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#447CF5] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#3565d9]">
            14 Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialPage;
