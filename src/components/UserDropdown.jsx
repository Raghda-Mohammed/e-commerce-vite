import React, { useState, useEffect } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlinePerson } from "react-icons/md";
import { RiLogoutBoxLine, RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../contextAPI/AuthContext";
import { useNavigate } from "react-router-dom";

const UserDropdown = ({ loggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen(false); // إغلاق القائمة عند النقر خارجها
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const { logOut } = useAuth(); // الوصول إلى دالة logOut
  const navigate = useNavigate(); // للتنقل بين الصفحات

  const handleLogOut = () => {
    logOut(); // استدعاء دالة logOut
    navigate("/login"); // الانتقال إلى صفحة تسجيل الدخول
  };

  return (
    <div className="relative dropdown">
      <button onClick={toggleDropdown} className="focus:outline-none">
        <MdOutlinePerson
          className={`mt-2 text-3xl ${
            loggedIn ? "text-red-500" : "text-black"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-[#615d64] to-[#94549b] rounded shadow-lg">
          <div className="text-sm ml-2">
            <div className="py-2 no-underline cursor-pointer">
              <Link
                className="flex gap-2 text-decoration-none text-white"
                to="/profile"
              >
                <div className="text-2xl mt-2">
                  <LuUser />
                </div>
                <div className="mt-2">Manage My Account</div>
              </Link>
            </div>
            <div className="py-2 cursor-pointer">
              <Link className="flex gap-2 text-decoration-none text-white">
                <div className="text-2xl mt-2">
                  <RiShoppingBag3Line />
                </div>
                <div className="mt-2">My Order</div>
              </Link>
            </div>
            <div className=" py-2 cursor-pointer">
              <Link className="flex gap-2 text-decoration-none text-white">
                <div className="text-2xl mt-2">
                  <IoCloseCircleOutline />
                </div>
                <div className="mt-2">My Cancellationst</div>
              </Link>
            </div>
            <div className=" py-2 cursor-pointer">
              <Link
                className="flex gap-2 text-decoration-none text-white"
                to="/wishlist"
              >
                <div className="text-2xl mt-2">
                  <IoIosStarOutline />
                </div>
                <div className="mt-2">My Reviews</div>
              </Link>
            </div>

            <div
              className="flex gap-2 py-2 cursor-pointer text-red-500 font-bold"
              onClick={handleLogOut}
            >
              <div className="text-2xl mt-2">
                <RiLogoutBoxLine />
              </div>
              <div className="mt-2">Log Out</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
