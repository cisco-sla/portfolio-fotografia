import { claveWeb3Forms } from "..//data/enlaces";

/* Este archivo contiene la función para el envío del formulario de contacto. Importo la clave del archivo anterior y le paso la URL a donde la tiene que enviar. Luego exporta la 
funcion asincrónica enviarConsulta con los datos nombre, email, mensaje. Espera la respuesta y el JSON se convierte a cadena de texto.  
Se agrega una condición en la que si la respuesta del fetch NO es positiva, o NO success lance un error. 
*/

const URL_ENVIO = "https://api.web3forms.com/submit";

export async function enviarConsulta({ nombre, email, mensaje }) {
  const respuesta = await fetch(URL_ENVIO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: claveWeb3Forms,
      subject: "Nueva consulta desde la web de fotografía",
      name: nombre,
      email: email,
      message: mensaje,
    }),
  });
  const resultado = await respuesta.json();

  if (!respuesta.ok || !resultado.success) {
    throw new Error(resultado.message || "No se pudo enviar la consulta.");
  }
}
