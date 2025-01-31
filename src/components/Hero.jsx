import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white ">
      <div className="max-w-[600px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00d8df] font-bold p-2 text-xl">
          UNLIMITED DATA STORAGE
        </p>
        <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold md:py-6 ">
          The New Standard in Data Ananlysis
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-3xl sm:text-4xl text-xl font-bold py-4">
            Reliable, rapid solutions for
          </p>
          <Typed
            className="md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Startups", "Enterprises", "Innovators"]}
            typeS
            peed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-yellow-50">
          Use Data to Get a 360-Degree View of Your Business
        </p>
        <button className="bg-[#f07d47] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#ff641c]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
