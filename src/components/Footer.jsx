import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { AiOutlineSend } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  const [text, setText] = useState("");
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      text || " ",
      (error) => error && console.error(error)
    );
  }, [text]);
  return (
    <div className="container mx-auto bg-black mt-5">
      <footer className=" text-white">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 place-self-center md:grid-cols-2 gap-8 px-4 py-6 lg:py-8 xl:grid-cols-5">
            <div className="">
              <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Exclusive
              </h4>
              <div className="text-white no-underline dark:text-gray-400 font-medium pt-8">
                <div className="mb-4 no-underline ">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    Subscribe
                  </a>
                </div>
                <div className="mb-4">
                  <a href="#" className="text-white link-primary text-decoration-none text-sm hover:underline">
                    Get 10% off your first order
                  </a>
                </div>
                <div className="mb-4">
                  <form className="h-14 w-48 border-3 border-gray-700 ">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute ml-4 text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Enter your email
                      </label>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-1 text-2xl">
                        <AiOutlineSend />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="">
              <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Support
              </h4>
              <div className="text-white dark:text-gray-400 font-medium pt-8">
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </a>
                </div>
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    exclusive@gmail.com
                  </a>
                </div>
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    +88015-88888-9999
                  </a>
                </div>
              </div>
            </div>

            <div className="">
              <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Account
              </h4>
              <div className="text-gray-500 dark:text-gray-400 font-medium pt-8">
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    My Account
                  </a>
                </div>
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    Login / Register
                  </a>
                </div>
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    Cart
                  </a>
                </div>
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    Wishlist
                  </a>
                </div>
              </div>
            </div>

            <div className="">
              <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Quick Link
              </h4>
              <div className="text-gray-500 dark:text-gray-400 font-medium pt-8">
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    Privacy Policy
                  </a>
                </div>
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    Terms Of Use
                  </a>
                </div>
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    FAQ
                  </a>
                </div>
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="">
              <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download App
              </h4>
              <div className="text-gray-500 dark:text-gray-400 font-medium pt-8">
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-white link-primary text-decoration-none text-sm no-underline hover:underline"
                  >
                    Save $3 with App New User Only
                  </a>
                </div>

                <div>
                  {/* <div class="col-sm-12 btn btn-info">
                    {" "}
                    How to Create QR Code in React Application
                  </div> */}
                  {/* <div class="col-sm-6">
                    <input
                      class="form-control"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div> */}
                  <br />
                  <canvas ref={canvasRef} />
                </div>

                <div className="flex gap-4  mt-4">
                  <a
                    href="#"
                    className="text-white link-primary no-underline hover:underline"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-white link-primary no-underline hover:underline"
                  >
                    <LuTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-white link-primary no-underline hover:underline"
                  >
                    <FiInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-white link-primary no-underline hover:underline"
                  >
                    <RiLinkedinLine />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 pb-8 bg-black dark:bg-gray-700 md:flex md:items-center md:justify-around">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023{" "}
              <a href="https://flowbite.com/">
                Copyright Rimel 2022. All right reserved
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
