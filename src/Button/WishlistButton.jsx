import React, { useContext, useMemo } from "react";
import { WishlistContext } from "../contextAPI/WishlistContext";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const WishlistButton = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  // تحقق ما إذا كان المنتج موجودًا بالفعل في قائمة الأمنيات
  const isAdded = useMemo(
    () => product && wishlist.some((item) => item.id === product.id),
    [wishlist, product]
  );

  // معالجة النقر على زر الأمنيات
  const handleWishlistClick = () => {
    if (product) {
      if (isAdded) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    }
  };

  return (
    <button
      onClick={handleWishlistClick}
      className={`px-2 py-2 rounded ${
        isAdded ? "border-gray-100 text-red-600" : "border-gray-100 text-black"
      } transition-all duration-300`}
    >
      {isAdded ? <FaHeart /> : <IoMdHeartEmpty />}
    </button>
  );
};

export default WishlistButton;
