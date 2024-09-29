import "./style.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";

import { useState } from "react";
export default function Slider() {
  const slides = [image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <>
      <div className="my-10">
        <div className="container">
          <div className="flex px-4 lg:px-8">
            <FaChevronCircleLeft
              className="text-[35px] mt-[150px] mr-3  text-[#269FB7]"
              onClick={prevSlide}
            />
            <div className="slider-container">
              <div
                className="slider flex"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((elem, index) => (
                  <div
                    className="slide w-full h-[200px] md:h-[300px] lg:h-[400px]"
                    key={index}
                  >
                    <img className="w-[100%] h-[100%] object-cove" src={elem} />
                  </div>
                ))}
              </div>
            </div>
            <FaChevronCircleRight
              className="text-[35px] mt-[150px]  ml-3  text-[#269FB7]"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </>
  );
}
