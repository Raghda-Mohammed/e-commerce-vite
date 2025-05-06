import React, { useContext, useEffect, useState } from "react";
import CartContext from "../contextAPI/CartContext";
import { WishlistContext } from "../contextAPI/WishlistContext";
import WishlistButton from "../Button/WishlistButton";
import { products } from "./Data";
import { FaStar } from "react-icons/fa";
import { pest_products } from "../assets";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BestProducts = ({ duration, product }) => {
  const { handleAddToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist } =
    React.useContext(WishlistContext);

  const [rating, setRating] = useState(products.rating);
  const [hoverValue, setHoverValue] = useState(undefined);
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const handleWishlist = (product) => {
    addToWishlist(product); // أو removeFromWishlist(product.id) حسب الحالة
  };

  const handleMouseOverStar = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeaveStar = () => {
    setHoverValue(undefined);
  };

  const handleClickStar = (value) => {
    setRating(value);
  };
  const stars = Array(5).fill(0);

  const [time, setTime] = useState(duration);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    if (milliseconds <= 0) return "0: 0: 0: 0";

    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${days}: ${hours}: ${minutes}: ${seconds}`;
  };

  return (
    <div>
      <div className="container mx-auto mt-8">
        <div>
          <div className="block">
            <div className="grid grid-cols-2">
              <div className="w-[18px] h-[40px] rounded-md bg-red-500"></div>
              <div className="ml-[-200px] mt-2 font-bold  text-red-600 md:ml-[-430px] lg:mt-1.5 lg:ml-[-620px] xl:[-500px]">
                <h6 className="text-sm font-bold">This Month</h6>
              </div>
            </div>

            <div className="grid grid-cols-2 text-black mt-4 mb-8">
              <div className="text-2xl font-bold lg:text-4xl">
                Best Selling Products
              </div>
              <div className="text-2xl lg:text-5xl lg:ml-[-350px]">
                <div className="text-2xl lg:text-5xl lg:ml-[-350px]">
                  <div className="flex text-base place-self-end ">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                    >
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-2 mt-4">
            {products.map((product) => (
              <div key={product.id} className="">
                <div className=" text-black rounded-xl ml-4 relative">
                  <div className="relative">
                    <div className="h-70 rounded-t-xl bg-gray-100 flex justify-center items-center">
                      <Link to={`/productdetails/${product.id}`}>
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-full h-full object-contain"
                        />
                      </Link>
                      {/* ************************************** */}
                      {/* <img
                        src={product.img}
                        alt=""
                        className="h-40 w-36 mt-5"
                      /> */}
                      {/* ************************************** */}
                    </div>
                    {/* Add To Cart */}
                    <div className="absolute  bottom-0 ">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="text-xs bg-red-500 text-white p-2 rounded-md cursor-pointer w-full hover:bg-red-700"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className=" ">
                    <p className="text-sm 2xl:text-start md:text-base font-semibold mt-3">
                      {product.title}
                    </p>
                    <div className="flex gap-2">
                      <p className="2xl:text-start sm:text-xs">
                        {product.desc}
                      </p>
                      <p className="2xl:text-start sm:text-xs text-red-500 line-through font-semibold">
                        {product.price}
                      </p>
                    </div>

                    <div className="absolute top-2 right-2 gap-2 text-xl">
                      <WishlistButton
                        onAddToWishList={handleWishlist}
                        product={product}
                        className="p-2 border-2 border-gray-100 bg-white rounded-full"
                      >
                        <IoMdHeartEmpty />
                      </WishlistButton>

                      <div className="p-2 border-2 border-gray-100 bg-white rounded-full">
                        <IoEyeOutline />
                      </div>
                    </div>
                    {/* // rating */}
                    <div className="flex flex-col-5 gap-1">
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={18}
                            className="cursor-pointer mr-0"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            color={
                              (hoverValue || rating) > index
                                ? colors.orange
                                : colors.grey
                            }
                            onClick={() => handleClickStar(index + 1)}
                            onMouseOver={() => handleMouseOverStar(index + 1)}
                            onMouseLeave={() => handleMouseLeaveStar}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 bg-black mt-14">
          <div className="flex flex-col ml-10 mt-10 ">
            <div className="mt-5 flex-1 flex flex-col justify-center">
              <span className="text-[#00c951] mb-2 md:text-xl">Categories</span>
              <span className="md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
                Enhance Your
              </span>
              <span className="md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
                Music Experience
              </span>
            </div>

            <div className="gap-2 font-bold text-center">
              <div className="pr-2 mt-2">
                <div className="grid md:flex grid-cols-4 gap-2 text-black h-14 w-[90%]">
                  <div className="flex flex-col justify-center items-center border-2 rounded-full bg-white w-16 p-1">
                    <span className="text-lg">
                      {getFormattedTime(time).split(":")[0]}
                    </span>
                    <span className="text-[8px]">Days</span>
                  </div>
                  <div className="flex flex-col justify-center items-center border-2 rounded-full bg-white w-16 p-1">
                    <span className="text-lg">
                      {getFormattedTime(time).split(":")[1]}
                    </span>
                    <span className="text-[8px]">Hours</span>
                  </div>
                  <div className="flex flex-col justify-center items-center border-2 rounded-full bg-white w-16 p-1">
                    <span className="text-lg">
                      {getFormattedTime(time).split(":")[2]}
                    </span>
                    <span className="text-[8px]">Minutes</span>
                  </div>
                  <div className="flex flex-col justify-center items-center border-2 rounded-full bg-white w-16 p-1">
                    <span className="text-lg">
                      {getFormattedTime(time).split(":")[3]}
                    </span>
                    <span className="text-[8px]">Seconds</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500 w-[90%] md:w-[150px] md:h-[50px] place-self-start text-center rounded-lg mt-10 mb-5">
              <button className="text-white border-b-2 justify-self-start mt-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="">
            <img
              className="w-[400px] ml-5 pb-5 md:w-80 md:mt-28 lg:w-[500px] xl:w-[500px] md:pr-10"
              src={pest_products}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
