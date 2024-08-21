
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.modules.css';

const NavBar = () => {
  return (
    <>
      <h1>Logo</h1>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/catalog" className="nav-link">Catalogo</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
