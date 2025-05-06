import React from "react";
import { useCart } from "../contextAPI/CartContext";

const OrderSummary = () => {
  const { cart } = useCart(); // الحصول على بيانات السلة

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="w-full md:w-1/2 px-4">
      <h2 className="text-xl font-bold mb-4">Your Order</h2>
      <div className="bg-white p-4 rounded shadow-md">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-4">
            <img
              src={item.img}
              alt={item.name || "Product Image"}
              className="w-10 h-10 object-contain rounded-md"
            />
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <hr />
        <div className="my-4 flex justify-between">
          <span>Total</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-medium">Payment Method</h3>
          <div>
            <input type="radio" name="payment" value="bank" /> Bank Transfer
            <br />
            <input type="radio" name="payment" value="cod" /> Cash on Delivery
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter coupon code"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Apply Coupon
          </button>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 w-full rounded">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
