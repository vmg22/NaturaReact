import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/MainRegister.css";

function MainRegister() {
  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState("");
  const [promos, setPromos] = useState(true); // estado para promociones

  // Función de validaciones
  const validatePass = (pass) => {
    // password tiene:
    // - al menos 8 caracteres
    // - 1 mayúscula
    // - 1 minúscula
    // - 1 número
    // - 1 carácter especial
    const minLength = pass.length >= 8;
    const upper = /[A-Z]/.test(pass);
    const lower = /[a-z]/.test(pass);
    const number = /\d/.test(pass);
    const special = /[!@#$%^&*]/.test(pass);
    return minLength && upper && lower && number && special;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePass(password)) {
      setError("La password no cumple con los requisitos de seguridad");
      return;
    }
    if (password !== repeatPass) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setError("");
    console.log("Registro exitoso");
  };

  return (
    <div className="register-container">
      <h2>Crear cuenta</h2>
      <p>
        ¿Nuevo por acá? Completá tu registro y descubrí ofertas especiales para
        vos
      </p>

      <button className="google-btn">
        <img src="https://developers.google.com/identity/images/g-logo.png"  alt="Google" style={{ width: "20px" }} />
        Registrarme con Google
      </button>
<br />
      {/* nombre, apellido, email */}
      <div className="input-icon">
        <input placeholder="Ingresá tu nombre" />
      </div>

      <div className="input-icon">
        <input placeholder="Ingresá tu apellido" />
      </div>

      <div className="input-icon">
        <input placeholder="Ingresá tu e-mail" type="email" />
      </div>

      {/* casilla de promociones */}
      <label>
        <input
          type="checkbox"
          checked={promos}
          onChange={(e) => setPromos(e.target.checked)}
        />
        Deseo recibir promociones y noticias de Natura por e-mail
      </label>

      {/* password */}
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

      {/* tips de password */}
      <ul className="password-tips">
        <li>✔ como mínimo un carácter especial (ex.: "@", "#", "!", "%")</li>
        <li>✔ un número como mínimo (0 a 9)</li>
        <li>✔ como mínimo una letra mayúscula</li>
        <li>✔ como mínimo una letra minúscula</li>
        <li>✔ como mínimo 8 caracteres</li>
        <li>✔ password segura (evitar términos comunes)</li>
      </ul>

      {/* repetir password */}
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

      {/* género en línea antes de dni y fecha de nacimiento */}
      <div className="gender-row">
        <label>Género (opcional)</label>
        <input id="femenino" name="genero" type="radio" value="femenino" />
        <label htmlFor="femenino">Femenino</label>

        <input id="masculino" name="genero" type="radio" value="masculino" />
        <label htmlFor="masculino">Masculino</label>

        <input id="otro" name="genero" type="radio" value="otro" />
        <label htmlFor="otro">No especificar</label>
      </div>

      {/* resto de inputs con estilo consistente */}
      <div className="input-icon">
        <input placeholder="DNI" />
      </div>

      <div className="input-icon">
        <input type="date" />
      </div>

      <div className="input-icon">
        <input placeholder="Teléfono" />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button onClick={handleSubmit}>Crear cuenta</button>
    </div>
  );
}

export default MainRegister;
