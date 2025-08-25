import { useState } from "react";
import "../css/App.css";


function App() {
  //AQUI EDITO MI HTML
  return (
    <>
      <nav class="navbar">
        <div className="frame"> <a href="index.html">INICIO</a> </div>
        <div className="frame"><a href="contact.html">CONTACTO</a></div>
        <div className="frame"><a href="tecnos.html">TECNOLOGÍAS</a></div>
        <div className="frame"><a href="projects.html">PROYECTOS</a></div>
      </nav>
      
      <div className="mainPanel"> <h1>CARLOS OSEGUEDA</h1> <br /> <h2>DESARROLLADOR WEB</h2> <br /> <h3>CREADOR DE SOLUCIONES DIGITALES INNOVADORAS, ESCALABLES Y FUNCIONALES, UNIENDO DISEÑO MODERNO Y TECNOLOGÍA AVANZADA PARA EXPERIENCIAS DE USUARIO FLUIDAS.</h3></div>
      
    </>
  );
}

export default App;
