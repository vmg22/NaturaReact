import React from 'react'
import CategoriaGeneral from '../components/CategoriaGeneral'
import Header from "../components/Header"
import Footer from "../components/Footer"
import CarrouselCabello from '../components/carrousel/CarrouselCabello'
const Cabello = () => {
    let categoria = "cabello"
  return (
    <div>
      <Header/>
      <CarrouselCabello/>
      <CategoriaGeneral categoria={categoria} />
      <Footer/>
    </div>
  )
}

export default Cabello
