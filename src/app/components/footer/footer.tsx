import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import "./styles.scss"

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white pt-12 pb-8 px-4 mt-16">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center gap-4">
          <Image src="/logo_white.png" alt="Logo" width={100} height={100} />
          <span className="text-2xl font-bold tracking-wide title">
            Sentir Marruecos
          </span>
          <p className="text-gray-400 text-sm mt-2 tracking-wide max-w-md text">
            Nuestra principal misión es &apos;Sentir Marruecos&apos;. Únete a nuestros
            proyectos de educación, autonomía y derechos humanos, o comparte tus
            ideas para ayudar. ¡Esperamos colaborar contigo!
          </p>
        </div>
        {/* Redes sociales */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold mb-2">Síguenos</span>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#00E0B8] transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#00E0B8] transition"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
              className="hover:text-[#00E0B8] transition"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>
      {/* Aviso legal */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sentir Marruecos. Todos los derechos
        reservados. |{" "}
        <Link href="/aviso-legal" className="underline hover:text-[#00E0B8]">
          Aviso legal
        </Link>
      </div>
    </footer>
  );
}