import "./styles.scss";
import { FaCheckCircle } from "react-icons/fa";
import ReservationButton from "../components/reservationButton/button";
function Amedida() {
  return (
    <>
      <div
        className="main bg-[url('/images/water_people.jpg')] bg-cover bg-center bg-no-repeat "
        style={{ height: "100vh" }}
      >
        <div className="absolute inset-0 bg-white/25" />{" "}
        <div className="relative z-10 flex flex-col justify-center items-start h-full pl-12 ">
          <p className="titulo">DISEÑAMOS TU VIAJE A MEDIDA</p>
          <div className="max-w-4xl mt-4 bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-6">
            <p className="subtitulo">
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
