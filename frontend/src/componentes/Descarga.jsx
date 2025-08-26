function DescargarCV() {
  const handleClick = () => {
    window.location.href = "/cv.pdf"; // abre el PDF en el navegador
  };

  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer", padding: "10px", background: "#eee", width: "150px", textAlign: "center" }}
    >
      Descargar CV
    </div>
  );
}

export default DescargarCV;