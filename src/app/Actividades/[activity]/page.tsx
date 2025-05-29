"use client";
import "./styles.scss";
import { useState } from "react";
import { QuadsBuggies } from "./data";

export default function Actividad({
  params,
}: {
  params: { activity: string };
}) {
  const { activity } = params;
  //TO-DO hacer un server component para pasar params
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Si quieres mostrarlo con espacios y mayúsculas:
  const formattedTitle = activity
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <>
      <div className="mainDivQuads"></div>
      <div className="flex justify-center items-center tituloRutas">
        <p>{formattedTitle}</p>
      </div>
      
    <div className="max-w-2xl mx-auto mt-10 space-y-4">
      {QuadsBuggies.map((item, idx) => (
        <div
          key={item.id}
          className="border rounded-lg shadow-md bg-white"
          style={{ borderColor: "#e5e7eb" }}
        >
          <button
            className="flex justify-between items-center w-full px-6 py-4 text-lg font-semibold text-[#471919] focus:outline-none transition-colors hover:bg-[#fbeee6] rounded-t-lg"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`accordion-content-${item.id}`}
          >
            <span className="tracking-wide">{item.location}</span>
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
              openIndex === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            } bg-[#f9f6f2] px-6`}
          >
            <div className="py-4 text-gray-700 space-y-2">
              <p className="font-bold text-[#471919]">Zona: <span className="font-normal">{item.zone}</span></p>
              <p className="font-bold text-[#471919]">Vehículo: <span className="font-normal">{item.vehicle}</span></p>
              <p className="font-bold text-[#471919]">Descripción:</p>
              <p className="italic">{item.description}</p>
              <div>
                <p className="font-bold text-[#471919] mt-2">Modalidad:</p>
                <ul className="list-disc list-inside ml-4">
                  {item.modality.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-bold text-[#471919] mt-2">Incluye:</p>
                <ul className="list-disc list-inside ml-4">
                  {item.included.map((inc, i) => (
                    <li key={i}>{inc}</li>
                  ))}
                </ul>
              </div>
              {item.combine.length > 0 && (
                <div>
                  <p className="font-bold text-[#471919] mt-2">Se puede combinar con:</p>
                  <ul className="list-disc list-inside ml-4">
                    {item.combine.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <p className="font-bold text-[#471919] mt-2">Ideal para:</p>
                <ul className="list-disc list-inside ml-4">
                  {item.idealFor.map((ideal, i) => (
                    <li key={i}>{ideal}</li>
                  ))}
                </ul>
              </div>
              {item.additional.length > 0 && (
                <div>
                  <p className="font-bold text-[#471919] mt-2">Adicional:</p>
                  <ul className="list-disc list-inside ml-4">
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
  );
    </>
  );
}
