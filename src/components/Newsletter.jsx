import React from "react";

export const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-3xl sm:text-4xl text-2xl font-bold py-2 ">
            Want tips & tracks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <div className="flex  sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-[#f07d47] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
