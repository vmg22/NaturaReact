import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, rolPermitido }) => {
  let usuario = null;
  try {
    usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  } catch {
    usuario = null;
  }

  // Validar que usuario exista, sea objeto, tenga rol_id numérico y válido
  if (
    !usuario ||
    typeof usuario !== "object" ||
    Array.isArray(usuario) ||
    usuario === null ||
    typeof usuario.rol_id === "undefined" ||
    usuario.rol_id === null ||
    isNaN(Number(usuario.rol_id))
  ) {
    return <Navigate to="/login" />;
  }

  if (rolPermitido && Number(usuario.rol_id) !== Number(rolPermitido)) {
    return <Navigate to="/no-autorizado" />;
  }

  return children;
};

export default PrivateRoute;
