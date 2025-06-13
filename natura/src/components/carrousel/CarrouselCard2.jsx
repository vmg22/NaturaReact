import React from "react";
import { Carousel, Card, Button, Row, Col, Container } from "react-bootstrap";



const CardCarousel = () => {
  // Datos simulados para las cards
  const cardsData = [
    { title: "Producto 1", text: "Descripción 1", img: "https://via.placeholder.com/150" },
    { title: "Producto 2", text: "Descripción 2", img: "https://via.placeholder.com/150" },
    { title: "Producto 3", text: "Descripción 3", img: "https://via.placeholder.com/150" },
    { title: "Producto 4", text: "Descripción 4", img: "https://via.placeholder.com/150" },
    { title: "Producto 5", text: "Descripción 5", img: "https://via.placeholder.com/150" },
    { title: "Producto 6", text: "Descripción 6", img: "https://via.placeholder.com/150" },
    { title: "Producto 7", text: "Descripción 7", img: "https://via.placeholder.com/150" },
    { title: "Producto 8", text: "Descripción 8", img: "https://via.placeholder.com/150" },
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
                      <Button variant="primary">Ver más</Button>
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

