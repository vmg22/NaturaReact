
import React, { useState } from 'react';
import '../styles/novedades.css';

const Novedades = () => {
  //  Creamos variables de estado para cada input
  //    Cada variable guardará el valor de su input correspondiente.
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');

  // Modificamos la función que se ejecuta al enviar el formulario
  const HandleSubmit = (e) => {
    // Prevenimos el comportamiento por defecto del formulario (recargar la página)
    e.preventDefault();

    // Verificación simple para asegurar que los campos no estén vacíos
    if (!nombre || !email || !celular) {
      alert('Por favor, completá todos los campos.');
      return; 
    }


    const mensaje = `
      Datos recibidos:
      -------------------
      Nombre: ${nombre}
      Email: ${email}
      Celular: ${celular}
    `;


    alert(mensaje);


    setNombre('');
    setEmail('');
    setCelular('');
  };

  return (
    <div className="form-container">
      <h2>¿Querés recibir nuestras novedades?</h2>
      <p>¡Registrate y aprovechá el cupón de primera compra!</p>

      <form className="formulario" onSubmit={HandleSubmit}>
        <div className="fila-inputs">
          <div className="campo">
            <label>nombre: (*)</label>
     
            <input
              type="text"
              placeholder="colocá tu nombre:"
 
              value={nombre}

              onChange={(e) => setNombre(e.target.value)}
              required 
            />
          </div>
          <div className="campo">
            <label>email: (*)</label>
            <input
              type="email"
              placeholder="colocá tu correo electrónico:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label>celular: (*)</label>
            <input
              type="tel"
              placeholder="colocá tu número celular:"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="boton-container">
          <button className="footer-button" type="submit">
            enviar
          </button>
        </div>

        <p className="nota">
          al registrarte, aceptás recibir comunicaciones de Natura de acuerdo con nuestra{' '}
          <a href="#">política de privacidad y términos de uso</a>.
        </p>
      </form>
    </div>
  );
};

export default Novedades;