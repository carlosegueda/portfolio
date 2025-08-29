import Navbar from "../componentes/Navbar";
import Clock from "../componentes/Clock";

export default function PaginaInicio() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // ruta del PDF en public
    link.download = "CV_CarlosOsegueda.pdf";
    window.open("/cv.pdf", "_blank"); // nombre al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div className="mainPanel">
        {" "}
        <h1>CARLOS&nbsp;&nbsp;OSEGUEDA</h1>
        <div class="imagen-flotante1">
          <img src="shine.png" />
        </div>
        <div class="imagen-flotante2">
          <img src="shine.png" />
        </div>
        <div class="imagen-flotante3">
          <img src="twostars.png" />
        </div>
        <div class="imagen-flotante4">
          <img src="behindfoto.png" />
        </div>
        <div class="imagen-flotante5">
          <img src="corner-der.png" />
        </div>
        <div class="imagen-flotante6">
          <img src="corner-izq.png" />
        </div>
        <div class="imagen-flotante7">
          <img src="mid.png" />
        </div>
        <div class="imagen-flotante8">
          <img src="midleft.png" />
        </div>
        <div className="part1">
          <div className="foto">
            <img src="carlos.png" />
          </div>
          <div className="cargo">
            <div className="titulo2">
              <h2>INGENIERO EN SISTEMAS</h2>
              <h3>DISEÑADOR UX/UI</h3>
            </div>

            <div className="parrafo">
              <p>
                CREADOR DE SOLUCIONES DIGITALES INNOVADORAS, ESCALABLES Y
                FUNCIONALES, UNIENDO DISEÑO MODERNO Y TECNOLOGÍA AVANZADA PARA
                EXPERIENCIAS DE USUARIO FLUIDAS.
              </p>
            </div>
          </div>
          <div className="cv">
            {" "}
            <div className="cvin">
              <Clock />
            </div>{" "}
            <div className="cv2" onClick={handleDownload}>
              <h3>DESCARGAR CV</h3>
            </div>
          </div>
        </div>
        <div className="part2"></div>
      </div>
    </>
  );
}
