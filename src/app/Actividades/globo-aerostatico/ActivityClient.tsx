"use client";
import "./styles.scss";
import { GloboAerostatico } from "../data";
import {
  FaRegClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar,
  FaGlobe,
} from "react-icons/fa";
export default function ActividadClient() {
  return (
    <>
      <div className="mainDivGlobo"></div>
      <div className=" bg-gradient-to-br from-[#fbeee6] via-[#f9f6f2] to-[#e5e7eb] py-12">
        <div className="flex justify-center items-center tituloRutas text-4xl font-extrabold text-[#471919] tracking-wider drop-shadow-lg mb-8 text-center">
          <p>Excursión en globo aerostático desde Marrakech</p>
        </div>
        <hr className="border-t-2 border-[#e5e7eb] w-104 mx-auto mb-8 opacity-60 rounded-full" />
        <div className="">
          <p className="text-center max-w-6xl mx-auto subTitle font-bold italic mb-2">
            Una experiencia única que comienza cuando el cielo aún duerme
          </p>
          <p className="text-center max-w-6xl mx-auto subTitle mb-8">
            Sobrevolar Marruecos en globo aerostático es una forma inolvidable
            de comenzar el día. Antes de que amanezca, saldrás de Marrakech
            hacia un rincón tranquilo donde todo estará listo para tu despegue.
            El silencio del cielo, la luz dorada que va tiñendo el paisaje y la
            inmensidad que se despliega bajo tus pies hacen de este momento algo
            mágico. Desde las montañas del Alto Atlas hasta los palmerales y
            pueblos bereberes, cada vuelo es diferente y especial.
          </p>
          <p className="text-center max-w-6xl mx-auto subTitle">
            Esta actividad no es solo un paseo: es un regalo para los sentidos.
            Volar en globo te dejará una sensación de paz y asombro difícil de
            describir. Perfecto para quienes buscan algo diferente, para
            celebrar una ocasión especial o simplemente para descubrir Marruecos
            desde otra perspectiva.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:flex-row max-w-1xl mt-10 gap-6">
          {GloboAerostatico.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-6 subTitle">
              <div className="relative flex flex-col rounded-xl px-6 py-4 bg-gradient-to-r from-[#8a5933] to-white shadow-md">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: "url('/images/pattern.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.08,
                    zIndex: 0,
                  }}
                />
                <div className="flex flex-column gap-2 desc mb-2">
                  <FaRegClock size={24} />
                  <p className="font-bold text-[#471919] text-lg">
                    Duración:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.duration}
                    </span>
                  </p>
                </div>
                <div className="flex flex-column gap-2 desc mb-2">
                  <FaMapMarkerAlt size={24} />
                  <p className="font-bold text-[#471919] text-lg">
                    Zona:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.zone}
                    </span>
                  </p>
                </div>
                <div className="flex flex-column gap-2 desc">
                  <FaCheckCircle size={24} />
                  <p className="font-bold text-[#471919] text-lg">Incluye: </p>
                  <ul className="list-disc ml-4 text-left text-lg tracking-wide font-normal">
                    {item.included.map((inc, index) => (
                      <li key={index}>{inc}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-column gap-2 desc mb-2">
                  <FaStar size={24} />
                  <p className="font-bold text-[#471919] text-lg">
                    Ideal para:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.idealFor}
                    </span>
                  </p>
                </div>
                <div className="flex flex-column gap-2 mb-2">
                  <FaGlobe size={24} />
                  <p className="font-bold text-[#471919] text-lg">
                    Tipo de experiencia:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.experienceType}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
