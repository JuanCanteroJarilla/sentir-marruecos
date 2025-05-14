import React from "react";
import "./styles.scss";
import Link from "next/link";
import { FaInstagram, FaChevronDown } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

import { BsTwitterX } from "react-icons/bs";

// interface Props {

// }

const Header = ({}) => {
  return (
    <>
      <nav className="navigation flex items-center justify-between p-4">
        {/* Menú principal centrado */}
        <div className="main-menu flex-1 ml-28">
          <ul className="flex justify-center list-none gap-6">
            <li className="menu-item">
              <Link className="link" href="/about">
                Rutas
              </Link>
            </li>
            <li className="menu-item">
              <p className="link flex items-center gap-2">
                Actividades <FaChevronDown className="text-sm" />
              </p>
              {/* Dropdown */}
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 p-2">
                <li className="dropdown-item">
                  <Link className="link" href="/services/camel-ride" style={{ color: "#471919" }}>
                    Alquiler de quads/buggies
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="link" href="/services/dinner" style={{ color: "#471919" }}>
                    Paseo en dromedario
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="link" href="/services/quad" style={{ color: "#471919" }}>
                    Globo aerostático
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="link" href="/services/quad" style={{ color: "#471919" }}>
                    Hammamm tradicional marroquí
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="link" href="/services/quad" style={{ color: "#471919" }}>
                    Visitas guiadas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link className="link" href="/contact">
                Excursiones
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" href="/contact">
                A medida
              </Link>
            </li>
            <li>
              <div className="">
                <img src="/logo.png" alt="Logo" width={100} height={100} />
              </div>
            </li>
            <li className="menu-item">
              <Link className="link" href="/contact">
                Especial
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" href="/contact">
                Blog
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" href="/contact">
                Sobre nosotros
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" href="/contact">
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
