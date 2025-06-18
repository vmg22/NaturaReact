import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "../../styles/carrouselMaquillaje.css"
import rostro from "../../assets/videos/rostro.mp4"
import rostro1 from "../../assets/rostro1.png"
import rostro2 from "../../assets/videos/rostro2.mp4"

const CarrouselRostro = () => {
  return (
    <div>
      <Carousel>

        <Carousel.Item className="carousel-item">
          <video
            src={rostro}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto" }}
          />
          
            <Carousel.Caption>
              <h3>¡lanzamiento! Chronos Derma</h3>
              <p>
                sérum intensivo multiaclarador de manchas. +75% menos de hiper-pigmentación              
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={rostro1}
            alt="First slide"
          />

          
            <Carousel.Caption>
              <h3>Chronos Derma</h3>
              <p>
                ¿qué necesita tu piel? ¡armá tu rutina perfecta!              
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <video
            src={rostro2}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto" }}
          />
          
            <Carousel.Caption>
              <h3>innovacion dermocosmética</h3>
              <p>
                nuevo Super Sérum Reductor de Arrugas              
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        

        

      </Carousel>
    </div>
  )
}

export default CarrouselRostro
