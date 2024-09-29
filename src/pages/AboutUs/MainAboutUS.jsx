// MainAboutUS

import React from "react";
import { FaCaretRight } from "react-icons/fa";
import Slider from "./Slider";
import Advertizment from "./Advertizment";
import Brand from "./Brand";

export default function MainAboutUS() {
  return (
    <>
      <div className="flex flex-wrap gap-y-5 justify-center container mt-5">
        <div className=" sm:w-[45%] px-5 text-gray-700">
          <h1 className="text-[#269FB7] font-medium">Helping You Look Good</h1>
          <h1 className="font-semibold my-5 text-[30px]">
            Let's Talk about Beauty
          </h1>
          <p className="my-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <p>
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum, nec sagittis sem nibh id elit vulputate cursus a sit amet
            mauris.
          </p>
          <h2 className="text-[#269FB7] my-7 font-medium">
            Features of Our Products
          </h2>
          <div className="flex flex-wrap justify-start gap-x-[80px]">
            <div className="flex flex-col gap-y-1">
              <div className="flex gap-x-2">
                <FaCaretRight className="text-[#269FB7] mt-1 text-[20px]" />
                <p className="">Duis aute irure dolor</p>
              </div>
              <div className=" flex gap-x-2">
                <FaCaretRight className="text-[#269FB7] mt-1 text-[20px]" />
                <p className="">Sed do eius mod</p>
              </div>{" "}
              <div className="flex gap-x-2">
                <FaCaretRight className="text-[#269FB7] mt-1 text-[20px]" />
                <p className="">Laboris nisi ut aliquip</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <div className="flex gap-x-2">
                <FaCaretRight className="text-[#269FB7] mt-1 text-[20px]" />
                <p className="">Duis aute irure dolor</p>
              </div>
              <div className="flex gap-x-2">
                <FaCaretRight className="text-[#269FB7] mt-1 text-[20px]" />
                <p className="">Sed do eius mod</p>
              </div>{" "}
              <div className="flex gap-x-2">
                <FaCaretRight className="text-[#269FB7] mt-1 text-[20px]" />
                <p className="">Laboris nisi ut aliquip</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[45%] w-[100vw] flex justify-center px-5">
          <img
            className="w-[624.35px] h-[440px] max-w-full object-cover rounded-xl"
            src={require("./images/1.jpg")}
          />
        </div>
      </div>
      <Slider />
      <Advertizment />
      <Brand />
    </>
  );
}
