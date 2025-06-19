import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import perfumeria1 from "../../assets/perfumeria1.png"
import perfume1 from "../../assets/videos/perfume1.mp4"
import perfumeria2 from "../../assets/perfumeria2.png"
import "../../styles/carrouselMaquillaje.css"
const CarrouselPerfumeria = () => {
  return (
    <div>
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={perfumeria1}
            alt="First slide"
          />

          
            <Carousel.Caption>
              <h3>perfumeria</h3>
            </Carousel.Caption>
          
        </Carousel.Item>


        <Carousel.Item className="carousel-item">
          <video
            src={perfume1}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto" }}
          />
          
            <Carousel.Caption>
              <h3>¡lanzamiento! Kaiak Pulso</h3>
              <p>
                sentí el poder de la frescura que impacta fusionando hierbas y especias
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={perfumeria2}
            alt="First slide"
          />

          
            <Carousel.Caption>
              <h3>perfumería Natura</h3>
              <p>
                encontrá tu nueva fragancia favorita
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarrouselPerfumeria
