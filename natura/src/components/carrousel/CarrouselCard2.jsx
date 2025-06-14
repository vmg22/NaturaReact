import React from "react";
import { Carousel, Card, Button, Row, Col, Container } from "react-bootstrap";
import Banner_3_DESK from "../../assets/ARTICULOS-IMG/Banner_3_DESK.jpg";
import PERFUME12 from "../../assets/ARTICULOS-IMG/PERFUME12.jpg";
import CREMA1 from "../../assets/ARTICULOS-IMG/CREMA1.jpg";
import PERFUME1 from "../../assets/ARTICULOS-IMG/PERFUME1.jpg";
import PERFUME11 from "../../assets/ARTICULOS-IMG/PERFUME11.jpg";
import PERFUME9 from "../../assets/ARTICULOS-IMG/PERFUME9.jpg";
import PERFUME3 from "../../assets/ARTICULOS-IMG/PERFUME3.jpg";
import PERFUME4 from "../../assets/ARTICULOS-IMG/PERFUME4.jpg";





const CardCarousel = () => {
  // Datos simulados para las cards
  const cardsData = [
    { title: "crema", text: "perfume", img: Banner_3_DESK },
    { title: "crema", text: "perfume", img: PERFUME12 },
    { title: "crema", text: "perfume", img: CREMA1 },
    { title: "crema", text: "perfume", img: PERFUME1 },
    { title: "crema", text: "perfume", img: PERFUME9 },
    { title: "crema", text: "perfume", img: PERFUME11 },
    { title: "crema", text: "perfume", img: PERFUME3 },
    { title: "crema", text: "perfume", img: PERFUME4 },
  
  ];

  // Dividir los datos en grupos de 4 cards por slide
  const groupSize = 4;
  const groupedCards = [];
  for (let i = 0; i < cardsData.length; i += groupSize) {
    groupedCards.push(cardsData.slice(i, i + groupSize));
  }

  return (
    <Container className="my-4">
      <Carousel>
        {groupedCards.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map((card, idx) => (
                <Col md={3} key={idx}>
                  <Card className="mb-3">
                    <Card.Img variant="top" src={card.img} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button variant="primary">COMPRAR</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CardCarousel;

