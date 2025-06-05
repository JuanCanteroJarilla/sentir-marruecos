export const QuadsBuggies = [
  {
    id: 1,
    location: `Merzouga`,

    description: `Te imaginas recorrer las dunas del Sahara a toda velocidad en un quad o un buggy? Con Sentir
        Marruecos, esa aventura deja de ser un sueño para convertirse en pura adrenalina. Te llevamos
        por las rutas más emocionantes del desierto, antiguamente reservadas para los valientes del
        París Dakar.
        Prepárate para sentir la libertad del desierto, la emoción del motor y paisajes que te dejarán sin
        aliento.`,
    zone: `Desierto del Sahara - Merzouga`,
    vehicle: `Quad o Buggy`,
    modality: [
      `Excursiones por horas (ideal para una aventura corta)`,
      `Alquiler por jornadas completas (para los más atrevidos)`,
    ],
    included: [
      `Actividad opcional para añadir adrenalina a tu ruta`,
      `Rutas por pistas, dunas y paisajes espectaculares`,
    ],
    combine: [],
    idealFor: [
      `Viajeros que buscan emoción y aventura`,
      `Amantes del motor y la naturaleza`,
    ],
    additional: [
      `Sandboard en las dunas (incluido si lo deseas, ¡pura diversión!)`,
    ],
  },
  {
    id: 2,
    location: `Agafay`,
    description: `A solo 40 minutos de Marrakech, el desierto de Agafay te sorprende con su paisaje árido, colinas
    rocosas y ambiente mágico. Aunque no tiene dunas como el Sahara, ofrece una experiencia
    única en pleno entorno natural, ideal para una escapada rápida llena de emoción.`,
    zone: `Desierto de Agafay (a solo 40 min de Marrakech)`,
    vehicle: `Cuatriciclos (quads) y buggies`,
    modality: [
      `Excursiones por horas (perfecto para escapadas cortas)`,
      `Rutas al atardecer (una experiencia mágica con luz dorada)`,
    ],
    included: [
      `Actividad opcional para añadir adrenalina a tu ruta`,
      `Rutas por pistas, dunas y paisajes espectaculares`,
    ],
    combine: [
      `Cena bajo las estrellas`,
      `Paseo en dromedario`,
      `Campamentos con encanto`,
    ],
    idealFor: [
      `Viajeros con poco tiempo`,
      `Amantes de la aventura cerca de Marrakech`,
      `Grupos, parejas y familias`,
    ],
    additional: [],
  },
];

export const PaseoEnDromedario = [
  {
    id: 1,
    location: `Merzouga`,
    description: `Explorar Marruecos a lomos de un dromedario es mucho más que una simple actividad
    turística: es una manera de viajar al ritmo del desierto, de sentir el silencio de las dunas y de
    vivir la esencia nómada que forma parte de nuestra historia. Ya sea en las dunas doradas de
    Merzouga o en el mágico paisaje del desierto de Agafay, este paseo te invita a desconectar del
    mundo moderno y conectar con la naturaleza, la tradición y contigo mismo.`,
  },
  {
    id: 2,
    location: `Agafay`,
    description: `A solo unos kilómetros de Marrakech, el desierto de Agafay ofrece una alternativa sorprendente
    y accesible. Aunque no tiene dunas, su paisaje lunar de piedras doradas y colinas suaves crea
    una atmósfera igual de mágica. Aquí, el paseo en dromedario es perfecto para quienes buscan
    una escapada rápida pero auténtica. Puedes elegir un paseo al atardecer seguido de un té
    tradicional en una jaima o combinar la experiencia con una COMIDA cena bajo las estrellas.
    Agafay es el lugar ideal para saborear el desierto sin alejarte demasiado de la ciudad.`,
  },
];

export const GloboAerostatico = [
  {
    id: 1,
    location: `Marrakech`,
    duration: `4-5 horas (con traslado desde Marrakech)`,
    zone: `Campiña a las afueras de Marrakech`,
    included: [
      `Traslado ida y vuelta desde tu alojamiento`,
      `Bebida caliente antes del vuelo`,
      `Vuelo en globo de 40-60 min`,
      `Desayuno tradicional tras el aterrizaje`,
      `Certificado de vuelo`,
    ],
    idealFor: `Parejas, grupos de amigos, familias, viajeros que quieren vivir una experiencia única
sin alejarse demasiado de la ciudad`,
    experienceType: `Compartida (grupo reducido)`,
  },
];

export const VisitasGuiadas = [
  {
    id: 1,
    location: `Fez`,
    title: `Sumérgete en el alma cultural de Marruecos`,
    description: `Descubre Fez, la ciudad imperial más antigua de Marruecos, de la mano de nuestros guías
    locales expertos. En esta visita guiada recorrerás la medina de Fez el-Bali, declarada Patrimonio
    de la Humanidad por la UNESCO, considerada una de las más auténticas y vivas del mundo
    árabe.
    Acompañado por tu guía privado, explorarás callejuelas laberínticas repletas de historia,
    tradición y vida. Visitarás escuelas coránicas como la Bou Inania, antiguos palacios, curtidores
    tradicionales, zocos artesanales y los famosos portales decorados como Bab Boujloud. También
    conocerás la universidad más antigua del mundo aún en funcionamiento: la Universidad de Al
    Qarawiyyin.
    Esta experiencia es una inmersión total en la cultura marroquí, donde cada rincón cuenta una
    historia, cada aroma despierta recuerdos, y cada encuentro deja huella.
    Y para que no te pierdas ninguna perspectiva de esta ciudad mágica, te llevaremos en 4x4 hasta
    un mirador panorámico desde donde podrás contemplar toda Fez en una sola imagen: sus
    murallas, la medina, los minaretes y los tejados verdes de sus mezquitas. Un momento ideal
    para fotos inolvidables y para conectar con la historia desde las alturas.`,
    included: [
      `Guía local oficial en español (u otros idiomas bajo solicitud)`,
      `Recorrido completo por la medina y sus monumentos más importantes`,
      `Visita a talleres artesanales y cooperativas locales`,
      `Paradas para fotos, descanso y consejos personalizados`,
      `Paseo en 4x4 hasta el mejor mirador de Fez`,
    ],
    duration: `Medio día`,
    modality: `tour privado y adaptado a tus intereses`,
  },
  {
    id: 2,
    location: `Marrakech`,
    title: `Un viaje al corazón de la ciudad Roja`,
    description: `Explora Marrakech con los ojos de un local y déjate envolver por el encanto vibrante de esta
    ciudad imperial. Nuestra visita guiada te lleva a conocer lo más auténtico de Marrakech: su
    historia, su arquitectura y su vida diaria, siempre acompañado por un guía local experto y
    apasionado por su cultura.
    Comenzamos en los lugares más emblemáticos, como la famosa Plaza Jemaa el-Fna, el Palacio
    Bahía, la Mezquita Koutoubia (desde el exterior), las Tumbas Saadíes y los jardines escondidos
    en el interior de la medina. Recorremos también los coloridos zocos, donde los artesanos siguen
    trabajando el cuero, las especias, el metal o la cerámica como lo hacían hace siglos.`,
    included: [
      `Guía local oficial en español (u otros idiomas bajo solicitud)`,
      `Recorrido completo por los principales monumentos históricos y culturales`,
      `Visita a los zocos y talleres tradicionales`,
      `Consejos y recomendaciones locales`,
    ],
    duration: `Medio día`,
    modality: `tour privado y totalmente personalizable`,
  },
];
