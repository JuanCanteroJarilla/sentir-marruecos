import "./styles.scss";
import { RiRoadMapFill } from "react-icons/ri";
function ViajarConNiños() {
  return (
    <>
      <div className="mainDivViajarConNinos flex flex-col items-start h-screen">
        <div className="mt-43 ml-56 flex flex-col items-start text-white">
          <p className="titulo m-0 leading-none">Viajar</p>
          <p className="titulo m-0 leading-none">Con</p>
          <p className="titulo m-0 leading-none">Niños</p>
        </div>
      </div>
      <div className="flex flex-col pt-10 text-center">
        <p className="subtitulo drop-shadow-lg">
          Viajar a Marruecos con niños puede ser una aventura inolvidable si se
          planifica bien. En nuestros viajes guiados privados y personalizados,
          tenemos en cuenta las necesidades de toda la familia para que la
          experiencia sea cómoda, segura y divertida.
        </p>
      </div>
      <div className="flex flex-row justify-center mt-10 gap-4">
        <p className="queOfrecemos mt-12">¿Qué ofrecemos?</p>
        <div className="list">
          <ul>
            <li className="gap-2">
              <span className="pt-1">
                <RiRoadMapFill size={24}/>
              </span>
              <p><strong>Itinerarios flexibles: </strong>adaptados al ritmo y descanso de los niños.</p>
            </li>
            <li>Actividades interactivas y educativas.</li>
            <li>Alojamiento familiar y cómodo.</li>
            <li>Guías expertos en viajes con niños.</li>
            <li>Asistencia personalizada durante todo el viaje.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ViajarConNiños;
