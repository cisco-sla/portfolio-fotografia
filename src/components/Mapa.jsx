// Componente para el mapa. Se utiliza la URL de openstreetmap de codigo abierto. La Segunda URL de “Mapa Grande” es el enlace al Mapa original en OpenStreetMap.
import "./Mapa.css";

const URL_MAPA =
  "https://www.openstreetmap.org/export/embed?bbox=-65.43405532836915%2C-24.793854597413198%2C-65.4200863838196%2C-24.786013747527264&amp;layer=mapnik&amp;marker=-24.78993423441664%2C-65.42707085609436";

function Mapa() {
  return (
    <section className="mapa">
      <h2 className="mapa__titulo">Dónde encontrarme</h2>
      <iframe
        className="mapa__iframe"
        src={URL_MAPA}
        title="Zona en donde vivo"
        loading="lazy"
      />
    </section>
  );
}

export default Mapa;
