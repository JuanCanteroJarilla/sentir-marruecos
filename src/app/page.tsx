"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./mainStyles.scss";
import Image from "next/image";
import CardRutas from "./Rutas Marruecos/RutasMarruecos";
export default function Home() {
  const isScrolling = useRef(false); // Para evitar múltiples activaciones

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault(); // Evita el scroll nativo
      if (isScrolling.current) return; // Evitar múltiples activaciones
      isScrolling.current = true;

      const currentScrollY = window.scrollY;

      // Encontrar la sección actual
      const currentIndex = sections.findIndex((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return (
          currentScrollY >= sectionTop - sectionHeight / 2 &&
          currentScrollY < sectionTop + sectionHeight / 2
        );
      });

      // Detectar la dirección del scroll
      const isScrollingDown = event.deltaY > 0;

      // Desplazarse a la siguiente o anterior sección
      const targetSection = isScrollingDown
        ? sections[currentIndex + 1]
        : sections[currentIndex - 1];

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // Permitir el siguiente scroll después de un pequeño retraso
      setTimeout(() => {
        isScrolling.current = false;
      }, 800); // Ajusta el tiempo según sea necesario
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <>
      {/* <Header alwaysVisible={false} /> */}
      <section id="home" style={{ height: "100vh" }}>
        <div className="mainBox flex items-center justify-center h-screen">
          <motion.div
            className="mainText text-center"
            style={{ maxWidth: "68vw", position: "relative", top: "-10vh" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="text-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Descubre Marruecos con la Agencia Sentir Marruecos, líder en
              experiencias de viaje excepcionales. Sumérgete en la rica
              historia, los diversos paisajes y la vibrante cultura de Marruecos
              con nuestros tours cuidadosamente diseñados.
            </motion.p>
            <motion.p
              className="mainText2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              ¡Viaja con nosotros y siente Marruecos como nunca antes!
            </motion.p>
          </motion.div>
          <div className="buttonDown">
            <Image
              src="/btn-down.svg"
              alt="button down"
              width={50}
              height={30}
            ></Image>
          </div>
        </div>
      </section>
      <section id="rutasMarruecos" style={{ height: "100vh" }}>
        <CardRutas place={"prueba"}/>
      </section>
      <section
        id="otraSeccion"
        style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
      >
        <h2>Otra Sección</h2>
      </section>
    </>
  );
}
