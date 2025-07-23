"use client";
import "./styles.scss";
import { FaCalendarCheck } from "react-icons/fa";
type ReservationButtonProps = {
  text?: string;
  wspText?: string; // Este campo es opcional si necesitas un texto específico para WhatsApp
  buttonText?: string; // Texto del botón, por defecto "RESERVAR AHORA"
};
export default function ReservationButton({
  text,
  wspText,
  buttonText = "🇪🇸 RESERVAR AHORA",
}: ReservationButtonProps) {
  const handleClick = () => {
    const phone = "34633920706";
    const message = text || wspText;
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  const handleClickMrc = () => {
    const phone = "212658821953";
    const message = text || wspText;
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <button
          className="flex flex-col items-center justify-center gap-2 text-bold css-button-neumorphic bg-gradient-to-r from-[#a0522d] to-[#471919] text-white font-bold rounded-lg shadow hover:scale-105 transition"
          onClick={handleClick}
        >
          <span className="flex items-center justify-center gap-2">
            <FaCalendarCheck size={24} />
            <span>{buttonText}</span>
          </span>
        </button>
        <button
          className="flex flex-col items-center justify-center gap-2 text-bold css-button-neumorphic bg-gradient-to-r from-[#a0522d] to-[#471919] text-white font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition"
          onClick={handleClickMrc}
        >
          <span className="flex items-center justify-center gap-2">
            <FaCalendarCheck size={24} />
            <span>🇲🇦 RESERVAR AHORA</span>
          </span>
        </button>
      </div>
    </>
  );
}
