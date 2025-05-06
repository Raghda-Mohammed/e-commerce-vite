import React from "react";
import { side_image } from "../../assets";

const OurStory = () => {
  return (
    <div>
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="flex">
            <a href="/">Home</a>
            <h6 className="ml-2 mt-1">/</h6>
            <h6 className="ml-2 mt-1">About</h6>
          </div>
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="mb-3">Our Story</h2>
                  <p className=" fs-4  mb-4">
                  Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace
                   with an active presense in Bangladesh. Supported by wide range of tailored
                    marketing, data and service solutions, Exclusive has 10,500 sallers and 300
                     brands and serves 3 millioons customers across the region. 
                  </p>
                  <p className="mb-5">
                  Exclusive has more than 1 Million products to offer, growing at a very fast.
                   Exclusive offers a diverse assotment in categories ranging  from consumer.
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src={side_image}
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
