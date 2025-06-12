import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faTiktok,
  faYoutube,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import './styles/footer.css';



const Footer = () => {
  return (

    <div className='footer'>
      <section className='1footer'>
        <div>
          <h4> Sobre Natura</h4>
          <ul>
            <li href="#">Bien estar bien</li>
            <li href="#">Sustentabilidad</li>
          </ul>
        </div>
        <div>
          <h4>Ayuda</h4>
          <ul>
            <li>Encontra Natura</li>
            <li>Ayuda y Contacto</li>
            <li>Defensa de las y los Consumidores, para reclamos ingrese aquí</li>
            <li>Alertas y Retiro de Productos</li>
            <li><button> Me Arrepenti de mi pedido</button></li>
          </ul>
        </div>
        <div>
          <h1>Soporte</h1>
          <ul>
            <li>Terminos y condiciones</li>
            <li>Politica de Privacidad</li>
            <li>Politica de Cookies</li>
          </ul>
        </div>
      </section>

      <section >
        <div className='footer_pagoss'>
          <h4>Medios de pago </h4>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      <div className="footer_redes">
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
        <FontAwesomeIcon icon={faTiktok} size="2x" />
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </div>
      </section>
    </div>

  )
}

export default Footer
