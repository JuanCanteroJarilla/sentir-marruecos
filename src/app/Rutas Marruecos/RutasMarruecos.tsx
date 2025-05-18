import "./styles.scss";
import Cards from "./cards";
import { data } from "../data";
type PlaceType = keyof typeof data;

function CardRutas({ place }: { place: PlaceType }) {
  const rutas = data["Ouarzazate"] || [];
  return (
    <>
      <div className="flex justify-center items-center pt-40 tituloRutas">
        <p>Rutas desde {place}</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {rutas.map((item) => (
          <Cards key={item.id} data={item} place={place}/>
        ))}
      </div>
    </>
  );
}

export default CardRutas;
