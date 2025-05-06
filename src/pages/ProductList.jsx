import React from "react";
import { useProduct } from "../contextAPI/ProductContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { productsList } = useProduct();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 lg:gap-4">
        {productsList && productsList.length > 0 ? (
          productsList.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded flex flex-col"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-contain rounded mb-4"
              />
              <h5 className="">{product.title}</h5>
              <div className="flex items-center justify-between w-full mt-2">
                <p className="text-gray-500 mt-2 place-self-start">
                  {product.price}
                </p>
                <p className="text-green-500 mt-2 place-self-end">
                  {product.discount_rate}
                </p>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
                <Link
                  to={`/productdetails/${product.id}`}
                  className="text-white text-decoration-none"
                >
                  View Details
                </Link>
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
