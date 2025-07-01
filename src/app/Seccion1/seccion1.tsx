import Link from "next/link";
import "./styles.scss";
import { useState } from "react";

const Seccion1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative h-screen flex justify-center">
        {/* Overlay de fondo */}
        <div className="absolute inset-0 bg-[url('/images/essaouira4.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-white/88" />{" "}
        {/* Opacidad del fondo */}
        {/* Contenido */}
        <div className="relative h-screen flex flex-row justify-between items-center w-full pl-12">
          <div>
            <p className="titulo">Viajes a Marruecos - Destinos populares</p>
            <p className="subtitulo md:max-w-[60rem]">
              En Sentir Marruecos, nos comprometemos a proporcionar experiencias
              de viaje excepcionales que van más allá de lo ordinario. Nuestros
              viajes están diseñados para sumergirle en la belleza, la cultura y
              la historia de Marruecos, garantizando al mismo tiempo su
              comodidad y seguridad.
            </p>
          </div>
          <div className="cardRutas mr-16 flex flex-col items-center justify-center relative w-80 h-56 ">
            <div className="absolute rounded-2xl inset-0 bg-[url('/images/rutas-card.jpg')] bg-cover bg-center bg-no-repeat z-0" />
            <div className="absolute inset-0 bg-white/15" />{" "}
            <p className="textoFoto z-10 relative">
              ¡Haz clic y descubre nuestras rutas!
            </p>
            <button
              onClick={() => setOpen((v) => !v)}
              className="
          px-8 py-3 mt-4
          rounded-xl
          bg-white/30
          backdrop-blur-md
          shadow-lg
          border border-white/40
          text-white font-semibold
          flex items-center gap-2
          transition
          hover:bg-white/50
          hover:shadow-xl
          hover:scale-105
          duration-200
          rutasButton
        "
            >
              Explorar rutas desde...
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            {open && (
              <div className="absolute rutasButton left-1/2 top-92 mt-2 w-56 rounded-xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40 z-20 -translate-x-1/2 ">
                <Link
                  href="/Rutas?location=Marrakech"
                  className="block px-4 py-2 text-white font-semibold hover:bg-white/60 rounded-t-xl transition"
                >
                  Marrakech
                </Link>
                <Link
                  href="/Rutas?location=Ouarzazate"
                  className="block px-4 py-2 text-white font-semibold hover:bg-white/60 rounded-t-xl transition"
                >
                  Ouarzazate
                </Link>
                <Link
                  href="/Rutas?location=Errachidia"
                  className="block px-4 py-2 text-white font-semibold hover:bg-white/60 rounded-b-xl transition"
                >
                  Errachidia
                </Link>
                <Link
                  href="/Rutas?location=Fez"
                  className="block px-4 py-2 text-white font-semibold hover:bg-white/60 rounded-b-xl transition"
                >
                  Fez
                </Link>
                <Link
                  href="/Rutas?location=Casablanca"
                  className="block px-4 py-2 text-white font-semibold hover:bg-white/60 rounded-b-xl transition"
                >
                  Casablanca
                </Link>
                <Link
                  href="/Rutas?location=Tanger"
                  className="block px-4 py-2 text-white font-semibold hover:bg-white/60 rounded-b-xl transition"
                >
                  Tanger
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Seccion1;
