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
  "chefchaouen, fez y desierto nómada": {
    id: 4,
    description:
      "Esta ruta cruza el país de Norte a Sur, parte desde Tánger, ciudad de interés monumental destacando la Gran Mezquita de Mulay Ismail, pasando por el curioso pueblo azul de Chefchaouen, sin olvidarse de la magia del desierto y de la ciudad de Fez. Una vez más una ruta que muestra los grandes contrastes dentro de Marruecos, tanto a nivel de paisaje como de construcciones y ambientes.",
    days: [
      {
        day: 1,
        title: "Día 1: Tánger - Chefchaouen",
        description:
          "Llegada a Tánger, recogida y visita panorámica de la ciudad, en especial la medina o la Gran Mezquita. Destaca la plaza 9 de abril, una de las más grandes de la ciudad y lugar de encuentro de sus habitantes. Luego tomaremos la carretera en dirección a Chefchaouen. El encanto de Chefchaouen es perderse por sus calles estrechas y llenas de pequeños comercios, observando sus casas pintadas de azul y blanco.",
      },
      {
        day: 2,
        title: "Día 2: Chefchaouen - Midelt",
        description:
          "Traslado a Midelt a través de Ifrane, Fez y los grandes bosques de cedros. Parada en  la ciudad de Ifrane, conocida como la pequeña Suiza de Marruecos, que destaca por su estilo urbanístico centroeuropeo dado su clima frío en invierno (1.713 m.) y por la estatua del león, que da testimonio de los leones del Medio Atlas que habitaban ahí antiguamente. Pasaremos también por la población de Azrou, conocida por sus bosques de cedro y los simpáticos monos que habitan en ellos. Se hará noche en Midelt.",
      },
      {
        day: 3,
        title: "Día 3: Midelt - Merzouga ( el desierto)",
        description:
          "Seguiremos en dirección Merzouga, pasando por distintos pueblos, hacia Erfoud, pasando por el conocido valle del Ziz, donde se pueden admirar el contraste entre el paisaje más árido y la frondosidad de la ribera del río Ziz y sus palmerale y pudiendo observar la vida diaria de los habitantes que habitan en su ribera. El río Ziz fluye unos 300 kilómetros hasta adentrarse en el desierto del Sahara en la frontera de Argelia. A mediodía llegaremos a Erfoud, conocida por sus fósiles y las maravillosas rosas del desierto, y donde comeremos. Continuaremos después hacia Merzouga, donde llegaremos por la tarde. Merzouga se encuentra justo a los pies de las grandes dunas del desierto del Sahara, y los que lo deseen podrán dar una vuelta por la arena y ver la puesta de sol.  Noche en hotel seleccionado.",
      },
      {
        day: 4,
        title: "Día 4: Merzouga - Khamlia - Nómadas - Merzouga",
        description:
          "Nos levantaremos ante el imponente desierto del Sahara, y visitaremos el oasis de Merzouga, así como el pueblo de Khamlia donde habitan los Gnawas (descendientes de los esclavos que provenían del áfrica negra) en donde podremos disfrutar de su peculiar música. Después pasaremos por un río de arena, vista panorámica desde una montaña para observar el desierto en todo su esplendor. Continuaremos hacia el pueblo de Mefis, en donde hubo un asentamiento de franceses que trabajaban en las minas de khol, actualmente abandonado. Visitaremos a una familia nómada en medio de las dunas y disfrutaremos de su compañía tomando un te. Vuelta al hotel para comer y al atardecer salida con los camellos cerca de una hora para pasar la noche en campamento berebere en haimas dentro de la duna y cena y todo y dependiendo de la época del año se puede hacer vivac bajo las estrellas y disfrutar de la maravillosa tranquilidad que impregna todo el lugar.",
      },
      {
        day: 5,
        title: "Día 5: Merzouga - Fez",
        description:
          "Por la mañana salida en dromedario o quad hacia Merzouga de nuevo. Ducha y desayuno para partir  en dirección a Fez. Pasaremos por Rissani para visitar su mercado local y que fue una de las bases de las antiguas caravanas que atravesaban el Sahara hacia Tombuctú. Pasaremos por distintos pueblos bereberes hasta llegar a Fez. Visita de la ciudad y se hará noche en Fez.",
      },
      {
        day: 6,
        title: "Día 6: Fez - Tánger",
        description:
          "Salida dirección Tánger, llegada y fin de ruta. Traslados.",
      },
    ],
    accommodation: [
      "1 noche en Chefchaouen en Riad con desayuno",
      "1 noche en el Desierto (Merzouga) en hotel con media pensión",
      "1 noche en Haimas en las dunas del Desierto con media pensión",
      "Tatuajes típicos de henna en el desierto",
      "Fiesta tradicional con tambores en el desierto",
      "Vehículo privado 4×4",
      "Guía acompañante en español durante la duración completa del viaje",
      "Traslados del aeropuerto",
    ],
  },
  "midelt y desierto nómada": {
    id: 5,
    description:
      "Esta ruta de 5 días es ideal para hacer un primer contacto con el desierto, también ofrece grandes contrastes al viajero puesto que se pasa de zonas montañosas a zonas totalmente áridas y desérticas. Durante toda la ruta se permite conocer pueblos bereberes para llegar finalmente al desierto donde se puede dormir en una haima típica. ¡Una auténtica aventura!",
    days: [
      {
        day: 1,
        title: "Día 1: Fez - Midelt",
        description:
          "Recogida en el aeropuerto de Fez y salida hacia el sur. Parada en  la ciudad de Ifrane, conocida como la pequeña Suiza de Marruecos, que destaca por su estilo urbanístico centroeuropeo dado su clima frío en invierno (1.713 m.) y por la estatua del león, que da testimonio de los leones del Medio Atlas que habitaban ahí antiguamente. Pasaremos también por la población de Azrou, conocida por sus bosques de cedro y los simpáticos monos que habitan en ellos. Se hará noche en Midelt.",
      },
      {
        day: 2,
        title: "Día 2: Midelt - Merzouga (desierto)",
        description:
          "Seguiremos en dirección Merzouga, pasando por distintos pueblos, hacia Erfoud, pasando por el conocido valle del Ziz, donde se pueden admirar el contraste entre el paisaje más árido y la frondosidad de la ribera del río Ziz y sus palmeral y pudiendo observarla vida diaria de los habitantes que habitan en su ribera. El río Ziz fluye unos 300 kilómetros hasta adentrarse en el desierto del Sahara en la frontera de Argelia. A mediodía llegaremos a Erfoud es conocida por sus fósiles y la maravillosas rosas del desierto y donde comeremos. Continuaremos después hacia Merzouga, donde llegaremos por la tarde. Merzouga se encuentra justo a los pies de las grandes dunas del desierto del Sahara, y los que lo deseen podrán dar una vuelta por la arena y ver la puesta de sol.  Noche en hotel seleccionado.",
      },
      {
        day: 3,
        title: "Día 3: Merzouga - Khamlia - Nómadas - Merzouga (dunas)",
        description:
          "Nos levantaremos ante el imponente desierto del Sahara, y visitaremos el oasis de Merzouga, así como del pueblo de Khamlia donde habitan los Gnawas (descendientes de los esclavos que provenían del áfrica negra) en donde podremos disfrutar de su peculiar música. Después pasaremos por un río de arena, vista panorámica desde una montaña para observar el desierto en todo su esplendor. Continuaremos hacia el pueblo de Mefis, en donde hubo un asentamiento de franceses que trabajaban en las minas de khol, actualmente abandonado. Visitaremos a una familia nómada en medio de las dunas y disfrutaremos de su compañía tomando un te. Vuelta al hotel para comer y al atardecer salida con los camellos cerca de una hora para pasar la noche en campamento berebere en haimas dentro de la dunas.",
      },
      {
        day: 4,
        title: "Día 4: Dunas - Merzouga - Fez",
        description:
          "Por la mañana salida en dromedario o quad hacia Merzouga de nuevo. Ducha y desayuno para partir  en dirección a Fez. Pasaremos por Rissani para visitar su mercado local y que fue una de las bases de las antiguas caravanas que atravesaban el Sahara hacia Tombuctú. Pasaremos por distintos pueblos bereberes hasta llegar a Fez. Visita de la ciudad y se hará noche en Fez.",
      },
      {
        day: 5,
        title: "Día 5: Fez",
        description:
          "Visita Fez, tercera ciudad más importante de Marruecos y una de las llamadas ciudades imperiales. La medina de Fez El Bali es la mayor de las dos medinas que tiene la ciudad y fue declarada Patrimonio de la Humanidad por la UNESCO en 1981. Asimismo es muy conocida por el barrio de los curtidores que merece una visita. Fin de ruta y traslado aeropuerto.",
      },
    ],
    accommodation: [
      "1 noche en Fez en Riad con desayuno",
      "1 noche en Midelt en hotel con media pensión",
      "1 noche en el Desierto (Merzouga) en hotel con media pensión",
      "1 noche en Haimas en las dunas del Desierto con media pensión",
      "Visita de la ciudad de Fez con guía local oficial",
      "Excursión en dromedario por el desierto",
      "Tatuajes típicos de henna en el desierto",
      "Fiesta tradicional con tambores en el desierto",
      "Vehículo privado 4×4",
      "Guía acompañante en español durante la duración completa del viaje",
      "Traslados del aeropuerto",
    ],
  },
  "desierto nómada y marrakech": {
    id: 6,
    description:
      "Ruta de 4 días que te permite conocer el desierto y sus secretos, así como visitar dos de las ciudades más importantes y emblemáticas de Marruecos: Fez y Marrakech. Se parte desde Fez y el destino final es Marrakech.",
    days: [
      {
        day: 1,
        title: "Día 1: Fez - Merzouga (desierto)",
        description:
          "Recogida en el aeropuerto de Fez y salida hacia el sur. Parada en  la ciudad de Ifrane, conocida como la pequeña Suiza de Marruecos, que destaca por su estilo urbanístico centroeuropeo dado su clima frío en invierno (1.713 m.) y por la estatua del león, que da testimonio de los leones del Medio Atlas que habitaban ahí antiguamente. Pasaremos también por la población de Azrou, conocida por sus bosques de cedro y los simpáticos monos que habitan en ellos. Se hará noche en Midelt. Se cruzará el Valle del Ziz, pasando por pueblos como Midelt o Erfoud, hasta llegar a Merzouga, al pie de las dunas del desierto, donde se hará noche.",
      },
      {
        day: 2,
        title: "Día 2: Merzouga - Khamlia -Nómadas - Merzouga",
        description:
          "Nos levantaremos ante el imponente desierto del Sahara, y visitaremos el oasis de Merzouga, así como el pueblo de Khamlia donde habitan los Gnawas (descendientes de los esclavos que provenían del áfrica negra) en donde podremos disfrutar de su peculiar música. Después pasaremos por un río de arena, vista panorámica desde una montaña para observar el desierto en todo su esplendor. Continuaremos hacia el pueblo de Mefis, en donde hubo un asentamiento de franceses que trabajaban en las minas de khol, actualmente abandonado. Visitaremos a una familia nómada en medio de las dunas y disfrutaremos de su compañía tomando un te. Vuelta al hotel para comer y al atardecer salida con los camellos cerca de una hora para pasar la noche en campamento berebere en haimas dentro de la duna y cena y todo y dependiendo de la época del año se puede hacer vivac bajo las estrellas y disfrutar de la maravillosa tranquilidad que impregna todo el lugar.",
      },
      {
        day: 3,
        title: "Día 3: Merzouga - Gargantas del Todra - Ouarzazate",
        description:
          "Después de la noche en las haimas, volveremos al hotel en donde podremos ducharnos y desayunar. Iniciaremos el camino de vuelta dirección Marrakech, pasando por el pueblo de Rissani donde podremos visitar el mercado local, muy importante antiguamente por ser nexo de unión de las caravanas que iban del norte al sur. Asimismo veremos las Gargantas del Todra,  la erosión ha construido un estrecho desfiladero con paredes verticales de más de 300 metros de altura, muy conocida por los escaladores. Podremos dar un bello paseo siguiendo el curso del río. Continuaremos por el Valle de las Rosas, al pie del Alto Atlas y donde el cultivo de la flor que le da nombre se divide en dos zonas. La más importante tiene una extensión de 30 kilómetros, empezando en el pueblo de Keelat M’Gouna hasta Bou Tharar. El paisaje vale la pena por estar enclavado en un cañón. Finalmente llegaremos a Ouarzazate, capital del cine en Marruecos, donde se hará noche.",
      },
      {
        day: 4,
        title: "Día 4: Ouarzazate-Ait Ben Haddou-Marrakech",
        description:
          "Nos levantaremos en Ouarzazate, el Hollywood marroquí, donde podremos visitar los estudios de cine donde se han grabado numerosas películas así como el museo dedicado al cine y la “Kasbah Taourirt”, en otros tiempos residencia del pachá de Marrakech. Después continuaremos hacia la “Kasbah de Ait Ben Haddou”, declarada Patrimonio de la Humanidad por la UNESCO donde se han filmado también distintas películas como La Momia o El reino de los cielos y lugar de parada antiguamente de las caravanas para que los viajeros cambiasen los dromedarios por caballos y así poder cruzar las montañas. Salida atravesando las montañas del Atlas de camino a Marrakech para finalizar el viaje.",
      },
    ],
    accommodation: [
      "1 noche en el Desierto (Merzouga) en hotel con media pensión",
      "1 noche en Haimas en las dunas del Desierto con media pensión",
      "1 noche en Ouarzazate en hotel con media pensión",
      "Excursión en dromedario por el desierto",
      "Tatuajes típicos de henna en el desierto",
      "Fiesta tradicional con tambores en el desierto",
      "Vehículo privado 4×4",
      "Guía acompañante en español durante la duración completa del viaje",
      "Traslados del aeropuerto",
    ],
  },
  "fez y desierto nómada": {
    id: 7,
    description:
      "Esta ruta de 3 días, que empieza y termina en Fez, es ideal para hacer un primer contacto con el desierto, también ofrece grandes contrastes al viajero puesto que se pasa de zonas montañosas a zonas totalmente áridas y desérticas. Durante toda la ruta se permite conocer pueblos bereberes para llegar finalmente al desierto donde se puede dormir en una haima típica. ¡Una auténtica aventura!",
    days: [
      {
        day: 1,
        title: "Día 1: Fez - Merzouga (desierto)",
        description:
          "Recogida en el aeropuerto de Fez y salida hacia el sur. Pasaremos también por la población de Azrou, conocida por sus bosques de cedro y los simpáticos monos que habitan en ellos. Seguiremos en dirección Merzouga, pasando por distintos pueblos, hacia Erfoud, pasando por el conocido valle del Ziz, donde se pueden admirar el contraste entre el paisaje más árido y la frondosidad de la ribera del río Ziz y sus palmerales. Erfoud es conocida por sus fósiles y la maravillosas rosas del desierto. Continuaremos después hacia Merzouga, donde llegaremos por la tarde. Merzouga se encuentra justo a los pies de las grandes dunas del desierto del Sahara, y los que lo deseen podrán dar una vuelta por la arena y ver la puesta de sol.  Noche en hotel seleccionado.",
      },
      {
        day: 2,
        title: "Día 2: Merzouga - Khamlia - Nómadas - Merzouga",
        description:
          "Nos levantaremos ante el imponente desierto del Sahara, y visitaremos el oasis de Merzouga, así como el pueblo de Khamlia donde habitan los Gnawas (descendientes de los esclavos que provenían del áfrica negra) en donde podremos disfrutar de su peculiar música. Después pasaremos por un río de arena, vista panorámica desde una montaña para observar el desierto en todo su esplendor. Continuaremos hacia el pueblo de Mefis, en donde hubo un asentamiento de franceses que trabajaban en las minas de khol, actualmente abandonado. Visitaremos a una familia nómada en medio de las dunas y disfrutaremos de su compañía tomando un te. Vuelta al hotel para comer y al atardecer salida con los camellos cerca de una hora para pasar la noche en campamento berebere en haimas dentro de la dunas",
      },
      {
        day: 3,
        title: "Día 3: Merzouga - Fez",
        description:
          "Despertar en el medio del desierto y vuelta al hotel para ducha y desayuno. Después partiremos en dirección a Fez. Pasaremos por Rissani para visitar su mercado local y que fue una de las bases de las antiguas caravanas que atravesaban el Sahara hacia Tombuctú. Pasaremos por distintos pueblos bereberes hasta llegar a Fez y fin de ruta.",
      },
    ],
    accommodation: [
      "1 noche en el Valle del Dadès en hotel con media pensión",
      "1 noche en Haimas en las dunas del Desierto con media pensión",
      "Excursión en dromedario en el desierto",
      "Tatuajes típicos de henna en el desierto",
      "Fiesta tradicional con tambores en el desierto",
      "Vehículo privado 4×4",
      "Guía acompañante en español durante la duración completa del viaje",
    ],
  },
  "marruecos al completo": {
    id: 7,
    description:
      "Esta gran ruta circular te permitirá conocer a fondo cada rincón de Marruecos. Durante 16 días podrás tomar tiempo suficiente para adentrarte en la cultura y la esencia de cada lugar. Visitaremos todas las principales ciudades del país, la costa atlántica y pasaremos tres días en el desierto del Sáhara para conocer el modo de vida de las poblaciones de esta zona y experimentar nosotros mismos las sensaciones que nos transmite este lugar único en el mundo.",
    days: [
      {
        day: 1,
        title: "Día 1: Llegada a Casablanca",
        description:
          "A la hora estimada, recogida por nuestro guía en el aeropuerto de Casablanca y traslado al hotel. Después de tomar el primer contacto con la capital económica de Marruecos comenzaremos la visita de su famosa mezquita de Hassan II y otros lugares interesantes como el Courniche y la Plaza de las Palomas. (En caso de que el vuelo llegase por la noche esta visita se realizaría al día siguiente).",
      },
      {
        day: 2,
        title:
          "Día 2: Casablanca – Rabat – Souk Larbaa – Ouazane – Chefchaouen",
        description:
          "Después del desayuno saldremos en dirección hacia Rabat donde visitaremos sus monumentos principales: Alcazaba de los Oudaias, el Mausoleo de Mohammed V y la Torre Hassan. Después de un poco de tiempo libre para pasear por la ciudad pondremos rumbo hacia Chefchaouen, donde haremos noche. Esta ciudad está ubicada en el único parque natural intercontinental declarado reserva natural de la biosfera de Marruecos. Es un pueblo colgado en la montaña pintado de blanco y azul, poblado por gente sabia, amable y respetuosa, que ofrece al visitante hermosos parajes urbanos, preciosas muestras de artesanía local y una paz y serenidad que hoy en día son difíciles de encontrar. Alojamiento en Hotel con desayuno.",
      },
      {
        day: 3,
        title: "Día 3: Día Libre en Chefchaouen",
        description:
          "Después del desayuno pasaremos un día entero descubriendo Chefchaouen, pueblo de montaña en el corazón del Rif, destacado por su arquitectura andaluza de casas encaladas en blanco y azul añil. Visitaremos la medina para conocer su patrimonio histórico-cultural, y disfrutaremos de su luz, sus calles, su pintoresca plaza de Uta, el Hammam, la Cascada de Rass-el Maa y como no, el colorido de sus calles llenas de artesanía. Vale la pena tomarse un té a la menta en la terraza de algún café, observando a la gente cómo va y viene relajadamente, o perderse por la medina y charlar con sus gentes o jugar con los niños… ¡hay tantas opciones!. Alojamiento en Hotel con desayuno.",
      },
      {
        day: 4,
        title: "Día 4: Chefchaouen – Volubilis – Moulay Idriss – Fez",
        description:
          "Después del desayuno dejaremos el rico mundo de Chefchaouen para dirigirnos hacia Fez, la primera de las ciudades imperiales que tiene el orgullo de albergar una de las universidades más antiguas del mundo. Por el camino visitaremos las ruinas romanas de Volubilis, muy bien conservadas. También podremos ver una panorámica de Moulay Idriss, la ciudad santa donde almorzaremos y por la tarde llegaremos a Fez para disfrutar del atardecer mientras visitamos las murallas y puertas de su medina o simplemente tomando el té de bienvenida desde la Terraza de nuestro hotel observando la medina. Alojamiento en Hotel con desayuno.",
      },
      {
        day: 5,
        title:
          "Día 5: Visita con guía local de la Medina y los Monumentos de Fez",
        description:
          "Después de un rico desayuno en el hotel, comenzaremos nuestra visita guiada por la parte nueva de la ciudad de Fez, donde nos acercamos al palacio real, el barrio de los Judíos (Mellah) y después iremos a un mirador donde podremos observar toda la medina desde la Torre del sur y las numerosas Mezquitas. Después recorreremos a pie la medina, declarada por la UNESCO Patrimonio de la Humanidad, sus callejuelas laberínticas estructuradas por gremios de alfareros, tintoreros, y otras artesanías. El bullicio de sus gentes nos transportará siglos atrás. Notaremos que es una ciudad medieval y que el tiempo se ha detenido en el reloj “la Magana Bounania” 1200 años después de su construcción. ¡Una maravilla! Alojamiento en hotel con desayuno.",
      },
      {
        day: 6,
        title:
          "Día 6: Fez – Ifrane – Bosque de Cedros – Midélt – Valle de Ziz – Desierto de Merzouga",
        description:
          "Después del desayuno saldremos dirección sur para cruzar las Montañas del Medio Atlas hasta llegar a Ifrane, también denominada “la pequeña Suiza marroquí” por su gran parecido a ese país. Uno de los animales que antiguamente habitaba aquí era el león del Atlas, por lo que ha pasado a convertirse en el símbolo de la ciudad y al que le han dedicado una estatua de piedra en el centro de la misma. Aprovecharemos para parar y « saludar » al gran león. Después cruzaremos los famosos bosques de cedros y podremos admirar el Gran Cedro Gouraud, el cedro milenario más grande de la región y también dar de comer a los cientos de monos de Gibraltar que habitan en la zona. Almorzaremos en Midélt y a partir de aquí la tierra se volverá más árida y repleta de espectaculares formaciones geológicas y profundos valles verdes, como el Valle del Ziz. Comenzaremos a ver la típica arquitectura de adobe, palmeras y algunas Kasbahs lejanas, lo que significará que estamos en las puertas del desierto. Una hora después de Erfoud llegaremos a las impresionantes Dunas de Merzouga y después del Té de Hospitalidad, dejaremos las maletas en las habitaciones y subiremos a las primeras dunas que están junto al hotel para disfrutar de la preciosa puesta de sol. Alojamiento en Hotel a los pies de las dunas de Erg Chebbi con cena y desayuno.",
      },
      {
        day: 7,
        title: "Día 7: Desierto de Merzouga – Familias Nómadas – Oasis Safsaf",
        description:
          "Después del desayuno saldremos hacia los alrededores de Erg Chebbi y nos encaminaremos al Oasis de SafSaf, muy cerca de la frontera con Argelia (30 km aproximadamente). Durante el trayecto, nos detendremos cuantas veces deseéis para admirar el maravilloso paisaje que recorreremos. Haremos una pausa en el recorrido para visitar a una familia nómada con la que compartiremos un tradicional té bajo la reconfortante sombra de una haima bereber. Después continuaremos hasta llegar a nuestro destino, el Oasis de SafSaf; se trata de un paraje espectacular, encajado entre despoblados altos cerros, aparece un palmeral salvaje con exuberante vegetación atravesado por un río con el mismo nombre (SafSaf) en el que es posible el baño. Es en este paradisíaco entorno es donde almorzaremos y al atardecer regresaremos  al hotel a los pies del en el desierto. Alojamento en Hotel con cena y desayuno.",
      },
      {
        day: 8,
        title:
          "Día 8: Erg Chebbi – Khamlia - Paseo en dromedarios - Noche en Haimas",
        description:
          "Tras un copioso y rico desayuno, podremos disfrutar de otro día completo en el desierto. Rodearemos el Erg Chebbi, extensión de desierto de arena donde se encuentra la Gran Duna de Marruecos, de más de 250 metros de altitud, y conectaremos por pista con parte de la ruta seguida por el antiguo París-Dakar y con las montañas que limitan con Argelia de fondo. Pararemos en el oasis de Tissardmin donde podremos admirar los fósiles que todavía se encuentran en esta región y seguiremos ruta hacia un asentamiento nómada donde conoceremos algunos de los secretos de su vida y costumbres. Posteriormente pararemos en un punto panorámico donde podremos contemplar el Erg Chebbi en su conjunto. Después llegaremos al pueblo de Khamlia, formado por antiguos esclavos originarios de Mali, donde nos relajaremos con un té mientras disfrutamos de un pequeño concierto de su música tradicional y espiritual de Gnawa. Después regresaremos al hotel para salir en una caravana de dromedarios con la que entraremos en el corazón de las dunas y contemplaremos una puesta de sol inolvidable hasta llegar al campamento donde nos alojaremos en Haimas “tiendas confeccionadas con pelo de dromedario” como las que utilizan los nómadas del desierto. Esta noche disfrutaremos de una cena cena en el corazón del desierto bajo un espectacular manto de estrellas con fiesta de tambores y música bereber alumbrados por una horguera. Alojamiento en Haimas con cena y desayuno.",
      },
      {
        day: 9,
        title:
          "Día 9: Desierto de Merzouga – Mercado de Rissani – Gargantas del Todra – Valle del Dadés",
        description:
          "Despertamos temprano para nuestra ‘’Cita con el Amanecer‘’ ya que al estar en el desierto es recomendable madrugar para caminar hasta la duna más alta que se encuentre alrededor para contemplar la salida del sol y de este relajante paisaje que nos ofrece la naturaleza antes de regresar en dromedarios a nuestro hotel. Después de un rico desayuno, nos toca despedirnos del desierto y partiremos hacia Rissani donde visitaremos su mercado (si tenemos suerte y es uno de los días de Mercado : Martes, Jueves o Domingo) y seguiremos el camino hacia Erfoud y los palmerales de Touroug y Tinjdad. Una hora más tarde llegaremos a uno de los puntos fuertes del Alto Atlas: Las Gargantas del Todra. El cauce del río Todra ha formado un desfiladero de paredes verticales de enormes proporciones y de gran belleza; es el paraíso de los escaladores y un lugar único. Almuerzaremos en este lugar y realizaremos una caminata de media hora para ver y disfrutar con detalle las Gargantas. Por la tarde continuaremos hacia el Valle del Dadès, también conocido como el Valle de higos, pasando por Boumalne Dadés donde pararemos a observar los ‘’dedos de mono‘’ hasta llegar a las Gargantas del Dadés. Alojamiento en hotel con cena y desayuno.",
      },
      {
        day: 10,
        title:
          "Día 10: Valle de Dadés – Valle de Rosas – Boutagrar – Palmeral de Skoura – Ouarzazate",
        description:
          "Tras desayunar, podremos disfrutar de una de las mejores vistas del Valle del Dadés desde uno de los lugares más estratégicos que nos ofrecen las montañas. Desde allí podremos observar la cantidad de kasbahs que hay y lo pintoresco de cada una de ellas, después continuaremos hacia una carretera salpicada de Kasbahs de gran interés hasta llegar a la Kasbah de Aït Youl donde haremos un desvío y nos adentraremos por pistas en lo más profundo del Alto Atlas Central, para descubrir paisajes espectaculares. Visitaremos una familia nómada que todavía vive en cuevas en el Valle de Boutagrar donde parece haberse detenido el tiempo. Almuerzaremos en el pueblo del Valle de las Rosas y por la tarde pasaremos por el palmeral de Skoura hasta llegar a Ouarzazate. Alojamiento en Hotel con cena y desayuno.",
      },
      {
        day: 11,
        title:
          "Día 11: Ouarzazate – Kasbah de Ait Ben Haddou – Montañas del Alto Atlas – Marrakech",
        description:
          "Después del desayuno dedicaremos la mañana a la visita de Ouarzazate: kasbah de Taourirt, Estudios de cine. Luego salimos hacia la Ciudad Fortificada de Ait Ben Haddou, donde visitaremos su famosa Kasbah (Declarada patrimonio de la humanidad por la UNESCO). En este espectacular marco se han rodado películas de tanto renombre como Gladiator, Obelix, Sáhara con Penélope Cruz o Joya del Nilo. Almorzaremos en este magnífico lugar y continuaremos hacia Marrakech pasando por el puerto más alto de Tizi N’ Tichka. Visitaremos una cooperativa de Aceite de argán donde nos explicarán el proceso de elaboración y los innumerables beneficios que este tiene para el cuerpo. Sobre las 18h. llegaremos a Marrakech y tendremos tiempo libre para descubrir la famosa Plaza de Jamaa el Fna. Alojamiento en Hotel con desayuno.",
      },
      {
        day: 12,
        title: "Día 12: Día Libre en Marrakech",
        description:
          "En este día tendréis tiempo para descansar, pasear a vuestras anchas por la ciudad, poner en práctica el arte del regateo por los zocos y descubrir los lugares más recónditos de la medina donde os lleve vuestra curiosidad. Alojamiento en hotel con desayuno.",
      },
      {
        day: 13,
        title: "Dia 13: Marrakech : Visita de Marrakech con guía local",
        description:
          "Tras el desayuno, nuestro guía local de la ciudad os vendrá a buscar al hotel para comenzar la gran visita de la medina de Marrakech, conoceréis los lugares más interesantes y significativos de Marrakech, como la Mezquita de Koutoubia, Madrasa Ben youssef, Jardines de majorell, etc… y por la tarde tendréis tiempo para descansar y salir a la plaza Jamaa el Fna para pasear y disfrutar de la magia de la noche de este emblemático lugar. Alojamiento en hotel con desayuno.",
      },
      {
        day: 14,
        title: "Día 14: Marrakech – Essaouira",
        description:
          "Después del desayuno saldremos de Marrakech hacia la ciudad portuaria de Essaouira, conocida antiguamente con el nombre de Mogador. Essaouira ha vivido el paso de numerosos pueblos, desde los romanos hasta los portugueses, sin olvidar a los árabes y los bereberes. Debido a esta historia, guarda incontables vestigios de estas culturas, ya sea en forma de monumentos o en las costumbres de sus gentes. Podremos admirar su Medina y las fortificaciones portuguesas del siglo XVIII y tendremos tiempo de disfrutar de un relajante paseo o un baño en la playa. Alojamiento en hotel con desayuno",
      },
      {
        day: 15,
        title: "Día 15: Essaouira – Safi – El Jadida – Casablanca",
        description:
          "Después del desayuno podremos rumbo hacia Casablanca por la costa e iremos disfrutando de un paisaje de playas hermosas y vírgenes hasta llegar al pueblo de Jadida donde almorzaremos antes de seguir hasta Casablanca. Alojamiento en Hotel con desayuno.",
      },
      {
        day: 16,
        title: "Día 16: Casablanca – Aeropuerto",
        description:
          "Desayuno y tiempo libre hasta la hora acordada para el traslado al aeropuerto donde les acompañaremos para facturar sus maletas y enseñarles la puerta de embarque y finalizarán nuestros servicios.",
      },
    ],
    accommodation: [
      "2 Noches en Chaouen con desayuno",
      "2 Noches en Fez con desayuno",
      "3 Noches en el desierto con media pensión",
      "1 Noche en Dades con media pensión",
      "1 Noche en Ouarzazate con media pensión",
      "3 Noches en Marrakech con desayuno",
      "1 Noche en Essaouira con desayuno",
      "2 Noches en Casablanca con desayuno",
      "Vehículo privado tipo 4x4",
      "Guía acompañante de habla hispana durante todo el tour",
      "Visita con guía local de la ciudad de Fez",
      "Visita con guía local de la ciudad de Marrakech",
      "Fiesta bereber en el desierto",
      "Excursión en dromedarios",
      "Ruta en 4x4 por el desierto",
      "Almuerzo típico con familia bereber en el desierto",
      "Tatuaje de henna típico bereber en las manos",
      "Recogida y traslado al aeropuerto",
    ],
  },
  "marrakech y playas": {
    id: 8,
    description:
      "Esta ruta de 5 días se centra en recorrer la costa atlántica de Marruecos, visitando igualmente la ciudad de Marrakech. Ofrece una visita a los sitios de mayor interés del atlántico, en especial la playa de Legzira, maravilla de la naturaleza.",
    days: [
      {
        day: 1,
        title: "Día 1: Marrakech",
        description:
          "Llegada a Marrakech. Día libre para visitar la ciudad: Jardines de la Menara, Minarete de la Koutobia, las Tumbas Saadianas, donde destaca su bóveda central de mármol de carrara, y el Palacio Bahía, Plaza de Jema el F’naa declarada “Patrimonio de la Humanidad”. Por la mañana vendedores de frutas, cestos de mimbre, dulces, etc. A la caída de la tarde todo se vuelve fascinante, cuando la plaza se ilumina con mil luces y todo parece mágico. Noche en Marrakech.",
      },
      {
        day: 2,
        title: "Día 2: Marrakech-Taroudant",
        description:
          "Salida de Marrakech hacia la ciudad de Taroudant. Cruzaremos el valle del Asif Ounila y el Tizi-n-Test, de 2.634 m, que ha sido desde siempre el paso natural más utilizado para cruzar el Alto Atlas. Es una ruta montañosa que nos ofrece unos paisajes maravillosos, por sus diferentes colores, así como pueblos prácticamente colgando en las laderas. Noche en Taroudant.",
      },
      {
        day: 3,
        title: "Día 3: Taroudant-Tafraoute-Legzira-Agadir",
        description:
          "Partiremos de Taroudant hacia el sur, pasando por Tafraoute, un pueblo comercial berebere rodeado de rocas graníticas de color rosado y con numerosas casas antiguas muy bien conservadas. Continuaremos hacia la playa de Legzira, una maravilla de la naturaleza con sus dos arcos de piedra, producidos por la erosión. Visita de la playa y continuar la ruta hacia Agadir, donde se hará noche.",
      },
      {
        day: 4,
        title: "Día 4: Agadir-Essaouira",
        description:
          "Visita de la ciudad de Agadir, antiguamente conocida como Santa Cruz del Cabo Aguer. Fue fundada por los portugueses sobre el 1500. Merece la pena recorrer la corniche o paseo marítimo así como el puerto y su zoco. Al atardecer salida hacia Essaouira donde se hará noche.",
      },
      {
        day: 5,
        title: "Día 5: Essaouira – Marrakech",
        description:
          "Visita de Essaouira, también conocida por la antigua denominación de Mogadur. Es una ciudad portuaria marroquí, situada en la costa occidental atlántica, al norte del cabo Sim. Es la capital de la provincia homónima, en la región de Marrakech-Tensift-Al Hauz. Con cerca de 70.000 habitantes, su medina o centro histórico está catalogado por la UNESCO como Patrimonio de la Humanidad desde 2001. Fue escenario de la serie Juego de Tronos gracias a sus murallas. Es habitual ver en sus playas la práctica de varias modalidades de deportes acuáticos, tipo kitesurf, o surf, gracias a las maravillosas condiciones meteorológicas y su viento presente todo el año. Partida hacia Marrakech y traslado al aeropuerto.",
      },
    ],
    accommodation: [
      "1 noche en Marrakech en Riad con desayuno",
      "1 noche en Taroudant en hotel con media pensión",
      "1 noche en Agadir en hotel con media pensión",
      "1 noche en Essaouira en Riad con desayuno",
      "Vehículo privado 4×4",
      "Guía acompañante en español durante la duración completa del viaje",
      "Traslados del aeropuerto",
    ],
  },
  "marrakech y desierto": {
    id: 9,
    description:
      "Esta ruta empieza y termina en Marrakech. Se ha compactado en 3 días para aquellos que quieran realizar una escapada bien aprovechada. Marrakech es la ciudad más cosmopolita de Marruecos y sorprende a muchos de sus visitantes. También ofrece la oportunidad de dormir en la arena del Sáhara y conocer la cultura berebere en el corazón del desierto.",
    days: [
      {
        day: 1,
        title: "Día 1: Marrakech-Ouarzazate-Boumalne Dades",
        description:
          "Salida en dirección Ouarzazate. Se cruzará la cordillera del Atlas, pasando por el punto más alto del país, conocido como el Puerto del Tichka. Haremos varias paradas en pueblos típicos bereberes y en zonas de vistas panorámicas, así como en una cooperativa de aceite de argán. El argán es un producto local del cual nos explicaran su proceso de realización y numerosos beneficios. Haremos parada en el ksar de Aït Ben Haddou, declarado Patrimonio de la Humanidad por la UNESCO donde se han filmado distintas películas como La Momia o El reino de los cielos y lugar de parada antiguamente de las caravanas para que los viajeros cambiasen los dromedarios por caballos y así poder cruzar las montañas.A mediodía llegaremos a Ouarzazate, la meca del  cine marroquí. Podremos visitar la kasbah de Taourirt, antigua residencia del pacha de Marrakech y una de las mejor conservadas de Marruecos. También aprovecharemos para ver el museo dedicado el cine, de las películas rodadas en la zona. Pasaremos por el valle del Dades, visitando los conocidos como ‘dedos del mono’, una formación rocosa que ha tomado formas curiosas. Se hará noche en el valle del Dades.",
      },
      {
        day: 2,
        title: "Día 2: Boumalne Dades-Gargantas del Todra-Merzouga",
        description:
          "Salida en dirección Merzouga, pasando por las Gargantas del Todra, donde podremos disfrutar de un bello paseo siguiendo el curso del río, observando sus pequeñas cascadas. Es una zona habitual de escaladores en busca de nuevas sensaciones. Pasaremos por el palmeral de Tinghir donde podremos ver el impresionante contraste de su frondosidad con el árido paisaje que lo rodea hasta llegar a la ciudad de Erfoud, paraíso para quienes busquen fósiles, pues antiguamente la zona estaba cubierta por agua. También se conoce por haberse encontrado varios huesos de dinosaurio. Desde Erfoud nos dirigiremos a Merzouga, en el desierto, desde donde cogeremos los dromedarios que nos adentraran en las dunas y pasaremos la noche en una haima típica berebere.",
      },
      {
        day: 3,
        title: "Día 3: Merzouga-Ouarzazate-Marrakech",
        description:
          "Vuelta al hotel para ducharse y desayunar. Salida hacia Ouarzazate.  Pasaremos por el valle del Draa, uno de los más grandes de Marruecos, y en donde existen numerosas kasbahs que servían para defender a la región, podremos pasear por su palmeral en distintas ocasiones y apreciar el cambio de temperatura que se produce al adentrarse en él. Comeremos en Ouarzazate y luego continuaremos por sinuosas carreteras con paradas en lugares con vistas panorámicas hasta Marrakech.",
      },
    ],
    accommodation: [
      "1 noche en el Valle del Dadès en hotel con media pensión",
      "1 noche en Haimas en las dunas del Desierto con media pensión",
      "Excursión en dromedario en el desierto",
      "Tatuajes típicos de henna en el desierto",
      "Fiesta tradicional con tambores en el desierto",
      "Vehículo privado 4×4",
      "Guía acompañante en español durante la duración completa del viaje",
      "Traslados al aeropuerto",
    ],
  },
};
