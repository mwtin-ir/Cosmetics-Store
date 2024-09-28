import React from "react";
import "./Header.css";

import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
export const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  switch (pathname) {
    case "/":
      return (
        <header className="home-bg pb-[10%] lg:pb-[6%] ">
          <NavBar logoClassName="w-[120px] lg:w-[160px]" />
          <div className="flex  flex-col   text-start text-white  w-[90%] lg:w-[46%] ml-[5%] lg:ml-[8%]  mt-[30%] lg:mt-[8%] ">
            <h3 className="text-[17px]">A Whole New Look</h3>
            <h1 className="text-[30px] lg:text-[90px] font-[1.7rem] font-[Montserrat] lg:max-w-[220px]">
              Beauty Pronounced
            </h1>
            <p className="text-wrap ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="p-2 text-center border border-white w-[175px] mt-[15px] font-[Cabin] text-[0.9rem] hover:bg-white hover:text-[#269fb7]">
              VIEW MORE
            </button>
          </div>
        </header>
      );
    case "/productList":
      return (
        <NavBar logo="logo.png" logoClassName="bg-white" navText="text-bleck" />
      );
    case "/about-us":
      return (
        <header className="about-bg flex justify-between flex-col bg-[none]  ">
          <NavBar />
          <h1 className="text-center  text-white text-[90px] font-[Montserrat] mb-[65px]">
            About
          </h1>
        </header>
      );
    default:
      break;
  }
};
