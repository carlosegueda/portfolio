import Navbar from "../componentes/Navbar";
import "../css/tecnos.css";

export default function PaginaTecnologias() {
  return (
    <>
      <Navbar />
      <div className="panelTecnos">
        <div className="tecno"> <img src="hml5.png"/><h1>HTML</h1></div>
        <div className="tecno"> <img src="hml5.png"/><h1>JAVASCRIPT</h1></div>
        <div className="tecno"> <img src="hml5.png"/><h1>CSS</h1></div>
        <div className="tecno"> <img src="hml5.png"/><h1>PYTHON</h1></div>
        <div className="tecno"> <img src="hml5.png"/><h1>REACT</h1></div>
        <div className="tecno"> <img src="hml5.png"/><h1>TAILWIND</h1></div>
 
      </div>
    </>
  );
}
