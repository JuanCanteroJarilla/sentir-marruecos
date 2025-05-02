import React from "react";
import { FunctionComponent } from "react";
import "./styles.scss";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

import { BsTwitterX } from "react-icons/bs";

// interface Props {

// }

const Header: React.FC<{ alwaysVisible?: boolean }> = ({ alwaysVisible }) => {
  if (!alwaysVisible) {
    return null; // No renderiza si no es necesario
  }
  return (
    <>
      <nav className="navigation flex items-center justify-between p-4">
        {/* Menú principal centrado */}
        <div className="main-menu flex-1 ml-28">
          <ul className="flex justify-center list-none gap-6">
            <li>
              <Link className="link" href="/about">
                Rutas
              </Link>
            </li>
            <li>
              <Link className="link" href="/services">
                Agafay
              </Link>
            </li>
            <li>
              <Link className="link" href="/contact">
                Excursiones
              </Link>
            </li>
            <li>
              <Link className="link" href="/contact">
                A medida
              </Link>
            </li>
            <li>
              <div className="">
                <img src="/logo.png" alt="Logo" width={100} height={100} />
              </div>
            </li>
            <li>
              <Link className="link" href="/contact">
                Especial
              </Link>
            </li>
            <li>
              <Link className="link" href="/contact">
                Blog
              </Link>
            </li>
            <li>
              <Link className="link" href="/contact">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link className="link" href="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú de redes sociales a la derecha */}
        <div className="social-links" style={{ marginTop: "-4rem" }}>
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
