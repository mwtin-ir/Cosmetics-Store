import React from 'react';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export const Card = ({image, category, title, price, stars}) => {
    // let totlaStar = 5;
    return (
        <div className='text-left cursor-pointer '>
            <img src={image} alt="" className='w-[100%]' />
            <p className='text-gray-400 text-sm'>{category}</p>
            <p className='text-lg font-medium'>{title}</p>
            <p className='text-gray-400 text-sm py-1'>£{price}</p>
            <div className='flex py-2'>
                {Array(5).fill(null).map((_ , index)=>
                    stars>index ?<FaStar />:<CiStar key={crypto.randomUUID()}/>
                    )}
                
                
            </div>
        </div>
    );
}


