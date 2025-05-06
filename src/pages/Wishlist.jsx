import React, { useContext } from "react";
import { WishlistContext } from "../contextAPI/WishlistContext";
import { CartContext } from "../contextAPI/CartContext";
import { useAuth } from "../contextAPI/AuthContext";
// import { data } from "../components/Data";

import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return null; // لا يتم عرض المفضلة إذا لم يكن المستخدم مسجلًا
  }

  const { handleAddToCart } = useContext(CartContext);
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  //   const { addToWishlist } = useContext(WishlistContext);

  return (
    <div>
      <div className="wishlist container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-center">Your wishlist is empty</p>
        ) : (
          <ul className="block gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
            {wishlist.map((item) => (
              <li
                key={item.id}
                className="block mb-2 items-center bg-white p-4 shadow-md rounded-lg relative"
              >
                <div className="h-70 rounded-t-xl bg-gray-100 flex justify-center items-center">
                  <Link to={`/productdetails/${item.id}`}>
                    <img
                      src={item.img}
                      alt={item.name || "Product Image"}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                  {/* ************************************** */}
                  {/* <img
                    src={item.img}
                    alt={item.name || "Product Image"}
                    className="h-40 w-36"
                  /> */}
                  {/* ************************************** */}
                </div>

                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.price}</p>
                </div>
                <div className="absolute top-7 right-7 rounded-full text-xl">
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="  bg-white px-2 py-2 rounded-full text-red-600"
                  >
                    <MdOutlineDeleteForever />
                  </button>
                </div>
                <div className="absolute bottom-4 right-2 ">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-xs bg-red-500 text-white p-2 rounded-md cursor-pointer hover:bg-red-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
