import React from 'react';

const Hero = () => {
  return (
    <div className="text-center ">

      {/* Heading */}
      <div className="w-full md:w-4/5 lg:w-4/8 mx-auto mt-8 md:mt-16">
        <h1
          className=" text-[#282828] text-4xl sm:text-5xl md:text-6xl font-normal leading-snug sm:leading-relaxed"
        >
          Medical Software To Attract And
          <span className="font-semibold">Retain Patients</span>
        </h1>
      </div>

      {/* Subheading */}
      <div className="mt-6 md:mt-8">
        <p className="text-[#282828B2] text-base sm:text-lg md:text-xl">
          Patientgrid's communication platform helps improve <br className="hidden sm:block" /> patient experience while reducing staff hours.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex mt-6 md:mt-8 gap-2 justify-center items-center cursor-pointer">
        <p className="flex items-center text-lg sm:text-xl gap-2">
          Start For Free
        </p>
        <img
          src="/images/arrowSide.png"
          alt=""
          className="w-5 h-5 sm:w-6 sm:h-6 mt-1"
        />
      </div>


      <div className="w-full h-[50vh] md:min-h-[50vh] lg:min-h-[100vh] relative lg:mb-10 mt-6">
        <div className="w-full h-full absolute inset-0 z-[-1]">
          <img className="w-full h-[35vh] md:h-[100%] lg:h-[110%] object-cover" src="/images/background.png" alt="" />
        </div>
        <div className="w-full h-full flex items-center justify-center absolute top-[35%] md:top-[50%] lg:top-[55%] lg:left-[50%]-translate-x-[50%] -translate-y-[50%]">
          <img src="/images/absolute1.png" className='w-62 h-62 ' alt="" />
        </div>
      </div>

    </div>
  );
};

export default Hero;
