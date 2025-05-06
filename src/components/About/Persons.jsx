import React from 'react'
import Slider from 'react-slick'
import persons from './Data';
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
const Persons = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className='container mx-auto'>
      <div className=''>
        <Slider {...settings}>
          {persons.map((person) => (
            <div key={person.id} className='flex flex-col p-4 rounded-xl text-black'>
              <div className=' place-self-center bg-neutral-100 px-8 pt-12 rounded-xl'><img src={person.img} alt='' className='h-[450px] w-96'/></div>
              <div className='place-self-start text-3xl font-semibold mt-4'>{person.name}</div>
              <div className='place-self-start text-sm mt-2'>{person.job}</div>
              <div className='icons flex gap-2 mt-3 text-xl '>
              <CiTwitter />
              <CiInstagram />
              <RiLinkedinLine />
              </div>
            </div>
          ))}

        </Slider>
      </div>
    </div>
  )
}

export default Persons





{/* {data.map((data) => (
            <div key={DataTransfer.name}>
              <div><img src={data.img} alt="" /></div>
              <div>{data.name}</div>
              <div>{data.title}</div>
            </div>
           ))} */}