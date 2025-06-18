import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "../../styles/carrouselMaquillaje.css"
import cuidados from "../../assets/videos/cuidados.mp4"
import cuidados1 from "../../assets/cuidados1.png"
import cuidados2 from "../../assets/cuidados2.png"
const CarrouselCuidadosDiarios = () => {
  return (
    <div>
      <Carousel>

        <Carousel.Item className="carousel-item">
          <video
            src={cuidados}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto" }}
          />
          
            <Carousel.Caption>
              <h3>Tododia cereza y avellana</h3>
              <p>
                una experiencia sensorial intensa de hidratación perfumada              
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={cuidados1}
            alt="First slide"
          />
            <Carousel.Caption>
              <h3>descubrí este relanzamiento</h3>
              <p>
                fragancia frutal dulce con cereza, avellana y vainilla. atractiva, envolvente y llena de bienestar             
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={cuidados2}
            alt="First slide"
          />
          
            <Carousel.Caption>
              <h3>cuidados diarios</h3>
            </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarrouselCuidadosDiarios
