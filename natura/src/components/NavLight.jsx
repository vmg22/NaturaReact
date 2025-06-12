import React from "react";
import { Link } from "react-router-dom";
import logoNegro from "../assets/logo-natura-negro.png";
import "./styles/navLight.css";
import Form from 'react-bootstrap/Form';
const NavLight = () => {
  return (
    <div>
      <section className="primerDiv">
        <div className="icono">
          <img
            src={logoNegro}
            alt="Logo"
            className="imgLogoNatura"
          />
        </div>

        <div className="">
          <Form.Control type="text" placeholder="¿qué buscás hoy?" className=""/>
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
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
                <Link to="/para el rostro/primer facial ">primer facial</Link>
                <Link to="/para el rostro/base ">base</Link>
                <Link to="/para el rostro/ corrector">corrector</Link>
                <Link to="/para el rostro/rubor ">rubor</Link>
                <Link to="/para el rostro/iluminador ">iluminador</Link>
                <Link to="/para el rostro/ polvo compacto">polvo compacto</Link>
                <Link to="/para el rostro/bruma fijadora ">bruma fijadora</Link>
              </div>
              <div className="column">
                <strong>para los ojos</strong>
                <Link to="/para los ojos/sombra ">sombra </Link>
                <Link to="/para los ojos/delineador "> delineador</Link>
                <Link to="/para los ojos/lapiz ">lapiz </Link>
                <Link to="/para los ojos/mascara para pestanas ">
                  mascara para pestanas{" "}
                </Link>
                <Link to="/para los ojos/cejas ">cejas </Link>
              </div>
              <div className="column">
                <strong>para labios</strong>
                <Link to="/para labios/labial">labial</Link>
                <Link to="/para labios/lapiz">lapiz</Link>
                <Link to="/para labios/gloss">gloss</Link>
              </div>
              <div className="column">
                <strong>para uñas</strong>
                <Link to="/para uñas/base de uñas">base de uñas</Link>
                <Link to="/para uñas/esmalte">esmalte</Link>
                <Link to="/para uñas/top coat">top coat</Link>
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
                <Link to="/para el rostro/primer facial ">primer facial</Link>
                <Link to="/para el rostro/base ">base</Link>
                <Link to="/para el rostro/ corrector">corrector</Link>
                <Link to="/para el rostro/rubor ">rubor</Link>
                <Link to="/para el rostro/iluminador ">iluminador</Link>
                <Link to="/para el rostro/ polvo compacto">polvo compacto</Link>
                <Link to="/para el rostro/bruma fijadora ">bruma fijadora</Link>
              </div>{" "}
            </div>
          </li>
          <li className="has-megamenu">
            <Link to="/cuidado-diario">Cuidado Diario</Link>
            <div className="megamenu">
              <div className="column">
                <strong> jabon</strong>
                <Link to="/jabon/jabon en barra">jabon en barra</Link>
                <Link to="/jabon/jabon liquido">jabon liquido</Link>
              </div>
              <div className="column">
                <strong>jabon exfoliante </strong>
              </div>
              <div className="column">
                <strong> aceite corporal</strong>
              </div>
              <div className="column">
                <strong>hidratante </strong>
                <Link to="/hidratante/para el cuerpo">para el cuerpo</Link>
                <Link to="/hidratante/para manos y pie">para manos y pie</Link>
              </div>
              <div className="column">
                <strong> desodorante</strong>
                <Link to="/desodorante/desodorante en spray">
                  desodorante en spray
                </Link>
                <Link to="/desodorante/ desodorante roll on">
                  {" "}
                  desodorante roll on
                </Link>
                <Link to="/desodorante/desodorante en crema">
                  desodorante en crema
                </Link>
              </div>
              <div className="column">
                <strong> protector solar</strong>
              </div>
            </div>
          </li>














          <li className="megamenu">
            <Link to="/regalo">Regalo</Link>
            <div className="megamenu">
              <div className="column">
                <strong>precio</strong>
                <Link to="/precio/hasta $15.000">hasta $15.000</Link>
                <Link to="/precio/de $15.000 hasta $30.000">de $15.000 hasta $30.000</Link>
                <Link to="/precio/de $30.000 hasta $45.000">de $30.000 hasta $45.000</Link>
                <Link to="/precio/a partir de $45.000">a partir de $45.000</Link>
              </div>
              <div className="column">
                <strong>para quien </strong>
                <Link to="/para quien/regalos para todos">regalos para todos</Link>
                <Link to="/para quien/regalo para hombre">regalo para hombre</Link>
                <Link to="/para quien/regalo para mujer">regalo para mujer</Link>
                <Link to="/para quien/regalo para niños">regalo para niños</Link>
              </div>
              <div className="column">
                <strong>arma tu regalo</strong>

              </div>
            </div>
          </li>















          <li className="megamenu">
            <Link to="/cabello">Cabello</Link>
            <div className="megamenu">
              <div className="column">
                <strong>descubri tu tipo de cabello</strong>
              </div>
              <div className="column">
                <strong>tipo de cabello</strong>
                <Link to="/tipo de cabello/cabello dañado">cabello dañado</Link>
                <Link to="/tipo de cabello/cabello rizado">cabello rizado</Link>
              </div>
              <div className="column">
                <strong>producto</strong>
                <Link to="/productos/shampoo y acondicionador">shampoo y acondicionador</Link>
                <Link to="/productos/máscara de hidratación">máscara de hidratación</Link>
                <Link to="/productos/finalizador">finalizador</Link>
              </div>
              <div className="column">
                <strong>tratamiento</strong>
                <Link to="/tratamiento/reconstrucción capilar">reconstrucción capilar</Link>
                <Link to="/tratamiento/nutrición capilar">nutrición capilar</Link>
                <Link to="/tratamiento/anticaída">anticaída</Link>
                <Link to="/tratamiento/protector de color">protector de color</Link>
                <Link to="/tratamiento/antioleosidad">antioleosidad</Link>
                <Link to="/tratamiento/matizador">matizador</Link>
                <Link to="/tratamiento/tratamiento anticaspa">tratamiento anticaspa</Link>
              </div>
            </div>
          </li>









          <li className="megamenu">
            <Link to="/hombre">Hombre</Link>
            <div className="megamenu">
              <div className="column">
                <strong>barba</strong>
              </div>
              <div className="column">
                <strong>cuidado diario</strong>
                <Link to="/cuidado diario/jabón">jabón</Link>
                <Link to="/cuidado diario/desodorante">desodorante</Link>
                <Link to="/cuidado diario/hidratantes corporales">hidratantes corporales</Link>
              </div>
              <div className="column">
                <strong>cabello</strong>
                <Link to="/cabello/shampoo">shampoo</Link>
                <Link to="/cabello/finalizador capilar">finalizador capilar</Link>
              </div>
              <div className="column">
                <strong>rostro</strong>
              </div>
            </div>
          </li>






          <li className="megamenu">
            <Link to="/infantil">Infantil</Link>
            <div className="megamenu">
              <div className="column">
                <strong>cuerpo y baño infantil</strong>
                <Link to="/cuerpo y ba;o infantil/jabón infantil">jabón infantil</Link>
                <Link to="/cuerpo y ba;o infantil/hidratante infantil">hidratante infantil</Link>
                <Link to="/cuerpo y ba;o infantil/toallitas húmedas">toallitas húmedas</Link>
              </div>
              <div className="column">
                <strong>cabello infantil</strong>
              </div>
            </div>
          </li>

          <li className="megamenu">
            <Link to="/marca">Marca</Link>
            <div className="megamenu">
              <div className="column">
                <strong>biome</strong>
              </div>
              <div className="column">
                <strong>chronos derma</strong>
              </div>
              <div className="column">
                <strong>creer para ver</strong>
              </div>
              <div className="column">
                <strong>ekos</strong>
              </div>
              <div className="column">
                <strong>essencial</strong>
              </div>
              <div className="column">
                <strong>kaiak</strong>
              </div>
              <div className="column">
                <strong>lumina</strong>
              </div>
              <div className="column">
                <strong>luna</strong>
              </div>
              <div className="column">
                <strong>mamá y bebé</strong>
              </div>
              <div className="column">
                <strong>tododia</strong>
              </div>
              <div className="column">
                <strong>una</strong>
              </div>
              <div className="column">
                <strong>faces</strong>
              </div>
              <div className="column">
                <strong>humor</strong>
              </div>
              <div className="column">
                <strong>tododia cabellos</strong>
              </div>
            </div>
          </li>

          <li className="megamenu">
            <Link to="/repuesto">Repuesto</Link>
            <div className="megamenu">
              <div className="column">
                <strong>repuestos</strong>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default NavLight;
