import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/three.png";

export const Cards = () => {
  return (
    <div className="w-full py-[5rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#f07d47] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#f07d47]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt="/"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#f07d47] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
