import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoIosStarOutline } from "react-icons/io";

export default function ProductTap() {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 mt-20"
      >
        <Tab eventKey="description" title="Description">
          <p className="p-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lobortis
            imperdiet, excepteur accumsan deserunt, dicta reprehenderit
            vestibulum, vero aspernatur pede duis tempus taciti.
          </p>
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          <div className="flex flex-col items-start gap-4 w-full">
            <h2>There are no reviews yet.</h2>
            <div className="review-container border border-gray-500 p-4 w-full flex flex-col justify-start items-start gap-3">
              <h1 className="text-2xl">Be the first to review “Anti-aging Skin Toner”</h1>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form
                action=""
                className="w-ful p-3 flex flex-col gap-3 justify-start items-start"
              >
                <div className="rating flex gap-2 items-center">
                  <p>Your rating *</p>
                  <div className="flex text-xl">
                   <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />      
                  </div>

                </div>
                <div className="comment md:w-[100%] flex flex-col items-start gap-4">
                  <label htmlFor="comment-value">Your review *</label>
                  <textarea
                    id="comment-value"
                    name="w3review"
                    rows="4"
                    cols="50"
                    className="border-2 border-gray-300 w-[100%] md:w-[80%] outline-none p-2"
                  ></textarea>
                </div>

                <div className="name w-[100%] flex flex-col items-start gap-4">
                  <label htmlFor="nameInput">Name *</label>
                  <input
                    className="border-2 border-gray-300 w-[80%]  outline-none p-2"
                    type="text"
                    id="nameInput"
                  />
                </div>

                <div className="email w-[100%] flex flex-col items-start gap-4">
                  <label htmlFor="emailInput">Email *</label>
                  <input
                    className="border-2 border-gray-300 w-[80%]  outline-none p-2"
                    type="email"
                    id="emailInput"
                  />
                </div>
                <div className="w-[80%]  flex gap-3">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className=" bg-[#269fb7] text-white p-1 w-56"
                  name="add-to-cart"
                  value={312}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
