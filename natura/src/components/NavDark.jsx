import React from "react";
import './styles/nav.Dark.css';

const NavDark = () => {
  return (
    <div className="menu-horizontal">
      <ul>
        {" "}
        <button>sobre natura</button>
        <li>sobre natura</li>
        <li>sustentabilidad</li>
      </ul>

      <ul><button>revista natura</button></ul>
      <ul>
        <button>consultoria</button>
        <li>quiero ser consultor/a</li>
        <li>soy consultor/a</li>
      </ul>

      <ul>
        <button>quiero vender</button>
        <li>por internet</li>
        <li>por revista</li>
      </ul>

      <ul>
        <button>ayuda</button>
        <li>ayuda y contacto</li>
        <li>informacion sobre producto</li>
      </ul>
      <ul><button>blog</button></ul>
    </div>

  );
};

export default NavDark;
