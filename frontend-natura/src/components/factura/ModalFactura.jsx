import React, { useState } from "react";
import { Modal, Button, Table, Alert, Spinner } from "react-bootstrap";
import axios from "axios";

const ModalFactura = ({ mostrar, onCerrar, onConfirmar, productos = [], total, usuario }) => {
  const [estaCargando, setEstaCargando] = useState(false);
  const [mensajeError, setMensajeError] = useState(null);

  const handleConfirmar = async () => {
    setMensajeError(null);
    setEstaCargando(true);

    try {
      const orden = {
        id_usuario: usuario?.id || null,
        total,
        estado: "confirmada",
        carrito: productos, // Ahora se llama productos en Pago, pero lo pasamos como carrito
      };

      const response = await axios.post("http://localhost:3001/ordenes", orden);

      if (response.data && response.data.id) {
        onConfirmar(response.data.id);
      } else {
        setMensajeError("La respuesta del servidor no fue la esperada. No se pudo crear la orden.");
      }
    } catch (error) {
      console.error("Error al confirmar la orden:", error);
      setMensajeError("Error al registrar la orden. Intente más tarde.");
    } finally {
      setEstaCargando(false);
    }
  };

  return (
    <Modal
      show={mostrar}
      onHide={!estaCargando ? onCerrar : null}
      size="lg"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton={!estaCargando}>
        <Modal.Title>🧾 Detalle de su compra</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {mensajeError && <Alert variant="danger">{mensajeError}</Alert>}

        <p><strong>Cliente:</strong> {usuario?.nombre || "Invitado"}</p>

        <Table striped bordered size="sm">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>${item.precio.toLocaleString()}</td>
                <td>${(item.precio * item.cantidad).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h5 className="text-end fw-bold">
          Total a pagar: ${total.toLocaleString()}
        </h5>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCerrar} disabled={estaCargando}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleConfirmar} disabled={estaCargando}>
          {estaCargando ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Procesando...
            </>
          ) : (
            "Confirmar Compra"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFactura;
