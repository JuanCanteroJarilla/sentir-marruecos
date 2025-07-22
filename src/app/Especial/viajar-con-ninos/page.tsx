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
      <div className="mainDivViajarConNinos flex flex-col items-start min-h-screen w-full">
        <div className="mt-20 sm:mt-28 md:mt-40 lg:mt-[42%] 2xl:mt-[34.5%] ml-4 sm:ml-10 md:ml-32 lg:ml-56 flex flex-col items-start text-white">
          <p className="tituloNinos m-0 leading-none text-4xl sm:text-5xl md:text-6xl">Viajar</p>
          <p className="tituloNinos m-0 leading-none text-4xl sm:text-5xl md:text-6xl">Con</p>
          <p className="tituloNinos m-0 leading-none text-4xl sm:text-5xl md:text-6xl">Niños</p>
        </div>
      </div>
      <div className="flex flex-col pt-8 px-4 sm:px-8">
        <p className="subtitulo drop-shadow-lg text-base sm:text-lg text-[#471919] text-left">
          Viajar a Marruecos con niños puede ser una aventura inolvidable si se
          planifica bien. En nuestros viajes guiados privados y personalizados,
          tenemos en cuenta las necesidades de toda la familia para que la
          experiencia sea cómoda, segura y divertida.
        </p>
      </div>
      <div className="flex flex-col mt-8 gap-6 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <p className="queOfrecemos font-bold mb-2 sm:mb-0">¿Qué ofrecemos?</p>
          <div className="list">
            <ul>
              <li className="gap-2 flex items-start">
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
                <ul className="pl-6 list-disc">
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
              <li className="gap-2 flex pt-2 items-start">
                <span>
                  <FaBusAlt size={24} />
                </span>
                <p>
                  <strong>Transporte adaptado: </strong>ofrecemos sillas para
                  bebés para garantizar la máxima seguridad y comodidad durante
                  los traslados
                </p>
              </li>
              <li className="gap-2 flex pt-2 items-start">
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
        <div className="flex flex-col sm:flex-row justify-start px-0 sm:px-14 pt-8 gap-2">
          <p className="queOfrecemos font-bold">Seguridad como prioridad</p>
          <div>
            <p className="seguridad max-w-2xl pl-0 sm:pl-4 text-[#471919]">
              La seguridad de los niños es nuestra máxima prioridad en cada
              etapa del viaje. Desde la elección de rutas, alojamientos y
              actividades, hasta el transporte con equipamiento adecuado,
              cuidamos cada detalle para que la familia pueda disfrutar con
              total tranquilidad.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-start gap-2 px-0 sm:px-14 pt-8">
          <p className="queOfrecemos font-bold max-w-md">
            Beneficios de viajar con niños a Marruecos
          </p>
          <div className="list">
            <ul className="list-disc pl-6">
              <li>Descubren culturas y tradiciones diferentes</li>
              <li>Conectan con la naturaleza y la historia</li>
              <li>Viven experiencias únicas y educativas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-20 sm:mt-40 footerNiños">
        <div className="flex flex-col items-center px-4">
          <p className="titleMedida text-xl sm:text-2xl text-center">
            ¿Quieres un viaje en familia hecho a medida?
          </p>
          <p className="contactanos text-center">
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
          className="w-full block"
          width={1920}
          height={256}
          priority
        />
      </div>
    </>
  );
}

export default ViajarConNiños;