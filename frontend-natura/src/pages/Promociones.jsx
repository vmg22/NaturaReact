import React from 'react'
import { Link } from 'react-router-dom'
import CategoriaGeneral from '../components/CategoriaGeneral'
import Header from "../components/Header"
import Footer from "../components/Footer"
const Promociones = () => {
    let categoria = "promociones"
  return (
    <div>
      <Header/>
      <CategoriaGeneral categoria={categoria} />
      <div className="d-flex justify-content-center">
        <div>
          <Link to="/pro-descuentos">
            <button className="btn btn-light mx-2">Descuentos</button>
          </Link>
        </div>
        <div>
          <Link to="/pro-kits-natura">
            <button className="btn btn-light mx-2">Kits Natura</button>
          </Link>
        </div>
        <div>
          <Link to="/pro-primera-compra">
            <button className="btn btn-light mx-2">Primera compra</button>
          </Link>
        </div>
        <div>
          <Link to="/pro-lanzamientos">
            <button className="btn btn-light mx-2">Lanzamientos</button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Promociones

