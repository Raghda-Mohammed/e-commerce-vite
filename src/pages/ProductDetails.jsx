import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../contextAPI/ProductContext";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineRestartAlt } from "react-icons/md";
import QuantitySelector from "../Button/QuantitySelector";
import { useNavigate } from "react-router-dom";
import CartContext from "../contextAPI/CartContext";

const ProductDetails = () => {
  const { id } = useParams(); // جلب ID المنتج من الرابط
  const navigate = useNavigate();
  const { handleAddToCart } = useContext(CartContext);
  const { getProductById } = useProduct(); // جلب المنتج من السياق
  const [product, setProduct] = useState(null); // حالة لتخزين بيانات المنتج
  const [loading, setLoading] = useState(true); // حالة التحميل
  const [error, setError] = useState(null); // حالة الخطأ
  const [selectedImage, setSelectedImage] = useState(null); // الصورة الرئيسية المحددة

  const [quantity, setQuantity] = useState(1);
 
  const navigateToCheckout = () => {
    navigate("/checkout"); // استخدم الكائن navigate مباشرة للانتقال
  };
  
  
 
  const handleBuyNow = () => {
    if (!product) {
      console.error("Product not found");
      return;
    }

    handleAddToCart(product);
    alert("Product added to cart successfully!");
    navigateToCheckout();
  };

  const updateCartQuantity = (newQuantity) => {
    setQuantity(newQuantity); // تحديث الحالة بالكمية الجديدة
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedProduct = getProductById(id); // جلب المنتج بناءً على ID
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          setSelectedImage(fetchedProduct.images[0]); // تعيين الصورة الافتراضية
        } else {
          setError("Product not found. Please check the ID.");
        }
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, getProductById]); // تشغيل الدالة عند تغيير ID

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
    return <p>Product not found. Please check the ID.</p>;
  }

  return (
    <div className="container mx-auto p-8 mt-8">
      <div className="flex ml-4 mb-8">
        <a href="/">Home</a>
        <h6 className="ml-2 mt-1">/</h6>
        <h6 className="ml-2 mt-1">Gaming</h6>
        <h6 className="ml-2 mt-1">/</h6>
        <h6 className="ml-2 mt-1">Havic HV G-92 Gamepad</h6>
      </div>
      <div className="block space-y-8 lg:flex">
        {/* الصور */}
        <div className="w-full px-4">
          {product.images && product.images.length > 0 ? (
            <div className="flex gap-4 lg:gap-8">
              {/* الصور الإضافية */}
              <div className="block space-y-7">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className="w-40 h-20 object-contain shadow rounded cursor-pointer"
                    onClick={() => setSelectedImage(image)} // تحديث الصورة الرئيسية عند النقر
                  />
                ))}
              </div>

              {/* عرض الصورة الرئيسية */}
              <div className="w-full">
                <img
                  src={selectedImage} // الصورة الرئيسية المحددة
                  alt={product.title}
                  className="w-96 h-full object-contain shadow rounded mb-4 px-8"
                />
              </div>
            </div>
          ) : (
            <p>No images available</p>
          )}
        </div>

        {/* تفاصيل المنتج */}
        <div className="w-full lg:w-1/3">
          {product.name && (
            <h1 className="text-3xl font-bold">{product.name}</h1>
          )}
          {product.rating && (
            <div className="flex items-center">
              {[...Array(product.rating)].map((_, index) => (
                <span key={index} className="text-yellow-500 text-lg">
                  ★
                </span>
              ))}
              {product.reviews && (
                <span className="text-gray-500 ml-2">
                  ({product.reviews} reviews)
                </span>
              )}{" "}
              <div className="text-gray-500 ml-2 text-xl">|</div>
              {/* الحالة: في المخزون / غير متوفر */}
              <div className="mt-1">
                <span
                  className={`font-bold ml-5 ${
                    product.inStock ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
          )}
          {product.price && (
            <p className="text-lg text-gray-500 mt-1">{product.price}</p>
          )}
          {product.description && (
            <p className="text-sm text-gray-700 mt-2">{product.description}</p>
          )}
          <div className="border-b-2 border-gray-300"></div>

          {/* الألوان */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex mt-2">
              <span className="font-bold mr-2">Colors: </span>
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`p-2.5 mx-1  rounded-circle border-2 border-gray-400 ${
                    color === "Red"
                      ? "bg-red-500"
                      : color === "Blue"
                      ? "bg-blue-500"
                      : "bg-black"
                  } text-white `}
                  onClick={() => setSelectedColor(color)}
                >
                  {/* {color} */}
                </button>
              ))}
            </div>
          )}

          {/* الأحجام */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-2">
              <span className="font-bold">Sizes: </span>
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="mx-1 p-2 border border-gray-300 rounded mr-2"
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          {/* أزرار الإجراء */}
          <div className="mt-2 flex items-center justify-between space-x-4">
            <div className="py-8">
              <QuantitySelector
                quantity={quantity}
                updateQuantity={updateCartQuantity}
              />
            </div>

            <button
              className="bg-red-500 text-white px-8 py-2 rounded hover:bg-red-700"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <button className="border-2 border-gray-300 text-black  p-2 rounded hover:bg-gray-400">
              <FaRegHeart />
            </button>
          </div>
          <div>
            <div className="border-2 border-gray-300 mt-2">
              <div className="flex space-x-4  border-b-2 border-gray-300">
                <div className="icon w-20 h-20 place-self-center rounded-full pt-3">
                  <TbTruckDelivery className="place-self-center w-14 h-10 " />
                </div>

                <div className="place-self-center text-nowrap">
                  <h6 className="mt-4  lg:text-lg font-bold">Free Delivery</h6>
                  <p className=" text-sm">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div>
                <div className="flex space-x-4">
                  <div className="icon w-20 h-20 place-self-center rounded-full pt-3">
                    <MdOutlineRestartAlt className="place-self-center w-14 h-10 " />
                  </div>

                  <div className="place-self-center text-nowrap">
                    <h6 className="mt-4 lg:text-lg font-bold">
                      Return Delivery
                    </h6>
                    <p className=" text-sm">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
