import React, { useState } from "react";
import { Header, Footer } from "../../components";
import { IoIosSearch } from "react-icons/io";
import useZoomed from "./Hooks/useZoomed";
import ProductModal from "./ProductModal/ProductModal";
import ProductTap from "./ProductTap/ProductTap";


import "./ProductDetail.css";
const ProductDetail = () => {
  const [isZoomed, handleMouseMove, handleImageClick, mousePosition] =
    useZoomed();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Header />
      <section className="product-page h-auto   my-20 bg-[#f7f7f7]">
        <div className="container  bg-[#ffffff]  m-auto px-4">
          <div className="row gap-x-4">
            <div className="left grid-cols-12 md:flex-1">
              <div className="left-pic relative" onClick={handleImageClick}>
                <div className="flex justify-center items-center relative">
                  <div
                    className={`image-wrapper ${isZoomed ? "zoomed" : ""}`}
                    onMouseMove={isZoomed ? handleMouseMove : null}
                    onClick={handleImageClick}
                    style={{
                      backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                    }}
                  >
                    <img
                      src="https://websitedemos.net/cosmetics-store-02/wp-content/uploads/sites/543/2020/03/coco-body-oil.jpg" // آدرس تصویر دلخواه
                      alt="Zoomable"
                      className={`zoom-image ${isZoomed ? "zoomed" : ""}`}
                      style={{
                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                      }}
                    />
                  </div>
                </div>
                <div
                  onClick={openModal}
                  className="zoom-btn cursor-pointer absolute  top-[0.5em]  right-[0.5em] flex justify-center items-center text-3xl z-50 w-9 h-9 bg-white text-gray-400 rounded-full"
                >
                  <IoIosSearch />
                </div>
              </div>
            </div>
            <div className="right grid-cols-12 md:flex-1  flex gap-4 flex-col text-left p-2">
              <span className="product-category text-[#269fb7]">
                <a href="#"> Feminine Deodorants</a>
              </span>
              <h1 className="text-3xl">Coco Body Oil</h1>
              <div className="price flex items-center gap-2 text-[#565656]">
                <p className="">
                  <span className=" text-2xl font-bold">
                    <bdi>
                      <span>£</span>
                      60.00
                    </bdi>
                  </span>
                </p>
                <span>+ Free Shipping</span>
              </div>

              <div className="desc text-[#565656]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.Lobortis imperdiet, excepteur accumsan deserunt, dicta
                  reprehenderit vestibulum, vero aspernatur pede duis tempus
                  taciti, senectus, neque possimus ratione laborum aliqua.
                </p>
              </div>
              <form className="cart flex gap-3">
                <div className="quantity">
                  <input
                    className=" md:w-[3.631em] h-[35px] text-center border border-gray-400 outline-none p-[0.3em]"
                    type="number"
                    autoComplete="off"
                    step={1}
                    min={1}
                    max={4}
                  />
                </div>
                <button
                  type="submit"
                  className=" bg-[#269fb7] text-white w-[50%] md:w-[40%] hover:bg-[#268a9e]"
                  name="add-to-cart"
                  value={312}
                >
                  Add to cart
                </button>
              </form>
              <div className="product-meta border-solid border-t-2 border-gray-400 pt-3">
                <span>
                  Category:
                  <a href="#" className="text-[#269fb7] ms-2">
                    Feminine Deodorants
                  </a>
                </span>
              </div>
            </div>
          </div>

        <ProductTap/>
        
        </div>

        <ProductModal isOpen={isOpen} onClose={closeModal} />
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
