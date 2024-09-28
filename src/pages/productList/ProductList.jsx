import React from 'react';
import { Header , Footer} from '../../components';
import { CiSearch } from "react-icons/ci";
import { Card } from '../../components';
import './ProductList.css'
const ProductList = () => {
    return (
        <>
            <Header />
            <div className='productList p-10 w-full lg:w[90%] lg:flex justify-around '>
                <div className='lg:bg-white lg:p-4'>
                    <div className='text-gray-500 pb-4 text-left'>Home/Shop</div>
                    <div className='flex justify-between items-center text-gray-700 font-medium'>
                        <div>Showing all 8 results</div>
                        <div>
                            <select name="productListOrderby" class="productListOrderby" aria-label="Shop order">
                                <option value="menu_order" selected="selected">Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className='p-5 grid grid-cols-3 lg:grid-cols-5 gap-4'>
                        <Card image={"/images/products/given-skin-toner-300x300.jpg"}
                        category={"Paste Masks"}
                        title={"Anti-aging Skin Toner"}
                        price={40.00}
                        stars={4}/>

                        <Card image={"/images/products/given-skin-toner-300x300.jpg"}
                        category={"Paste Masks"}
                        title={"Anti-aging Skin Toner"}
                        price={40.00}
                        stars={2}/>

                        <Card image={"/images/products/given-skin-toner-300x300.jpg"}
                        category={"Paste Masks"}
                        title={"Anti-aging Skin Toner"}
                        price={40.00}
                        stars={5}/>

                    </div>
                </div>


                {/* side bar */}
                <div>
                    <div className='flex items-center justify-center mx-2 p-4 lg:bg-white lg:p-4 '>
                        <input type="text" className='productListInput h-[40px] px-1 ' placeholder='Search Products ...'/>
                        <button className='h-[40px] w-[40px] bg-cyan-400 text-white flex justify-center items-center'><CiSearch /></button>
                    </div>
                    <div className='text-2xl text-left pt-8 m-2 font-semibold text-gray-600 lg:bg-white lg:p-4'>
                        <p>Filter by Categories</p>
                            <ul className='p-4'>
                                <li className='text-cyan-400 text-base my-2 font-medium md:text-lg '>Anti-aging Cream <span className='text-black'>(1)</span></li>
                                <li className='text-cyan-400 text-base my-2 font-medium md:text-lg'>Anti-aging Cream <span className='text-black'>(1)</span></li>
                                <li className='text-cyan-400 text-base my-2 font-medium md:text-lg'>Anti-aging Cream <span className='text-black'>(1)</span></li>
                                <li className='text-cyan-400 text-base my-2 font-medium md:text-lg'>Anti-aging Cream <span className='text-black'>(1)</span></li>
                                <li className='text-cyan-400 text-base my-2 font-medium md:text-lg'>Anti-aging Cream <span className='text-black'>(1)</span></li>
                                <li className='text-cyan-400 text-base my-2 font-medium md:text-lg'>Anti-aging Cream <span className='text-black'>(1)</span></li>
                            </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ProductList;
