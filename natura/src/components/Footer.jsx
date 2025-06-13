import React from 'react';
// imagenes iconos

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faTiktok,
  faYoutube,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

// imagenes pagos

import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import amex from '../assets/amex.png';
import cabal from '../assets/cabal.png';
import naranja from '../assets/naranja.png';
import diners from '../assets/diners.png';

// imagenes apps
import appstore from '../assets/appstore.png';
import googleplay from '../assets/googleplay.png';

// imagenes certificados empresa
import datafiscal from '../assets/data-fiscal.png';
import Bcorp from '../assets/Bcorp.png';
import crueltyFree from '../assets/CrueltyFree.png';
import uebt from '../assets/uebt-certified.png';

import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>sobre natura</h4>
          <ul>
            <li>bien estar bien</li>
            <li>sustentabilidad</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ayuda</h4>
          <ul>
            <li>encontrá natura</li>
            <li>ayuda y contacto</li>
            <li>defensa de las y los consumidores, para reclamos ingrese aquí</li>
            <li>defensa de las y los consumidores, ingrese aquí</li>
            <li>alertas y retiro de productos</li>
          </ul>
          <button className="footer-button">me arrepentí del pedido</button>
        </div>

        <div className="footer-column">
          <h4>soporte</h4>
          <ul>
            <li>Términos y condiciones</li>
            <li>Políticas de privacidad</li>
            <li>Política de cookies</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-payments">
          <h5>medios de pago</h5>
          <div className="payment-icons">
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
            <img src={diners} alt="Diners" />
            <img src={amex} alt="Amex" />
            <img src={cabal} alt="Cabal" />
            <img src={naranja} alt="Naranja" />
          </div>
        </div>

        <div className="footer-social">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>

      </div>
      <div className="footer-appscertificados">
        <div className='footer-app'>
          <img src={appstore} alt="appstore" />
          <img src={googleplay} alt="googleplay" />
        </div>
        <div className='footer-certificados'>
          <img src={datafiscal} alt="datafiscal" />
          <img src={Bcorp} alt="Bcorp" />
          <img src={crueltyFree} alt="crueltyFree" />
          <img src={uebt} alt="uebt" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
