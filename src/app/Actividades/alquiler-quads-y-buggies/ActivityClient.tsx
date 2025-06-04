"use client";
import "./styles.scss";
import { QuadsBuggies } from "../data";
import Accordion from "@/app/utils/accordion";
import Image from "next/image";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaListUl, FaCheckCircle, FaStar, FaPlusCircle } from "react-icons/fa";
export default function ActividadClient() {

  return (
    <>
      <div className="mainDivQuads"></div>
      <div className="min-h-screen w-full bg-gradient-to-br from-[#fbeee6] via-[#f9f6f2] to-[#e5e7eb] py-12 px-2">
        <div className="flex justify-center items-center tituloRutas text-4xl font-extrabold text-[#471919] tracking-wider drop-shadow-lg mb-8 text-center">
          <p>Alquiler de quads y buggies</p>
        </div>
        <hr className="border-t-2 border-[#e5e7eb] w-104 mx-auto mb-8 opacity-60 rounded-full" />
        <div className="flex flex-row max-w-6xl mx-auto mt-10 gap-6">
          {QuadsBuggies.map((item) => (
            <Accordion key={item.id} location={item.location}>
              <div className="py-4 text-gray-700 space-y-2 subTitle">
                <p className="italic text-lg tracking-wide">
                  {item.description}
                </p>
                <div className="flex flex-column gap-2">
                  <FaMapLocationDot size={32} />
                  <p className="font-bold text-[#471919] text-lg">
                    Zona:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.zone}
                    </span>
                  </p>
                </div>
                <div className="flex flex-column gap-2">
                  <Image
                    src="/images/quad.svg"
                    alt="Quad"
                    width={28}
                    height={28}
                    className="inline w-8 h-8"
                    style={{ color: "#471919" }}
                  />
                  <p className="font-bold text-[#471919] text-lg">
                    Vehículo:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.vehicle}
                    </span>
                  </p>
                </div>
                <div className="flex flex-column gap-2">
                  <FaListUl size={34} className="pt-2" />
                  <div>
                    <p className="font-bold text-[#471919] mt-2 text-lg">
                      Modalidad:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-lg tracking-wide">
                      {item.modality.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-column gap-2">
                  <FaCheckCircle size={32} className="pt-2" />
                  <div>
                    <p className="font-bold text-[#471919] mt-2 text-lg">
                      Incluye:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-lg tracking-wide">
                      {item.included.map((inc, i) => (
                        <li key={i}>{inc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {item.combine.length > 0 && (
                  <div>
                    <p className="font-bold text-[#471919] mt-2 text-lg">
                      Se puede combinar con:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-lg tracking-wide">
                      {item.combine.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-column gap-2">
                  <FaStar size={32} className="pt-2" />
                  <div>
                    <p className="font-bold text-[#471919] mt-2 text-lg">
                      Ideal para:
                    </p>
                    <ul className="list-disc list-inside ml-4 text-lg tracking-wide">
                      {item.idealFor.map((ideal, i) => (
                        <li key={i}>{ideal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {item.additional.length > 0 && (
                  <div className="flex flex-column gap-2">
                    <FaPlusCircle size={32} className="pt-2" />
                    <div>
                      <p className="font-bold text-[#471919] mt-2 text-lg">
                        Adicional:
                      </p>
                      <ul className="list-disc list-inside ml-4 text-lg tracking-wide">
                        {item.additional.map((add, i) => (
                          <li key={i}>{add}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
