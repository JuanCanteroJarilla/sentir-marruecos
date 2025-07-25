"use client";
import { useState } from "react";
import useStore from "@/app/store";
import GetAccommodation from "./[location]/accomodation";
import ReservationButton from "../components/reservationButton/button";
import { RouteInfo } from "./data";

export default function RutaCliente({
  locationParam,
}: {
  locationParam: string;
}) {
  const ruta = useStore((state) => state.ruteLocation);

  const mostrarRuta = ruta || decodeURIComponent(locationParam);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  const wspText: string = `Hola, me gustaría reservar la ruta ${mostrarRuta}. Por favor, indícame la disponibilidad y los precios. Gracias.`;
  return (
    <>
      <div className="flex justify-center items-center tituloRutas">
        <p>{capitalizeWords(mostrarRuta)}</p>
      </div>
      <div className="flex justify-center items-center description">
        <p>{RouteInfo[mostrarRuta]?.description}</p>
      </div>
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-8">
        {RouteInfo[mostrarRuta]?.days.map((day, idx) => (
          <div
            key={day.day}
            className="w-full border-b last:border-b-0"
            style={{ borderColor: "rgba(71, 25, 25, 0.2)" }}
          >
            <button
              className="flex justify-between items-center w-full py-4 px-4 text-left font-semibold text-[#471919] focus:outline-none transition-colors hover:bg-gray-100"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-content-${day.day}`}
            >
              <span className="dayTitle tracking-wide">{day.title}</span>
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
              id={`accordion-content-${day.day}`}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === idx ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
              } bg-gray-50 px-4`}
            >
              <div className="py-4 text-gray-600 dayDescription tracking-wide">
                {day.description || (
                  <span className="italic text-gray-400">Sin descripción</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ background: "linear-gradient(90deg, #fbeee6 0%, #fff 100%)" }}
      >
        <div className="flex flex-row justify-center items-center gap-2 mt-8 mb-4 tituloIncluyeRutas">
          <p>¿Qué incluye esta ruta?</p>
        </div>
        {RouteInfo[mostrarRuta]?.accommodation.map((acc, idx) => (
          <GetAccommodation accommodation={acc} key={idx} />
        ))}
      </div>
      <div className="flex flex-row justify-center mt-6 mb-6">
        <ReservationButton text={wspText} />
      </div>
    </>
  );
}
