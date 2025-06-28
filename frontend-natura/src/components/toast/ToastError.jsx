import React from 'react'
import { Toast, ToastContainer } from "react-bootstrap";
const ToastError = ({ visible, onClose, tipo = "success", titulo, mensaje }) => {
  return (
    <div>
      {/* Toast de error*/}
            <ToastContainer position="top-end" className="p-3">
            <Toast
              show={visible}
              onClose={onClose}
              bg={tipo}
              delay={1500}
              autohide
            >
              <Toast.Header>
                <strong className="me-auto">{titulo}</strong>
              </Toast.Header>
              <Toast.Body className="text-white">{mensaje}</Toast.Body>
            </Toast>
          </ToastContainer>
    </div>
  )
}

export default ToastError
