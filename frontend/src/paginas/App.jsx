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
