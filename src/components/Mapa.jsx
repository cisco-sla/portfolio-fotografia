import "./Mapa.css";

const URL_MAPA =
  "https://www.openstreetmap.org/export/embed?bbox=-65.43405532836915%2C-24.793854597413198%2C-65.4200863838196%2C-24.786013747527264&amp;layer=mapnik&amp;marker=-24.78993423441664%2C-65.42707085609436";
const URL_MAPA_GRANDE =
  "https://www.openstreetmap.org/?mlat=-24.789934&amp;mlon=-65.427071#map=17/-24.789934/-65.427071";

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
      <a
        className="mapa__enlace"
        href={URL_MAPA_GRANDE}
        target="_blank"
        rel="noreferrer"
      >
        ¿Ampliar el mapa?
      </a>
    </section>
  );
}

export default Mapa;
