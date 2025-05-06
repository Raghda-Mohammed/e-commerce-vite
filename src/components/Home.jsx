import React from 'react'
import Banner from "./Banner"
import FlashSales from './FlashSales'
import Categories from './Categories'
import BestProducts from './BestProducts'
import OurProducts from './OurProducts'
import NewArrival from './NewArrival'



const Home = () => {
  return (
    <div>
        <Banner />
        <FlashSales duration={2 * 24 * 60 * 60 * 1000} />
        <Categories />
        <BestProducts duration={2 * 24 * 60 * 60 * 1000} />
        <OurProducts />
        <NewArrival />
    </div>
  )
}

export default Home