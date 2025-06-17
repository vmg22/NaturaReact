import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import CategoriaGeneral from '../components/CategoriaGeneral'
import Footer from '../components/Footer'

const Rostro = () => {
    let categoria = "rostro"
  return (
    <div>
      <Header/>
      <CategoriaGeneral categoria={categoria}/>
      <div className="d-flex justify-content-center">
        <div>
          <Link to="/r-piel-oleosa">
            <button className="btn btn-light mx-2">piel oleosa</button>
          </Link>
        </div>
        <div>
          <Link to="/r-piel-seca">
            <button className="btn btn-light mx-2">piel seca</button>
          </Link>
        </div>
        <div>
          <Link to="/r-piel-mixta">
            <button className="btn btn-light mx-2">piel mixta</button>
          </Link>
        </div>
        <div>
          <Link to="/r-todo-tipo-piel">
            <button className="btn btn-light mx-2">todo tipo de piel</button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Rostro
