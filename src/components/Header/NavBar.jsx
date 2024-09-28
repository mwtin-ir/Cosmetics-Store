import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
export default function NavBar({ logoClassName, logo, navText }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" flex items-center justify-between lg:flex-col  gap-[15px]   px-4 py-2">
      <div className={` ${logoClassName} flex items-center justify-center   `}>
      <Link className='w-[100%]' to='/'>
      <img
          src={`./images/${logo ? logo : "white-logo.png"}`}
          alt="logo"
          className="p-1 w-[100%]"
        />
      </Link>
      </div>
      <div
        className={` items-center justify-center gap-[30px] font-['Cabin'] font-[400] text-[0.9rem] hidden lg:flex ${
          !navText ? "text-white " : navText
        } relative `}
      >
        <NavLink to="/"> HOME</NavLink>
        <NavLink to="/productList"> SHOP</NavLink>
        <NavLink to="/testimonials"> Testimonials</NavLink>
        <NavLink to="/about-us"> ABOUT</NavLink>
        <NavLink to="/contact"> CONTACT</NavLink>
        <HiShoppingBag className="text-[26px]" />
        <span className="p-[2px] rounded-full  bg-white text-black absolute -top-2 -right-[7px]  text-[12px]">
          0
        </span>
      </div>
{    showMenu?  <IoMdClose
        className=" text-white text-[1.6rem]"
        onClick={() => setShowMenu(false)}
      /> :  <IoMdMenu
      className=" text-white text-[1.6rem]   lg:hidden "
      onClick={() => setShowMenu(true)}
    /> }
      {showMenu && (
        <div className="bg-white flex flex-col absolute top-[55px] left-0 w-[100%] text-[0.8rem] *p-2 duration-200">
          <NavLink to="/" className='px-4 py-3 border-b border-gray-300 '> HOME</NavLink>
          <NavLink to="/productList" className='px-4 py-3  border-b border-gray-300'> SHOP</NavLink>
          <NavLink to="/" className=' px-4 py-3 border-b border-gray-300'> Testimonials</NavLink>
          <NavLink to="/about-us" className=' px-4 py-3  border-b border-gray-300'> ABOUT</NavLink>
          <NavLink to="/" className=' px-4 py-3 border-b border-gray-300'> CONTACT</NavLink>
        </div>
      )}
    </div>
  );
}
