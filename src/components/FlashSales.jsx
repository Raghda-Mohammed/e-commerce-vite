import React, { useEffect, useState, useContext, useMemo } from "react";
import { CartContext } from "../contextAPI/CartContext";
import { WishlistContext } from "../contextAPI/WishlistContext";
import WishlistButton from "../Button/WishlistButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./Data";
import { FaStar } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

import "./style.css";
import { Link } from "react-router-dom";
// useMemo
const FlashSales = ({ duration }) => {
  const { handleAddToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist } =
    React.useContext(WishlistContext);

  const handleWishlist = (product) => {
    addToWishlist(product); // أو removeFromWishlist(product.id) حسب الحالة
  };

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
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${days}: ${hours}: ${minutes}: ${seconds}`;
  };

  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const rating = data?.rating || 'No rating available';
  const [hoverValue, setHoverValue] = useState(undefined);
  const colors = useMemo(
    () => ({
      orange: "#FFBA5A",
      grey: "#a9a9a9",
    }),
    []
  );

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

  return (
    <div className="container mx-auto mt-8">
      <div>
        <div className="block">
          <div className="grid grid-cols-2">
            <div className="w-[18px] h-[40px] rounded-md bg-red-500"></div>
            <div className="ml-[-230px] mt-2 font-bold  text-red-600 md:ml-[-410px] lg:mt-1.5 lg:ml-[-440px] xl:ml-[-620px]">
              <h6 className="text-sm font-bold">Today’s</h6>
            </div>
          </div>

          <div className="grid grid-cols-3 text-black mt-4 mb-8">
            <div className="text-2xl font-bold md:text-3xl lg:text-5xl">
              Flash Sales
            </div>
            <div className="text-2xl lg:text-5xl lg:ml-[-150px] mt-3 font-bold">
              <div className="gap-2 font-bold  text-center">
                <div className="">
                  <div className="flex grid-cols-4 gap-2 lg:ml-28 text-black h-14 mb-6 mt-[-20px]">
                    <div className="flex flex-col justify-center items-center w-16 p-1">
                      <span className="text-[10px]">Days</span>
                      <span className="text-4xl">
                        {getFormattedTime(time).split(":")[0]}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center w-16 p-1">
                      <span className="text-[10px]">Hours</span>
                      <span className="text-4xl">
                        {getFormattedTime(time).split(":")[1]}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center w-16 p-1">
                      <span className="text-[10px]">Minutes</span>
                      <span className="text-4xl">
                        {getFormattedTime(time).split(":")[2]}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center w-16 p-1">
                      <span className="text-[10px]">Seconds</span>
                      <span className="text-4xl">
                        {getFormattedTime(time).split(":")[3]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-2xl lg:text-5xl lg:ml-[-350px] font-bold">
              <div className="flex gap-1.5 slider-controls text-2xl place-self-end mt-[-30px]">
                <button
                  type="button"
                  className="slide-m-prev w-9 h-8 bg-gray-300 rounded pl-1"
                >
                  <GoArrowLeft className="rounded-full" />
                </button>
                <div className="slide-m-dots"></div>
                <button
                  type="button"
                  className="slide-m-next w-9 h-8 bg-gray-300 rounded pl-1"
                >
                  <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* *************************************************************** */}
        <div className="mt-4">
          {data && data.length > 0 ? (
            <Slider {...settings}>
            {data.map((data) => (
              <div key={data.id} className="">
                <div className="gap-4 text-black rounded-xl ml-4 relative">
                  <div className="relative">
                    <div className="h-70 rounded-t-xl bg-gray-100 flex justify-center items-center">
                      <Link to={`/productdetails/${data.id}`}>
                        <img
                          src={data.img}
                          alt=""
                          className="w-40 h-40 object-cover"
                        />
                      </Link>
                      {/* ************************************ */}
                      {/* <img src={data.img} alt="" className="h-40 w-36 mt-5" /> */}
                      {/* ************************************ */}
                    </div>

                    {/* Add To Cart */}
                    <div className="absolute  bottom-0 ">
                      <button
                        onClick={() => handleAddToCart(data)}
                        className="text-xs bg-red-500 text-white p-2 rounded-md cursor-pointer w-full hover:bg-red-700"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className=" ">
                    <p className="text-sm 2xl:text-start md:text-base font-semibold mt-3">
                      {data.title}
                    </p>
                    <div className="flex gap-2">
                      <p className="2xl:text-start sm:text-xs">
                        {data.desc || "No description"}
                      </p>
                      <p className="2xl:text-start sm:text-xs text-red-500 line-through font-semibold">
                        {data.price}
                      </p>
                    </div>

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
                            onMouseLeave={() => handleMouseLeaveStar()}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="absolute text-xs top-2 right left-2 rounded-lg text-white font-semibold bg-red-500 px-3 py-1">
                      {data.discount_rate || "No discount"}
                    </div>
                    <div className="absolute top-2 right-2 gap-2 text-xl">
                      <WishlistButton
                        onAddToWishList={handleWishlist}
                        product={data}
                        className="p-2 border-2 border-gray-100 bg-white rounded-full"
                      >
                        <IoMdHeartEmpty />
                      </WishlistButton>

                      <div className="p-2 border-2 border-gray-100 bg-white rounded-full">
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                  <button className="add-to-cart-button absolute bottom-0 left-0 w-full text-center bg-blue-500 text-white py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </Slider>
          ) : (
            <p className="text-center text-sm text-gray-500">No data available.</p>
          )}
          <div className="flex justify-center items-center mt-4 rounded-xl"></div>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 mt-14 "></div>
    </div>
  );
};

export default FlashSales;
