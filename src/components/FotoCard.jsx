import "./FotoCard.css";

function FotoCard({ imagen, alt, titulo, detalle, enlace, natural = false }) {
  return (
    <article className={natural ? "foto-card foto-card--natural" : "foto-card"}>
      <img
        className="foto-card__imagen"
        src={imagen}
        alt={alt}
        width={natural ? undefined : 600}
        height={natural ? undefined : 400}
        loading={natural ? undefined : "lazy"}
      />
      <div className="foto-card__info">
        <h3 className="foto-card__titulo">{titulo}</h3>
        <p className="foto-card__detalle">{detalle}</p>
        {enlace && (
          <a
            className="foto-card__enlace"
            href={enlace}
            target="_blank"
            rel="noreferrer"
          >
            Ver foto original
          </a>
        )}
      </div>
    </article>
  );
}

export default FotoCard;
