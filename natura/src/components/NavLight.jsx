import React from "react";
import icono from "../img/icono.png";
import "./styles/navLight.css";
import { Link } from "react-router-dom";
const NavLight = () => {
  return (
    <div>
      <section className="menu-horizontal">
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
          <li>
            <Link to="/click-sale">Click Sale</Link>
          </li>

          <li className="has-megamenu">
            <Link to="/promociones">Promociones</Link>
            <div className="megamenu">
              <div className="column">
                <strong>Descuentos</strong>
                <Link to="/promociones/10-15">10-15%</Link>
                <Link to="/promociones/20-25">20-25%</Link>
                <Link to="/promociones/30-35">30-35%</Link>
                <Link to="/promociones/40plus">40%+</Link>
              </div>
              <div className="column">
                <strong>Kits Natura</strong>
              </div>
              <div className="column">
                <strong>Lanzamientos</strong>
              </div>
            </div>
          </li>

          <li className="has-megamenu">
            <Link to="/perfumeria">perfumeria</Link>
            <div className="megamenu">
              <div className="column">
                <strong>para quien</strong>
                <Link to="/para quien /para todos">para todos</Link>
                <Link to="/para quien /perfumeria femenina">
                  perfumeria femenina
                </Link>
                <Link to="/para quien /perfumeria masculina">
                  perfumeria masculina
                </Link>
                <Link to="/para quien /perfumeria infantil">
                  perfumeria infantil
                </Link>
              </div>
              <div className="column">
                <strong>body splash</strong>
              </div>
              <div className="column">
                <strong>asesor perfumeria</strong>
              </div>
            </div>
          </li>

          <li className="has-megamenu">
            <Link to="/maquillaje">Maquillaje</Link>
            <div className="megamenu">
              <div className="column">
                <strong>descubri tu tono</strong>
              </div>
              <div className="column">
                <strong>para el rostro</strong>
                <Link to="para el rostro/primer facial ">primer facial</Link>
                <Link to="para el rostro/base ">base</Link>
                <Link to="para el rostro/ corrector">corrector</Link>
                <Link to="para el rostro/rubor ">rubor</Link>
                <Link to="para el rostro/iluminador ">iluminador</Link>
                <Link to="para el rostro/ polvo compacto">polvo compacto</Link>
                <Link to="para el rostro/bruma fijadora ">bruma fijadora</Link>
              </div>
              <div className="column">
                <strong>para los ojos</strong>
                <Link to="para los ojos/sombra ">sombra </Link>
                <Link to="para los ojos/delineador "> delineador</Link>
                <Link to="para los ojos/lapiz ">lapiz </Link>
                <Link to="para los ojos/mascara para pestanas ">
                  mascara para pestanas{" "}
                </Link>
                <Link to="para los ojos/cejas ">cejas </Link>
              </div>
              <div className="column">
                <strong>para labios</strong>
                <Link to="para labios/labial">labial</Link>
                <Link to="para labios/lapiz">lapiz</Link>
                <Link to="para labios/gloss">gloss</Link>
              </div>
              <div className="column">
                <strong>para uñas</strong>
                <Link to="para uñas/base de uñas">base de uñas</Link>
                <Link to="para uñas/esmalte">esmalte</Link>
                <Link to="para uñas/top coat">top coat</Link>
              </div>
              <div className="column">
                <strong>pinceles y accesorios</strong>
              </div>
            </div>
          </li>
          <li className="has-megamenu">
            <Link to="/rostro">Rostro</Link>
            <div className="megamenu">
              <div className="column">
                <strong>descubri tu tono</strong>
              </div>
              <div className="column">
                <strong>para el rostro</strong>
                <Link to="para el rostro/primer facial ">primer facial</Link>
                <Link to="para el rostro/base ">base</Link>
                <Link to="para el rostro/ corrector">corrector</Link>
                <Link to="para el rostro/rubor ">rubor</Link>
                <Link to="para el rostro/iluminador ">iluminador</Link>
                <Link to="para el rostro/ polvo compacto">polvo compacto</Link>
                <Link to="para el rostro/bruma fijadora ">bruma fijadora</Link>
              </div> </div>
            
          </li>
          <li>
            <Link to="/cuidado-diario">Cuidado Diario</Link>
          </li>
          <li>
            <Link to="/regalo">Regalo</Link>
          </li>
          <li>
            <Link to="/cabello">Cabello</Link>
          </li>
          <li>
            <Link to="/hombre">Hombre</Link>
          </li>
          <li>
            <Link to="/infantil">Infantil</Link>
          </li>
          <li>
            <Link to="/marca">Marca</Link>
          </li>
          <li>
            <Link to="/repuesto">Repuesto</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default NavLight;
