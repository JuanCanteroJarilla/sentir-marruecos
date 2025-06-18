"use client";
import "./styles.scss";
import { FaCalendarCheck } from "react-icons/fa";
type ReservationButtonProps = {
  text?: string
  wspText?: string; // Este campo es opcional si necesitas un texto específico para WhatsApp
};
export default function ReservationButton({ text,wspText }: ReservationButtonProps) {
  const handleClick = () => {
    const phone = "34617700244";
    const whatsappUrl = `https://wa.me/${phone}?text=${wspText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="flex flex-row items-center gap-2 text-bold css-button-neumorphic bg-gradient-to-r from-[#a0522d] to-[#471919] text-white font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition"
      onClick={handleClick}
    >
      <span>
        <FaCalendarCheck size={24} />
      </span>
      RESERVA AHORA
    </button>
  );
}
