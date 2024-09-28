import React from "react";

import { IoIosStarOutline } from "react-icons/io";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProductTap() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div>

<Box sx={{ width: '100%' }} className="mt-20">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Descriptions" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <p className="p-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lobortis
            imperdiet, excepteur accumsan deserunt, dicta reprehenderit
            vestibulum, vero aspernatur pede duis tempus taciti.
          </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
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
      </CustomTabPanel>
    </Box>
    </div>
  );
}
