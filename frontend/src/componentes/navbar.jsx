import React from "react";
import Toggle from "./Switch"; // tu componente de toggle
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

        <Link to="/" className="titulo"><div className="frame">
        INICIO
      </div></Link>
      
      <Link to="/contact" ><div className="frame">
        CONTACTO
      </div></Link>
      

      <Link to="/tecnos" ><div className="frame">
        TECNOLOGÍAS
      </div></Link>
      

      <Link to="/projects" ><div className="frame">
        PROYECTOS
      </div></Link>
      

      
     
      <Toggle />
    </nav>
  );
}

export default Navbar;
