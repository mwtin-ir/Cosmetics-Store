import React, { useEffect, useState } from "react";
import { Header, Footer, Card } from "../../components";
import "./home.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaPercent } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <Header />
      <main className="w-[80%] mx-auto py-[100px]">
        <section className="flex flex-col ">
          <div className="mb-[100px] text-center font-[Montserrat]">
            <h2 className="text-[#269fb7]  text-[1rem] ">
              A Brush of Perfection
            </h2>
            <div>
              <h1 className="text-[22px] lg:text-[36px] pb-[5px]">
                Add a Flavor to Being a Girl
              </h1>
              <h3 className="text-[#565656]  ">
                Lorem ipsum dolor sit amet, consectetur.
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px]  items-center justify-center p-2">
            {products.map((product) => (
              <Card
                image={product.image}
                price={product.price}
                title={product.title}
                category={product.category}
                key={product.id}
                id={product.id}
              />
            ))}
          </div>
        </section>
        <section className="seaction-2-bg w-[100%] flex font-[Montserrat] rounded-md flex-col lg:flex-row lg:justify-center items-center p-2 my-[100px]">
          <div className="w-[50%]"></div>
          <div className="flex flex-col items-center justify-center text-center w-[100%] lg:w-[50%] gap-5  ">
            <h2 className="text-[#269fb7]  text-[1rem]">Be Bold, Be Daring</h2>
            <h1 className="text-[20px] lg:text-[40px]">A Whole New Look</h1>
            <p className="text-[#565656]  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-[#269fb7] text-white px-6 w-[180px] py-2 text-center text-[1rem] ">
              VIEW MORE
            </button>
          </div>
        </section>
        <section className="flex items-center justify-center font-[Montserrat] flex-col lg:flex-row gap-[10px]">
          <div className="flex flex-col items-center justify-center  text-center gap-[10px]">
            <span className="border-2 border-blue-500 rounded-full p-4 ">
              <FaPercent className="text-blue-500 text-[1.3rem]" />
            </span>
            <h2 className="text-[20px] font-bold">Season Sale</h2>
            <p className="text-[#565656]  text-[14px] font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center  text-center gap-[10px]">
            <span className="border-2 border-blue-500 rounded-full p-4 ">
              <FaShippingFast className="text-blue-500 text-[1.3rem]" />
            </span>
            <h2 className="text-[20px] font-bold">Free Shipping</h2>
            <p className="text-[#565656]  text-[14px] font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center  text-center gap-[10px]">
            <span className="border-2 border-blue-500 rounded-full p-4 ">
              <FaUserShield className="text-blue-500 text-[1.3rem]" />
            </span>
            <h2 className="text-[20px] font-bold">Money Back Guarantee</h2>
            <p className="text-[#565656]  text-[14px] font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </section>
        <section className="mt-[100px]">
          <Swiper
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2021/03/logo-3.svg"
                alt="logo1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2021/03/logo-2.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2021/03/logo-1.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2021/03/logo-5.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2021/03/logo-4.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2021/03/logo-2.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2021/03/logo-1.svg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2021/03/logo-3.svg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
      <section className="seaction-3-bg flex flex-col items-center justify-center gap-[15px] text-center ">
        <h2 className="text-[#269fb7]  text-[1rem] lg:text-[1.4rem]">
          Testimonials
        </h2>
        <h1 className="text-[40px]">Our Happy Clients</h1>
        <p className="text-[#565656] w-[85%] lg:w-[40%]  text-[1.2rem]">
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        </p>
        <img
          src="./images/customer4.jpg"
          alt="costumer"
          className="w-[70px] rounded-full object-contain"
        />
        <h4 className="text-[#565656] ">Marilyn Keller</h4>
      </section>
      <div className="mb-[100px] text-center font-[Montserrat] mt-[10%]">
        <h2 className="text-[#269fb7]  text-[1rem] ">
          Blossom into a New You!
        </h2>
        <div>
          <h1 className="text-[36px] pb-[5px]">Latest Products</h1>
          <h3 className="text-[#565656]  ">
            Lorem ipsum dolor sit amet, consectetur.
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-[25px]  items-center justify-center p-2 w-[80%] mx-auto ">
        {products
          .filter((product) => product.id >= 5)
          .map((product) => (
            <NavLink to={`/products/${product.id}`} key={product.id}>
              <Card
                image={product.image}
                price={product.price}
                title={product.title}
                category={product.category}
              />
            </NavLink>
          ))}
      </div>
      <section className="seaction-4-bg my-[100px]">
        <div className="flex flex-col lg:flex-row items-center lg:w-[70%] mx-auto">
          <h1 className="text-[26px] w-[80%] lg:text-[40px] lg:w-[40%] font-bold">
            Sign-up the Makeup Fan Club
          </h1>
          <div className="flex flex-col gap-[15px] lg:w-[50%] w-[90%] ">
            <input
              type="text"
              className="w-[100%] p-3  border border-gray-300 rounded outline-none "
              placeholder="Enter your email address"
            />
            <button className="px-5 py-2.5 text-center w-[180px] bg-[#269fb7] text-white">
              saubscribe
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
