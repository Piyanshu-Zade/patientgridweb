import React from 'react';

const Cards = () => {
  return (
    <div className="max-w-[90vw] lg:max-w-[70vw] m-auto">
      {/* Card 1 */}
      <div className="flex flex-col lg:flex-row items-center mb-8">
        <div className="left w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
          <img
            src="/images/card1.png"
            alt="Card 1"
            className="max-w-[80%] lg:max-w-full shadow-lg rounded-lg"
          />
        </div>
        <div className="right w-full lg:w-1/2 text-center lg:text-left px-4">
          <h4 className="font-semibold text-xl lg:text-2xl mb-2">
            Bring new business in by getting more online reviews.
          </h4>
          <p className="text-gray-600">94% Use review to choose a new doctor</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col-reverse lg:flex-row items-center mb-8">
        <div className="right w-full lg:w-1/2 text-center lg:text-left px-4">
          <h4 className="font-semibold text-xl lg:text-2xl mb-2">
            Bring new business in by getting more online reviews.
          </h4>
          <p className="text-gray-600">94% Use review to choose a new doctor</p>
        </div>
        <div className="left w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
          <img
            src="/images/card2.png"
            alt="Card 2"
            className="max-w-[80%] lg:max-w-full shadow-lg rounded-lg"
          />
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="left w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
          <img
            src="/images/card3.png"
            alt="Card 3"
            className="max-w-[80%] lg:max-w-full shadow-lg rounded-lg"
          />
        </div>
        <div className="right w-full lg:w-1/2 text-center lg:text-left px-4">
          <h4 className="font-semibold text-xl lg:text-2xl mb-2">
            Bring new business in by getting more online reviews.
          </h4>
          <p className="text-gray-600">94% Use review to choose a new doctor</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
