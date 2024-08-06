import React from "react";
import "../css/principalPage.css"


export default function PrincipalPage() {
  return (
    <header className="hero">
      <nav className="nav__container">
        <div className="nav-logo">
          <img src="images/logo3.png" alt="Logo" className="navbar-logo" />
        </div>

        <ul className="nav__link nav__link--menu">
          <li className="nav__items">
            <a href="#" className="nav__links">Inicio</a>
          </li>
          <li className="nav__items">
            <a href="#" className="nav__links">Agendar cita</a>
          </li>
          <li className="nav__items">
            <a href="#" className="nav__links">Sobre nosotros</a>
          </li>
          <li className="nav__items">
            <a href="#" className="nav__links">Nuestros servicios</a>
          </li>

          <div>
            <img src="images/fondo.jpg" alt="Imagen" className="nav__img" />
          </div>
        </ul>
      </nav>

      <section className="hero__container container">
        <h1 className="hero__title">Bienvenido a un espacio de apoyo y comprensión</h1>
        <p className="hero__paragraph">
          En nuestra unidad de salud mental-Aurea, estamos aquí para acompañarte en cada paso hacia el bienestar, porque tu salud mental es tan importante como tu salud física.
        </p>
      </section>
    </header>
  );
}
