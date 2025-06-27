import React, { useState } from 'react';
import "../../styles/MainLogin.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Admin from '../../pages/Admin';

const MainLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const togglePassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const ingresarCuenta = () =>{
    if (user === "Admin Natura" && pass === "adminpass") {
    alert("¡Bienvenido Admin!");
    navigate("/Admin");
  } else {
    alert("Usuario incorrecto");
  }

    setUser("")
    setPass("")
  }

  return (
    <div className="main-login2">
      <div className="login-container">
        <div className="login-card">
          <div className="logo">🧡 <span>natura</span></div>
          <h2 className="title">identificación</h2>

          <label className="login-label">iniciá sesión</label>
          <input type="email" className="login-input" placeholder="ingresá tu e-mail" value={user} onChange={(e)=> setUser(e.target.value)}/>

          <label className="login-label">contraseña</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              className="login-input"
              placeholder="ej.: ............."
              onChange={(e)=> setPass(e.target.value)}
              value={pass}
            />
            <span className="icon" onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>


          <button className="login-btn" onClick={ingresarCuenta}>ingresar</button>


          
          <a className="forgot" href="#">olvidé mi contraseña</a>

          <button className="outline-btn" onClick={() => navigate("/Register")}>crear cuenta</button>
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


