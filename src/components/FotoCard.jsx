/* Esta es una plantilla para sr reutilizada tanto por Inicio.jsx que trae las fotos de la API, como por Portfolio.jsx con mi Array de fotografías propias (según el 
caso, cada página pasa los datos por props). Para no reescribir código de forma innesesaria, incluyo la prop “natural” con operadores ternarios, de forma tal que 
si la foto viene de mi Portfolio la deja en natural = true y por ende no modifica la imagen y la muestra tal como es (vertical, horizontal, etc.). Todas las demás 
que vengan de otro origen, la recorta (600x400)*/

import "./FotoCard.css";

/* Con la función recibimos las props y desestructuro y con los ternarios se encarga de armar la FotoCard para Inicio o para Portfolio. Nota: Las fotos que vienen
por la API traen la prop "enlace". Mis fotos personales no vienen con la prop "enlace" pero a su vez si trae la prop "natural".*/

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
