import Navbar from "../componentes/Navbar";
import "../css/tecnos.css";

export default function PaginaTecnologias() {
  return (
    <>
      <Navbar />
      <div className="titulo"> <h1>TECNOLOGÍAS</h1></div>
      <div className="panelTecnos">
        <div className="tecno1"> <img src="htmlN.png"/><h1>HTML</h1></div>
        <div className="tecno2"> <img src="jsN.png"/><h1>JS</h1></div>
        <div className="tecno3"> <img src="cssN.png"/><h1>CSS</h1></div>
        <div className="tecno4"> <img src="pyN.png"/><h1>PYTHON</h1></div>
        <div className="tecno5"> <img src="reactN.png"/><h1>REACT</h1></div>
        <div className="tecno6"> <img src="tailwindN.png"/><h1>TAILWIND</h1></div>
        <div className="tecno5"> <img src="reactN.png"/><h1>REACT</h1></div>
        <div className="tecno6"> <img src="tailwindN.png"/><h1>TAILWIND</h1></div>
      </div>
    </>
  );
}
