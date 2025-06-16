import React from 'react'
import CategoriaGeneral from '../components/CategoriaGeneral'
import Header from "../components/Header"
import Footer from "../components/Footer"
const Maquillaje = () => {
    let categoria = "maquillaje"
  return (
    <div>
      <Header/>
      <CategoriaGeneral categoria={categoria} />
      <Footer/>
    </div>
  )
}

export default Maquillaje
