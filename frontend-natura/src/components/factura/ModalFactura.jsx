import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

const ModalFactura = ({ mostrar, onCerrar, onConfirmar, carrito, usuario }) => {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <Modal show={mostrar} onHide={onCerrar} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>🧾 Detalle de su compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Cliente:</strong> {usuario?.nombre || "Invitado"}</p>

        <Table striped bordered size="sm">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>${item.precio.toLocaleString()}</td>
                <td>${(item.precio * item.cantidad).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h5 className="text-end">Total: ${total.toLocaleString()}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCerrar}>
          Cancelar
        </Button>
        <Button variant="success" onClick={onConfirmar}>
          Confirmar compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFactura;