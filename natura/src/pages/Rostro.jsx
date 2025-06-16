import React from 'react'
import Header from '../components/Header'
import CategoriaGeneral from '../components/CategoriaGeneral'
import Footer from '../components/Footer'

const Rostro = () => {
    let categoria = "rostro"
  return (
    <div>
      <Header/>
      <CategoriaGeneral categoria={categoria}/>
      <Footer/>
    </div>
  )
}

export default Rostro
