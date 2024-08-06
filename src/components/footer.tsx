import React from "react";
import "./footer.css"; // Asegúrate de que el archivo CSS esté importado correctamente

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Unidad de salud mental - Aurea</p>
        <p className="footer-text">unidaddedsaludmental@aurea.vitamed.co</p>
        <p className="footer-text">Calle Falsa 123, Ciudad Inventada</p>
        <p className="footer-text">Tel: (123) 456-7890</p>
      </div>
    </footer>
  );
}

export default Footer;
