import React, { useEffect, useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import axios from "axios";

const TicketCompra = ({ mostrar, onCerrar, idOrden, usuario }) => {
  const [orden, setOrden] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchOrden = async () => {
      if (idOrden && mostrar) {
        try {
          const res = await axios.get(`http://localhost:3001/ordenes/${idOrden}`);
          setOrden(res.data);
        } catch (error) {
          console.error("Error al obtener la orden:", error.message);
        } finally {
          setCargando(false);
        }
      }
    };

    fetchOrden();
  }, [idOrden, mostrar]);

  return (
    <Modal show={mostrar} onHide={onCerrar} centered>
      <Modal.Header closeButton>
        <Modal.Title>🎉 ¡Compra confirmada!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cargando ? (
          <div className="text-center">
            <Spinner animation="border" />
            <p className="mt-3">Cargando detalles de la orden...</p>
          </div>
        ) : orden ? (
          <>
            <p>Gracias por tu compra, <strong>{usuario?.nombre || "cliente"}</strong>.</p>
            <p><strong>ID de Orden:</strong> #{orden.id}</p>            
            <p><strong>Total:</strong> ${orden.total.toLocaleString()}</p>
            <p><strong>Estado:</strong> {orden.estado}</p>
            <p><strong>Fecha:</strong> {new Date(orden.fecha).toLocaleString()}</p>
            <p>LOS VIAJES NO SE PAGAN SOLOS!! SEGUI COMPRANDO</p>
          </>
        ) : (
          <p>No se pudo cargar la información de la orden.</p>
        )}
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
