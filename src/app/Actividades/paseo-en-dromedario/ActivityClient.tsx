"use client";
import "./styles.scss";
import { PaseoEnDromedario } from "../data";
import Accordion from "@/app/utils/accordion";
import Image from "next/image";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaListUl, FaCheckCircle, FaStar, FaPlusCircle } from "react-icons/fa";
export default function ActividadClient() {
  return (
    <>
      <div className="mainDivQuads"></div>
      <div className=" bg-gradient-to-br from-[#fbeee6] via-[#f9f6f2] to-[#e5e7eb] py-12">
        <div className="flex justify-center items-center tituloRutas text-4xl font-extrabold text-[#471919] tracking-wider drop-shadow-lg mb-8 text-center">
          <p>
            Paseo en dromedario: una experiencia que te conecta con el alma del
            desierto
          </p>
        </div>
        <div className="">
          <p className="text-center max-w-6xl mx-auto subTitle">
            Explorar Marruecos a lomos de un dromedario es mucho más que una
            simple actividad turística: es una manera de viajar al ritmo del
            desierto, de sentir el silencio de las dunas y de vivir la esencia
            nómada que forma parte de nuestra historia. Ya sea en las dunas
            doradas de Merzouga o en el mágico paisaje del desierto de Agafay,
            este paseo te invita a desconectar del mundo moderno y conectar con
            la naturaleza, la tradición y contigo mismo.
          </p>
        </div>
        <hr className="border-t-2 border-[#e5e7eb] w-104 mx-auto mb-8 opacity-60 rounded-full" />
        <div className="flex flex-row max-w-2xl mx-auto mt-10 gap-6">
          {PaseoEnDromedario.map((item) => (
            <Accordion key={item.id} location={item.location}>
              <div className="py-4 text-gray-700 space-y-2 subTitle">
                <p className="italic text-lg tracking-wide">
                  {item.description}
                </p>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
