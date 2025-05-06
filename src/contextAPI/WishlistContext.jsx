import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // استرجاع البيانات من localStorage عند التحميل
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : []; // إذا كانت موجودة، قم باستعادتها
  });

  // تحديث localStorage عند تغيير قائمة الأمنيات
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      console.warn("Item already in wishlist:", product);
      return;
    }
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    if (!wishlist.some((item) => item.id === productId)) {
      console.warn("Item not found in wishlist:", productId);
      return;
    }
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};




// import React, { createContext, useState} from 'react'

// export const WishlistContext = createContext()

// export const WishlistProvider = ({ children }) => {
//     const [wishlist, setWishlist] = useState(() => {
//       const savedWishlist = localStorage.getItem("wishlist");
//       return savedWishlist? JSON.parse(savedWishlist) : [];
//     })

//     const saveWishlistToLocalStorage = () => {
//       localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     };

//     // useEffect(() => {
//     //   localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     // }, [wishlist]);

//     const addToWishlist = (product) => {
//       if (wishlist.some((item) => item.id === product.id)) {
//         console.warn('Item already in wishlist:', product);
//         return;
//       }
//       setWishlist((prevWishlist) => prevWishlist.concat(product));
//     }
 
//     const removeFromWishlist = (productId) => {
//       if (!wishlist.some((item) => item.id === productId)) {
//         console.warn('Item not found in wishlist:', productId);
//         return;
//       }
//       setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
//     };
  
//     return (
//       <WishlistContext.Provider
//         value={{
//           wishlist,
//           addToWishlist,
//           removeFromWishlist,
//           saveWishlistToLocalStorage
//         }}
//       >
//         {children}
//       </WishlistContext.Provider>
//     );
//   };
  