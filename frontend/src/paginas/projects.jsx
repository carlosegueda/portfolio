import Navbar from "../componentes/Navbar";

export default function PaginaProyectos() {
  return (
    <>
      <Navbar />
      <h1>PROYECTOS</h1>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/gracias.html"
        netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="to" value="carlosegueda2002@gmail.com" />

        <div style={{ display: "none" }}>
          <label>
            No llenar: <input name="bot-field" />
          </label>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          autoComplete="name"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          autoComplete="email"
        />

        <textarea name="message" placeholder="Mensaje" required />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
