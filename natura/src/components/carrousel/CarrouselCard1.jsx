import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner_3_DESK from "../../assets/ARTICULOS-IMG/Banner_3_DESK.jpg";
import EKOSACAI1_Banner_2_Desk_1920x832_THUMB from "../../assets/ARTICULOS-IMG/EKOSACAI1_Banner_2_Desk_1920x832_THUMB.jpg";
import "../../styles/carrouseleCard1.css";

const CarrouselCard1 = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner_3_DESK} alt="First slide" />
          <Carousel.Caption>
            <h3>COMPRA CON 35% OFF POR LA APP!</h3>
            <p>30% OFF a partir de $55.000 si compras por APP, tenes un +5% EXTRA. cupon: MAS30</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={EKOSACAI1_Banner_2_Desk_1920x832_THUMB} alt="Second slide" />
          <Carousel.Caption>
            <h3>REGALO POR COMPRAS MAYORES A $60.000!</h3>
            <p>Con tu compra mayor a $60.000 te llevas un hidratante corporal de regalo!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarrouselCard1;
