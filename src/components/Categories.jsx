import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Category_Camera, Category_computer, Category_gaming, Category_headphones, Category_phone, Category_smartwatch } from "../assets";


const Categories = () => {

 
  return (
    <div className="container mx-auto mt-8">
      <div>
        <div>
        <div className="block">
          <div className="grid grid-cols-2">
            <div className="w-[18px] h-[40px] rounded-md bg-red-500"></div>
            <div className="ml-[-200px] mt-2 font-bold  text-red-600 md:ml-[-430px] lg:mt-1.5 lg:ml-[-620px] xl:[-500px]">
            <h6 className="font-bold">Categories</h6>
            </div>
          </div>

          <div className="grid grid-cols-2 text-black mt-4 ">
            <div className="text-2xl font-bold lg:text-4xl">Browse By Category</div>
            <div className="text-2xl lg:text-5xl lg:ml-[-350px] place-self-end">
            <div className="flex gap-1.5 slider-controls text-2xl">
              <button type="button" className="slide-m-prev w-9 h-8 bg-gray-300 rounded pl-1">
                <GoArrowLeft className="rounded-full"/>
              </button>
              <div className="slide-m-dots"></div>
              <button type="button" className="slide-m-next w-9 h-8 bg-gray-300 rounded pl-1">
                <GoArrowRight />
              </button>
            </div>
              
            </div>
          </div>
        </div>

        </div>
        <div>
          <div className="mt-10">
            <div className="grid gap-4 md:grid md:grid-cols-3 md:gap-2 lg:grid-cols-6 lg:gap-2 xl:gap-4 rounded-md">
              <div className="h-[200px] border-2 border-gray-200 md:w-[190px] md:h-[150px] rounded-md lg:w-[150px] xl:w-[180px] content-center hover:bg-red-400 hover:text-white hover:border-none">
                <img
                  className="place-self-center hover:fill-blue-500 "
                  src={Category_phone}
                  alt=""
                />
                <h4 className="place-self-center">Phones</h4>
              </div>
              <div className="h-[200px] border-2 border-gray-200 md:w-[190px] md:h-[150px] rounded-md lg:w-[150px] xl:w-[180px] content-center hover:bg-red-400 hover:text-white hover:border-none">
                <img
                  className="place-self-center"
                  src={Category_computer}
                  alt=""
                />
                <h4 className="place-self-center" >computers</h4>
              </div>
              <div className="h-[200px] border-2 border-gray-200 md:w-[190px] md:h-[150px] rounded-md lg:w-[150px] xl:w-[180px] content-center hover:bg-red-400 hover:text-white hover:border-none">
                <img
                  className="place-self-center"
                  src={Category_smartwatch}
                  alt=""
                />
                <h4 className="place-self-center">smartwatchs</h4>
              </div>
              <div className="h-[200px] border-2 border-gray-200 md:w-[190px] md:h-[150px] rounded-md lg:w-[150px] xl:w-[180px] bg-red-400 text-white content-center hover:border-none">
                <img
                  className=" object-cover rounded-md place-self-center"
                  src={Category_Camera}
                  alt=""
                />
                <h4 className="place-self-center">Camera</h4>
              </div>
              <div className="h-[200px] border-2 border-gray-200 md:w-[190px] md:h-[150px] rounded-md lg:w-[150px] xl:w-[180px] content-center hover:bg-red-400 hover:text-white hover:border-none">
                <img
                  className="place-self-center"
                  src={Category_headphones}
                  alt=""
                />
                <h4 className="place-self-center">headphones</h4>
              </div>
              <div className="h-[200px] border-2 border-gray-200 md:w-[190px] md:h-[150px] rounded-md lg:w-[150px] xl:w-[180px] content-center hover:bg-red-400 hover:text-white hover:border-none">
                <img
                  className="place-self-center"
                  src={Category_gaming}
                  alt=""
                />
                <h4 className="place-self-center">gaming</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 mt-14 "></div>
    </div>
  );
};

export default Categories;
