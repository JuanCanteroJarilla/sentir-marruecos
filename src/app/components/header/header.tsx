"use client";
import React from "react";
import "./styles.scss";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaChevronDown } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
// import useStore from "@/app/store";
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

  return (
    <>
      <nav
        className="navigation flex items-center justify-between p-4"
        style={{
          background: "rgba(251, 238, 230, 0.55)", // color crema semitransparente
          backdropFilter: "blur(8px)", // desenfoque del fondo
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        {/* Menú principal centrado */}
        <div className="main-menu flex-1 ml-28">
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
              {/* Dropdown */}
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
              <Link className="link" href="">
                Especial
              </Link>
            </li>
            {/* <li className="menu-item">
              <Link className="link" href="">
                Blog
              </Link>
            </li> */}
            <li className="menu-item">
              <Link className="link" href="">
                Sobre nosotros
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" href="">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú de redes sociales a la derecha */}
        <div className="social-links">
          <ul className="flex list-none gap-4">
            <li>
              <Link className="social" href="">
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
