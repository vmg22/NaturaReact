import React from 'react'
import CarrouselCard1 from '../components/carrousel/CarrouselCard1'
import { Link } from 'react-router-dom'
import '../styles/Perfumeria.css'


const Perfumeria = () => {

  const datos = 
  {
    titulo: "perfumeria",
    descripcion: "¡nuestra manera única de crear fragancias combina arte, ciencia, naturaleza y tecnología para que tengas una experiencia inolvidable!",
    subCategoria: " Que fragancias estas buscando? "
    
  }

  return (
    <div>
        <div className='Contenido-perfumeria'>
        <h1>{datos.titulo}</h1>
        <p>{datos.descripcion}</p>
        <h2>{datos.subCategoria} </h2>
        <div className='lista-botones-perfumeria'>
          <button className='Botonescategoriasperfumeria'><Link to="/perfumeriainfantil">Infantil</Link></button>
          <button className='Botonescategoriasperfumeria'><Link to="/perfumeriafemenina">Femenina</Link></button>
          <button className='Botonescategoriasperfumeria'><Link to="/perfumeriamasculina">Masculina</Link></button>
        </div>
        </div>

    </div>
  )
}

export default Perfumeria
