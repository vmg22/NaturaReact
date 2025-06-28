import React from "react";
import { Link, useNavigate} from "react-router-dom";
import logoNegro from "../assets/logo-natura-negro.png";
import "../styles/navLight.css";
import Navbar from "react-bootstrap/Navbar";
import useCarritoStore from "../store/useCarritoStore"; 
import UsuarioStore from "../store/UsuarioStore"; 

const NavLight = () => {
  const { carrito } = useCarritoStore();
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const usuario = UsuarioStore((state) => state.usuario);
  const cerrarSesion = UsuarioStore((state) => state.cerrarSesion);
  const navigate = useNavigate();

  const handleLogout = () => {
    cerrarSesion();
    navigate("/"); // Redireccionar a inicio al cerrar sesión
  };

  return (
    <div style={{ paddingTop: "20px" }} className="divNavLightGeneral">
      <section className="primerDiv">
        {/* Logo */}
        <div className="icono">
          <Link to={"/"}>
            <img src={logoNegro} alt="Logo" className="imgLogoNatura" />
          </Link>
        </div>

        {/* Buscador */}
        <div className="d-flex justify-content-center align-items-center inputBusqueda">
          <div>
            <input
              type="text"
              placeholder="¿qué buscás hoy?"
              className="inputBuscar"
            />
          </div>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            className="btnBuscar"
          >
            <div className="btnSearch">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </button>
        </div>

       
        <div className="iconosNavegacion">
         
          <div>
            {usuario ? (
              <div className="btnIconosNavegacion">
                <i className="fa-solid fa-user"></i>{" "}
                Hola, {usuario.nombre?.split(" ")[0]}
                <button
                  onClick={handleLogout}
                  style={{
                    marginLeft: "10px",
                    background: "none",
                    border: "none",
                    color: "#f48646",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "0.9rem"
                  }}
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <Link to="/Login" className="btnIconosNavegacion">
                <i className="fa-solid fa-user"></i> ingresar
              </Link>
            )}
          </div>

          {/* 🛒 Carrito */}
          <div>
            <Link to="/Carrito" className="btnIconosNavegacion">
              <i className="fa-solid fa-bag-shopping"></i> {" "}
              {cantidadTotal > 0 && (
                <span style={{ fontWeight: "bold", color: "red" }}>
                  ({cantidadTotal})
                </span>
              )}
            </Link>
          </div>

        </div>
      </section>

      <section className="menu-horizontal mt-4">
        <Navbar >
  
            <ul>
                <li>
                  <Link to="/click-sale">click sale</Link>
                </li>

                <li className="has-megamenu">
                  <Link to="/promociones">promociones</Link>
                  <div className="megamenu">
                    <div className="column">
                      <Link to={"/pro-descuentos"}><strong>Descuentos</strong></Link>
                      <Link to="/promociones/10-15">10-15%</Link>
                      <Link to="/promociones/20-25">20-25%</Link>
                      <Link to="/promociones/30-35">30-35%</Link>
                      <Link to="/promociones/40plus">40%+</Link>
                    </div>
                    <div className="column">
                      <Link to={"/pro-kits-natura"}><strong>Kits Natura</strong></Link>
                    </div>
                    <div className="column">
                      <Link to={"/pro-lanzamientos"}><strong>Lanzamientos</strong></Link>
                    </div>
                  </div>
                </li>

                <li className="has-megamenu">
                  <Link to="/perfumeria">perfumeria</Link>
                  
                  <div className="megamenu">
                    <div className="column">
                      <strong>para quien</strong>
                      <Link to="/p-unisex">para todos</Link>
                      <Link to="/p-fem">
                        perfumeria femenina
                      </Link>
                      <Link to="/p-hombre">
                        perfumeria masculina
                      </Link>
                      <Link to="/p-infantil">
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
                      <Link to="/para-el-rostro/primer-facial ">primer facial</Link>
                      <Link to="/para-el-rostro/base ">base</Link>
                      <Link to="/para-el-rostro/corrector">corrector</Link>
                      <Link to="/para-el-rostro/rubor">rubor</Link>
                      <Link to="/para-el-rostro/iluminador">iluminador</Link>
                      <Link to="/para-el-rostro/polvo-compacto">polvo compacto</Link>
                      <Link to="/para-el-rostro/bruma-fijadora">bruma fijadora</Link>
                    </div>
                    <div className="column">
                      <strong>para los ojos</strong>
                      <Link to="/para-los-ojos/sombra ">sombra </Link>
                      <Link to="/para-los-ojos/delineador "> delineador</Link>
                      <Link to="/para-los-ojos/lapiz ">lapiz </Link>
                      <Link to="/para-los-ojos/mascara-para-pestanas ">
                        mascara para pestanas{" "}
                      </Link>
                      <Link to="/para-los-ojos/cejas ">cejas </Link>
                    </div>
                    <div className="column">
                      <strong>para labios</strong>
                      <Link to="/para-labios/labial">labial</Link>
                      <Link to="/para-labios/lapiz">lapiz</Link>
                      <Link to="/para-labios/gloss">gloss</Link>
                    </div>
                    <div className="column">
                      <strong>para uñas</strong>
                      <Link to="/para-uñas/base-de-uñas">base de uñas</Link>
                      <Link to="/para-uñas/esmalte">esmalte</Link>
                      <Link to="/para-uñas/top-coat">top coat</Link>
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
                      <Link to="/para-el-rostro/primer-facial ">primer facial</Link>
                      <Link to="/para-el-rostro/base ">base</Link>
                      <Link to="/para-el-rostro/corrector">corrector</Link>
                      <Link to="/para-el-rostro/rubor">rubor</Link>
                      <Link to="/para-el-rostro/iluminador">iluminador</Link>
                      <Link to="/para-el-rostro/polvo-compacto">polvo compacto</Link>
                      <Link to="/para-el-rostro/bruma-fijadora">bruma fijadora</Link>
                    </div>{" "}
                  </div>
                </li>
                <li className="has-megamenu">
                  <Link to="/cuidados-diarios">Cuidado Diario</Link>
                  <div className="megamenu">
                    <div className="column">
                      <strong> jabon</strong>
                      <Link to="/jabon/jabon-en-barra">jabon en barra</Link>
                      <Link to="/jabon/jabon-liquido">jabon liquido</Link>
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
                    
                  </div>
                </li>

                <li className="has-megamenu">
                  <Link to="/regalo">Regalo</Link>
                  <div className="megamenu">
                    <div className="column">
                      <strong>precio</strong>
                      <Link to="/precio/hasta $15.000">hasta $15.000</Link>
                      <Link to="/precio/de $15.000 hasta $30.000">
                        de $15.000 hasta $30.000
                      </Link>
                      <Link to="/precio/de $30.000 hasta $45.000">
                        de $30.000 hasta $45.000
                      </Link>
                      <Link to="/precio/a partir de $45.000">
                        a partir de $45.000
                      </Link>
                    </div>
                    <div className="column">
                      <strong>para quien </strong>
                      <Link to="/para-quien/regalos-para-todos">
                        regalos para todos
                      </Link>
                      <Link to="/para-quien/regalo-para-hombre">
                        regalo para hombre
                      </Link>
                      <Link to="/para-quien/regalo-para-mujer">
                        regalo para mujer
                      </Link>
                      <Link to="/para-quien/regalo-para-niños">
                        regalo para niños
                      </Link>
                    </div>
                    <div className="column">
                      <strong>arma tu regalo</strong>
                    </div>
                  </div>
                </li>

                <li className="has-megamenu">
                  <Link to="/cabello">Cabello</Link>
                  <div className="megamenu">
                    <div className="column">
                      <strong>tipo de cabello</strong>
                      <Link to="/tipo-de-cabello/cabello-dañado">cabello dañado</Link>
                      <Link to="/tipo-de-cabello/cabello-rizado">cabello rizado</Link>
                    </div>
                    <div className="column">
                      <strong>producto</strong>
                      <Link to="/productos/shampoo y acondicionador">
                        shampoo y acondicionador
                      </Link>
                      <Link to="/productos/máscara de hidratación">
                        máscara de hidratación
                      </Link>
                      <Link to="/productos/finalizador">finalizador</Link>
                    </div>
                    <div className="column">
                      <strong>tratamiento</strong>
                      <Link to="/tratamiento/reconstrucción capilar">
                        reconstrucción capilar
                      </Link>
                      <Link to="/tratamiento/nutrición capilar">
                        nutrición capilar
                      </Link>
                      <Link to="/tratamiento/anticaída">anticaída</Link>
                      <Link to="/tratamiento/protector de color">
                        protector de color
                      </Link>
                      <Link to="/tratamiento/antioleosidad">antioleosidad</Link>
                      <Link to="/tratamiento/matizador">matizador</Link>
                      <Link to="/tratamiento/tratamiento anticaspa">
                        tratamiento anticaspa
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="has-megamenu">
                  <Link to="/categoria-hombre">Hombres</Link>
                  <div className="megamenu">
                    <div className="column">
                      <strong>barba</strong>
                    </div>
                    <div className="column">
                      <strong>cuidado diario</strong>
                      <Link to="/cuidado-diario/jabón">jabón</Link>
                      <Link to="/cuidado-diario/desodorante">desodorante</Link>
                      <Link to="/cuidado-diario/hidratantes corporales">
                        hidratantes corporales
                      </Link>
                    </div>
                    <div className="column">
                      <strong>cabello</strong>
                      <Link to="/cabello/shampoo">shampoo</Link>
                      <Link to="/cabello/finalizador capilar">
                        finalizador capilar
                      </Link>
                    </div>
                    <div className="column">
                      <strong>rostro</strong>
                    </div>
                  </div>
                </li>

                <li className="has-megamenu">
                  <Link to="/categoria-infantil">Infantil</Link>
                  <div className="megamenu">
                    <div className="column">
                      <strong>cuerpo y baño infantil</strong>
                      <Link to="/cuerpo-y-baño-infantil/jabón infantil">
                        jabón infantil
                      </Link>
                      <Link to="/cuerpo-y-baño-infantil/hidratante infantil">
                        hidratante infantil
                      </Link>
                      <Link to="/cuerpo-y-baño-infantil/toallitas húmedas">
                        toallitas húmedas
                      </Link>
                    </div>
                    <div className="column">
                      <strong>cabello infantil</strong>
                    </div>
                  </div>
                </li>

                
            </ul>
    
        
        </Navbar>
        
      </section>
    </div>
  );
};

export default NavLight;
