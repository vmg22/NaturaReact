import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../styles/MainRegister.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainRegister() {
  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState("");
  const [promos, setPromos] = useState(true);
  const navigate = useNavigate();

  // Nuevos campos
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState(""); // 
  const [rol_id] = useState(2); // correcto
  const validatePass = (pass) => {
    const minLength = pass.length >= 8;
    const upper = /[A-Z]/.test(pass);
    const lower = /[a-z]/.test(pass);
    const number = /\d/.test(pass);
    const special = /[!@#$%^&*]/.test(pass);
    return minLength && upper && lower && number && special;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePass(password)) {
      setError("La contraseña no cumple con los requisitos");
      return;
    }

    if (password !== repeatPass) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (!nombre || !email || !telefono || !direccion) {
      setError("Por favor completá todos los campos obligatorios");
      return;
    }

    try {
      const fullName = `${nombre}`;

      const response = await axios.post("http://localhost:3001/usuarios", {
        nombre: fullName,
        email,
        password,
        direccion, // si no se usa
        telefono,
        rol_id
      });

      if (response.status === 201) {
        alert("Cuenta creada con éxito");
        navigate("/login");
      } else {
        setError("No se pudo crear el usuario");
      }
    } catch (err) {
      console.error(err);
      setError("Error al conectarse al servidor");
    }
  };

  return (
    <div className="register-container">
      <h4>Crear cuenta</h4>
      <p>
        ¿Nuevo por acá? Completá tu registro y descubrí ofertas especiales para
        vos
      </p>

      <button className="google-btn">
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google"
        />
        Registrarme con Google
      </button>

      <br />

      <div className="input-icon">
        <input
          placeholder="Ingresá tu nombre y apellido"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="input-icon">
        <input
          placeholder="Ingresá tu e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <label>
        <input
          type="checkbox"
          checked={promos}
          onChange={(e) => setPromos(e.target.checked)}
        />
        Deseo recibir promociones y noticias de Natura por e-mail
      </label>

      <div className="input-icon">
        <input
          placeholder="Creá una password"
          type={showPass ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span onClick={() => setShowPass(!showPass)}>
          {showPass ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <ul className="password-tips">
        <li>✔ mínimo un carácter especial</li>
        <li>✔ un número</li>
        <li>✔ una letra mayúscula</li>
        <li>✔ una letra minúscula</li>
        <li>✔ al menos 8 caracteres</li>
      </ul>

      <div className="input-icon">
        <input
          placeholder="Repetí tu password"
          type={showRepeatPass ? "text" : "password"}
          value={repeatPass}
          onChange={(e) => setRepeatPass(e.target.value)}
        />
        <span onClick={() => setShowRepeatPass(!showRepeatPass)}>
          {showRepeatPass ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <div className="input-icon">
        <input
          placeholder="Direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <div className="input-icon">
        <input
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button onClick={handleSubmit}>Crear cuenta</button>
    </div>
  );
}

export default MainRegister;
