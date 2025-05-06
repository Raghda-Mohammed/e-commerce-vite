import React, { useContext, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import "../index.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contextAPI/AuthContext";
import UserDropdown from "./UserDropdown";

// react icons
import { IoSearchOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

// context
import CartContext from "../contextAPI/CartContext";
import { WishlistContext } from "../contextAPI/WishlistContext";
import { FaUserCheck } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
const Header = () => {
  const { isLoggedIn, logIn, logOut } = useAuth();
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const Links = [
    { id: 1, page: "Home", path: "/" },
    { id: 2, page: "contact", path: "/contact" },
    { id: 3, page: "About", path: "/about" },
    { id: 4, page: "Register", path: "/register" },
  ];
  return (
    <div className="border-b-2 border-gray-200 sticky top-0 bg-white z-50">
      <div className="container mx-auto flex justify-between py-4 px-4">
        {/* الشعار */}
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/" className="text-black text-decoration-none text-xl">
            Exclusive
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-7">
          {Links.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="text-black text-decoration-none link-primary hover:text-blue-600"
              >
                {item.page}
              </Link>
            </li>
          ))}
        </ul>

        {/* عناصر تسجيل الدخول والسلة والمفضلة */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 border-none px-2 py-1 rounded-lg bg-gray-200">
            <Form.Control
              type="text"
              placeholder="What are you looking for?"
              className="text-sm py-2 px-4 bg-transparent border-none w-full focus:outline-none"
            />
            <IoSearchOutline className="text-xl" />
          </div>

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              {/* المفضلة */}
              <Link to="/wishlist">
                <div className="relative">
                  <FiHeart className="text-2xl text-black sm:text-3xl md:text-2xl" />
                  {wishlist.length > 0 && (
                    <span className="absolute top-[-10px] right-[-5px] px-1.5 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                </div>
              </Link>

              {/* السلة */}
              <Link to="/cart">
                <div className="relative">
                  <MdOutlineShoppingCart className="text-2xl text-black sm:text-3xl md:text-2xl" />
                  {cart.length > 0 && (
                    <span className="absolute top-[-10px] right-[-5px] px-1.5 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                      {cart.length}
                    </span>
                  )}
                </div>
              </Link>

              {/* زر تسجيل الخروج */}
              <button
                onClick={logOut}
                className="bg-red-500 text-white p-2  rounded-circle hover:bg-red-600"
              >
                <FaUserCheck />
                {/* Log Out */}
              </button>
            </div>
          ) : (
            <button
              onClick={logIn}
              className="bg-blue-500 text-white p-2 rounded-circle hover:bg-blue-600"
            >
              <CiUser />
            </button>
          )}
        </div>

        {/* القائمة الجانبية (للشاشات الصغيرة) */}
        <div className="lg:hidden ml-auto">
          {!isOpenMenu ? (
            <HiOutlineMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpenMenu(true)}
            />
          ) : (
            <HiX
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpenMenu(false)}
            />
          )}
        </div>

        {isOpenMenu && (
          <div className="lg:hidden flex flex-col items-end py-10 w-full">
            <ul className="flex flex-col gap-4">
              {Links.map((item) => (
                <li key={item.id} className="text-sm text-center">
                  <Link
                    to={item.path}
                    className="text-black text-decoration-none hover:text-blue-600"
                  >
                    {item.page}
                  </Link>
                </li>
              ))}

              {isLoggedIn ? (
                <button
                  onClick={logOut}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={logIn}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Log In
                </button>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
 







    // <div className="border-b-2 border-gray-200 sticky top-0 bg-white z-50">
    //   <div className="container mx-auto flex justify-between py-4 px-4">
    //     <div className="hidden lg:flex items-center gap-2">
    //       <Link to="/" className="text-black text-decoration-none text-xl">
    //         Exclusive
    //       </Link>
    //     </div>

    //     <ul className={"hidden lg:flex items-center gap-7"}>
    //       {Links.map((item) => (
    //         <li key={item.id} className="relative">
    //           <div className="flex items-center gap-2 cursor-pointer">
    //             <a
    //               href={item.path}
    //               className="text-black text-decoration-none link-primary hover:text-blue-600"
    //             >
    //               {item.page}
    //             </a>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>

    //     <div className="hidden lg:flex items-center gap-3">
    //       <div className="flex items-center gap-2 border-none px-2 py-1 rounded-lg bg-gray-200">
    //         <Form.Control
    //           type="text"
    //           placeholder="What are you looking form?"
    //           className="text-sm py-2 px-4 bg-transparent border-none w-full focus:outline-none"
    //         />
    //         <IoSearchOutline className="text-xl" />
    //       </div>
    //       <div className="flex items-center gap-3">
    //         <Link to="/wishlist">
    //           <div className="relative">
    //             <FiHeart className="text-2xl text-black sm:text-3xl md:text-2xl" />
    //             {wishlist.length > 0 && (
    //               <span className="absolute top-0 right-0 md:top-1 md:right-1 lg:top-2 lg:right-2 z-10 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
    //                 {wishlist.length}
    //               </span>
    //             )}
    //           </div>
    //         </Link>
    //         {/* <FiHeart className="text-2xl" /> */}
    //         <Link to="/cart">
    //           <div className="relative">
    //             <MdOutlineShoppingCart className="text-2xl text-black sm:text-3xl md:text-2xl" />
    //             {cart.length > 0 && (
    //               <span className="absolute top-0 right-0 md:top-1 md:right-1 lg:top-2 lg:right-2 z-10 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
    //                 {cart.length}
    //               </span>
    //             )}
    //           </div>
    //         </Link>
    //         <Link>
    //           <UserDropdown
    //           className={`text-3xl ${
    //             loggedIn ? "text-white bg-red-500 rounded-full" : "text-black"
    //           }`}
    //           />
    //         </Link>
    //       </div>
    //     </div>

    //     <div className="lg:hidden ml-auto">
    //       {!isOpenMenu ? (
    //         <HiOutlineMenu
    //           className="text-2xl cursor-pointer"
    //           onClick={() => setIsOpenMenu(true)}
    //         />
    //       ) : (
    //         <HiX
    //           className="text-2xl cursor-pointer"
    //           onClick={() => setIsOpenMenu(false)}
    //         />
    //       )}
    //     </div>

    //     {isOpenMenu && (
    //       <div
    //         className="lg:hidden flex flex-col items-end py-10 w-full"
    //         data-aos="zoomin"
    //       >
    //         <ul className="flex flex-col gap-4">
    //           {Links.map((item) => (
    //             <li key={item.id} className="text-sm text-center">
    //               <a
    //                 href={item.path}
    //                 className="text-black text-decoration-none link-primary hover:text-blue-600"
    //               >
    //                 {item.page}
    //               </a>
    //             </li>
    //           ))}

    //           <div className="flex items-center gap-3">
    //             <FiHeart className="text-xl" />
    //             <Link to="/cart">
    //               <div className="relative">
    //                 <MdOutlineShoppingCart className="text-xl text-black sm:text-3xl md:text-2xl" />
    //                 {cart.length > 0 && (
    //                   <span className="absolute top-0 right-0 md:top-1 md:right-1 lg:top-2 lg:right-2 z-10 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
    //                     {cart.length}
    //                   </span>
    //                 )}
    //               </div>
    //             </Link>
    //           </div>
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Header;
