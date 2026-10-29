import { Link, NavLink } from "react-router";
import "./Navbar.css";

// Array de objetos del menú: texto visible + la ruta de cada página.
const enlaces = [
  { texto: "Inicio", destino: "/" },
  { texto: "Portfolio", destino: "/portfolio" },
  { texto: "Contacto", destino: "/contacto" },
];

/* Se usa el componente Link para que en la imagen del logo, navegue hacia Inicio sin recargar todo el sitio. A su vez a la lista desordenada del Menú de navegación,
le paso un map para el nombre y el destino del enlace. Agrgué el end={enlace.destino === "/"} porque todas las direcciones inician en la raiz "/", por lo tanto si
hay coincidencia exacta con la pagina de Inicio que es la raiz, solo deja activa a esa pagina y no a las demas) */

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
