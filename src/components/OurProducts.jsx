import React, { useState, useContext } from "react";
import { CartContext } from "../contextAPI/CartContext";
import { WishlistContext } from "../contextAPI/WishlistContext";
import WishlistButton from "../Button/WishlistButton";
import { ourProducts } from "./Data";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurProducts = (ourProduct) => {
  const { handleAddToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist } =
    React.useContext(WishlistContext);

  const handleWishlist = (product) => {
    addToWishlist(product); // أو removeFromWishlist(product.id) حسب الحالة
  };

  const [rating, setRating] = useState(ourProducts[0]?.rating || 0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
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

  return (
    <div>
      <div>
        <div className="container mx-auto mt-8">
          <div>
            <div className="block">
              <div className="grid grid-cols-2">
                <div className="w-[18px] h-[40px] rounded-md bg-red-500"></div>
                <div className="ml-[-200px] mt-2 font-bold  text-red-600 md:ml-[-430px] lg:mt-1.5 lg:ml-[-620px] xl:[-500px]">
                  <h6 className="text-sm font-bold">Our Products</h6>
                </div>
              </div>

              <div className="grid grid-cols-2 text-black mt-4 mb-8">
                <div className="text-2xl font-bold lg:text-4xl">
                  Explore Our Products
                </div>
              </div>
            </div>

            <div className="block md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-2 mt-4">
              {ourProducts.map((ourProduct) => (
                <div key={ourProduct.id} className="">
                  <div className=" text-black rounded-xl ml-4 relative">
                    <div className="h-70 rounded-t-xl bg-gray-100 flex justify-center items-center">
                      <Link to={`/productdetails/${ourProduct.id}`}>
                        <img
                          src={ourProduct.img}
                          alt={ourProduct.title}
                          className="w-full h-48 object-contain rounded-t-xl"
                        />
                      </Link>
                      {/* **************************************** */}
                      {/* <img
                        src={ourProduct.img}
                        alt=""
                        className="h-40 w-36 mt-5"
                      /> */}
                      {/* <Link
                        to={`/productdetails/${product.id}`}
                        className="text-white text-decoration-none"
                      >
                        View Details
                      </Link> */}
                      {/* **************************************** */}
                    </div>

                    <div className=" ">
                      <p className="text-sm 2xl:text-start md:text-base font-semibold mt-3">
                        {ourProduct.title}
                      </p>
                      <div className="absolute top-2 right-2 gap-2 text-xl">
                        <WishlistButton
                          onAddToWishList={handleWishlist}
                          product={ourProduct}
                          className="p-2 border-2 border-gray-100 bg-white rounded-full"
                        >
                          <IoMdHeartEmpty />
                        </WishlistButton>
                        <div className="p-2 border-2 border-gray-100 bg-white rounded-full">
                          <IoEyeOutline />
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-2 ">
                        <button
                          onClick={() => handleAddToCart(ourProduct)}
                          className="text-xs bg-red-500 text-white p-2 rounded-md cursor-pointer hover:bg-red-700"
                        >
                          Add to Cart
                        </button>
                      </div>
                      {/* // rating */}
                      <div className="flex flex-col-5 gap-1">
                        <p className="2xl:text-start sm:text-xs text-red-500 font-semibold mr-2">
                          {ourProduct.price}
                        </p>
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
                  </div>
                  {/* end */}
                </div>
              ))}
            </div>
            <div className="text-2xl lg:text-5xl ">
              <div className="text-2xl lg:text-5xl mt-10">
                <div className="flex text-base place-self-center">
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                  >
                    View All Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
