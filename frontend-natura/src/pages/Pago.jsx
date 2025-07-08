// src/pages/Pago.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalFactura from "../components/factura/ModalFactura";
import useCarritoStore from "../store/useCarritoStore";
import UsuarioStore from "../store/UsuarioStore"; // ✅ CORRECTO: importar desde el archivo correcto

const Pago = () => {
  const { carrito, vaciarCarrito } = useCarritoStore();
  const { usuario } = UsuarioStore();

  const [metodoPago, setMetodoPago] = useState("");
  const [cuotas, setCuotas] = useState("");
  const [dni, setDni] = useState("");
  const [mostrarFactura, setMostrarFactura] = useState(false);
  const [datosTarjeta, setDatosTarjeta] = useState({
    numero: "",
    nombre: "",
    vencimiento: "",
    codigo: "",
  });
  const navigate = useNavigate();

  const calcularTotal = () => {
    const subtotal = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    if (metodoPago === "credito" && cuotas === "9") {
      return Math.round(subtotal * 1.15);
    }
    return subtotal;
  };

  const handleConfirmarFactura = (ordenId) => {
    vaciarCarrito();
    setMostrarFactura(false);
    alert(`Compra registrada con éxito. N° de orden: ${ordenId}`);
    navigate("/");
  };

  // Función para detectar tipo de tarjeta
  const getCardType = (number) => {
    if (/^4/.test(number)) return "visa";
    if (/^5[1-5]/.test(number)) return "mastercard";
    if (/^3[47]/.test(number)) return "amex";
    if (/^589562/.test(number)) return "naranja";
    return "default";
  };

  // Logos de tarjetas (puedes reemplazar por imágenes reales si tienes)
  const cardLogos = {
    visa: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    mastercard:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    amex: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg",
    naranja:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Tarjeta_Naranja_logo.svg",
    default:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Credit_card_default.png",
  };

  // Validación de vencimiento de tarjeta
  const vencimientoValido = () => {
    const [mes, anio] = datosTarjeta.vencimiento.split("/");
    if (!mes || !anio || mes.length !== 2 || anio.length !== 2) return false;
    const mesNum = parseInt(mes, 10);
    const anioNum = parseInt("20" + anio, 10);
    if (isNaN(mesNum) || isNaN(anioNum) || mesNum < 1 || mesNum > 12) return false;
    const hoy = new Date();
    const mesActual = hoy.getMonth() + 1;
    const anioActual = hoy.getFullYear();
    return anioNum > anioActual || (anioNum === anioActual && mesNum >= mesActual);
  };

  return (
    <>
      <Header />

      <div className="container mt-5">
        <h2 className="mb-4">Finalizar Pago</h2>

        <div className="mb-3">
          <label>DNI:</label>
          <input
            type="text"
            className="form-control"
            value={dni}
            maxLength={8}
            onChange={(e) => setDni(e.target.value.replace(/\D/g, "").slice(0, 8))}
          />
        </div>

        <div className="mb-3">
          <label>Método de Pago:</label>
          <select
            className="form-select"
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
          >
            <option value="">-- Seleccionar --</option>
            <option value="transferencia">Transferencia</option>
            <option value="debito">Débito</option>
            <option value="credito">Crédito</option>
          </select>
        </div>

        {metodoPago === "credito" && (
          <div className="mb-3">
            <label>Cuotas:</label>
            <select
              className="form-select"
              value={cuotas}
              onChange={(e) => setCuotas(e.target.value)}
            >
              <option value="">-- Seleccionar cuotas --</option>
              <option value="3">3 cuotas sin interés</option>
              <option value="6">6 cuotas sin interés</option>
              <option value="9">9 cuotas con 15% de interés</option>
            </select>
          </div>
        )}

        {(metodoPago === "debito" || metodoPago === "credito") && (
          <div className="mb-3">
            {/* Tarjeta visual */}
            <div
              style={{
                width: 340,
                height: 200,
                borderRadius: 20,
                background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
                color: "#fff",
                padding: 24,
                marginBottom: 20,
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                position: "relative",
              }}
            >
              <img
                src={cardLogos[getCardType(datosTarjeta.numero)]}
                alt="logo"
                style={{
                  width: 60,
                  position: "absolute",
                  top: 24,
                  right: 24,
                  background: "#fff",
                  borderRadius: 8,
                  padding: 4,
                }}
              />
              <div
                style={{
                  fontSize: 22,
                  letterSpacing: 2,
                  marginTop: 40,
                  marginBottom: 20,
                }}
              >
                {datosTarjeta.numero.padEnd(16, "•").replace(/(.{4})/g, "$1 ")}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 16,
                }}
              >
                <div>
                  <div style={{ fontSize: 10, opacity: 0.7 }}>NOMBRE</div>
                  {datosTarjeta.nombre || "NOMBRE Y APELLIDO"}
                </div>
                <div>
                  <div style={{ fontSize: 10, opacity: 0.7 }}>VTO</div>
                  {datosTarjeta.vencimiento.padEnd(5, "•")}
                </div>
                <div>
                  <div style={{ fontSize: 10, opacity: 0.7 }}>CVV</div>
                  {datosTarjeta.codigo.padEnd(3, "•")}
                </div>
              </div>
            </div>
            {/* Inputs */}
            <label>Número de tarjeta:</label>
            <input
              type="text"
              className="form-control mb-2"
              maxLength={16}
              value={datosTarjeta.numero.replace(/\D/g, "")}
              onChange={(e) =>
                setDatosTarjeta({
                  ...datosTarjeta,
                  numero: e.target.value.replace(/\D/g, "").slice(0, 16),
                })
              }
              placeholder="Sólo números"
            />
            <label>Nombre en la tarjeta:</label>
            <input
              type="text"
              className="form-control mb-2"
              value={datosTarjeta.nombre}
              onChange={(e) =>
                setDatosTarjeta({
                  ...datosTarjeta,
                  nombre: e.target.value.toUpperCase(),
                })
              }
              placeholder="Como figura en la tarjeta"
            />
            <label>Vencimiento:</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="MM/AA"
              maxLength={5}
              value={datosTarjeta.vencimiento.replace(/[^0-9/]/g, "").slice(0, 5)}
              onChange={(e) => {
                let val = e.target.value.replace(/[^0-9]/g, "");
                if (val.length > 2)
                  val = val.slice(0, 2) + "/" + val.slice(2, 4);
                setDatosTarjeta({ ...datosTarjeta, vencimiento: val.slice(0, 5) });
              }}
            />
            <label>Código de seguridad:</label>
            <input
              type="text"
              className="form-control"
              maxLength={3}
              value={datosTarjeta.codigo.replace(/\D/g, "")}
              onChange={(e) =>
                setDatosTarjeta({
                  ...datosTarjeta,
                  codigo: e.target.value.replace(/\D/g, "").slice(0, 3),
                })
              }
              placeholder="CVV"
            />
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mt-4">
          <h4>Total a pagar: ${calcularTotal().toLocaleString()}</h4>
          <button
            className="btn btn-success fw-bold"
            onClick={() => {
              if (
                !metodoPago ||
                !dni ||
                (metodoPago === "credito" && !cuotas) ||
                ((metodoPago === "debito" || metodoPago === "credito") && !vencimientoValido())
              ) {
                alert(
                  (metodoPago === "debito" || metodoPago === "credito") && !vencimientoValido()
                    ? "La fecha de vencimiento de la tarjeta no puede ser anterior al mes actual."
                    : "Por favor completá todos los campos."
                );
                return;
              }
              setMostrarFactura(true);
            }}
          >
            Realizar pago
          </button>
        </div>
      </div>

      <ModalFactura
        mostrar={mostrarFactura}
        onCerrar={() => setMostrarFactura(false)}
        onConfirmar={handleConfirmarFactura}
        productos={carrito}
        total={calcularTotal()}
        usuario={usuario}
      />

      <Footer />
    </>
  );
};

export default Pago;