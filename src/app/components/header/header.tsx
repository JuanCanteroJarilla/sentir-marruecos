"use client";
import React, { useState } from "react";
import "./styles.scss";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Header = ({}) => {
  const pathname = usePathname();
  const navTextColor = pathname === "/" ? "text-white" : "text-[#471919]";
  const rutas = [
    "Marrakech",
    "Ouarzazate",
    "Errachidia",
    "Fez",
    "Casablanca",
    "Tanger",
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="navigation flex items-center justify-between p-4"
        style={{
          background: "rgba(251, 238, 230, 0.55)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        {/* Botón hamburguesa para móvil */}
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú principal centrado (desktop) */}
        <div className="main-menu flex-1 ml-28 hidden md:block">
          <ul className={`flex justify-center list-none gap-6 ${navTextColor}`}>
            <li className="menu-item">
              <p className="link flex items-center gap-2">
                Rutas <FaChevronDown className="text-sm" />
              </p>
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 p-2">
                {rutas.map((ruta) => (
                  <li key={ruta} className="dropdown-item">
                    <Link
                      className="link"
                      href={`/Rutas?location=${encodeURIComponent(ruta)}`}
                      style={{ color: "#471919" }}
                    >
                      Desde {ruta}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="menu-item">
              <p className="link flex items-center gap-2">
                Actividades <FaChevronDown className="text-sm" />
              </p>
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 p-2">
                <li className="dropdown-item">
                  <Link
                    className="link"
                    href="/Actividades/alquiler-quads-y-buggies"
                    style={{ color: "#471919" }}
                  >
                    Alquiler de quads/buggies
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    className="link"
                    href="/Actividades/paseo-en-dromedario"
                    style={{ color: "#471919" }}
                  >
                    Paseo en dromedario
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    className="link"
                    href="/Actividades/globo-aerostatico"
                    style={{ color: "#471919" }}
                  >
                    Globo aerostático
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    className="link"
                    href="/Actividades/hammam"
                    style={{ color: "#471919" }}
                  >
                    Hammamm tradicional marroquí
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    className="link"
                    href="/Actividades/visitas-guiadas"
                    style={{ color: "#471919" }}
                  >
                    Visitas guiadas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link className="link" href="/Excursiones">
                Excursiones
              </Link>
            </li>
            <li className="menu-item" style={{ borderRight: "none" }}>
              <Link className="link" href="/A-medida">
                A medida
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={100} height={100} />
              </Link>
            </li>
            <li className="menu-item">
              <p className="link flex items-center gap-2">
                Especial <FaChevronDown className="text-sm" />
              </p>
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 p-2">
                <li className="dropdown-item">
                  <Link
                    className="link"
                    href="/Especial/viajar-con-ninos"
                    style={{ color: "#471919" }}
                  >
                    Viajar con niños
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    className="link"
                    href="/Especial/yoga"
                    style={{ color: "#471919" }}
                  >
                    Yoga
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link className="link" href="/Sobre-nosotros">
                Sobre nosotros
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" href="/Contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <>
            <div
              className="mobile-menu-backdrop"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            />
            <div className="mobile-menu">
              <ul className="flex flex-col gap-6 text-[#471919]">
                <li>
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Image src="/logo.png" alt="Logo" width={80} height={80} />
                  </Link>
                </li>
                <li>
                  <Link href="/Rutas" onClick={() => setMobileMenuOpen(false)}>
                    Rutas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Excursiones"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Excursiones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/A-medida"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    A medida
                  </Link>
                </li>
                {/* Menú Especial en móvil */}
                <li>
                  <span className="font-semibold">Especial</span>
                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    <li>
                      <Link
                        href="/Especial/viajar-con-ninos"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Viajar con niños
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Especial/yoga"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Yoga
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/Sobre-nosotros"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Contacto"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
              <div className="flex gap-4 mt-8">
                <Link className="social" href="">
                  <FaInstagram />
                </Link>
                <Link className="social" href="">
                  <RiFacebookCircleLine />
                </Link>
                <Link className="social" href="">
                  <BsTwitterX />
                </Link>
              </div>
            </div>
          </>
        )}

        {/* Menú de redes sociales a la derecha (desktop) */}
        <div className="social-links hidden md:block">
          <ul className="flex list-none gap-4">
            <li>
              <Link className="social" href="https://www.instagram.com/sentir_marruecos_viajes/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link className="social" href="">
                <RiFacebookCircleLine />
              </Link>
            </li>
            <li>
              <Link className="social" href="">
                <BsTwitterX />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
