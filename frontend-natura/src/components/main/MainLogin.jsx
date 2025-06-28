import React, { useState } from 'react';
import "../../styles/MainLogin.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UsuarioStore from '../../store/UsuarioStore';

const MainLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const { iniciarSesion } = UsuarioStore();

  const togglePassword = () => setShowPassword(!showPassword);

  const ingresarCuenta = async () => {
  if (!user || !pass) {
    alert("Por favor completá todos los campos");
    return;
  }

  try {
    // Armamos la URL incluyendo los datos como parámetros
    const response = await axios.get(`http://localhost:3001/login?email=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`);

    if (response.data.success) {
      iniciarSesion({ email: user }); 
      localStorage.setItem("usuarioLogueado", JSON.stringify(response.data.user));

      alert("¡Bienvenido!");
      setUser("");
      setPass("");

      if (user === "admin@natura.com") {
        navigate("/MainAdmin");
      } else {
        navigate("/MainCarrito");
      }
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  } catch (error) {
    console.error("Error al conectar con el servidor:", error);
    alert("Error al conectar con el servidor");
  }
};


  return (
    <div className="main-login2">
      <div className="login-container">
        <div className="login-card">
          <div className="logo">🧡 <span>natura</span></div>
          <h2 className="title">identificación</h2>

          <label className="login-label">iniciá sesión</label>
          <input
            type="email"
            className="login-input"
            placeholder="ingresá tu e-mail"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label className="login-label">contraseña</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              className="login-input"
              placeholder="ej.: ............."
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <span className="icon" onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="login-btn" onClick={ingresarCuenta}>ingresar</button>

          <a className="forgot" href="#">olvidé mi contraseña</a>

          <button className="outline-btn" onClick={() => navigate("/Register")}>
            crear cuenta
          </button>

          <button className="google-btn">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
            Seguir con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
