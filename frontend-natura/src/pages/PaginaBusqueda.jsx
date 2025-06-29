import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams para leer la URL
import axios from 'axios';
import useCarritoStore from "../store/useCarritoStore";
import {  Alert, Spinner, Card ,Button,Badge,
  Toast,
  ToastContainer} from 'react-bootstrap';
import Header from '../components/Header';

const PaginaBusqueda = () => {
    
  // 1. Leer el término de búsqueda desde el parámetro de la URL (:termino)
  const { termino } = useParams();

  const agregarAlCarrito = useCarritoStore((state) => state.agregarAlCarrito);

  // 2. Estados propios de esta página
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // 3. useEffect que se ejecuta cuando el componente carga O cuando el término de búsqueda cambia
  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        // Llama al endpoint de búsqueda con el término de la URL
        const response = await axios.get(`http://localhost:3001/productos/buscar/${termino}`);
        setResults(response.data); // La respuesta es directamente el array de datos
      } catch (err) {
        console.error("Error al buscar productos:", err);
        setError("Ocurrió un error al realizar la búsqueda.");
        setResults([]); // Limpiar resultados si hay error
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [termino]); // La dependencia es 'termino', así que se re-ejecuta si la búsqueda cambia

  // 4. Lógica de renderizado
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Buscando...</span>
        </Spinner>
        <p>Buscando productos...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

   const agregarCarrito = (product) => {
    agregarAlCarrito({
      id: product.id,
      nombre: product.title,
      precio: product.precio_descuento,
      precioOld: product.precio_original,
      descuento: product.descuento,
      cantidad: 1,
    });

    setShowToast(true);
  };

  return (
    
   <div className=" mt-4"> {/* Añadimos un contenedor principal para el espaciado */}
  <Header />
  <h3 className="mb-4">Resultados de búsqueda para: "{termino}"</h3>

  {results.length > 0 ? (
    // 1. Contenedor principal para el grid de productos
    <div className="row">
      {results.map((product) => (
        // 2. Cada producto es una columna en el grid para un layout responsivo
        //    La 'key' va en el elemento más externo del map.
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={product.id}>
          <Card
            className="h-100 border-0" // h-100 para que todas las cards en una fila tengan la misma altura
            style={{
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
            }}
          >
            <div style={{ padding: "1rem" }}>
              <Card.Img
                variant="top"
                // 3. Añadimos un fallback por si la imagen no existe
                src={product.url_imagen || "https://via.placeholder.com/250?text=Sin+Imagen"}
                alt={product.titulo}
                style={{ objectFit: "contain", height: "250px" }}
              />
            </div>
            {/* 4. Usamos flexbox para alinear el botón siempre al final */}
            <Card.Body className="pt-0 d-flex flex-column">
              <Card.Text
                className="text-muted mb-1"
                style={{ fontSize: "0.85rem" }}
              >
                {/* Podrías poner aquí la marca o categoría */}
              </Card.Text>
              {/* flex-grow-1 empuja el contenido siguiente hacia abajo */}
              <Card.Title style={{ fontSize: "1rem", flexGrow: 1 }}>
                {product.titulo}
              </Card.Title>
              <div>
                          <s style={{ color: "#999", fontSize: "0.9rem" }}>
                            {/* Usamos toLocaleString para formatear el número */}
                            ${Number(product.precio_original).toLocaleString("es-AR")}
                          </s>
                        </div>
              <div className="d-flex align-items-center mb-2">
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginRight: "0.75rem",
                  }}
                >
                  {/* Formateamos el número para que se vea como moneda */}
                  ${Number(product.precio_descuento).toLocaleString("es-AR")}
                </span>
                {/* 5. MEJORA LÓGICA: El badge debería mostrar el descuento (ej: -30%), no el precio */}
                <Badge bg="danger">-{product.descuento}%</Badge>
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
                          ${Number(product.precio_sin_iva).toLocaleString("es-AR")}
                        </p>
              <Button
                variant="outline-danger"
                className="mt-auto" 
                style={{
                  borderRadius: "2rem",
                  width: "100%",
                  fontWeight: "bold",
                }}
                onClick={() => agregarCarrito(product)}
              >
                Agregar a mi bolsa
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  ) : (
    <Alert variant="info" className="mt-3">
      No se encontraron productos que coincidan con su búsqueda.
    </Alert>
  )}

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
</div>


  );
};


export default PaginaBusqueda
