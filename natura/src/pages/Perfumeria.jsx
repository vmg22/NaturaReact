import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CategoriaGeneral from "../components/CategoriaGeneral";
import Footer from "../components/Footer";
import CarrouselPerfumeria from "../components/carrousel/CarrouselPerfumeria";

const Perfumeria = () => {
  let categoria = "perfumeria";
  return (
    <div>
      <Header />
      <CarrouselPerfumeria/>
      <CategoriaGeneral categoria={categoria} />
      <div className="d-flex justify-content-center">
        <div>
          <Link to="/p-fem">
            <button className="btn btn-light mx-2">femenina</button>
          </Link>
        </div>
        <div>
          <Link to="/p-infantil">
            <button className="btn btn-light mx-2">infantil</button>
          </Link>
        </div>
        <div>
          <Link to="/p-hombre">
            <button className="btn btn-light mx-2">masculina</button>
          </Link>
        </div>
        <div>
          <Link to="/p-unisex">
            <button className="btn btn-light mx-2">unisex</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Perfumeria;
