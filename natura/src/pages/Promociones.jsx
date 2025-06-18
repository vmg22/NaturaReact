import React from 'react'
import { Link } from 'react-router-dom'
import CategoriaGeneral from '../components/CategoriaGeneral'
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Promociones.css" 

const Promociones = () => {
  let categoria = "promociones"

  return (
    <div>
      <Header />
      <CategoriaGeneral categoria={categoria} />

      <div className="tipos-promocion-container">
        <Link to="/pro-descuentos" className="tipo-promocion-btn">
          <img
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dw382f0915/NE%20Home/Promoc%CC%A7o%CC%83es.png"
            alt="Descuentos"
            className="icono-img-promociones"
          />
          <span>Descuentos</span>
        </Link>
        <Link to="/pro-kits-natura" className="tipo-promocion-btn">
          <img
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dw382f0915/NE%20Home/Promoc%CC%A7o%CC%83es.png"
            alt="Kits Natura"
            className="icono-img-promociones"
          />
          <span>Kits Natura</span>
        </Link>
        <Link to="/pro-primera-compra" className="tipo-promocion-btn">
          <img
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dwe5a8c7ac/NE%20Home/Presentes.png"
            alt="Primera compra"
            className="icono-img-promociones"
          />
          <span>Primera compra</span>
        </Link>
        <Link to="/pro-lanzamientos" className="tipo-promocion-btn">
          <img
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dw382f0915/NE%20Home/Promoc%CC%A7o%CC%83es.png"
            alt="Lanzamientos"
            className="icono-img-promociones"
          />
          <span>Lanzamientos</span>
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default Promociones
