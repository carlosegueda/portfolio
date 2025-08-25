import { useState } from "react";
import "../css/index.css";
import { Routes, Route } from "react-router-dom";
import PaginaInicio from "./inicio.jsx"
import PaginaContacto from "./contact.jsx"
import PaginaTecnologias from "./tecnos.jsx"
import PaginaProyectos from "./projects.jsx"

function App() {
  //AQUI EDITO MI HTML
  return (
    <>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/contact" element={<PaginaContacto />} />
        <Route path="/tecnos" element={<PaginaTecnologias />} />
        <Route path="/projects" element={<PaginaProyectos />} />
      </Routes>
      
    </>
  );
}

export default App;
