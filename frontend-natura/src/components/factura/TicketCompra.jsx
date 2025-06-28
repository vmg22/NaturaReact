import React from "react";
import { Modal, Button } from "react-bootstrap";

const TicketCompra = ({ mostrar, onCerrar }) => {
  const numeroOrden = Math.floor(Math.random() * 900000 + 100000); // random de 6 dígitos

  return (
    <Modal show={mostrar} onHide={onCerrar} centered>
      <Modal.Header closeButton>
        <Modal.Title>🎉 ¡Compra confirmada!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Gracias por tu compra.</p>
        <p><strong>Número de orden:</strong> #{numeroOrden}</p>
        <p>Te enviaremos los detalles a tu correo electrónico registrado.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onCerrar}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketCompra;