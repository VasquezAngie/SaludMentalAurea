import { Link } from "react-router-dom";
import React from "react";

interface defaultLayoutProps {
  children?: React.ReactNode;
}
export default function defaultLayout({ children }: defaultLayoutProps) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}