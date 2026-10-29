/*Archivo del formulario de Contacto. Importa los datos de la funcion de enviarConsulta (enviarConsulta.js) y crea la variable de datos iniciales, y 
los mensajes de error a mostrar segun se den ciertas condiciones que están para validar los datos. 
*/
import { useState } from "react";
import "./Contact.css";
import { enviarConsulta } from "../services/enviarConsulta";

const datosIniciales = {
  nombre: "",
  email: "",
  mensaje: "",
};

/*Función para la validación: Primero desestructuramos "datos" (nombre, email y mensaje) Luego la constante errores que se "llena" si se cumplen las condiciones: En 
nombre se pide que se ingresen al menos 3 letras. El trim saca los espacios en los extremos. En email se valida que se escriba un email correcto (no valida que el 
mail exista, sino que se escriba "algo" - "@" - "algo" – "punto" – "algo". En mensaje se pide que al menos se escriban 10 caracteres. 
*/

function validar(datos) {
  const { nombre, email, mensaje } = datos;

  const errores = {};
  if (nombre.trim().length < 3) {
    errores.nombre = "Escribí tu nombre.";
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errores.email = "Escribí un email válido.";
  }
  if (mensaje.trim().length < 10) {
    errores.mensaje = "Contame tu consulta (mínimo 10 caracteres).";
  }
  return errores;
}

/*
Componente funcional para que en la interfaz se trabaje con los datos, los errores y el estado con useState: 
*datos (lo que el visitante escribe en todos los campos - arranca con los datosIniciales), 
*errores: la validadcion de errores de la funcion anterior (arranca vacio), 
*estado: estado del envio (enviando, exito, etc. - arranca en "inactivo").   
*/

function Contact() {
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState("inactivo");

  /*
Esta es la función que monitorea los cambios en el formulario. Está vinculada con el onChange del return del formulario. Se desestructura “name” y “value” de datos
para crear 2 variables (evento.target.name y evento.target.value y con setDatos y el spread creo un nuevo objeto (el original no se toca) y [name] se lo toma como 
clave para que sirva para los 3 casos 
*/

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  /*funcion asincrona para el evento Envío. En la constante erroresEncontrados se guardan eventuales errores con su clave. Con un if, si encuentra 1 clave ( > 0) de
error, el return trunca el envio. Caso contrario se envía la consulta y con el setEstado se cambia a “enviando”. Con el await (por eso está dentro del async) espera 
la respuesta del server antes de seguir. Si hay error del lado del server, o de red, el catch lo atrapa y el setEstado cambia a “error". Si no hay error, el estado 
pasa a “éxito”.
*/

  async function manejarEnvio(evento) {
    evento.preventDefault();

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
