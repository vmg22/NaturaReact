import React from "react";
import icono from "../img/icono.png";
import './styles/navLight.css';
import { Link } from 'react-router-dom';
const NavLight = () => {
  return (
    <div>
      <section>
        <div className="icono">
          <img
            src={icono}
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
        </div>

        <div className="barra-de-busqueda">
          <input type="text" placeholder="que buscas hoy?" />
          <button>lupa</button>
        </div>
        <div className="iconos-de-navegacion">
          <ul>
            <li>
              <button>favorito</button>
            </li>
            <li>
              <button>ingresar</button>
            </li>
            <li>
              <button>carrito</button>
            </li>
          </ul>
        </div>
      </section>

      <section className="menu-horizontal">
      <ul>
        <li><Link to="/click-sale">Click Sale</Link></li>

        <li>
          <Link to="/promociones">Promociones</Link>
          <ul className="submenu">
            <li><Link to="/promociones/descuento">Descuento</Link></li>
            <li><Link to="/promociones/kit-natura">Kit Natura</Link></li>
            <li><Link to="/promociones/lanzamiento">Lanzamiento</Link></li>
          </ul>
        </li>

        <li><Link to="/perfumeria">Perfumería</Link></li>
        <li><Link to="/maquillaje">Maquillaje</Link></li>
        <li><Link to="/rostro">Rostro</Link></li>
        <li><Link to="/cuidado-diario">Cuidado Diario</Link></li>
        <li><Link to="/regalo">Regalo</Link></li>
        <li><Link to="/cabello">Cabello</Link></li>
        <li><Link to="/hombre">Hombre</Link></li>
        <li><Link to="/infantil">Infantil</Link></li>
        <li><Link to="/marca">Marca</Link></li>
        <li><Link to="/repuesto">Repuesto</Link></li>
      </ul>
    </section>
    </div>
  );
};

export default NavLight;
