import React, { useState } from "react";
import { useZoomed } from "../Hooks/useZoomed";

export function ProductModal({ isOpen, onClose }) {
  const [isZoomed, handleMouseMove, handleImageClick, mousePosition] =
    useZoomed();

  return (
    <>
      {isOpen && (
        <div className="flex justify-center items-center z-[1000] fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.8)]">
          <div className="relative max-w-[80%] max-h-[80%]">
            <button
              className=" flex justify-center items-center absolute top-[10px] right-[20px] bg-white border-none cursor-pointer text-[25px] w-[34px] h-[34px] rounded-sm"
              onClick={onClose}
            >
              &times;
            </button>
            <div
              className={` overflow-hidden cursor-pointer flex justify-center items-center
                ${isZoomed ? "zoomed" : ""}`}
              onMouseMove={isZoomed ? handleMouseMove : null}
              onClick={handleImageClick}
              style={{
                backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
              }}
            >
              <img
                src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2020/03/coco-body-oil.jpg"
                alt="Product"
                className="modal-image md:w-[50%] h-auto object-cover rounded-sm transition-all duration-75"
                style={{
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
