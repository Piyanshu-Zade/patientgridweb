import React from "react";

const HealthcarePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-16 lg:py-24">
      <div className="max-w-[1300px] w-full flex flex-col lg:flex-row items-center bg-[#DDE9FF] rounded-lg shadow-xl overflow-hidden">
        {/* Left Section */}
        <div className="p-12 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Seamless collaboration for healthcare teams
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed">
            With shared inboxes, any team member can resolve the team’s pending
            tasks. Individual staff members don’t get overwhelmed, and patients
            are always taken care of.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 p-8">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/Healthcare.png"
              alt="Healthcare Collaboration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default HealthcarePage;
