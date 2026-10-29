//Reutilizo FotoCard – Importo la informacion de las fotos del archivo anterior y con un map armo el nuevo array que le paso a FotoCard

import FotoCard from "../components/FotoCard.jsx";
import { fotos } from "../data/fotos.js";
import "./Portfolio.css";

function Portfolio() {
  return (
    <main className="portfolio">
      <h1>Portfolio</h1>
      <p className="portfolio__intro">Una selección de mis fotografías.</p>
      <ul className="portfolio__galeria">
        {fotos.map((foto) => (
          <li key={foto.id}>
            <FotoCard
              imagen={foto.imagen}
              alt={foto.alt}
              titulo={foto.titulo}
              detalle={foto.descripcion}
              natural
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Portfolio;
