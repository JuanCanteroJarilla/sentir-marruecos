"use client";
import "./styles.scss";
import Cards from "./cards";
import { data } from "../data";
import { useSearchParams } from "next/navigation";


type RutaKey = keyof typeof data;

function CardRutas({}) {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") as RutaKey | null;

  const rutas = location ? data[location] : Object.values(data).flat();
 

  return (
    <>
      <div className="flex justify-center items-center pt-40 tituloRutas">
        <p>Rutas desde {location}</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {rutas.map((item) => (
          <Cards key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default CardRutas;
