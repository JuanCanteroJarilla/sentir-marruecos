import "./styles.scss";
import Cards from "./cards";
import { data } from "../data";
function DivRutas() {
  return (
    <>
      <div className="flex justify-center items-center pt-40 tituloRutas">
        <p>Rutas desde Marrakech</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <Cards key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default DivRutas;
