import React from 'react';
import './Footer.modules.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <hr></hr>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <h5>Sobre nosotros</h5>
          <p>Somos un equipo dedicado a proveer las experiencias culinarias más exquisitas.</p>
        </div>
        <div className="footer-item">
          <h5>Contáctanos</h5>
          <p>Email: info@gastronomiccompany.com</p>
          <p>Phone: +54 9 (555) 555-5555</p>
        </div>
        <div className="footer-item">
          <h5>Follow Us</h5>
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Compañía Gastronómica. Todos los derechos reservados.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
