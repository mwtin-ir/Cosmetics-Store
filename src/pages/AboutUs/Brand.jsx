import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import svg1 from "./images/brand/1.svg";
import svg2 from "./images/brand/2.svg";
import svg3 from "./images/brand/3.svg";
import svg4 from "./images/brand/4.svg";
import svg5 from "./images/brand/5.svg";
import svg6 from "./images/brand/6.svg";
import svg7 from "./images/brand/7.svg";
import svg8 from "./images/brand/8.svg";
import svg9 from "./images/brand/9.svg";
import svg10 from "./images/brand/10.svg";
export default function Brand() {
  return (
    <>
      <div className="product mt-5 p-3 flex  flex-wrap">
        <Swiper
          style={{}}
          slidesPerView={1}
          navigation={true}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwipe w-[98%]"
        >
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg4} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg5} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg6} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg7} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg8} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg9} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-[200px] h-[200px]  text-center mx-auto align-items-center">
              <img className="w-[100%] h-[100%]" src={svg10} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
