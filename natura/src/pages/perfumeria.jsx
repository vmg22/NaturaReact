import React from 'react'
import CarrouselCard1 from '../components/carrousel/CarrouselCard1'
import { Link } from 'react-router-dom'
import '../components/styles/Perfumeria.css'


const perfumeria = () => {
  return (
    <div>
        <div className='Contenido-perfumeria'>
        <h1>Perfumeria</h1>
        <p>¡nuestra manera única de crear fragancias combina arte, ciencia, naturaleza y tecnología para que tengas una experiencia inolvidable!</p>
        <h2>Que fragancias estas buscando? </h2>
        <div className='lista-botones-perfumeria'>
          <button className='Botonescategoriasperfumeria'><Link to="/perfumeriainfantil">Infantil</Link></button>
          <button className='Botonescategoriasperfumeria'><Link to="/perfumeriafemenina">Femenina</Link></button>
          <button className='Botonescategoriasperfumeria'><Link to="/perfumeriamasculina">Masculina</Link></button>
        </div>
        </div>

    </div>
  )
}

export default perfumeria
