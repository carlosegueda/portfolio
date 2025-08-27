import Navbar from "../componentes/Navbar";
import "../css/tecnos.css";
import { useState } from "react";

export default function PaginaTecnologias() {
  const [activeIndex, setActiveIndex] = useState(null);

  const tecnoList = Array.from({ length: 8 }, (_, i) => i + 1);
  const nombresList = [
    "HTML",
    "JS",
    "CSS",
    "PYTHON",
    "REACT",
    "TAILWIND",
    "MYSQL",
    "PINGA",
  ];
  const imagenesList = [
    "htmlN.png",
    "jsN.png",
    "cssN.png",
    "pyN.png",
    "reactN.png",
    "tailwindN.png",
    "htmlN.png",
    "reactN.png",
  ];

  const handleMouseDown = (index) => {
    setActiveIndex(index);

    // Escuchar cuando se suelte el mouse en cualquier parte
    const handleMouseUp = () => {
      setActiveIndex(null);
      window.removeEventListener("mouseup", handleMouseUp); // limpiar listener
    };

    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <Navbar />
      <div className="panelTecno">
        <div className="tituloTecno"><h1>TECNOLOGÍAS</h1></div>
        <div className="tecno-container">
        {nombresList.map((name, index) => (
          <div
            key={index}
            className={`tecno ${activeIndex === index ? "active" : ""} ${
              activeIndex !== null && activeIndex !== index ? "hidden" : ""
            }`}
            onMouseDown={() => handleMouseDown(index)}
          >
            <img src={imagenesList[index]} alt={name} />
            <span className="tecno-label">{name}</span>
          </div>
        ))}
      </div>
      </div>
      
    </>
  );
}
