import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import Header from "./Header/Header"
import Banner from './Banner/Banner'
import Offer from './Offer/Offer'
import Product from './Product/Product'
import Swiper from './Offer-Banner/Swiper'
import Deal from './Deal/Deal'
import Review from './Review/Review'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
        <Header />
        <Banner />
        <Offer />
        <Product />
        <Swiper />
        <Deal />
        <Review />
        <Blog />
        <Footer />
    </>
  )
}

export default App
