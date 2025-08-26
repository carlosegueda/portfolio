import Navbar from "../componentes/Navbar";
import "../css/contact.css";
import emailjs from "emailjs-com";
import React, { useState } from "react";

export default function PaginaContacto() {

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
      <div className="tituloContacto">
        {" "}
        <h1>CONTÁCTAME</h1>
      </div>

      <div className="panelContact">
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
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="boton"><button type="submit">ENVIAR MENSAJE</button></div>
          </form>
        </div>
        <div className="contactMe"> </div>
      </div>
      <div></div>
    </>
  );
}
