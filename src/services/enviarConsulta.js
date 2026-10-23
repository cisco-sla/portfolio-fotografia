import { claveWeb3Forms } from "..//data/enlaces";

/* Este archivo se crea para que capture datos del formulario y los 
envío a Web3forms. Se declara la Url en una constante, se exporta
una función enviarConsulta con los datos y la config (Post, tipo json)
Al objeto de datos, key - valor se le pasa el stringify para convertirlo 
en cadena de texto json y asi viaja hasta el servidor de Web3form. 
Finalmente, la respuesta del server se guarda en una constante 
para que envíe un mensaje de error si se cumple el condicional de que 
la respuesta no es positiva.   
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
