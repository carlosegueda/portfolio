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
    "NODE.JS",
  ];
  const imagenesList = [
    "htmlN.png",
    "jsN.png",
    "cssN.png",
    "pyN.png",
    "reactN.png",
    "tailwindN.png",
    "sqlN.png",
    "nodeN.png",
  ];

  const infoList = [
    "CONSTRUCCIÓN DE ESTRUCTURAS SEMÁNTICAS, FORMULARIOS Y VALIDACIÓN DE DATOS, ACCESIBILIDAD Y SEO BÁSICO",
    "LAYOUTS CON DISPLAYS, ANIMACIONES Y TRANSICIONES SUAVES, VARIABLES CSS Y SELECTORES AVANZADOS",
    "MANIPULACIÓN DEL DOM, MANEJO DE EVENTOS Y LÓGICA DE APLICACIONES, CONSUMO DE APIS Y PROMESAS",
    "AUTOMATIZACIÓN DE TAREAS Y SCRIPTS, LÓGICA DE PROGRAMACIÓN Y OOP, PROCESAMIENTO DE DATOS Y ARCHIVOS",
    "COMPONENTES REUTILIZABLES Y MODULARES, GESTIÓN DE ESTADO CON HOOKS, RUTAS DINÁMICAS CON REACT ROUTER",
    "USO DE CLASES UTILITY PARA DISEÑO RÁPIDO, CREACIÓN DE LAYOUTS RESPONSIVOS, PERSONALIZACIÓN DE TEMAS Y COMPONENTES",
    "CONSULTAS AVANZADAS: JOINS, GROUP BY, SUBCONSULTAS, DISEÑO Y NORMALIZACIÓN DE BASES DE DATOS, INTEGRACIÓN CON APLICACIONES WEB",
    "CREACIÓN DE SERVIDORES Y APIS RESTFUL, GESTIÓN DE RUTAS, MIDDLEWARE Y ERRORES, INTEGRACIÓN CON BASES DE DATOS",
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
        <div className="tituloTecno">
          <h1>TECNOLOGÍAS</h1>
        </div>
        <div className="tecno-container">
          {nombresList.map((name, index) => (
            <div
              key={index}
              className={`tecno ${activeIndex === index ? "active" : ""} ${
                activeIndex !== null && activeIndex !== index ? "hidden" : ""
              }`}
              onMouseDown={() => handleMouseDown(index)}
            >
              <img src={imagenesList[index]} alt={name} className="icono" />
              <span className="tecno-label">{name}</span>
              <div className="tecno-info">{infoList[index]}</div>
              <div className="stars">
                {" "}
                <img src="star.png" className="estrella1" />{" "}
                <img src="star.png" className="estrella1" />{" "}
                <img src="star.png" className="estrella1" />{" "}
                <img src="star.png" className="estrella1" />{" "}
                <img src="star.png" className="estrella1" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="part2">
        <div className="Certificados">
          <h1>CERTIFICACIONES</h1>
          <div className="certf">
            <div onClick={() => window.open("infopSQLPDF.pdf", "_blank")}>
              {" "}
              <img src="infopSQL.jpg" />
              <h3>BASE DE DATOS MYSQL</h3> <h3>INFOP</h3>
              <h3>07/24</h3>
            </div>
            <div onClick={() => window.open("infopPyPDF.pdf", "_blank")}>
              {" "}
              <img src="infopPY.jpg" /> <h3>PROGRAMACIÓN EN PYTHON</h3>{" "}
              <h3>INFOP</h3> <h3>07/24</h3>
            </div>
            <div onClick={() => window.open("infopWebPDF.pdf", "_blank")}>
              {" "}
              <img src="infopPY.jpg" /> <h3>DISEÑO WEB</h3> <h3>INFOP</h3>{" "}
              <h3>06/25</h3>
            </div>
            <div onClick={() => window.open("infopExcelPDF.pdf", "_blank")}>
              {" "}
              <img src="infopPY.jpg" />
              <h3>EXCEL AVANZADO</h3> <h3>INFOP</h3> <h3>06/25</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
