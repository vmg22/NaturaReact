import React from 'react';
import { Link } from "react-router-dom";



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

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>sobre natura</h4>
          <ul>
            <li><Link to="/bien estar bien">bien estar bien</Link></li>
            <li><Link to="/sustentabilidad">sustentabilidad</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ayuda</h4>
          <ul>
            <li><Link to="/encontrá natura">encontrá natura</Link></li>
            <li><Link to="/ayuda">ayuda y contacto</Link></li>
            <li><Link to="/defensa de las y los consumidores, para reclamos ingrese aquí">defensa de las y los consumidores, para reclamos ingrese aquí</Link></li>
            <li><Link to="/defensa de las y los consumidores, ingrese aquí">defensa de las y los consumidores, ingrese aquí</Link></li>
            <li><Link to="/alertas y retiro de productos">alertas y retiro de productos</Link></li>
          </ul>
          <button className="footer-button-footer">me arrepentí del pedido</button>
        </div>

        <div className="footer-column">
          <h4>soporte</h4>
          <ul>
            <li><Link to="/Términos y condiciones">Términos y condiciones</Link></li>
            <li><Link to="/Políticas de privacidad">Políticas de privacidad</Link></li>
            <li><Link to="/Política de cookies">Política de cookies</Link></li>
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

          <a
            href="https://www.facebook.com/Natura.Argentina/?locale=es_LA/"
            target="_blank"
            rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faFacebookF} /></a>

          <a
            href="https://www.instagram.com/natura.argentina"
            target="_blank"
            rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faInstagram} /></a>

          <a
            href="https://x.com/naturaargentina?lang=es"
            target="_blank"
            rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faXTwitter} /></a>

          <a
            href="https://www.tiktok.com/@natura.argentina?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faTiktok} /></a>

          <a
            href="https://www.youtube.com/user/naturaarg"
            target="_blank"
            rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faYoutube} /></a>

          <a
            href="https://www.linkedin.com/company/natura"
            target="_blank"
            rel="noopener noreferrer"
          ><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>

      </div>
      <div className="footer-appscertificados">
        <div className='footer-app'>
          <a
            href="https://itunes.apple.com/app/apple-store/id1061637276?pt=1379476&ct=rede_natura_mobile_botao_appstore&mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appstore} alt="appstore" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=net.natura.semprepresente&referrer=utm_source%3Drede_natura_mobile%26utm_medium%3Dbotao_google_play"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={googleplay} alt="googleplay" />
          </a>
        </div>
        <div className='footer-certificados'>
          <a href="https://servicioscf.afip.gob.ar/publico/denuncias/denunciaCD.aspx">
            <img src={datafiscal} alt="datafiscal" />
          </a>
            <img src={Bcorp} alt="Bcorp" />
            <img src={crueltyFree} alt="crueltyFree" />
            <img src={uebt} alt="uebt" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
