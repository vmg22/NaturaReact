import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "../../styles/carrouselMaquillaje.css"
import cabello from "../../assets/videos/cabello.mp4"
import cabello2 from "../../assets/videos/cabello2.mp4"
import cabello1 from "../../assets/cabello1.png"
const CarrouselCabello = () => {
  return (
    <div>
      <Carousel>

        <Carousel.Item className="carousel-item">
          <video
            src={cabello}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto" }}
          />
          
            <Carousel.Caption>
              <h3>Lumina fuerza y reparación molecular</h3>
              <p>
                ¡proximamente! fuerza y reparación molecular para cabellos frágiles y quebradizos             
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={cabello1}
            alt="First slide"
          />
            <Carousel.Caption>
              <h3>la respuesta es Lumina</h3>
              <p>
                sistemas de tratamiento para el cabello con fórmulas potentes y resultados desde la primera aplicación             
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <video
            src={cabello2}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto" }}
          />
          
            <Carousel.Caption>
              <h3>cabello</h3>
            </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarrouselCabello
