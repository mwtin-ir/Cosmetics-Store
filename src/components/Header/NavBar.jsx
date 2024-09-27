import React from "react";
import { NavLink } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";

export default function NavBar({ logoClassName, logo, navText }) {
  return (
    <div className="flex flex-col gap-[15px]">
      <div
        className={` ${logoClassName} flex items-center justify-center p-4 `}
      >
        <img
          src={`./images/${logo ? logo : "white-logo.png"}`}
          alt="logo"
          className="p-2 w-[160px]"
        />
      </div>
      <div
        className={`flex items-center justify-center gap-[30px] font-['Cabin'] font-[400] text-[0.9rem] ${
          !navText ? "text-white " : navText
        } relative `}
      >
        <NavLink to="/"> HOME</NavLink>
        <NavLink to="/productList"> SHOP</NavLink>
        <NavLink to="/"> Testimonials</NavLink>
        <NavLink to="/about-us"> ABOUT</NavLink>
        <NavLink to="/"> CONTACT</NavLink>
        <HiShoppingBag className="text-[26px]" />
        <span className="p-[2px] rounded-full  bg-white text-black absolute -top-2 right-[532px]  text-[12px]">
          0
        </span>
      </div>
    </div>
  );
}
