import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import useCarritoStore from "../store/useCarritoStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Carrito = () => {
  return (
    <>
      <Header />

      <main className="container my-5">
        <div className="row">
          {/* Sección Tabla */}
          <div className="col-md-8 mb-4">
            <Table striped bordered hover className="shadow-sm">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Valor</th>
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
                    <td>
                      <div>
                        <s style={{ color: "#999", fontSize: "0.9rem" }}>
                          ${item.precioOld?.toLocaleString()}
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
                          ${item.precio.toLocaleString()}
                        </span>
                        <span
                          className="badge rounded-pill"
                          style={{
                            backgroundColor: "#e6f4ea",
                            color: "#137333",
                            fontSize: "0.8rem",
                            padding: "0.3em 0.6em",
                            fontWeight: "bold",
                          }}
                        >
                          {item.descuento}
                        </span>
                      </div>
                    </td>
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
          </div>

          {/* Sección Resumen */}
          <div className="col-md-4">
            <section className="p-4 rounded shadow-sm" style={{ background: "#f9f9f9" }}>
              <h5 className="mb-3 fw-bold">resumen de mi compra</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>{carrito.reduce((acc, item) => acc + item.cantidad, 0)} productos</span>
                <span>
                  ${carrito
                    .reduce((acc, item) => acc + item.precioOld * item.cantidad, 0)
                    .toLocaleString()}
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-success">descuentos</span>
                <span className="text-success">
                  -${carrito
                    .reduce((acc, item) => acc + (item.precioOld - item.precio) * item.cantidad, 0)
                    .toLocaleString()}
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">regalos (+2 ítems)</span>
                <span className="text-success">gratis</span>
              </div>

              <div className="d-flex justify-content-between border-top pt-2 fw-bold">
                <span>subtotal</span>
                <span>
                  ${carrito
                    .reduce((acc, item) => acc + item.precio * item.cantidad, 0)
                    .toLocaleString()}
                </span>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span className="text-muted">entrega</span>
                <span>-</span>
              </div>

              <div className="d-flex justify-content-between border-top pt-2 fs-5 fw-bold">
                <span>total</span>
                <span>
                  ${carrito
                    .reduce((acc, item) => acc + item.precio * item.cantidad, 0)
                    .toLocaleString()}
                </span>
              </div>

              <div className="mt-4">
                <Button variant="warning" className="w-100 mb-2 fw-bold text-white">
                  finalizar compra
                </Button>

                <Button
                  variant="outline-success"
                  className="w-100 fw-bold"
                  style={{
                    borderWidth: "2px",
                    borderRadius: "30px",
                    padding: "0.6em 0",
                    fontSize: "1.1rem",
                    marginTop: "0.5em",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                  as={Link}
                  to="/"
                >
                  continuar comprando
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Carrito;
