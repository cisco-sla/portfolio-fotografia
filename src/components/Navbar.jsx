import { Link, NavLink } from "react-router";
import "./Navbar.css";

//Array con los objetos del menú: texto visible y ruta de cada página.
const enlaces = [
  { texto: "Inicio", destino: "/" },
  { texto: "Portfolio", destino: "/portfolio" },
  { texto: "Contacto", destino: "/contacto" },
];

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__inicio">
        Francisco Galaso - Fotografía
      </Link>
      <nav>
        <ul className="navbar__lista">
          {enlaces.map((enlace) => (
            <li key={enlace.destino}>
              <NavLink to={enlace.destino} end={enlace.destino === "/"}>
                {enlace.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
