import Navbar from "../componentes/Navbar";
import "../css/contact.css";

export default function PaginaContacto() {
  return (
    <>
      <Navbar />
      <div className="tituloContacto">
        {" "}
        <h1>CONTÁCTAME</h1>
      </div>

      <div className="panelContact">
        <div className="sendMsj">
          <form
            id="form-mensaje"
            netlify
            netlify-honeypot="bot-field"
            action="/"
          >
            <input type="hidden" name="form-name" value="contact"></input>
            <input
              type="hidden"
              name="to"
              value="carlosegueda2002@gmail.com"
            ></input>
            <div className="inputGrupo">
              <label for="nombre">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                autocomplete="off"
                type="text"
                required
              />
            </div>

            <div className="inputGrupo">
              <label for="correo">Correo</label>
              <input
                id="correo"
                name="correo"
                autocomplete="off"
                type="text"
                required
              />
            </div>

            <div className="inputGrupo">
              <label for="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                autocomplete="off"
                type="text"
                required
              />
            </div>

            <button class="agregar" type="submit">
              <div class="front">
                <span>Agregar</span>
              </div>
            </button>
          </form>
        </div>
        <div className="contactMe"> </div>
      </div>
      <div></div>
    </>
  );
}
