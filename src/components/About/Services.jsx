import React from 'react'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { RiCustomerServiceLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

const Services = () => {
  return (
    <div className='container mx-auto'>
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
  )
}

export default Services