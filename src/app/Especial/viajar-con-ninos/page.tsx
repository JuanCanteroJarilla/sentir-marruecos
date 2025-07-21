import "./stylesNinos.scss";
import { RiRoadMapFill } from "react-icons/ri";
import { FaChildReaching } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import Image from "next/image";
import ReservationButton from "@/app/components/reservationButton/button";
function ViajarConNiños() {
  return (
    <>
      <div className="mainDivViajarConNinos flex flex-col items-start h-screen">
        <div className="mt-24 sm:mt-32 md:mt-40 lg:mt-40 2xl:mt-38 ml-4 sm:ml-16 md:ml-32 lg:ml-56 flex flex-col items-start text-white">
          <p className="tituloNinos m-0 leading-none">Viajar</p>
          <p className="tituloNinos m-0 leading-none">Con</p>
          <p className="tituloNinos m-0 leading-none">Niños</p>
        </div>
      </div>
      <div className="flex flex-col pt-10">
        <p className="subtitulo drop-shadow-lg">
          Viajar a Marruecos con niños puede ser una aventura inolvidable si se
          planifica bien. En nuestros viajes guiados privados y personalizados,
          tenemos en cuenta las necesidades de toda la familia para que la
          experiencia sea cómoda, segura y divertida.
        </p>
      </div>
      <div className="flex flex-col mt-10 gap-4">
        <div className="flex flex-row justify-center gap-2 px-10">
          <p className="queOfrecemos">¿Qué ofrecemos?</p>
          <div className="list">
            <ul>
              <li className="gap-2 flex">
                <span>
                  <RiRoadMapFill size={24} />
                </span>
                <p>
                  <strong>Itinerarios flexibles: </strong>adaptados al ritmo y
                  descanso de los niños
                </p>
              </li>
              <li className="flex flex-col items-start gap-2 pt-2">
                <strong className="flex items-center gap-2">
                  <FaChildReaching size={24} className="inline-block" />
                  Actividades pensadas para ellos:
                </strong>
                <ul className="pl-22 list-disc">
                  <li>Paseos en camello por el desierto</li>
                  <li>
                    Conciertos en el desierto con música tradicional, donde los
                    niños pueden aprender a tocar tambores
                  </li>
                  <li>
                    Visitas a comunidades nómadas para interactuar con niños
                    locales
                  </li>
                  <li>Exploración de kasbahs, palmerales y oasis</li>
                  <li>
                    Conciertos Gnawa que despiertan la curiosidad y el interés
                    cultural
                  </li>
                  <li>
                    Diversión en el desierto con quads y sandboard, perfectos
                    para los más aventureros
                  </li>
                </ul>
              </li>
              <li className="gap-2 flex pt-2">
                <span>
                  <FaBusAlt size={24} />
                </span>
                <p className="">
                  <strong>Transporte adaptado: </strong>ofrecemos sillas para
                  bebés para garantizar la máxima seguridad y comodidad durante
                  los traslados
                </p>
              </li>
              <li className="gap-2 flex pt-2">
                <span>
                  <IoPeopleCircle size={28} />
                </span>
                <p>
                  <strong>Atención personalizada: </strong>para que padres e
                  hijos disfruten juntos sin preocupaciones
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-start px-14 pt-14">
          <p className="queOfrecemos"> Seguridad como prioridad</p>
          <div>
            <p className="seguridad max-w-[66rem] pl-4">
              La seguridad de los niños es nuestra máxima prioridad en cada
              etapa del viaje. Desde la elección de rutas, alojamientos y
              actividades, hasta el transporte con equipamiento adecuado,
              cuidamos cada detalle para que la familia pueda disfrutar con
              total tranquilidad.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-start gap-2 px-14 pt-14">
          <p className="queOfrecemos max-w-md">
            Beneficios de viajar con niños a Marruecos
          </p>
          <div className="list">
            <ul className="list-disc pl-6">
              <li className="gap-2">
                Descubren culturas y tradiciones diferentes
              </li>
              <li className="gap-2">
                Conectan con la naturaleza y la historia
              </li>
              <li className="gap-2">Viven experiencias únicas y educativas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-40 footerNiños">
        <div className="flex flex-col items-center">
          <p className="titleMedida">
            ¿Quieres un viaje en familia hecho a medida?
          </p>
          <p className="contactanos">
            Contáctanos y diseñemos juntos la mejor aventura para grandes y
            pequeños.
          </p>
          <div className="pt-8">
            <ReservationButton text="¡Hola! Me gustaría diseñar un viaje con niños" />
          </div>
        </div>
        <Image
          src="/images/wave-haikei.svg"
          alt=""
          className="w-full block h-64"
          width={1920}
          height={256}
          priority
        />
      </div>
    </>
  );
}

export default ViajarConNiños;
