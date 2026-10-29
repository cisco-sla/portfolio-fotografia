/* Importo los hooks: useState para declarar la constante de estado para las fotos y el estado de carga; y el useEffect para la funcion cargarFotos para que haga el 
fetch de la llamada a la API. Con un try/catch caapturo las respuestas y actualizo el estado de la carga. Se utiliza la API del sitio "Lorem Picsum" que es un 
repositorio de fotografías - https://picsum.photos/ */

import { useState, useEffect } from "react";
import FotoCard from "../components/FotoCard.jsx";
import "./Inicio.css";

const URL_API = "https://picsum.photos/v2/list?page=4&limit=14";

function Inicio() {
  const [fotos, setFotos] = useState([]);
  const [estado, setEstado] = useState("cargando");

  useEffect(() => {
    async function cargarFotos() {
      try {
        const respuesta = await fetch(URL_API);
        if (!respuesta.ok) {
          throw new Error("Error ${respuesta.status}");
        }
        const datos = await respuesta.json();
        setFotos(datos);
        setEstado("exito");
      } catch (error) {
        console.error(error);
        setEstado("error");
      }
    }

    cargarFotos();
  }, []);

  /* Acá se usa visualmente la constante estado. Por ejemplo: si el resultado es identico a cargando, muestra un parrafo "Cargando fotos..." Si es identico a error", 
muestra el mensaje de error. Cuando el estado es "exito" mapeo el Array fotos y con una arrow function se arma la lista con el id de las fotos y le paso las props a 
FotoCard*/

  return (
    <main className="inicio">
      <h1>Inicio</h1>
      <p className="inicio__intro">
        Inspirate con estas fotos pero atentos: La Fotografía es un camino de
        ida.
      </p>
      <h2>Galería de Inspiración. Fuente: Lorem Picsum</h2>
      {estado === "cargando" && <p>Cargando fotos...</p>}
      {estado === "error" && (
        <p role="alert">No pude cargar las fotos. Probá de nuevo más tarde.</p>
      )}
      {estado === "exito" && (
        <ul className="inicio__galeria">
          {fotos.map((foto) => (
            <li key={foto.id}>
              <FotoCard
                imagen={`https://picsum.photos/id/${foto.id}/600/400`}
                alt={`Fotografía de ${foto.author}`}
                titulo={foto.author}
                detalle={`Original: ${foto.width} x ${foto.height} px`}
                enlace={foto.url}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Inicio;
("");
