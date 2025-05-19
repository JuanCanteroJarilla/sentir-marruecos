"use client";
import "./styles.scss";
import Cards from "./cards";
import { data } from "../data";
import useStore from "../store";

type RutaKey = keyof typeof data;

function CardRutas({}) {
  const ruta = useStore((state) => state.ruta) as RutaKey;
  const rutas = data[ruta] || [];
  return (
    <>
      <div className="flex justify-center items-center pt-40 tituloRutas">
        <p>Rutas desde {ruta}</p>
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
