import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CategoriaGeneral from "../components/CategoriaGeneral";
import Footer from "../components/Footer";
import CarrouselPerfumeria from "../components/carrousel/CarrouselPerfumeria";
import "../styles/Perfumeria.css"; 

const Perfumeria = () => {
  let categoria = "perfumeria";

  return (
    <div>
      <Header />
      <CarrouselPerfumeria />
      <CategoriaGeneral categoria={categoria} />

      <div className="tipos-perfume-container">
        <Link to="/p-fem" className="tipo-perfume-btn">
          <img
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dw77063608/NE%20Perfumeria/Perfumaria%20Feminina.png"
            alt="Femenina"
            className="icono-img"
          />
          <span>femenina</span>
        </Link>
        <Link to="/p-infantil" className="tipo-perfume-btn">
          <img
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw0f683430/icon/categorias%20busqueda/outlined-product-childish.png"
            alt="Infantil"
            className="icono-img"
          />
          <span>infantil</span>
        </Link>
        <Link to="/p-hombre" className="tipo-perfume-btn">
          <img
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dw9bb15a33/NE%20Perfumeria/Perfumaria%20Masculina.png"
            alt="Masculina"
            className="icono-img"
          />
          <span>masculina</span>
        </Link>
        <Link to="/p-unisex" className="tipo-perfume-btn">
          <img
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatArgentina-Library/default/dw2034851b/NE%20Perfumeria/Perfumaria%20para%20todos.png"
            alt="Unisex"
            className="icono-img"
          />
          <span>unisex</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Perfumeria;
