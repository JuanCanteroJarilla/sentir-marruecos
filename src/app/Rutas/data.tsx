type RouteDetail = {
  id: number;
  description: string;
  days: { day: number; title: string; description: string }[];
  accommodation: string[];
};

export const RouteInfo: { [key: string]: RouteDetail } = {
  "ciudades imperiales": {
    id: 1,
    description:
      "Ruta de 8 días centrada en las cuatro ciudades que en algún momento fueron o son capital de Marruecos (Casablanca, Rabat, Fez y Marrakech). Una forma fantástica de conocer el país a través de estas cuatro grandes urbes, descubriendo su enorme patrimonio cultural e histórico.",
    days: [
      {
        day: 1,
        title: "Día 1: Llegada a Marrakech",
        description:
          "Llegada a Marrakech, recogida en el aeropuerto y traslado al hotel. Noche en Marrakech.",
      },
      {
        day: 2,
        title: "Día 2: Marrakech - Casablanca - Rabat",
        description:
          "Salida hacia Casablanca. Llegada y visita de la capital económica del país, contando con el puerto más importante de Marruecos. En especial visita del paseo marítimo y hasta llegar a los exteriores de la Mezquita de Hassan II (la segunda más grande del mundo después de la Mezquita de La Meca y con un minarete de 210 metros de altura). Continuaremos hacia la capital del reino, la ciudad imperial de Rabat. Noche en Rabat.",
      },
      {
        day: 3,
        title: "Día 3: Rabat - Meknes - Fez",
        description:
          "Visita de la ciudad: comenzando por el exterior del Palacio Real, la Kasbah de los Oudaya, el Mausoleo de Mohamed V con su mezquita inacabada y la Torre de Hassan. Después salida hacia Meknes, ubicada al pie de las montañas del Medio Atlas. Visita de la misma comenzando por las murallas, con sus magníficas puertas de Bab Manssur y terminando en el Mausoleo-Mezquita del Moulay Ismail. Fue declarada Patrimonio de la Humanidad por la UNESCO en 1996 por su carácter representativo de una capital histórica del Magreb del siglo XVII. Salida hacia la ciudad de Fez donde se hará noche.",
      },
      {
        day: 4,
        title: "Día 4: Fez",
        description:
          "Visita de Fez. En especial su medina y el barrio de los artesanos, donde destaca especialmente el de los curtidores. Es la más antigua de las ciudades imperiales y centro espiritual del país. Comenzamos con una visita panorámica desde una de las colinas que la circundan. Salimos hacia el Palacio Real con sus monumentales puertas de bronce. Atravesamos el Mellah o barrio judío, para adentrarnos en la medina y ya a pie recorrer sus calles. Visitaremos el Mausoleo del Moulay Idriss y una Medersa. Seguiremos el recorrido por el barrio de los artesanos donde destaca el de los curtidores, el mercado de las especias, el bullicioso zoco y la Fuente de Nejarín. Noche en Fez.",
      },
      {
        day: 5,
        title: "Día 5: Fez - Midelt - Erfoud",
        description:
          "Salida de Fez atravesando las montañas el Medio-Atlas, y pasando por Ifrane, conocida como la Suiza marroquí, así como por los bosques de cedros que rodean Azrou. Allí podremos saludar a sus simpáticos monos. Pasaremos por Midelt y continuaremos hasta llegar a Erfoud, en los límites del gran desierto del Sahara y capital de los fósiles del país. Noche en Erfoud.",
      },
      {
        day: 6,
        title: "Día 6: Erfoud - Tinerhir - Gargantas del Todra - Ouarzazate",
        description:
          "Salida hacia Tinerhir hasta llegar a las gargantas del Todra, vista panorámica de varias kasbahs. La erosión ha construido un estrecho desfiladero con paredes verticales de más de 300 metros de altura, muy conocida por los escaladores. Podremos dar un bello paseo siguiendo el curso del río. Pasaremos por el valle de las rosas al pie del Alto Atlas y donde el cultivo de la flor que le da nombre se divide en dos zonas. La más importante tiene una extensión de 30 kilómetros, empezando en el pueblo de Keelat M’Gouna hasta Bou Tharar. El paisaje vale la pena por estar enclavado en un cañón. Llegaremos finalmente a Ouarzazate donde se hará noche.",
      },
      {
        day: 7,
        title: "Día 7: Ouarzarzate - Ait Ben Haddou - Marrakech",
        description:
          "Nos levantaremos en Ouarzazate, el Hollywood marroquí. Podremos visitar los estudios de cine donde se han grabado numerosas películas así como el museo dedicado al cine y la “Kasbah Taourirt” en otros tiempos residencia del pachá de Marrakech. Después continuaremos hacia la “Kasbah de Ait Ben Haddou”, declarada Patrimonio de la Humanidad por la UNESCO y donde se han filmado también distintas películas como La Momia o El reino de los cielos. Era un antiguo lugar de parada de las caravanas para que los viajeros cambiasen los dromedarios por caballos y así poder cruzar las montañas. Salida atravesando las montañas del Atlas a Marrakech. Noche en Marrakech.",
      },
      {
        day: 8,
        title: "Día 8: Marrakech",
        description:
          "Visita de la ciudad: Jardines de la Menara, Minarete de la Koutobia, las Tumbas Saadianas, donde destaca su bóveda central de mármol de carrara, y el Palacio Bahía, Plaza de Jema el F’naa declarada “Patrimonio de la Humanidad”. Por los mañana vendedores de frutas, cestos de mimbre, dulces, etc. a la caída de la tarde todo se vuelve fascinante cuando la plaza se ilumina con mil luces y todo parece mágico. Noche en Marrakech o traslado al aeropuerto.",
      },
    ],
    accommodation: [
      "2 noches en Marrakech en Riad con desayuno",
      "1 noche en Rabat en Riad con desayuno",
      "2 noches en Fez en Riad con desayuno",
      "1 noche en Erfoud en hotel con media pensión",
      "1 noche en Ouarzazate en hotel con media pensión",
      "Visita de la ciudad de Fez con guía local oficial",
      "Vehículo privado 4×4",
      "Guía acompañante en español durante la duración completa del viaje",
      "Traslados del aeropuerto",
    ],
  },
  "desierto de zagora": {
    id: 2,
    description:
      "Embárcate en una escapada exprés desde y hacia Marrakech, la vibrante capital cosmopolita de Marruecos. Experimenta la magia del desierto, durmiendo bajo las estrellas en el Sáhara, y descubre la fascinante cultura bereber en su corazón. Vive Marruecos en tres días intensos y emocionantes.",
    days: [
      {
        day: 1,
        title: "Día 1: Marrakech - Kasbah Ait Ben Haddou - Desierto de Zagora",
        description:
          "Salida por la mañana en dirección a la cordillera del Atlas. Pasaremos por el puerto de Tichka, situado a 2.260 metros de altitud. Parada en Ait Ben Haddou, donde podremos visitar su Kasbah, declarada Patrimonio de la Humanidad por la UNESCO y escenario de diversas películas. Seguiremos hacia el sur, pasando por el Valle del Draa, uno de los más grandes de Marruecos, y en donde existen numerosas kasbahs que servían para defender a la región, podremos pasear por su palmeral en distintas ocasiones y apreciar el cambio de temperatura que se produce al adentrarse en él.  Después llegaremos a Zagora, de donde nos trasladaremos en dromedario hacia las dunas, para disfrutar de la puesta de sol y pasaremos la noche en una haima típica berebere, arropados por las estrellas.",
      },
      {
        day: 2,
        title: "Día 2: Desierto de Zagora - Ouarzazate - Marrakech",
        description:
          "Por la mañana regreso en dromedarios, para desayunar y tomar una ducha y tomaremos el camino de vuelta a Marrakech. Pararemos en Ouarzazate,  el Hollywood marroquí, donde podremos visitar los estudios de cine donde se han grabado numerosas películas así como el museo dedicado al cine y la “Kasbah Taourirt” en otros tiempos residencia del pachá de Marrakech. Continuaremos hacia Marrakech por sinuosas carreteras y haremosdistintas paradas en pueblos pintorescos y lugares panorámicos hasta llegar a nuestro destino.",
      },
    ],
    accommodation: [
      "1 noche en Haimas en el Desierto con media pensión",
      "Excursión en dromedario por el desierto",
      "Fiesta tradicional con tambores en el desierto",
      "Vehículo privado 4×4",
      "Guía acompañante en español durante la duración completa del viaje",
      "Traslados del aeropuerto",
    ],
  },
  "desierto nómada y ouarzazate": {
    id: 3,
    description:
      "Ruta de 6 días que le permite conocer la ciudad de Marrakech en todo su esplendor, perdiéndose por las callejuelas de su zoco o disfrutar de una cena en la bullicios plaza Jma El Fnaa, corazón de la ciudad, pasando por la travesía de la cordillera del Atlas para llegar a otro paisaje bien distinto. El desierto del Sahara, en las dunas de Erg Chebbi, para disfrutar de su tranquilidad y de una cena bajo las estrellas.",
    days: [
      {
        day: 1,
        title: "Día 1: Llegada a Marrakech",
        description:
          "Recogida en el aeropuerto y traslado al hotel. Visita libre de la ciudad. Noche en Marrakech.",
      },
      {
        day: 2,
        title: "Día 2: Marrakech - Ouarzazate - Boumalne Dades",
        description:
          "Salida en dirección Ouarzazate. Se cruzará la cordillera del Atlas, pasando por el punto más alto del país, conocido como el Puerto del Tichka. Haremos varias paradas en pueblos típicos bereberes y en zonas de vistas panorámicas, así como en una cooperativa de aceite de argán. El argán es un producto local del cual nos explicaran su proceso de realización y numerosos beneficios. A mediodía llegaremos a Ouarzazate, la meca del  cine marroquí. Podremos visitar la kasbah de Tarourit, antigua residencia del pachá de Marrakech y una de las mejor conservadas de Marruecos. También aprovecharemos para ver el museo dedicado el cine, de las películas rodadas en la zona. Pasaremos por el valle del Dades, visitando los conocidos como ‘dedos del mono’, una formación rocosa que ha tomado formas curiosas. Se hará noche en el valle del Dades.",
      },
      {
        day: 3,
        title:
          "Día 3: Boumalne Dades - Gargantas del Todra - Merzouga (desierto)",
        description:
          "Salida en dirección Merzouga, pasando por las gargantas del Todra, donde podremos disfrutar de un bello paseo siguiendo el curso del río, observando sus pequeñas cascadas. Es una zona habitual de escaladores en busca de nuevas sensaciones. Pasaremos por el palmeral de Tinghir donde podremos ver el impresionante contraste de su frondosidad con el árido paisaje que lo rodea hasta llegar a la ciudad de Erfoud, paraíso para quienes busquen fósiles, pues antiguamente la zona estaba cubierta por agua. También se conoce por haberse encontrado varios huesos de dinosaurio. Desde Erfoud nos dirigiremos a Merzouga, en el desierto. Noche en hotel delante de las dunas de Erg Chebbi.",
      },
      {
        day: 4,
        title: "Día 4: Merzouga - Erg Chebbi - Khamlia - Merzouga",
        description:
          "Visita del oasis de Merzouga, así como del pueblo de Khamlia donde habitan los Gnawas (descendientes de los esclavos que provenían del áfrica negra) en donde podremos disfrutar de su peculiar música. Después pasaremos por un río de arena, vista panorámica desde una montaña para observar el desierto en todo su esplendor. Continuaremos hacia el pueblo de Mefis, en donde hubo un asentamiento de franceses que trabajaban en las minas de khol, actualmente abandonado. Visitaremos a una familia nómada en medio de las dunas y disfrutaremos de su compañía tomando un te. Vuelta al hotel para comer y al atardecer salida con los camellos cerca de una hora para pasar la noche en campamento berebere en haimas dentro de la dunas.",
      },
      {
        day: 5,
        title: "Día 5: Merzouga - Agdz - Ouarzazate",
        description:
          "Vuelta al hotel para ducharse y desayunar. Salida hacia Ouarzazate. Parada en Rissani para visitar su mercado local. Antaño fue una ciudad muy importante debido a su situación de conexión entre el norte y el sur, por el que pasaban numerosas caravanas.Y pasaremos por el valle del Draa, uno de los más grandes de Marruecos, y en donde existen numerosas kasbahs que servían para defender a la región, podremos pasear por su palmeral en distintas ocasiones y apreciar el cambio de temperatura que se produce al adentrarse en él. Comeremos en Agdz, donde podremos visitar la kasbah de Tamnougalt, hasta llegar a Ouarzazate, donde se hará noche.",
      },
      {
        day: 6,
        title: "Día 6: Ouarzazate - Aït Ben Haddou - Marrakech",
        description:
          "Nos levantaremos en el Hollywood marroquí y visitaremos los estudios de cine donde se han filmado películas como Gladiator o Babel. Tomaremos el camino de vuelta a Marrakech haciendo parada en el ksar de Aït Ben Haddou, declarado Patrimonio de la Humanidad por la Unesco donde se han filmado también distintas películas como La Momia o El reino de los cielos y lugar de parada antiguamente de las caravanas para que los viajeros cambiasen los dromedarios por caballos y así poder cruzar las montañas. Luego continuaremos por sinuosas carreteras con paradas en lugares con vistas panorámicas hasta Marrakech.",
      },
    ],
    accommodation: [
      "1 noche en Marrakech en Riad con desayuno",
      "1 noche en el Valle del Dadès con media pensión",
      "1 noche en Haima en las dunas del Desierto con media pensión",
      "1 noche en Ouarzazate en hotel con media pensión",
      "Excursión en dromedario por el desierto",
      "Tatuajes típicos de henna en el desierto",
      "Fiesta tradicional con tambores en el desierto",
      "Vehículo privado 4×4",
      "Guía acompañante en español durante la duración completa del viaje",
      "Traslado del aeropuerto",
    ],
  },
};
