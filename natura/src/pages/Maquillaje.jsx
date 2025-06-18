import React from 'react'
import CategoriaGeneral from '../components/CategoriaGeneral'
import Header from "../components/Header"
import Footer from "../components/Footer"
import CarrouselMaquillaje from '../components/carrousel/CarrouselMaquillaje'
const Maquillaje = () => {
    let categoria = "maquillaje"
  return (
    <div>
      <Header/>
      <CarrouselMaquillaje/>
      <CategoriaGeneral categoria={categoria} />
      <Footer/>
    </div>
  )
}

export default Maquillaje
