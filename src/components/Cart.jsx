import React from "react";
import { useContext } from "react";
import CartContext from "../contextAPI/CartContext";
import { useAuth } from "../contextAPI/AuthContext";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return (
      <p className="text-center text-gray-500">
        Please log in to view your cart.
      </p>
    );
    // return null;
  }

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        // التحقق من صحة السعر والكمية
        const itemPrice = parseFloat(item.price.replace("$", "").trim()) || 0;
        const itemQuantity = parseInt(item.quantity) || 0;

        if (isNaN(itemPrice) || isNaN(itemQuantity)) {
          console.error("Invalid data for item:", item);
          return total; // تجاهل هذا العنصر إذا كانت البيانات غير صالحة
        }

        return total + itemPrice * itemQuantity; // حساب الإجمالي الصحيح
      }, 0)
      .toFixed(2); // تنسيق العدد إلى رقم عشري من مرتبتين
  };

  return (
    <div className="cart container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <React.Fragment>
          <ul className="space-y-4">
            <div className="">
              <h3 className="hidden md:flex justify-between bg-white p-4 shadow rounded-lg">
                <span className="text-gray-500">Product</span>
                <span className="text-gray-500">Price</span>
                <span className="text-gray-500">Quantity</span>
                <span className="text-gray-500">Subtotal</span>
              </h3>
            </div>
            {cart.map((item, index) => {
              const price = item.price || "$0.00"; // توفير قيمة افتراضية للسعر
              const quantity = item.quantity || 1; // توفير كمية افتراضية
              const itemPrice = parseFloat(price.replace("$", "").trim());

              if (isNaN(itemPrice) || !item.name || !item.img) {
                console.error(`Invalid item at index ${index}:`, item);
                return null;
              }

              return (
                <div>
                  <li
                    key={item.id}
                    className="lg:flex items-center bg-white p-4 shadow rounded-lg"
                  >
                    <div className="relative">
                      <div className="lg:flex items-center space-x-4 ">
                        <Link to={`/productdetails/${item.id}`}>
                          <img
                            src={item.img}
                            alt={item.name || "Product Image"}
                            className="w-24 h-24 object-contain"
                          />
                        </Link>
                        {/* ***************************** */}
                        {/* <img
                          src={item.img}
                          alt={item.name || "Product Image"}
                          className="w-24 h-24 object-cover rounded-md"
                        /> */}
                        {/* ***************************** */}
                        <h3 className="text-lg font-bold">{item.name}</h3>
                      </div>
                      <div className="absolute top-0 left-0">
                        {/* <button
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to remove this item?"
                              )
                            ) {
                              removeFromCart(item.id);
                            }
                          }}
                          className="ml-auto rounded flex items-center justify-center"
                        >
                          <IoMdCloseCircleOutline className="text-white bg-red-700 rounded" />
                        </button> */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto rounded flex items-center justify-center"
                        >
                          <IoMdCloseCircleOutline className="text-white bg-red-700 rounded" />
                        </button>
                      </div>
                    </div>
                    <div className="md:ml-40 md:items-center inline-grid md:flex  md:flex-1 md:justify-between">
                      <p className="text-gray-500 text-sm">{item.price}</p>
                      <div className="flex items-center mt-2">
                        <label className="text-sm text-gray-500 mr-2">
                          Quantity:
                        </label>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          className="w-16 p-1 text-center border rounded"
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value) || 1; // تعيين كمية افتراضية
                            updateCartQuantity(
                              item.id,
                              Math.max(newQuantity, 1)
                            ); // التأكد أن الكمية ≥ 1
                          }}
                        />

                      </div>
                      <p className="text-gray-500 mt-2">
                        Subtotal: ${item.price.replace("$", "") * item.quantity}
                      </p>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
          <div>
            <div className="flex justify-between p-4">
              <button className="border-2 border-gray-300 bg-white text-black px-4 py-2 rounded ">
                <a href="/" className="text-black text-decoration-none">
                  Return to shop
                </a>
              </button>
              <button className="border-2 border-gray-300 bg-white text-black px-8 py-2 rounded">
                Update cart
              </button>
            </div>

            <div className="lg:flex lg:grid-cols-2 justify-between m-4">
              <div className="grid grid-cols-2 justify-between">
                <div className="">
                  <button className="border-2 border-gray-300 bg-white text-black px-7 py-2 rounded">
                    Coupon Code
                  </button>
                </div>
                <div className="md:ml-auto md:mt-1">
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                    Apply Coupon
                  </button>
                </div>
              </div>

              <div className="block mt-4 p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Cart Total</h3>
                <p className="text-gray-700">Subtotal: ${calculateTotal()}</p>
                <p className="text-gray-700">Shipping: Free</p>
                <h2 className="text-2xl font-bold mt-2">
                  Total: ${calculateTotal()}
                </h2>
                <button className="mt-4 border-none bg-red-500 text-white px-8 py-2 rounded hover:bg-red-700">
                  <a
                    href="/checkout"
                    className="text-white text-decoration-none"
                  >
                    Proceed to checkout
                  </a>
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
