import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import CategoriaGeneral from '../components/CategoriaGeneral'
import Footer from '../components/Footer'
import '../styles/Rostro.css'

const Rostro = () => {
  let categoria = "rostro"

  return (
    <div>
      <Header />
      <CategoriaGeneral categoria={categoria} />  
      <div className="tipos-piel-container">
        <Link to="/r-piel-oleosa" className="tipo-piel-btn">
          <img src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dwce1a5e1c/NE%20Rostro/Pele%20Oleosa.png" alt="Piel Oleosa" className="icono-img" />
          <span>piel oleosa</span>
        </Link>
        <Link to="/r-piel-seca" className="tipo-piel-btn">
          <img src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dw43d48bf0/NE%20Rostro/Pele%20Seca.png" alt="Piel Seca" className="icono-img" />
          <span>piel seca</span>
        </Link>
        <Link to="/r-piel-mixta" className="tipo-piel-btn">
          <img src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dw5e0cfeee/NE%20Rostro/Pele%20Mista.png" alt="Piel Mixta" className="icono-img" />
          <span>piel mixta</span>
        </Link>
        <Link to="/r-todo-tipo-piel" className="tipo-piel-btn">
          <img src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dw29d76b86/NE%20Rostro/Todos%20os%20tipos.png" alt="Todo Tipo de Piel" className="icono-img" />
          <span>todo tipo de piel</span>
        </Link>
      </div>


      <Footer />
    </div>
  )
}

export default Rostro
