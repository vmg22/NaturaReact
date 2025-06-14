import React from 'react';
import '../components/styles/novedades.css';



const Novedades = () => {

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h2>¿Querés recibir nuestras novedades?</h2>
      <p>¡Registrate y aprovechá el cupón de primera compra!</p>

      <form className="formulario" onSubmit={HandleSubmit}>
        <div className="fila-inputs">
          <div className="campo">
            <label>nombre: (*)</label>
            <input type="text" placeholder="colocá tu nombre:" />
          </div>
          <div className="campo">
            <label>email: (*)</label>
            <input type="email" placeholder="colocá tu correo electrónico:" />
          </div>
          <div className="campo">
            <label>celular: (*)</label>
            <input type="tel" placeholder="colocá tu número celular:" />
          </div>
        </div>

        <div className="boton-container">
          <button className='footer-button' type="submit">enviar</button>
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
