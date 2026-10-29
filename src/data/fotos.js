/* Este archivo contiene mi Array de Objetos que son cada foto guardada en ../assets/fotos/. Import.meta.glob es una función de Vite que trae todas las fotos de 
una sola vez, para no tener que hacer 19 imports. El eager hace que se carguen las imágenes inmediatamente*/
const imagenes = import.meta.glob("../assets/photos/*.jpg", {
  import: "default",
  eager: true,
});

/* La función que busca las imagenes. Antes de exportar le agregue un condicional para que avise si hay errores con la ruta o los archivos. Esto para que haya 
un aviso en vez de dejar la imagen vacía sin que diga nada.*/

function img(nombre) {
  const ruta = imagenes[`../assets/photos/${nombre}`];
  if (!ruta) {
    throw new Error(`No existe la foto: ${nombre}`);
  }
  return ruta;
}

export const fotos = [
  {
    id: 1,
    imagen: img("20250416_192432.jpg"),
    titulo: "Esperando a los niños",
    descripcion: "Foto tomada con celular en una plaza escondida",
    alt: "Foto titulada Esperando a los niños tomada con celular en una plaza escondida",
  },
  {
    id: 2,
    imagen: img("DSC_6740.jpg"),
    titulo: "Retrato de una pequeña gran artista",
    descripcion: "Retrato de una Artista, con juego de sombras",
    alt: "Foto retrato de una chica con su guitarra",
  },
  {
    id: 3,
    imagen: img("DSC_6974-2.jpg"),
    titulo: "Concentrada con mis dulces",
    descripcion: "Retrato bokeh de una niña en el parque con su golosina",
    alt: "Retrato bokeh de una niña en el parque con su golosina",
  },
  {
    id: 4,
    imagen: img("DSC_7080.jpg"),
    titulo: "La verdadera Teoría de Cuerdas",
    descripcion: "Foto close up de un artista urbano",
    alt: "Foto close up de un artista urbano",
  },
  {
    id: 5,
    imagen: img("DSC_7083.jpg"),
    titulo: "Emoción urbana",
    descripcion: "Foto de artista urbano en la peatonal de Salta",
    alt: "Foto de artista urbano en la peatonal de Salta",
  },
  {
    id: 6,
    imagen: img("DSC_7130.jpg"),
    titulo: "Tobogán",
    descripcion: "Foto de un tobogan en contrapicado",
    alt: "Foto de un tobogan en contrapicado",
  },
  {
    id: 7,
    imagen: img("DSC_7347.jpg"),
    titulo: "Mirada calma",
    descripcion: "Retrato de una abuelita con una mirada dulce",
    alt: "Retrato de una abuelita con una mirada dulce",
  },
  {
    id: 8,
    imagen: img("DSC_7365.jpg"),
    titulo: "Colores gigantes",
    descripcion:
      "Foto en plano cerrado de una reja de lápices en un jardín de infantes",
    alt: "Foto en plano cerrado de una reja de lápices en un jardín de infantes",
  },
  {
    id: 9,
    imagen: img("DSC_7373.jpg"),
    titulo: "Una flor en el cemento",
    descripcion: "Foto tipo bokeh de una flor en un cantero de la ciudad",
    alt: "Foto tipo bokeh de una flor en un cantero de la ciudad",
  },
  {
    id: 10,
    imagen: img("DSC_7379.jpg"),
    titulo: "Un buen consejo",
    descripcion: "Foto con plano cerrado de una señal ferroviaria",
    alt: "Foto con plano cerrado de una señal ferroviaria",
  },
  {
    id: 11,
    imagen: img("DSC_7394.jpg"),
    titulo: "El Cuchi",
    descripcion:
      "Foto en B/N de la estatua del Cuchi Leguizamon en el centro de la ciudad de Salta",
    alt: "Foto de la estatua del Cuchi Leguizamon en el centro de la ciudad de Salta",
  },
  {
    id: 12,
    imagen: img("DSC_7395.jpg"),
    titulo: "San Francisco de noche",
    descripcion: "Foto de la Iglesia San Francisco de noche",
    alt: "Foto de la Iglesia San Francisco de noche",
  },
  {
    id: 13,
    imagen: img("DSC_7714.jpg"),
    titulo: "Chill",
    descripcion:
      "Retrato de cuerpo entero de un skater tomada en el parque bicentenario de Salta",
    alt: "Retrato de cuerpo entero de un skater tomada en el parque bicentenario de Salta",
  },
  {
    id: 14,
    imagen: img("DSC_7728.jpg"),
    titulo: "La acrobacia de los pibes",
    descripcion:
      "Foto de plano abierto de un skater capturado en el aire en pleno salto",
    alt: "Foto de plano abierto de un skater capturado en el aire en pleno salto",
  },
  {
    id: 15,
    imagen: img("DSC_8831.jpg"),
    titulo: "¿Me dejan tocar la guitarra?",
    descripcion: "Retrato de un niño en B/N con alma de Artista",
    alt: "Retrato de un niñito con alma de Artista y una guitarra",
  },
  {
    id: 16,
    imagen: img("DSC_8868-2.jpg"),
    titulo: "Juntos",
    descripcion: "Retrato de una pareja en B/N en espacio negativo",
    alt: "Retrato de una pareja en B/N en espacio negativo",
  },
  {
    id: 17,
    imagen: img("DSC_9342.jpg"),
    titulo: "Guanaco",
    descripcion:
      "Foto de un guanaco al pie de la Cuesta del Obispo, tomada en B/N con realce de rojos para resaltar el pelaje",
    alt: "Foto de un guanaco al pie de la Cuesta del Obispo, tomada en B/N con realce de rojos para resaltar el pelaje",
  },
  {
    id: 18,
    imagen: img("IMG-20201130-WA0085.jpg"),
    titulo: "Con calma",
    descripcion:
      "Foto de plano abierto de los cerros al pié de la Cuesta del Obispo",
    alt: "Foto de plano abierto de los cerros al pié de la Cuesta del Obispo",
  },
  {
    id: 19,
    imagen: img("IMG-20201130-WA0096.jpg"),
    titulo: "La cima",
    descripcion:
      "Foto de plano abierto de la cima del cerro al pié de la Cuesta del Obispo, en B/N con contraste del cielo",
    alt: "Foto de plano abierto de la cima del cerro al pié de la Cuesta del Obispo, en B/N con contraste del cielo",
  },
];
