import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="sm:flex ">
        <br />
        <br />
        <div className="w-full sm:w-1/3 p-16 font-bold text-center">
          <h4 className="text-3xl">Contanct Details</h4>
          <br />
          <p>09123456789</p>
          <p className="">sarzaminH@gmail.com</p>
          <p>Iran,Tehran</p>
        </div>
        <div className="w-full sm:w-1/3 p-16">
          <img
            src="./images/white-logo.png"
            alt="logo"
            className="mx-auto h-12"
          />
        </div>
        <div className="w-full sm:w-1/3 p-16 font-bold text-center">
          <h4 className="text-3xl">Qick Links</h4>
          <br />
          <NavLink to="/productList">product page</NavLink>
          <br />
          <NavLink to="/about-us">Contact</NavLink>
          <br />
          <NavLink to="/about-us">About Us</NavLink>
        </div>
      </div>
      <br /><br />
      <div className="lg:flex justify-between px-16 text-center md:text-start">
        <div className="w-full font-bold text-lg ">
          Copyright © 2024 Cosmetics Store | Powered by Sarzamin Hoshmand
        </div>
        <div className="w-full lg:w-1/5 mt-4 md:mt-2 flex gap-3 text-xl justify-center ">
          <a href="https://instagram.com/nalait">
            <FaInstagram className="hover:text-red-500" />
          </a>
          <a href="https://t.me/nahalitco">
            <FaTelegram className="hover:text-blue-700" />
          </a>
          <a href="https://instagram.com/nalait">
            <FaLinkedin className="hover:text-blue-700" />
          </a>
          <a href="https://github.com/mwtin-ir/Cosmetics-Store">
            <FaGithub className="hover:text-e" />
          </a>
        </div>
      </div>
      <br /><br />
    </footer>
  );
};
