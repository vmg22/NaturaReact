import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import useCarritoStore from "../store/useCarritoStore";
import Header from '../components/Header'
import Footer from "../components/Footer"
import { Spinner,Card , Badge, Button,
  ToastContainer, Toast,} from "react-bootstrap";
import CategoriaGeneral from "../components/CategoriaGeneral";
import CarrouselMaquillaje from "../components/carrousel/CarrouselMaquillaje";
import CarrouselPerfumeria from "../components/carrousel/CarrouselPerfumeria";
import CarrouselRostro from "../components/carrousel/CarrouselRostro";
import CarrouselCabello from "../components/carrousel/CarrouselCabello";
import CarrouselCuidadosDiarios from "../components/carrousel/CarrouselCuidadosDiarios";

const Categoria = () => {

   // se lee el parametro /categorias/... se le cambia el nombre a categoryname para q no quede redundante
  const { nombre: categoryName } = useParams();
  const agregarAlCarrito = useCarritoStore((state) => state.agregarAlCarrito);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!categoryName) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Llamamos a nuestra nueva y limpia ruta del backend
        const response = await axios.get(`http://localhost:3001/productos/categoria/${categoryName}`);
        setProducts(response.data);
      } catch (err) {
        setError("No se pudieron cargar los productos de esta categoría.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]); // Se vuelve a ejecutar si el usuario navega a otra categoría

   // declaro en null para poder asignarle el valor
  let carruselEspecifico = null;

  //depende el nombre de la categoria mostrara el carrousel
  if (categoryName.toLowerCase() === 'maquillaje') {
    carruselEspecifico = <CarrouselMaquillaje />;
  } else if (categoryName.toLowerCase() === 'perfumeria') {
    carruselEspecifico = <CarrouselPerfumeria />;
  }else if (categoryName.toLowerCase() === 'rostro') {
    carruselEspecifico = <CarrouselRostro />;
  }else if (categoryName.toLowerCase() === 'cabello') {
    carruselEspecifico = <CarrouselCabello />;
  }else if (categoryName.toLowerCase() === 'cuidados-diarios') {
    carruselEspecifico = <CarrouselCuidadosDiarios />;
  }else{
    carruselEspecifico = null;
  }
//zustand
     const agregarCarrito = (product) => {
    agregarAlCarrito({
      id: product.id,
      nombre: product.titulo,
      precio: product.precio_descuento,
      precioOld: product.precio_original,
      descuento: product.descuento,
      cantidad: 1,
    });

    setShowToast(true);
  };

  if (loading) return <div className="text-center"><Spinner animation="border" /></div>;
  if (error) return <Alert variant="danger">{error}</Alert>;
  return (
    <div>
      <Header/>
      {/* aca llama al carrousel segun la categoria */}
      {carruselEspecifico}
      <CategoriaGeneral categoria={categoryName}/>
      <div className="row mt-3">
        {products.length > 0 ? (
          products.map(product => (
            <div className="col-lg-3 col-md-4 mb-4" key={product.id}>

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
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
      <Footer/>


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
  )
}

export default Categoria
