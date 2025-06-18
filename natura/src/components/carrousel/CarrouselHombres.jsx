import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "../../styles/carrouselMaquillaje.css"
import hombres from "../../assets/hombres.png"

const CarrouselHombres = () => {
  return (
    <div>
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={hombres}
            alt="First slide"
          />
            <Carousel.Caption>
              <h3>hombres</h3>
            </Carousel.Caption>
          
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default CarrouselHombres
