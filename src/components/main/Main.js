import React from 'react'
import Navbar from '../navbar/Navbar'
import Slider from '../slider/Slider'
import NavigateButton from '../NavigateButton/NavigateButton'
import ProductSection from '../Products/ProductSection'
import Footer from '../footer/Footer'

function Main() {
  return (
    <div>
        <Navbar />
        <Slider />
        <NavigateButton />
        <ProductSection />
        <Footer />
    </div>
  )
}

export default Main