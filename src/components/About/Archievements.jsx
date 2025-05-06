import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { TfiBag } from "react-icons/tfi";

const Archievements = () => {
  return (
    <div className="container">
      <section className="py-3 py-md-5">
        <div>
          <div className="block gap-2 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4">
            <div className=" text-center mb-4">
              <div className="border-solid rounded w-full h-56 place-items-center ps-6 md:ps-8 py-6 md:py-8 border-2 border-slate-500	block hover:bg-red-400">
                <div className="border-8 rounded-full bg-black border-neutral-400 p-2"><AiOutlineHome className="text-4xl text-white"/></div>
                <h3 className="text-2xl font-bold mb-2 mt-2">10.5k</h3>
                <h6 className="text-lg">Sollers active our site</h6>
              </div>
            </div>

            <div className=" text-center mb-4">
              <div className="border-solid rounded w-full h-56 place-items-center ps-6 md:ps-8 py-6 md:py-8 border-2 border-slate-500 block bg-red-400 hover:bg-red-400 hover:border-none">
                <div className="border-8 rounded-full bg-white border-red-200 p-2"><CiDollar className="text-4xl" /></div>
                <h3 className="text-2xl font-bold mb-2 mt-2">33k</h3>
                <h6 className="text-lg">Mopnthly Product Sale</h6>
              </div>
            </div>

            <div className=" text-center mb-4">
              <div className=" border-solid rounded w-full h-56 place-items-center ps-6 md:ps-8 py-6 md:py-8 border-2 border-slate-500	block hover:bg-red-400">
                <div className="border-8 rounded-full bg-black border-neutral-400 p-2.5"><TfiBag className="text-3xl text-white" /></div>
                <h3 className="text-2xl font-bold mb-2 mt-2">45.5k</h3>
                <h6 className="text-lg">Customer active in our site</h6>
              </div>
            </div>
            <div className=" text-center mb-4">
              <div className=" border-solid rounded w-full h-56 place-items-center ps-6 md:ps-8 py-6 md:py-8 border-2 border-slate-500 block hover:bg-red-400">
              <div className="border-8 rounded-full bg-black border-neutral-400 p-2.5"><FaSackDollar className="text-4xl text-white" /></div>
                <h3 className="text-2xl font-bold mb-2 mt-2">25k</h3>
                <h6 className="text-lg">Anual gross sale in our site</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Archievements;
