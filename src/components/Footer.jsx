import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


const Footer = () => {
  return (
    <footer className="bg-[#2A0896] text-white py-6 pt-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 text-justify leading-relaxed">
          <h1 className="text-3xl font-bold mb-4 flex justify-center md:justify-start">
            <img src="/images/logo.png" alt="Logo" className="" />
          </h1>
          <p className="text-sm mt-2 mb-4 text-gray-300 text-center md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Asperiores provident rem, assumenda aut quae culpa.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="#" className="text-white text-xl hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white text-xl hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white text-xl hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 text-justify leading-relaxed">
          <h3 className="font-semibold mb-3 text-xl">Contact Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><BsFillTelephoneFill />+91-8853923455</li>
            <li className="flex items-center gap-2"><FaWhatsapp /> +91-4567895478</li>
            <li className="flex items-center gap-2"><CgMail /> patientgrid@gmail.com</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="w-full md:w-1/3 text-justify leading-relaxed">
          <h3 className="font-semibold mb-3 text-xl">Subscribe Newsletter</h3>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 text-black rounded-l-md focus:outline-none w-full md:w-auto"
            />
            <button className="bg-blue-700 px-4 py-2 rounded-r-md hover:bg-blue-800">
              ➡
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-white mt-6 pt-4 flex flex-col md:flex-row justify-evenly items-center text-sm text-gray-300">
        <div className="flex space-x-6 justify-center mb-4 md:mb-0">
          <a href="#" className="hover:underline">
            Products
          </a>
          <a href="#" className="hover:underline">
            Plans
          </a>
          <a href="#" className="hover:underline">
            More
          </a>
        </div>
      </div>
      <div className="border-t border-white mt-6 pt-4 flex flex-col md:flex-row justify-evenly items-center text-sm text-gray-300">
      <p className="text-center md:text-right text-sm mt-4 md:mt-0">
          © Copyright 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
