import "./stylesYoga.scss";
import ReservationButton from "@/app/components/reservationButton/button";
function Yoga() {
  return (
    <>
      <div className="mainDivYogaTop flex flex-col items-start h-screen">
        <div className="mt-72 ml-56 flex flex-col items-start text-white">
          <p className="tituloYoga ">YOGA</p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mainDivYoga flex flex-col justify-center">
          <p className="subtituloYoga w-[46vw] pl-24">
            Organizamos retiros de yoga personalizados en Marruecos.
          </p>
          <p className="subtituloYoga w-[34vw] pt-4 pl-24">
            Un destino ideal para desconectar, reencontrarte contigo mismo y
            conectar con la belleza natural y cultural del país.
          </p>
        </div>
        <div className="flex flex-row mt-22 ml-4">
          <p className="queOfrecemos mt-[14vh]">¿Qué ofrecemos?</p>
          <ul className="list-disc list pt-32 pl-8 text-xl gap-2">
            <li className="">
              <p>
                <strong>Retiros de yoga a medida: </strong>programas diseñados
                para grupos pequeños, adaptados a todos los niveles y estilos
              </p>
            </li>
            <li className="pt-2">
              <p>
                <strong>Entornos únicos: </strong>prácticas al amanecer en el
                desierto, jardines tradicionales, terrazas con vistas a montañas
                o al mar
              </p>
            </li>
            <li className="pt-2">
              <p>
                <strong>Instructores profesionales: </strong>acompañamiento de
                profesores o profesoras cualificados para guiar sesiones de
                yoga, meditación y mindfulness
              </p>
            </li>
            <li className="pt-2">
              <p>
                <strong>Combinación con experiencias culturales: </strong>
                excursiones, talleres de bienestar y gastronomía local para
                complementar la práctica y el descanso
              </p>
            </li>
            <li className="pt-2">
              <p>
                <strong>Alojamiento y logística: </strong>seleccionamos
                alojamientos confortables <br /> y espacios tranquilos, cuidando
                todos los detalles
                <br /> para una experiencia segura y relajante
              </p>
            </li>
            <li className="pt-10 list-none ">
              <div>
                <ReservationButton text="¡Hola! Me gustaría reservar una experiencia de yoga"/>
              </div>
            </li>
          </ul>
        </div>
        {/* <Image
          src="/images/wave-haikei-yoga.svg"
          alt=""
          className="w-full block"
          width={960}
          height={540}
          priority
          /> */}
      </div>
    </>
  );
}

export default Yoga;
