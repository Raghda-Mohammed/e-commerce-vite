import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { banner } from "../assets";

import { IoLogoApple } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  const Links = [
    { id: 1, link: "Woman’s Fashion", path: "/woman’sfashion" },
    { id: 2, link: "Men’s Fashion", path: "/Men’sfashion" },
    { id: 3, link: "Electronics", path: "/electronics" },
    { id: 4, link: "Home & Lifestyle", path: "/Home&Lifestyle" },
    { id: 5, link: "Woman’s Fashion", path: "/woman’sfashion" },
    { id: 6, link: "Men’s Fashion", path: "/Men’sfashion" },
    { id: 7, link: "Electronics", path: "/electronics" },
    { id: 8, link: "Home & Lifestyle", path: "/Home&Lifestyle" },
  ];

  return (
    <div className="container mx-auto">
      <div className="block lg:flex lg:flex-col-2">
        <div className="lg:border-r-2 border-gray-200 text-black lg:w-[20%] h-full">
          <div className=" grid grid-cols-4 md:gap-x-20 gap-y-2.5 text-[12px] h-full lg:block xl:mr-10 lg:text-base/10 mb-4 mt-8">
            {Links.map((item) => (
              <div key={item.id} className="">
                <div className=" cursor-pointer">
                  <a
                    href={item.path}
                    className="truncate text-black text-decoration-none link-primary hover:text-blue-600"
                  >
                    {item.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ************************************************ */}
        <div className="lg:w-[75%] lg:mt-8 lg:ml-8 bg-black text-white">
          <Carousel>
            <Carousel.Item interval={2000}>
              <div className="block mt-4 md:pt-[-100px] lg:mt-8">
                <Carousel.Caption>
                  <div className="ml-2">
                    <div className="flex gap-2">
                      <IoLogoApple className="text-2xl mt-6 lg:text-5xl lg:mt-2" />
                      <h5 className="lg:text-sm pt-4">iphone 14 series</h5>
                    </div>
                    <div className="block gap-2 ml-2 text-left  lg:text-2xl font-bold leading-tight">
                      <h1>Up to 25%</h1>
                      <h1>off Voucher</h1>
                    </div>
                    <div className="flex gap-4 ml-2 mt-6">
                      <button className="text-white border-b-2 justify-self-start">
                        Shop Now
                      </button>
                      <FaLongArrowAltRight className="lg:text-xl mt-2" />
                    </div>
                  </div>
                </Carousel.Caption>
                <div className="w-[50%] place-self-end mr-14">
                  <img className="ml-8 pt-8" src={banner} alt="" />
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <div className="block mt-4 md:pt-[-100px] lg:mt-8">
                <Carousel.Caption>
                  <div className="ml-2">
                    <div className="flex gap-2">
                      <IoLogoApple className="text-2xl mt-6 lg:text-5xl lg:mt-2" />
                      <h5 className="lg:text-sm pt-4">iphone 14 series</h5>
                    </div>
                    <div className="block gap-2 ml-2 text-left  lg:text-2xl font-bold leading-tight">
                      <h1>Up to 25%</h1>
                      <h1>off Voucher</h1>
                    </div>
                    <div className="flex gap-4 ml-2 mt-6">
                      <button className="text-white border-b-2 justify-self-start">
                        Shop Now
                      </button>
                      <FaLongArrowAltRight className="lg:text-xl mt-2" />
                    </div>
                  </div>
                </Carousel.Caption>
                <div className="w-[50%] place-self-end mr-14">
                  <img className="ml-8 pt-8" src={banner} alt="" />
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <div className="block mt-4 md:pt-[-100px] lg:mt-8">
                <Carousel.Caption>
                  <div className="ml-2">
                    <div className="flex gap-2">
                      <IoLogoApple className="text-2xl mt-6 lg:text-5xl lg:mt-2" />
                      <h5 className="lg:text-sm pt-4">iphone 14 series</h5>
                    </div>
                    <div className="block gap-2 ml-2 text-left  lg:text-2xl font-bold leading-tight">
                      <h1>Up to 25%</h1>
                      <h1>off Voucher</h1>
                    </div>
                    <div className="flex gap-4 ml-2 mt-6">
                      <button className="text-white border-b-2 justify-self-start">
                        Shop Now
                      </button>
                      <FaLongArrowAltRight className="lg:text-xl mt-2" />
                    </div>
                  </div>
                </Carousel.Caption>
                <div className="w-[50%] place-self-end mr-14">
                  <img className="ml-8 pt-8" src={banner} alt="" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

          {/* <Carousel>
            <Carousel.Item className="flex">
              <Carousel.Caption className="block w-[50%] justify-self-start mb-12">
                <div className="">
                  <div className="flex gap-4">
                    <IoLogoApple className="text-5xl" />
                    <h5 className="text-sm pt-4">iphone 14 series</h5>
                  </div>
                  <div className="block gap-4 text-left mt-4 text-4xl font-bold leading-tight">
                    <h1>Up to 25%</h1>
                    <h1>off Voucher</h1>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button className="text-white border-b-2 justify-self-start">
                      Shop Now
                    </button>
                    <FaLongArrowAltRight className="text-xl mt-2" />
                  </div>
                </div>
              </Carousel.Caption>

              <div className="w-[50%] justify-self-end mr-10">
                <img
                  className="d-block w-100"
                  src={banner}
                  // style={{ height: "370px" }}
                  alt=""
                />
              </div>
            </Carousel.Item>

            <Carousel.Item className="flex">
              <Carousel.Caption className="block w-[50%] justify-self-start mb-12">
                <div className="">
                  <div className="flex gap-4">
                    <IoLogoApple className="text-5xl" />
                    <h5 className="text-sm pt-4">iphone 14 series</h5>
                  </div>
                  <div className="block gap-4 text-left mt-4 text-4xl font-bold leading-tight">
                    <h1>Up to 25%</h1>
                    <h1>off Voucher</h1>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button className="text-white border-b-2 justify-self-start">
                      Shop Now
                    </button>
                    <FaLongArrowAltRight className="text-xl mt-2" />
                  </div>
                </div>
              </Carousel.Caption>

              <div className="w-[50%] justify-self-end mr-10">
                <img
                  className="d-block w-100"
                  src={banner}
                  // style={{ height: "370px" }}
                  alt=""
                />
              </div>
            </Carousel.Item>

            <Carousel.Item className="flex">
              <Carousel.Caption className="block w-[50%] justify-self-start mb-12">
                <div className="">
                  <div className="flex gap-4">
                    <IoLogoApple className="text-5xl" />
                    <h5 className="text-sm pt-4">iphone 14 series</h5>
                  </div>
                  <div className="block gap-4 text-left mt-4 text-4xl font-bold leading-tight">
                    <h1>Up to 25%</h1>
                    <h1>off Voucher</h1>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button className="text-white border-b-2 justify-self-start">
                      Shop Now
                    </button>
                    <FaLongArrowAltRight className="text-xl mt-2" />
                  </div>
                </div>
              </Carousel.Caption>

              <div className="w-[50%] justify-self-end mr-10">
                <img
                  className="d-block w-100"
                  src={banner}
                  // style={{ height: "370px" }}
                  alt=""
                />
              </div>
            </Carousel.Item>
          </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
