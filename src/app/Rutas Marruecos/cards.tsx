import "./styles.scss";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
type CardProps = {
  data: {
    title: string;
    img: string;
    location: string;
    days: string;
  };
  place: string;
};
function Cards({ data, place }: CardProps) {
  const { title, img, location, days } = data;
  return (
    <>
      <div className="relative max-w-sm rounded overflow-hidden shadow-lg gap-4 m-4">
        <div className="relative group">
          <Image
            src={img}
            alt={`Rutas '${place}'`}
            width={400}           // Ajusta el ancho según tu diseño
            height={250}          // Ajusta el alto según tu diseño
            className="w-full rounded-md group-hover:opacity-35 cursor-pointer transition duration-300 ease-in-out object-cover"
          />
          <button className="reserveText absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold cursor-pointer">
            Reserve ahora
          </button>
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 titleText">{title}</div>
          <p className="text-gray-700 text-base flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            {location}
          </p>
          <p className="text-gray-700 text-base flex items-center gap-2">
            <FaRegCalendarAlt className="text-blue-500" />
            {days} días
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
