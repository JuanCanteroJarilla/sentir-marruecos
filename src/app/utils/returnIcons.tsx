import { GiArabicDoor, GiCamel, GiDrum } from "react-icons/gi";
import { FaBed, FaMapMarkedAlt, FaUserTie, FaCar, FaPenNib } from "react-icons/fa";
import { TbCarSuvFilled } from "react-icons/tb";
import { FaTent } from "react-icons/fa6";

export default function getAccomodationIcon(accommodation: string) {
  const acc = accommodation.toLowerCase();

  switch (true) {
    case acc.includes("riad"):
      return (
        <>
          <FaBed className="w-6 h-6 mr-2 text-[#471919]" />
          <GiArabicDoor className="w-6 h-6 mr-2 text-[#471919]" />
        </>
      );
    case acc.includes("hotel") || acc.includes("noche"):
      return <FaBed className="w-6 h-6 mr-2 text-[#471919]" />;
    case acc.includes("vehículo") || acc.includes("4x4"):
      return <TbCarSuvFilled className="w-6 h-6 mr-2 text-[#471919]" />;
    case acc.includes("visita"):
      return <FaMapMarkedAlt className="w-6 h-6 mr-2 text-[#471919]" />;
    case acc.includes("guía"):
      return <FaUserTie className="w-6 h-6 mr-2 text-[#471919]" />;
    case acc.includes("traslados"):
      return <FaCar className="w-6 h-6 mr-2 text-[#471919]" />;
    case acc.includes("dromedario"):
      return <GiCamel className="w-6 h-6 mr-2 text-[#471919]" />;
    case acc.includes("haima"):
      return <FaTent className="w-6 h-6 mr-2 text-[#471919]" />;
    case acc.includes("henna"):
      return <FaPenNib className="w-6 h-6 mr-2 text-[#471919]" />;
    case acc.includes("tambor"):
      return <GiDrum className="w-6 h-6 mr-2 text-[#471919]" />;
    default:
      return null;
  }
}