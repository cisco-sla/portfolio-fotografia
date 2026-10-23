import { useState, useEffect } from "react";

const URL_API = "https://picsum.photos/v2/list?page=1&limit=9";

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

  return (
    <main>
      <h1>Inicio</h1>
      {estado === "cargando" && <p>Cargando fotos...</p>}
      {estado === "error" && (
        <p role="alert">No pude cargar las fotos. Probá de nuevo más tarde.</p>
      )}
      {estado === "exito" && (
        <ul>
          {fotos.map((foto) => (
            <li key={foto.id}>{foto.author}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Inicio;
