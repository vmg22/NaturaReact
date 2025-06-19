import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "../../styles/carrouselMaquillaje.css"
import infantil from "../../assets/infantil.png"
import infantil2 from "../../assets/infantil2.png"
import infantil3 from "../../assets/infantil3.png"

const CarrouselInfantil = () => {
  return (
    <div>
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={infantil}
            alt="First slide"
          />
            <Carousel.Caption>
              <h3>¡lanzamiento! Natura Naturé</h3>
              <p>
                productos de cuidado infantil para la piel y el cabello que fortalecen la microbiota             
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={infantil2}
            alt="First slide"
          />
            <Carousel.Caption>
              <h3>¡lanzamiento! Natura Naturé</h3>
              <p>
                ¿y si te cuidaras jugando?             
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={infantil3}
            alt="First slide"
          />
            <Carousel.Caption>
              <h3>infantil</h3>
            </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarrouselInfantil
