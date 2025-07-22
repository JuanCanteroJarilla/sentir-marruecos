import "./styles.scss";
import { FaCheckCircle } from "react-icons/fa";
import ReservationButton from "../components/reservationButton/button";

function Amedida() {
  return (
    <>
      <div
        className="relative w-full min-h-screen bg-[url('/images/water_people.jpg')] bg-cover bg-center bg-no-repeat overflow-x-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="inset-0 bg-white/25 absolute w-full h-full z-0" />
        <div className="relative flex flex-col justify-center items-start h-full w-full px-4 md:pl-12 py-8 md:py-0">
          <p className="tituloAMedida text-2xl md:text-4xl text-[#471919] text-left md:text-left w-full mb-4 mt-8 md:mt-64">
            DISEÑAMOS TU VIAJE A MEDIDA
          </p>
          <div className="max-w-4xl w-full mt-2 md:mt-4 bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6">
            <p className="subtituloAMedida text-base md:text-lg text-[#471919]">
              Tú eres el protagonista de esta historia. Por eso, todas las rutas
              que ofrece Sentir Marruecos pueden personalizarse según tus
              necesidades e intereses. Nos enfocamos en tu bienestar y en el
              impacto positivo sobre el entorno, por lo que todos nuestros
              viajes son privados. Queremos acercarte a la diversidad de
              Marruecos: su naturaleza, arquitectura, ciudades, culturas y
              tradiciones.
              <br />
              <br />
              Para diseñar tu viaje a medida, solo necesitamos saber:
              <br />
              <FaCheckCircle className="inline text-green-600 mx-2" />
              ¿Cuántas personas viajarán?
              <br />
              <FaCheckCircle className="inline text-green-600 mx-2" />
              ¿Cuántos días te gustaría viajar?
              <br />
              <FaCheckCircle className="inline text-green-600 mx-2" />
              ¿Cuáles son las ciudades de origen y destino?
              <br />
              <br />
              Con esta información, crearemos junto a ti una experiencia única,
              adaptando cada detalle hasta que tu viaje por Marruecos sea
              exactamente como lo imaginas.
            </p>
            <div className="pt-6 flex justify-center">
              <ReservationButton
                text="¡Hola! Estoy interesado en diseñar un viaje a medida con Sentir Marruecos."
                wspText="¡Hola! Estoy interesado en diseñar un viaje a medida con Sentir Marruecos."
                buttonText="¡CONTACTA CON NOSOTROS!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Amedida;