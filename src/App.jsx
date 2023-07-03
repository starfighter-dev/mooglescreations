import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import InstagramRoll from './components/InstagramRoll'
import ProductCollection from './components/ProductCollection'
import InfoBar from './components/InfoBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <InstagramRoll />
      <Footer/>

      <div className="btn-back-to-top bg0-hov" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="fa fa-angle-double-up" aria-hidden="true"></i>
        </span>
      </div>

      <div id="dropDownSelect1"></div>

    </>
  )
}

export default App