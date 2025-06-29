// src/pages/Carrito.jsx (o donde lo tengas)

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import useCarritoStore from "../store/useCarritoStore";
import UsuarioStore from "../store/UsuarioStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalNoLogueado from "../components/factura/ModalNoLogueado";
import ModalFactura from "../components/factura/ModalFactura";
import TicketCompra from "../components/factura/TicketCompra";

const Carrito = () => {
  const { carrito, quitarDelCarrito, incrementarCantidad, disminuirCantidad, vaciarCarrito } = useCarritoStore();
  const { usuario } = UsuarioStore();

  const [showToast, setShowToast] = useState(false);
  const [mostrarNoLogueado, setMostrarNoLogueado] = useState(false);
  const [mostrarFactura, setMostrarFactura] = useState(false);
  const [mostrarTicket, setMostrarTicket] = useState(false);
  const [ordenId, setOrdenId] = useState(null);

  const handleQuitar = (id) => {
    quitarDelCarrito(id);
    setShowToast(true);
  };

  const finalizarCompra = () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    if (!usuario) {
      setMostrarNoLogueado(true);
    } else {
      setMostrarFactura(true);
    }
  };

  /**
   * Esta función se ejecuta DESPUÉS de que el ModalFactura haya creado la orden exitosamente.
   * Recibe el ID de la nueva orden como argumento.
   * Su única responsabilidad es actualizar la UI.
   */
  const handleOrdenCreadaExitosamente = (idDeLaOrdenCreada) => {
    setOrdenId(idDeLaOrdenCreada); // Guarda el ID de la nueva orden
    setMostrarFactura(false);      // Cierra el modal de la factura
    setMostrarTicket(true);        // Muestra el componente del Ticket de Compra
    vaciarCarrito();               // Limpia el carrito de compras
  };

  return (
    <>
      <Header />

      <main className="container my-5">
        <div className="row">
          {/* Tabla */}
          <div className="col-md-8 mb-4">
            {carrito.length > 0 ? (
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
                          <Button variant="outline-secondary" size="sm" onClick={() => disminuirCantidad(item.id)} className="px-2" disabled={item.cantidad <= 1}>−</Button>
                          <div className="px-3 fw-bold">{item.cantidad}</div>
                          <Button variant="outline-secondary" size="sm" onClick={() => incrementarCantidad(item.id)} className="px-2">+</Button>
                        </div>
                      </td>
                      <td>
                        {item.precioOld && item.precioOld > item.precio && (
                          <div><s style={{ color: "#999", fontSize: "0.9rem" }}>${item.precioOld?.toLocaleString()}</s></div>
                        )}
                        <div className="d-flex align-items-center">
                          <span style={{ fontWeight: "bold", fontSize: "1.1rem", marginRight: "0.5rem" }}>
                            ${item.precio.toLocaleString()}
                          </span>
                          {item.descuento && (
                            <span className="badge rounded-pill" style={{ backgroundColor: "#e6f4ea", color: "#137333", fontSize: "0.8rem", padding: "0.3em 0.6em", fontWeight: "bold" }}>
                              {item.descuento}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>${(item.precio * item.cantidad).toLocaleString()}</td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => handleQuitar(item.id)}>Quitar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div className="text-center p-5 border rounded shadow-sm">
                <h3>Tu bolsa de compras está vacía</h3>
                <p>Añade productos para poder verlos aquí.</p>
                <Button as={Link} to="/" variant="primary">Ir a la tienda</Button>
              </div>
            )}
          </div>

          {/* Resumen */}
          {carrito.length > 0 && (
            <div className="col-md-4">
              <section className="p-4 rounded shadow-sm" style={{ background: "#f9f9f9" }}>
                <h5 className="mb-3 fw-bold">Resumen de mi compra</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>{carrito.reduce((acc, item) => acc + item.cantidad, 0)} productos</span>
                  <span>${carrito.reduce((acc, item) => acc + (item.precioOld || item.precio) * item.cantidad, 0).toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-success">Descuentos</span>
                  <span className="text-success">
                    -${carrito.reduce((acc, item) => acc + ((item.precioOld || item.precio) - item.precio) * item.cantidad, 0).toLocaleString()}
                  </span>
                </div>
                <div className="d-flex justify-content-between border-top pt-2 fs-5 fw-bold">
                  <span>Total</span>
                  <span>${carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toLocaleString()}</span>
                </div>
                <div className="mt-4">
                  <Button variant="warning" className="w-100 mb-2 fw-bold text-white" onClick={finalizarCompra}>
                    Finalizar compra
                  </Button>
                  <Button variant="outline-success" className="w-100 fw-bold" as={Link} to="/">
                    Continuar comprando
                  </Button>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>

      <ToastContainer className="position-fixed top-50 start-50 translate-middle" style={{ zIndex: 9999 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={1500} autohide bg="danger">
          <Toast.Body style={{ color: "white", fontWeight: "bold" }}>❌ Producto eliminado de mi bolsa de compras</Toast.Body>
        </Toast>
      </ToastContainer>

      <ModalNoLogueado mostrar={mostrarNoLogueado} onCerrar={() => setMostrarNoLogueado(false)} />
      
      {/* El modal de la factura ahora recibe la función correcta en la prop 'onConfirmar' */}
      <ModalFactura
        mostrar={mostrarFactura}
        onCerrar={() => setMostrarFactura(false)}
        onConfirmar={handleOrdenCreadaExitosamente}
        carrito={carrito}
        usuario={usuario}
      />

      {/* Este componente solo se muestra cuando ya tenemos un ID de orden */}
      <TicketCompra
        mostrar={mostrarTicket}
        onCerrar={() => setMostrarTicket(false)}
        idOrden={ordenId}
        usuario={usuario}
      />

      <Footer />
    </>
  );
};

export default Carrito;