import { useState } from "react";
import Navbar from "../componentes/Navbar";
import "../css/projects.css";

export default function PaginaProyectos() {
  return (
    <>
      <Navbar />
      <div className="panelProy">
        <div className="base"></div>
        <div className="tituloProy">
          <h1>PROYECTOS</h1>
        </div>
        <div className="proyectos">
          <div className="proyecto1">
            <h1>GESTOR DE INVENTARIO</h1>
            <div className="infoProy">
              <img src="inventory.png" onClick={() => window.open("https://github.com/carlosegueda/inventory_manager", "_blank")}/>{" "}
              <p>
                • APLICACIÓN WEB COMPLETA DESARROLLADA CON HTML, CSS,
                JAVASCRIPT, NODE.JS, EXPRESS Y SQL QUE PERMITE
                GESTIONAR EL INVENTARIO DE MANERA EFICIENTE.
                <span class="espacio"></span>• PERMITE REGISTRAR, EDITAR Y
                VISUALIZAR PRODUCTOS EN STOCK, GENERAR FACTURAS AL
                REALIZAR VENTAS Y ACTUALIZAR AUTOMÁTICAMENTE LAS CANTIDADES
                DISPONIBLES.
                <span class="espacio"></span>• INCLUYE UN FLUJO COMPLETO DE
                VENTA E INVENTARIO PARA OPTIMIZAR LA OPERACIÓN DIARIA DEL
                NEGOCIO.
              </p>
            </div>
            <div className="links">
              <button onClick={() => window.open("https://github.com/carlosegueda/inventory_manager", "_blank")}>
                <h3>VISITAR</h3>
              </button>
            </div>
          </div>
          <div className="proyecto2">
            <h1>PILL BUDDY - SITIO WEB</h1>
            <div className="infoProy">
              <img src="pillbuddy.png" />{" "}
              <p>
                • APLICACIÓN WEB ESTÁTICA DESARROLLADA CON REACT, HTML Y CSS,
                DISEÑADA PARA UN PASTILLERO ELECTRÓNICO.
                <span class="espacio"></span>• DESTACA POR UNA EXPERIENCIA DE
                USUARIO INTUITIVA, INTERFACES CLARAS Y ATRACTIVAS, CON JERARQUÍA
                VISUAL DEFINIDA Y ELEMENTOS DE DISEÑO COHERENTES.
                <span class="espacio"></span>• EL DISEÑO UX/UI ESTÁ ORIENTADO A
                FACILITAR LA INTERACCIÓN, MEJORAR LA USABILIDAD Y TRANSMITIR
                CONFIANZA Y PROFESIONALISMO A LOS USUARIOS.
              </p>
            </div>
            <div className="links">
              <button className="visitar" onClick={() => window.open("https://pill-buddy.netlify.app", "_blank")}>
                <h3>VISITAR</h3>
              </button>
            </div>
          </div>
          <div className="proyecto3">
            <h1>PROYECTO 3 - NO SE AUN</h1>
            <div className="infoProy">
              <img src="reactR.png" />{" "}
              <p>
                • APLICACIÓN WEB ESTÁTICA DESARROLLADA CON REACT, HTML Y CSS,
                DISEÑADA PARA UN PASTILLERO ELECTRÓNICO.
                <span class="espacio"></span>• DESTACA POR UNA EXPERIENCIA DE
                USUARIO INTUITIVA, INTERFACES CLARAS Y ATRACTIVAS, CON JERARQUÍA
                VISUAL DEFINIDA Y ELEMENTOS DE DISEÑO COHERENTES.
                <span class="espacio"></span>• EL DISEÑO UX/UI ESTÁ ORIENTADO A
                FACILITAR LA INTERACCIÓN, MEJORAR LA USABILIDAD Y TRANSMITIR
                CONFIANZA Y PROFESIONALISMO A LOS USUARIOS.
              </p>
            </div>
            <div className="links">
              <button>
                <h3>VISITAR</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
