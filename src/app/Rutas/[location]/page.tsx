"use client";
import useStore from "@/app/store";
import { useParams } from "next/navigation";
export default function Ruta() {
  const ruta = useStore((state) => state.ruteLocation);
  const params = useParams();
  const locationParam = params.location as string;

  // Usa el estado si existe, si no, usa el parámetro de la URL
  const mostrarRuta = ruta || decodeURIComponent(locationParam);

  return (
    <>
      <div className="flex justify-center items-center pt-40 tituloRutas">
        <p>{mostrarRuta}</p>
      </div>
    </>
  );
}
