import React from "react";
import "./layout.css"; // Importa el archivo CSS para los estilos del layout
import Navbar from "./navbar"; // Asumiendo que tienes un componente Navbar
import Footer from "./footer"; // Importa el componente Footer

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
