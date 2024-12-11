import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#D9D9D9] w-full">
      <div className="flex flex-wrap justify-between items-center py-4 px-6 md:px-16 lg:px-32">

        {/* Logo */}
        <div>
          <a href="#">
            <img src="/images/logo.png" alt="Logo" className="h-8 sm:h-8 " />
          </a>
        </div>

        {/* Menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-6 md:gap-8 font-semibold">
            <li>
              <a href="#" className="hover:text-[#2A0896]">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2A0896]">
                Plans
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:text-[#2A0896]">
                More
              </a>
              <FaCaretDown className="text-black" />
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="hidden lg:flex gap-6 md:gap-10 items-center">
          <a href="#" className="font-semibold hover:text-[#2A0896]">
            Login
          </a>
          <button className="bg-[#2A0896] text-white px-5 py-2 rounded-full hover:bg-[#1a056e]">
            Request a demo
          </button>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#2A0896] text-2xl focus:outline-none"
          >
            <IoMenuSharp />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#D9D9D9] py-4 px-6 absolute w-full ">
          <ul className="space-y-4 font-semibold ">
            <li>
              <a href="#" className="block hover:text-[#2A0896]">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#2A0896]">
                Plans
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-[#2A0896] flex items-center gap-2"
              >
                More <FaCaretDown className="text-black" />
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#2A0896]">
                Login
              </a>
            </li>
            <li>
              <button className="w-full bg-[#2A0896] text-white py-2 rounded-full hover:bg-[#1a056e]">
                Request a demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
