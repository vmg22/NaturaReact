import React from "react";
import Carousel from "react-bootstrap/Carousel";
import VideoMaquillaje1 from "../../assets/videos/maquillajeGeneralCarrousel1.mp4";
import imgCarrouselMaquillaje from "../../assets/imgCarrouselMaquillaje.png";
import "../../styles/carrouselMaquillaje.css";
import maquillaje3 from "../../assets/maquillaje3.png";

const CarrouselMaquillaje = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="carousel-item">
          <video
            src={VideoMaquillaje1}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto" }}
          />
          
            <Carousel.Caption>
              <h3>maquillaje Una Natura</h3>
              <p>
                colores intensos para vivir tu belleza en tu mejor época.
                descubrí la nueva colección Libre, edición limitada
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={imgCarrouselMaquillaje}
            alt="First slide"
          />

          
            <Carousel.Caption>
              <h3>#ColecciónLibre, edición limitada</h3>
              <p>
                creá tus mejores looks con colores intensos. maquillaje de larga
                duración, alta pigmentación y tratamiento de skincare
              </p>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "auto" }}
            src={maquillaje3}
            alt="First slide"
          />

          
            <Carousel.Caption>
              <h3>maquillaje</h3>
            </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarrouselMaquillaje;
