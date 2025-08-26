import Navbar from "../componentes/Navbar";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function PaginaProyectos() {
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
      <h1>PROYECTOS</h1>
      {submitted && (
        <div>¡Mensaje enviado con éxito! Te contactaremos pronto.</div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar Mensaje</button>
      </form>
    </>
  );
}
