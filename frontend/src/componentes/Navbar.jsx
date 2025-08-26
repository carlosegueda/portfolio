import React from "react";
import Toggle from "./Switch";
import { Link } from "react-router-dom";
import Clock from "./Clock";

function Navbar() {
  return (
    <nav className="navbar flex items-center gap-4">
        
      <Link to="/" className="titulo">
        <h3 className="frame">INICIO</h3>
      </Link>

      <Link to="/contact">
        <h3 className="frame">CONTACTO</h3>
      </Link>

      <Link to="/tecnos">
        <h3 className="frame">TECNOLOGÍAS</h3>
      </Link>

      <Link to="/projects">
        <h3 className="frame">PROYECTOS</h3>
      </Link>
      {/*<Toggle /> */}
      
    </nav>
  );
}

export default Navbar;
