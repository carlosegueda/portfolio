import Navbar from "../componentes/Navbar";
import "../css/contact.css";
import emailjs from "emailjs-com";
import React, { useState } from "react";

export default function PaginaContacto() {
  const divs = Array.from({ length: 4 }, (_, i) => i + 1);

  const link = [
    "https://github.com/carlosegueda",
    "https://www.linkedin.com/in/carlos-osegueda-b9974337a",
    "/whatsapp",
    "/gmail",
  ];
  const imagenesList = ["git.png", "lkdn.png", "wa.png", "gmail.png"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Reemplaza estos valores con los tuyos propios
    const serviceID = "service_16x8b2i";
    const templateID = "template_f5suekw";
    const userID = "0vtl3G-DqiwN6EyKt";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Éxito:", response.status, response.text);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(
          "Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente."
        );
      });
  };



  return (
    <>
      <Navbar />

      <div className="panelContact">
        <div className="tituloContacto">
          {" "}
          <h1>CONTÁCTAME</h1>
        </div>
        <div className="sendMsj">
          {submitted && (
            <div>¡Mensaje enviado con éxito! Te contactaremos pronto.</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label htmlFor="name">NOMBRE:</label>
              <input
                type="text"
                id="name"
                name="name"
                autocomplete="off"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="email">EMAIL:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroupMsj">
              <label htmlFor="message">MENSAJE:</label>
              <textarea
                id="message"
                name="message"
                autocomplete="off"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="boton">
              <button type="submit">ENVIAR MENSAJE</button>
            </div>
          </form>
        </div>
        <div className="contactMe">
          <h2>carlosegueda2002@gmai.com</h2>
          <div className="redes">
            {divs.map((num) => (
              <button
                className="boton-red"
                onClick={() => window.open(`${link[num - 1]}`, "_blank")}
              >
                <div
                  key={num}
                  className="redes4"
                >
                  <img src={imagenesList[num - 1]} className="logo" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}
