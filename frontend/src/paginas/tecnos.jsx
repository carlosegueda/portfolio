import Navbar from "../componentes/Navbar";
import "../css/tecnos.css";
import { useState } from "react";

export default function PaginaTecnologias() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="tituloTecnos">
        {" "}
        <h1>TECNOLOGÍAS</h1>
      </div>
      <div className="panelTecnos">
        <div className="tecno1" onClick={() => setIsOpen(true)}>
          {" "}
          <img src="htmlR.png" />
          <h1>HTML</h1>
        </div>

        

        <div className="tecno2">
          {" "}
          <img src="jsR.png" />
          <h1>JS</h1>
        </div>
        <div className="tecno3">
          {" "}
          <img src="cssR.png" />
          <h1>CSS</h1>
        </div>
        <div className="tecno4">
          {" "}
          <img src="pyR.png" />
          <h1>PYTHON</h1>
        </div>
        <div className="tecno5">
          {" "}
          <img src="reactR.png" />
          <h1>REACT</h1>
        </div>
        <div className="tecno6">
          {" "}
          <img src="tailwindR.png" />
          <h1>TAILWIND</h1>
        </div>
        <div className="tecno5">
          {" "}
          <img src="reactR.png" />
          <h1>REACT</h1>
        </div>
        <div className="tecno6">
          {" "}
          <img src="tailwindR.png" />
          <h1>TAILWIND</h1>
        </div>
        {isOpen && (
        <div className="overlay">
          <div className="modal">
            
            <button className="cerrar" onClick={() => setIsOpen(false)}>
              X
            </button>
            
            <div
              className="editable"
              contentEditable={true}
              suppressContentEditableWarning={true}
            >
              ✨ Aquí puedes escribir o poner código HTML...
            </div>
          </div>
        </div>
      )}
      </div>

      
    </>
  );
}
