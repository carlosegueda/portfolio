import Navbar from "../componentes/Navbar";

export default function PaginaProyectos() {
  return (
    <>
      <Navbar />
      <h1>PROYECTOS</h1>

      <form
        name="contact"
        netlify
        netlify-honeypot="bot-field"
        action="/projects"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="to" value="carlosegueda2002@gmail.com" />

        <p hidden>
          <label>
            No llenar: <input name="bot-field" />
          </label>
        </p>

        <input type="text" name="nombre" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="mensaje" placeholder="Mensaje" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
