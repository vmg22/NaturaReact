import React, { useState } from "react";
import {
  Carousel,
  Card,
  Button,
  Row,
  Col,
  Container,
  Badge,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import useCarritoStore from "../../store/useCarritoStore";
import Banner_3_DESK from "../../assets/ARTICULOS-IMG/Banner_3_DESK.jpg";
import PERFUME12 from "../../assets/ARTICULOS-IMG/PERFUME12.jpg";
import CREMA1 from "../../assets/ARTICULOS-IMG/CREMA1.jpg";
import PERFUME1 from "../../assets/ARTICULOS-IMG/PERFUME1.jpg";
import PERFUME11 from "../../assets/ARTICULOS-IMG/PERFUME11.jpg";
import PERFUME9 from "../../assets/ARTICULOS-IMG/PERFUME9.jpg";
import PERFUME3 from "../../assets/ARTICULOS-IMG/PERFUME3.jpg";
import PERFUME4 from "../../assets/ARTICULOS-IMG/PERFUME4.jpg";

const CardCarousel = () => {
  const agregarAlCarrito = useCarritoStore((state) => state.agregarAlCarrito);
  const [showToast, setShowToast] = useState(false);

  const cardsData = [
    {
      id: 1,
      title: "Kaiak Sonar EDT Femenino 100 ml",
      brand: "Kaiak",
      img: PERFUME12,
      priceOld: 54230,
      priceNew: 37961,
      priceNoTax: 31372.73,
      discount: "-30%",
    },
    {
      id: 2,
      title: "Perfume 2",
      brand: "Kaiak",
      img: PERFUME1,
      priceOld: 45000,
      priceNew: 31500,
      priceNoTax: 26000,
      discount: "-30%",
    },
    {
      id: 3,
      title: "Crema 3",
      brand: "Chronos",
      img: CREMA1,
      priceOld: 30000,
      priceNew: 21000,
      priceNoTax: 18000,
      discount: "-30%",
    },
    {
      id: 4,
      title: "Perfume 4",
      brand: "Kaiak",
      img: PERFUME4,
      priceOld: 60000,
      priceNew: 42000,
      priceNoTax: 37000,
      discount: "-30%",
    },
    {
      id: 5,
      title: "Perfume 5",
      brand: "Kaiak",
      img: PERFUME3,
      priceOld: 48000,
      priceNew: 33600,
      priceNoTax: 28000,
      discount: "-30%",
    },
    {
      id: 6,
      title: "Perfume 6",
      brand: "Kaiak",
      img: PERFUME9,
      priceOld: 52000,
      priceNew: 36400,
      priceNoTax: 29000,
      discount: "-30%",
    },
    {
      id: 7,
      title: "Perfume 7",
      brand: "Kaiak",
      img: PERFUME11,
      priceOld: 50000,
      priceNew: 35000,
      priceNoTax: 27500,
      discount: "-30%",
    },
    {
      id: 8,
      title: "Promo",
      brand: "Promo Natura",
      img: Banner_3_DESK,
      priceOld: 65000,
      priceNew: 45500,
      priceNoTax: 39000,
      discount: "-30%",
    },
  ];

  const groupSize = 4;
  const groupedCards = [];
  for (let i = 0; i < cardsData.length; i += groupSize) {
    groupedCards.push(cardsData.slice(i, i + groupSize));
  }

  const agregarCarrito = (producto) => {
    agregarAlCarrito({
      id: producto.id,
      nombre: producto.title,
      precio: producto.priceNew,
      precioOld: producto.priceOld,
      descuento: producto.discount,
      cantidad: 1,
    });

    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <>
      <Container className="my-5">
        <Carousel indicators={false} interval={null}>
          {groupedCards.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map((card, idx) => (
                  <Col md={3} sm={6} xs={12} key={idx}>
                    <Card
                      className="mb-4 border-0"
                      style={{
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(0, 0, 0, 0.52)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow =
                          "0 2px 6px rgba(0,0,0,0.08)";
                      }}
                    >
                      <div style={{ padding: "1rem" }}>
                        <Card.Img
                          variant="top"
                          src={card.img}
                          style={{ objectFit: "contain", height: "250px" }}
                        />
                      </div>
                      <Card.Body className="pt-0">
                        <Card.Text
                          className="text-muted mb-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          {card.brand}
                        </Card.Text>
                        <Card.Title style={{ fontSize: "1rem" }}>
                          {card.title}
                        </Card.Title>
                        <div>
                          <s style={{ color: "#999", fontSize: "0.9rem" }}>
                            ${card.priceOld.toLocaleString()}
                          </s>
                        </div>
                        <div className="d-flex align-items-center">
                          <span
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.1rem",
                              marginRight: "0.5rem",
                            }}
                          >
                            ${card.priceNew.toLocaleString()}
                          </span>
                          <Badge bg="danger">{card.discount}</Badge>
                        </div>
                        <p
                          className="text-muted mb-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          precio sin impuestos nacionales
                        </p>
                        <p
                          className="text-muted"
                          style={{ fontSize: "0.9rem" }}
                        >
                          ${card.priceNoTax.toLocaleString()}
                        </p>
                        <Button
                          variant="outline-danger"
                          style={{
                            borderRadius: "2rem",
                            width: "100%",
                            fontWeight: "bold",
                          }}
                          onClick={() => agregarCarrito(card)}
                        >
                          agregar a mi bolsa
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <ToastContainer
        className="position-fixed top-50 start-50 translate-middle"
        style={{ zIndex: 9999 }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={1500}
          autohide
          bg="success"
        >
          <Toast.Body style={{ color: "white", fontWeight: "bold" }}>
            ✔ Cargado a mi bolsa
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default CardCarousel;
