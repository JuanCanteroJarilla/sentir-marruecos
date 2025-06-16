import "./styles.scss";
import { FaCalendarCheck } from "react-icons/fa";
type ReservationButtonProps = {
  text: string;
};
export default function ReservationButton({text}:ReservationButtonProps) {
  const handleClick = () => {
    const phone = "34617700244"; // Cambia por tu número con código de país, sin +
    const message = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="flex flex-row items-center gap-2 text-bold css-button-neumorphic"
      onClick={handleClick}
    >
      <span>
        <FaCalendarCheck size={24} />
      </span>
      RESERVA AHORA
    </button>
  );
}
