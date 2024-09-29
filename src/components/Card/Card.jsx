import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Card = ({ id, image, category, title, price, stars }) => {
  // let totlaStar = 5;
  return (
    <div className="text-left cursor-pointer } h-[280px] sm:h-[380px] md:h-[480px] lg:h-auto">
      <Link to={`/products/${id}`} className="h-[280px] lg:h-auto">
        <img src={image} alt="" className="w-[100%]" />
        <p className="text-gray-400 text-sm">{category}</p>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-gray-400 text-sm py-1">£{price}</p>
        <div className="flex py-2">
          {Array(5)
            .fill(null)
            .map((_, index) =>
              stars > index ? <FaStar /> : <CiStar key={crypto.randomUUID()} />
            )}
        </div>
      </Link>
    </div>
  );
};
