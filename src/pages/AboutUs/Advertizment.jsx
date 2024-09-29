import React from "react";
import { FaPercentage } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { BsPersonFillAdd } from "react-icons/bs";

export default function Advertizment() {
  return (
    <>
      <div className="container mb-5">
        <div className="flex justify-between flex-wrap gap-4">
          <div className="text-center sm:w-[30%]">
            <FaPercentage className="text-[#269FB7] mx-auto text-center text-[80px] p-1 rounded-full border-[0.5px] border-[#269FB7]" />
            <div className="text-[25px] my-4">Season Sale</div>
            <div className="text-center mx-auto text-gray-600 w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>
          </div>
          <div className="text-center sm:w-[30%]">
            <FaTruckFast className="text-[#269FB7] mx-auto text-center text-[80px] p-2 rounded-full border-[0.5px] border-[#269FB7]" />
            <div className="text-[25px] my-4">Free Shipping</div>
            <div className="text-center mx-auto text-gray-600 w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>
          </div>
          <div className="text-center sm:w-[30%]">
            <BsPersonFillAdd className="text-[#269FB7] mx-auto text-center text-[80px] p-2 rounded-full border-[0.5px] border-[#269FB7]" />
            <div className="text-[25px] my-4">Money Back Guarantee</div>
            <div className="text-center mx-auto text-gray-600 w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
