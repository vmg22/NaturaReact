// Carrito.jsx
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import useCarritoStore from  "../store/useCarritoStore"; // Asegúrate de que este path sea correcto
import Header from "../components/Header";
import Footer from "../components/Footer";


const Carrito = () => {
  const carrito = useCarritoStore((state) => state.carrito);
  const quitarDelCarrito = useCarritoStore((state) => state.quitarDelCarrito);

  return (
    <>
      <Header/> 
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
                <td>{item.cantidad}</td>
                <td>${item.precio.toLocaleString()}</td>
                <td>${(item.precio * item.cantidad).toLocaleString()}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => quitarDelCarrito(item.id)}>
                    Quitar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      <Footer/>
    </>
  );
};

export default Carrito;
