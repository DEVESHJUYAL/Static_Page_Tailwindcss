import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#000000] m-4">TECHO</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-black cursor-pointer">Home</li>
        <li className="p-4 hover:text-black cursor-pointer">Company</li>
        <li className="p-4 hover:text-black cursor-pointer">Resources</li>
        <li className="p-4 hover:text-black cursor-pointer">About</li>
        <li className="p-4 hover:text-black cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500  "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#ffffff] m-4">TECHO</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 hover:bg-slate-500 cursor-pointer ">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-slate-500 cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-slate-500 cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-slate-500 cursor-pointer">
            About
          </li>
          <li className="p-4 hover:bg-slate-500 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
