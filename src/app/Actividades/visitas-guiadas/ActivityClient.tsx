"use client";
import "./styles.scss";
import { VisitasGuiadas } from "../data";
import Accordion from "@/app/utils/accordion";
import { FaListUl, FaRegClock, FaGlobe, FaCheckCircle } from "react-icons/fa";
export default function ActividadClient() {
  return (
    <>
      <div className="mainDivVisitas"></div>
      <div className="bg-gradient-to-br from-[#fbeee6] via-[#f9f6f2] to-[#e5e7eb] py-12">
        <div className="flex justify-center items-center tituloRutas text-4xl font-extrabold text-[#471919] tracking-wider drop-shadow-lg mb-8 text-center">
          <p>Visitas guiadas</p>
        </div>
        <hr className="border-t-2 border-[#e5e7eb] w-104 mx-auto mb-8 opacity-60 rounded-full" />
        <div className="flex flex-row max-w-6xl mx-auto mt-10 gap-6">
          {VisitasGuiadas.map((item) => (
            <Accordion key={item.id} location={item.location}>
              <div className="py-4 text-gray-700 space-y-2 subTitle">
                <p className="italic text-lg tracking-wide font-bold">
                  {item.title}
                </p>
                <p className="italic text-lg tracking-wide">
                  {item.description}
                </p>
                <div className="flex flex-column gap-2">
                  <FaCheckCircle size={34} className="pt-2" />
                  <div>
                    <p className="font-bold text-[#471919] mt-2 text-lg">
                      Incluye:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-lg tracking-wide">
                      {item.included.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-column gap-2 desc mb-2">
                  <FaRegClock size={24} />
                  <p className="font-bold text-[#471919] text-lg">
                    Duración:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.duration}
                    </span>
                  </p>
                </div>
                <div className="flex flex-column gap-2 mb-2">
                  <FaGlobe size={24} />
                  <p className="font-bold text-[#471919] text-lg">
                    Tipo de experiencia:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.modality}
                    </span>
                  </p>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
