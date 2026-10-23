import { useState } from "react";
import "./Contact.css";
import { enviarConsulta } from "../services/enviarConsulta";

/*Archivo de la sección de Contacto. Importa los datos de la funcion de enviarConsulta
(enviarConsulta.js) y crea la variable de datos iniciales, y los mensajes de error 
a mostrar segun se den ciertas condiciones que se ponen para validar los datos. 
*/
const datosIniciales = {
  nombre: "",
  email: "",
  mensaje: "",
};

function validar(datos) {
  const errores = {};
  if (datos.nombre.trim().length < 2) {
    errores.nombre = "Escribí tu nombre.";
  }
  if (!/^\S+@\S+\.\S+$/.test(datos.email)) {
    errores.email = "Escribí un email válido.";
  }
  if (datos.mensaje.trim().length < 10) {
    errores.mensaje = "Contame tu consulta (mínimo 10 caracteres).";
  }

  return errores;
}

/*
Función para declarar las 3 constantes con useState: 
*datos (lo que el visitante escribe en todos los campos), 
*errores: la validadcion de errores de la funcion anterior,
*estado: estado del envio (enviando, exito, etc)  
*/
function Contact() {
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState("inactivo");

  /*
Funciónes para los eventos (cambios y envio de mensaje) 
Usamos desestructuración de las propiedades y el spread para copiar las propiedades 
en un objeto nuevo y no modificar el estado original. 
*/

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  async function manejarEnvio(evento) {
    evento.preventDefault(); //previene recargar la página

    /*Se validan los datos. Si hay errrores corta la ejecucion. Si no
hace la peticion de enviar los datos al server. Con un try/catch seteamos 
que si tiene exito, actualiza datosIniciales con el state "exito". Caso cantrario
captura el el error y setea el estado en "error.*/

    const erroresEncontrados = validar(datos);
    setErrores(erroresEncontrados);
    if (Object.keys(erroresEncontrados).length > 0) {
      return;
    }
    setEstado("enviando");
    try {
      await enviarConsulta(datos);
      setEstado("exito");
      setDatos(datosIniciales);
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
      setEstado("error");
    }
  }

  /*Aca se define el formulario, con sus campos y el comportamiento, 
ej. onSubmit: accion al presionar el boton > envía el mensaje. */

  return (
    <section className="contact">
      <h2 className="contact__titulo">Dejame un mensaje</h2>

      <form className="contact__formulario" onSubmit={manejarEnvio} noValidate>
        <div className="contact__campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            value={datos.nombre}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.nombre)}
          />
          {errores.nombre && <p className="contact__error">{errores.nombre}</p>}
        </div>

        <div className="contact__campo">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={datos.email}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.email)}
          />
          {errores.email && <p className="contact__error">{errores.email}</p>}
        </div>

        <div className="contact__campo">
          <label htmlFor="mensaje">Consultas</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={datos.mensaje}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.mensaje)}
          />
          {errores.mensaje && (
            <p className="contact__error">{errores.mensaje}</p>
          )}
        </div>

        <button
          className="contact__boton"
          type="submit"
          disabled={estado === "enviando"}
        >
          {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
        </button>

        {estado === "exito" && (
          <p className="contact__mensaje contact__mensaje--exito" role="status">
            ¡Gracias! Recibí tu consulta y te responderé a la brevedad.
          </p>
        )}
        {estado === "error" && (
          <p className="contact__mensaje contact__mensaje--error" role="alert">
            No se pudo enviar tu consulta. Probá de nuevo en unos minutos.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
