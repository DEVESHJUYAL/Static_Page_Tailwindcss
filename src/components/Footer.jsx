import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#000000] m-4">TECHO</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis,
          aspernatur, distinctio hic vel veniam molestiae consequuntur, suscipit
          similique voluptatem facilis tempore sapiente maxime ut corporis
          nesciunt laudantium architecto in.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-white">Solutions</h6>
          <ul>
            <li className="py-2 text-sm ">Analytics</li>
            <li className="py-2 text-sm ">Marketing</li>
            <li className="py-2 text-sm ">Commerce</li>
            <li className="py-2 text-sm ">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white">Support</h6>
          <ul>
            <li className="py-2 text-sm ">Pricing</li>
            <li className="py-2 text-sm ">Documentation</li>
            <li className="py-2 text-sm ">Guides</li>
            <li className="py-2 text-sm ">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white">Company</h6>
          <ul>
            <li className="py-2 text-sm ">About</li>
            <li className="py-2 text-sm ">Blogs</li>
            <li className="py-2 text-sm ">Jobs</li>
            <li className="py-2 text-sm ">Press</li>
            <li className="py-2 text-sm ">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white">Legal</h6>
          <ul>
            <li className="py-2 text-sm ">Claim</li>
            <li className="py-2 text-sm ">Policy</li>
            <li className="py-2 text-sm ">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
