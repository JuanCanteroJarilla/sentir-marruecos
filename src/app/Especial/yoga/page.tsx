import "./stylesYoga.scss";
import ReservationButton from "@/app/components/reservationButton/button";
function Yoga() {
  return (
    <>
      <div className="mainDivYogaTop flex flex-col sm:h-[42vh] w-full">
        <div className="mt-8 ml-4 sm:ml-10 md:ml-32 sm:mt-24 lg:ml-56 2xl:mt-64 lg:mt-59 flex flex-col text-white">
          <p className="tituloYoga">YOGA</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="mainDivYoga flex flex-col justify-center w-full">
          <p className="subtituloYoga w-full sm:w-[46vw] pl-0 sm:pl-24">
            Organizamos retiros de yoga personalizados en Marruecos.
          </p>
          <p className="subtituloYoga w-full sm:w-[34vw] pt-4 pl-0 sm:pl-24">
            Un destino ideal para desconectar, reencontrarte contigo mismo y
            conectar con la belleza natural y cultural del país.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full 2xl:mt-22 lg:mt-8 ml-0 sm:ml-4">
          <p className="queOfrecemos mt-8 sm:mt-[14vh]">¿Qué ofrecemos?</p>
          <ul className="list-disc list pt-4 sm:pt-32 pl-4 sm:pl-8 gap-2">
            <li>
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
            <li className="list-none">
              <div className="flex justify-center w-full reservation-btn-wrapper mt-10 mb-5 sm:mt-10">
                <ReservationButton text="¡Hola! Me gustaría reservar una experiencia de yoga" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Yoga;