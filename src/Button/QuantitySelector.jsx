import React from "react";

const QuantitySelector = ({ quantity, updateQuantity }) => {
  const handleIncrease = () => {
    updateQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded">
      <button
        onClick={handleDecrease}
        className="w-8 h-8 bg-gray-200 border border-gray-300  hover:bg-gray-300"
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-20 h-8 text-center border border-gray-300"
      />
      <button
        onClick={handleIncrease}
        className="w-8 h-8 bg-gray-200 border border-gray-300  hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;




























// import React from "react";

// const QuantitySelector = ({ quantity, updateQuantity }) => {
//   const handleIncrease = () => {
//     updateQuantity(quantity + 1);
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       updateQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className="flex items-center">
//       {/* زر تقليل الكمية */}
//       <button
//         onClick={handleDecrease}
//         className="w-8 h-8 bg-white border border-gray-300 text-xl font-bold flex items-center justify-center rounded-l hover:bg-gray-100"
//       >
//         -
//       </button>

//       {/* عرض العدد */}
//       <input
//         type="text"
//         value={quantity}
//         readOnly
//         className="w-12 h-8 text-center border-t border-b border-gray-300 text-lg"
//       />

//       {/* زر زيادة الكمية */}
//       <button
//         onClick={handleIncrease}
//         className="w-8 h-8 bg-red-500 text-white text-xl font-bold flex items-center justify-center rounded-r hover:bg-red-600"
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default QuantitySelector;

