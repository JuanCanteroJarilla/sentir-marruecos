"use client";
import "./styles.scss";
import { useState } from "react";
import { QuadsBuggies } from "./data";

export default function ActividadClient({
  activity,
}: {
  activity: { activity: string };
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Si quieres mostrarlo con espacios y mayúsculas:
  const formattedTitle = activity.activity
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <>
      <div className="mainDivQuads"></div>
      <div className="min-h-screen w-full bg-gradient-to-br from-[#fbeee6] via-[#f9f6f2] to-[#e5e7eb] py-12 px-2">
        <div className="flex justify-center items-center tituloRutas text-4xl font-extrabold text-[#471919] tracking-wider drop-shadow-lg mb-8 text-center">
          <p>{formattedTitle}</p>
        </div>
        <hr className="border-t-2 border-[#e5e7eb] w-104 mx-auto mb-8 opacity-60 rounded-full" />
        <div className="max-w-2xl mx-auto mt-10 space-y-4">
          {QuadsBuggies.map((item, idx) => (
            <div
              key={item.id}
              className="border rounded-2xl shadow-xl bg-white/90 backdrop-blur-md transition-transform hover:scale-[1.01]"
              style={{ borderColor: "#e5e7eb" }}
            >
              <button
                className="relative flex justify-between items-center w-full px-6 py-4 text-lg font-semibold text-[#471919] focus:outline-none transition-colors hover:bg-[#fbeee6] rounded-t-lg bg-gradient-to-r from-[#fbeee6] to-[#f9f6f2] overflow-hidden"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`accordion-content-${item.id}`}
              >
                {/* Imagen de fondo con opacidad baja */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: "url('/images/vintage_pattern_5.jpg')", // pon aquí la ruta de tu imagen
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.08, // ajusta la opacidad a tu gusto
                    zIndex: 0,
                  }}
                />
                <span className="locations">{item.location}</span>
                <svg
                  className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`accordion-content-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                } bg-[#f9f6f2] px-6`}
              >
                <div className="py-4 text-gray-700 space-y-2 subTitle">
                  <p className="font-bold text-[#471919] text-lg">
                    Zona:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.zone}
                    </span>
                  </p>
                  <p className="font-bold text-[#471919] text-lg">
                    Vehículo:{" "}
                    <span className="font-normal text-lg tracking-wide">
                      {item.vehicle}
                    </span>
                  </p>
                  <p className="font-bold text-[#471919] text-lg">
                    Descripción:
                  </p>
                  <p className="italic text-lg tracking-wide">
                    {item.description}
                  </p>
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
                  {item.additional.length > 0 && (
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
