import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalNoLogueado = ({ mostrar, onCerrar }) => {
  return (
    <Modal show={mostrar} onHide={onCerrar} centered>
      <Modal.Header closeButton>
        <Modal.Title>⚠ Usted no está logueado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Para finalizar la compra debe iniciar sesión.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCerrar}>
          Cancelar
        </Button>
        <Link to="/login">
          <Button variant="primary">Iniciar sesión</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNoLogueado;