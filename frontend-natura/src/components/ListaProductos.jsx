import React, { useState, useEffect } from "react";
import {

  Card,
  Button,
  Row,
  Col,
  Container,
  Badge,
  Toast,
  ToastContainer,
  Spinner,
} from "react-bootstrap";
import useCarritoStore from "../store/useCarritoStore";

const ListaProductos = () => {
  const agregarAlCarrito = useCarritoStore((state) => state.agregarAlCarrito);

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // 2. useEffect PARA LLAMAR A LA API 
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:3001/productos2");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();

        const productosAdaptados = data.datos.map((p) => ({
          id: p.id,
          title: p.titulo,
          brand: `Marca ID: ${p.marca_id}`,
          img: p.url_imagen || `https://placehold.co/300x200?text=Sin+Imagen`,
          priceOld: p.precio_original,
          priceNew: p.precio_descuento,
          priceNoTax: p.precio_sin_iva,
          discount: p.descuento,
        }));

        setProductos(productosAdaptados);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);



  // Función para agregar al carrito 
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
  };

  // RENDERIZADO CONDICIONAL PARA CARGA Y ERRORES 
  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="danger" />
        <p className="mt-2">Cargando productos...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center my-5">
        <p className="text-danger">Error al cargar los productos: {error}</p>
      </Container>
    );
  }

  // RENDERIZADO DEL COMPONENTE 
  return (
    <>
      <Container className="my-5">
        {/* Usamos un solo Row para contener todas las tarjetas */}
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>Lista de Productos</h1>
        <Row>
          {/* Mapeamos directamente el array completo de 'productos' */}
          {productos.map((card) => (
   
            <Col lg={3} md={4} sm={6} xs={12} key={card.id} className="mb-4">
              <Card
                className="h-100 border-0" 
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
                <Card.Body className="pt-0 d-flex flex-column"> 
                  <Card.Text
                    className="text-muted mb-1"
                    style={{ fontSize: "0.85rem" }}
                  ></Card.Text>
                  <Card.Title style={{ fontSize: "1rem" }}>
                    {card.title}
                  </Card.Title>
                  <div>
                    <s style={{ color: "#999", fontSize: "0.9rem" }}>
                      ${Number(card.priceOld).toLocaleString("es-AR")}
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
                      ${Number(card.priceNew).toLocaleString("es-AR")}
                    </span>
                    <Badge bg="danger">-{card.discount}</Badge>
                  </div>
                  <p
                    className="text-muted mb-1"
                    style={{ fontSize: "0.85rem" }}
                  >
                    precio sin impuestos nacionales
                  </p>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    ${Number(card.priceNoTax).toLocaleString("es-AR")}
                  </p>
                 
                  <Button
                    variant="outline-danger"
                    className="mt-auto" 
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

export default ListaProductos;