import React from 'react';
import './ContactSection.modules.css'; 

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contactanos! </h2>
        <p className="section-description">
          Estas listo para la experienccia culinaria de tu vida? Contactanos hoy y hace tus reservas o eventos privados.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="email" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
