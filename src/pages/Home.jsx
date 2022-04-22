import React from 'react'
import Tobbar from '../componts/tobbar/Tobbar'
import Slider from '../componts/slider/Slider'
import Aboutus from '../componts/aboutus/Aboutus'
import Categories from '../componts/categories/Categories'
import Productinfo from '../componts/productinfo/Productinfo'
import Footer from '../componts/footer/Footer'


const Home = () => {
  return (
    <div>
        <Tobbar />
        <Slider />
        <Aboutus />
        <Categories />
        <Productinfo />
        <Footer />
    </div>
  )
}

export default Home