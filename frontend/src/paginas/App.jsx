import { useState, useEffect } from "react";
import "../css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicio from "./inicio.jsx";
import PaginaContacto from "./contact.jsx";
import PaginaTecnologias from "./tecnos.jsx";
import PaginaProyectos from "./projects.jsx";
import PaginaWhatsapp from "./whatsapp.jsx";
import Navbar from "../componentes/Navbar";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Detecta pantallas con ancho CSS menor o igual a 400px
    const mediaQuery = window.matchMedia("(max-width: 400px)");

    // Actualiza el estado según la media query
    const handleChange = (e) => setIsMobile(e.matches);

    // Llama al inicio para establecer el estado correcto
    handleChange(mediaQuery);

    // Escucha cambios de tamaño de pantalla en tiempo real
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (isMobile) {
    return (
      <div>
        <PaginaInicio />
        <PaginaContacto />
        <PaginaTecnologias />
        <PaginaProyectos />
        <PaginaWhatsapp />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/contact" element={<PaginaContacto />} />
        <Route path="/tecnos" element={<PaginaTecnologias />} />
        <Route path="/projects" element={<PaginaProyectos />} />
        <Route path="/whatsapp" element={<PaginaWhatsapp />} />
      </Routes>
    </>
  );
}

export default App;
