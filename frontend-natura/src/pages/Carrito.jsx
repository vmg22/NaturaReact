import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import useCarritoStore from "../store/useCarritoStore";
import Header from "../components/Header"; 
import Footer from "../components/Footer";


const Carrito = () => {
  const carrito = useCarritoStore((state) => state.carrito);
  const quitarDelCarrito = useCarritoStore((state) => state.quitarDelCarrito);
  const incrementarCantidad = useCarritoStore((state) => state.incrementarCantidad);
  const disminuirCantidad = useCarritoStore((state) => state.disminuirCantidad);

  return (
    
    <>
      <Header />
      <section>
   
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => disminuirCantidad(item.id)}
                      className="px-2"
                    >
                      −
                    </Button>
                    <div className="px-3 fw-bold">{item.cantidad}</div>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => incrementarCantidad(item.id)}
                      className="px-2"
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td>${item.precio.toLocaleString()}</td>
                <td>${(item.precio * item.cantidad).toLocaleString()}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => quitarDelCarrito(item.id)}
                  >
                    Quitar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      <Footer />
      
    </>
  );
};

export default Carrito;
