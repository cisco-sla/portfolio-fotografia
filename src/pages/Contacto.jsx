import Contact from "../components/Contact.jsx";
import Mapa from "../components/Mapa.jsx";
import "./Contacto.css";

function Contacto() {
  return (
    <main className="contacto">
      <h1>Contacto</h1>
      <div className="contacto__columnas">
        <Contact />
        <Mapa />
      </div>
    </main>
  );
}

export default Contacto;
