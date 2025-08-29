import { useState } from "react";
import Navbar from "../componentes/Navbar";
import "../css/projects.css";

export default function PaginaWhatsapp() {
  return (
    <>
      <Navbar />    
      <div className="panelWp">
        <h2>CARLOS OSEGUEDA</h2>
        <h2>+504 8738-1209</h2>
        <div className="qr"> <img src="whatsapp.png" /></div>
        <div className="infoWp">
            <button className="whatsapp" onClick={() => window.open("https://wa.link/n8nsi3", "_blank")}><h3>CONTACTAR</h3></button>
        </div>
      </div>
    </>
  );
}
