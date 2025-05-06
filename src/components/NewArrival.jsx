import React from "react";
import {
  newarrival_1,
  newarrival_2,
  newarrival_3,
  newarrival_4,
} from "../assets";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";

const NewArrival = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="block">
          <div className="grid grid-cols-2">
            <div className="w-[18px] h-[40px] rounded-md bg-red-500"></div>
            <div className="ml-[-200px] mt-2 font-bold  text-red-600 md:ml-[-430px] lg:mt-1.5 lg:ml-[-620px] xl:[-500px]">
              <h6 className="text-sm font-bold">Featured</h6>
            </div>
          </div>

          <div className="grid grid-cols-2 text-black mt-4 mb-8">
            <div className="text-2xl font-bold lg:text-4xl">New Arrival</div>
          </div>
        </div>

        <div className="block md:grid md:grid-cols-2 md:gap-4">
          <div className="bg-black h-[625px] relative mb-4">
            <div>
            <img
              src={newarrival_1}
              alt=""
              className="mt-28 place-self-center"
              srcSet=""
            />
            </div>
            <div className="absolute bottom-2 left-2 gap-2">
              <div className="block text-white font-light">
                <h2>PlayStation 5</h2>
                <div className="leading-none ">
                <h6 className="text-lg pb-[-20px]">Black and White version of the PS5</h6>
                <h6 className="text-lg ">coming out on sale.</h6>
                </div>
              </div>
              <button className="text-white underline">
              Shop Now
              </button>
            </div>
          </div>
          <div className="block">
            <div className="h-[325px] relative">
              <div>
              <img
                src={newarrival_2}
                alt=""
                className="w-full h-[350px]"
                srcSet=""
              />
              </div>
              <div className="absolute bottom-2 left-2 gap-2">
              <div className="block text-white font-light">
                <h2>Women’s Collections</h2>
                <div className="leading-none ">
                <h6 className="text-lg pb-[-20px]">Featured woman collections that</h6>
                <h6 className="text-lg ">give you another vibe.</h6>
                </div>
              </div>
              <button className="text-white underline">
              Shop Now
              </button>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="h-[250px] bg-neutral-800 relative">
                <div>
                <img
                  src={newarrival_3}
                  alt=""
                  className="place-self-center pt-4 h-[240px] w-[180px]"
                  srcSet=""
                />
                </div>
                <div className="absolute bottom-2 left-2 gap-2">
              <div className="block text-white font-light">
                <h4>Speakers</h4>
                <div className="leading-none ">
                <h6 className="text-sm pb-[-20px]">Amazon wireless speakers</h6>
                </div>
              </div>
              <button className="text-white underline">
              Shop Now
              </button>
            </div>
              </div>
              <div className="h-[250px] bg-neutral-800 relative">
                <div>
                <img
                  src={newarrival_4}
                  alt=""
                  className="place-self-center pt-4 h-[240px] w-[180px]"
                  srcSet=""
                />
                </div>
                <div className="absolute bottom-2 left-2 gap-2">
              <div className="block text-white font-light">
                <h2>Perfume</h2>
                <div className="leading-none ">
                <h6 className="text-lg pb-[-20px]">GUCCI INTENSE OUD EDP</h6>
                </div>
              </div>
              <button className="text-white underline">
              Shop Now
              </button>
            </div>
              </div>
            </div>
          </div>
        </div>




        <div className="md:grid md:grid-cols-3 mt-20">

          <div className="block">
            <div className="border-neutral-400 border-8 w-24 h-24 rounded-full place-self-center">
            <div className="icon w-20 h-20 place-self-center rounded-full pt-3 border-neutral-500 bg-black text-white">
            <TbTruckDelivery className="place-self-center w-14 h-10 " />
            </div>
            </div>
            <h6 className="mt-4 place-self-center lg:text-lg font-bold">FREE AND FAST DELIVERY</h6>
            <p className="place-self-center text-sm">Free delivery for all orders over $140</p>
          </div>
          
          <div className="block">
            <div className="border-neutral-400 border-8 w-24 h-24 rounded-full place-self-center">
            <div className="icon w-20 h-20 place-self-center rounded-full pt-3 border-neutral-500 bg-black text-white">
            <RiCustomerServiceLine className="place-self-center w-14 h-10" />
            </div>
            </div>
            <h6 className="mt-4 place-self-center lg:text-lg font-bold">24/7 CUSTOMER SERVICE</h6>
            <p className="place-self-center text-sm">Friendly 24/7 customer support</p>
          </div>
          
          <div className="block">
            <div className="border-neutral-400 border-8 w-24 h-24 rounded-full place-self-center">
            <div className="icon w-20 h-20 place-self-center rounded-full pt-3 border-neutral-500 bg-black text-white">
            <AiOutlineSecurityScan className="place-self-center w-14 h-10" />
            </div>
            </div>
            <h6 className="mt-4 place-self-center lg:text-lg font-bold">MONEY BACK GUARANTEE</h6>
            <p className="place-self-center text-sm">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
