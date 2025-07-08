import React from "react";
import { Navigate } from "react-router-dom";
import UsuarioStore from "../store/UsuarioStore"; // ajustá la ruta si está en otra carpeta

const PrivateRoute = ({ children, rolPermitido }) => {
  const { usuario } = UsuarioStore();

  // Validar que usuario exista y tenga rol_id numérico válido
  if (
    !usuario ||
    typeof usuario !== "object" ||
    Array.isArray(usuario) ||
    typeof usuario.rol_id === "undefined" ||
    usuario.rol_id === null ||
    isNaN(Number(usuario.rol_id))
  ) {
    return <Navigate to="/login" />;
  }

  // Si se pasa un rolPermitido (1 = admin, 2 = cliente), validarlo
  if (rolPermitido && Number(usuario.rol_id) !== Number(rolPermitido)) {
    return <Navigate to="/no-autorizado" />;
  }

  return children;
};

export default PrivateRoute;

