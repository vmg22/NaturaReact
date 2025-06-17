import React from 'react'
import CategoriaGeneral from '../components/CategoriaGeneral'
import Header from "../components/Header"
import Footer from "../components/Footer"
const Cabello = () => {
    let categoria = "cabello"
  return (
    <div>
      <Header/>
      <CategoriaGeneral categoria={categoria} />
      <Footer/>
    </div>
  )
}

export default Cabello
