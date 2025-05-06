// import React, { createContext, useContext, useState } from "react";
// import { data, products, ourProducts } from "../components/Data"; // تعديل المسار حسب موقع ملف البيانات

// const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const allProducts = [...data, ...products, ...ourProducts];

//   const [productsList] = useState(allProducts);

//   const getProductById = (id) => productsList.find((product) => product.id === id);

//   return (
//     <ProductContext.Provider value={{ productsList, getProductById }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export const useProduct = () => useContext(ProductContext);

import React, { createContext, useContext, useState } from "react";
import { data, products, ourProducts } from "../components/Data";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const allProducts = [...data, ...products, ...ourProducts];
  const [productsList] = useState(allProducts);

//   const getProductById = (id) => productsList.find((product) => product.id === id);
//   console.log("Products List:", productsList); 

  const getProductById = (id) => {
    const product = productsList.find((product) => product.id === id);
    console.log("Fetched Product:", product); 
    return product;
  };
  console.log("Get Product by ID:", getProductById(1));
  

  return (
    <ProductContext.Provider value={{ productsList, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
