import React from "react";
import Image from "next/image";
import "./styles.scss";
import { excursions } from "./data";
import ReservationButton from "../components/reservationButton/button";

export default function ExcursionsList() {
  return (
    <>
      <div className="mainDivExcursiones"></div>
      <div className="bg-gradient-to-br from-[#fbeee6] via-[#f9f6f2] to-[#e5e7eb]">
        <div className="flex flex-col items-center gap-10 py-12  min-h-screen">
          {excursions.map((exc, idx) => (
            <div
              key={idx}
              className="excursionsMainDiv flex flex-col md:flex-row items-stretch rounded-2xl shadow-xl bg-white/70 backdrop-blur p-8 gap-6 border border-gray-100 max-w-4xl w-full mx-auto relative overflow-hidden"
            >
              {/* Imagen con overlay */}
              <div className="md:w-1/2 w-full relative min-h-[250px] max-h-[350px] flex-shrink-0 rounded-2xl">
                <Image
                  src={exc.img}
                  alt={exc.title}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-2xl" />
              </div>
              {/* Texto y botón */}
              <div className="md:w-1/2 w-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl text-[#471919] mb-2">{exc.title}</h2>
                  <h3 className="text-lg text-[#a0522d] mb-4">
                    {exc.subtitle}
                  </h3>
                  <p className="text-gray-700 mb-6 whitespace-pre-line excursion-description">
                    {exc.description}
                  </p>
                </div>
                <ReservationButton
                  text={`Hola, me gustaría reservar la excursión: ${exc.subtitle || exc.title}`}
                  wspText={`Hola, me gustaría reservar la excursión: ${exc.subtitle}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
