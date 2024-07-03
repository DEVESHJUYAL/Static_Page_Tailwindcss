import React from "react";
import story from "../assets/story.svg";
import circle from "../assets/circle.svg";
import plus from "../assets/plus.svg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-32 flex">
      <div className="flex flex-col items-center px-24">
        <img src={story} className="w-16" />
        <span className="text-[#ae00ff] py-2 font-bold text-xl">Our Story</span>
        <p className="text-center">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you
        </p>
      </div>
      <div className="flex flex-col items-center px-24">
        <img src={circle} className="w-16" />
        <span className="text-[#ae00ff] py-2 font-bold text-xl">
          Our Vision
        </span>
        <p className="text-center">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you
        </p>
      </div>
      <div className="flex flex-col items-center px-24">
        <img src={plus} className="w-16" />
        <span className="text-[#ae00ff] py-2 font-bold text-xl">
          Technology
        </span>
        <p className="text-center">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you
        </p>
      </div>
    </div>
  );
};
