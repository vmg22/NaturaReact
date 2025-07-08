import React, { useState } from 'react';
import "../../styles/MainLogin.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UsuarioStore from '../../store/UsuarioStore'; // 


const MainLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const iniciarSesion = UsuarioStore((state) => state.iniciarSesion); //  usa la acción de Zustand

  const togglePassword = () => setShowPassword(!showPassword);

  const ingresarCuenta = async () => {
    if (!user || !pass) {
      alert("Por favor completá todos los campos");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: user,
        password: pass
      });

      const data = response.data;

      if (data.success) {
        const usuario = data.usuario;
        iniciarSesion(usuario);
        alert(`¡Bienvenido, ${usuario.nombre}!`);

        // limpiar campos siempre
        setUser("");
        setPass("");

        // guardar en localStorage
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

        // redirigir
        if (usuario.rol_id === 1) {
          navigate("/Admin");
        } else if (usuario.rol_id === 2) {
          navigate("/");
        } else {
          alert("Rol no reconocido");
        }

      } else {
        alert(data.message || "Usuario o contraseña incorrectos");
        setUser(""); // limpiar aunque haya fallo
        setPass("");
      }

    } catch (error) {
      console.error("Error en login:", error);
      alert("Error al conectar con el servidor");
      setUser(""); // limpiar en error también
      setPass("");
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
              value={pass}
              onChange={(e) => setPass(e.target.value)}
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