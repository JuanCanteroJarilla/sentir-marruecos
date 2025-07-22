"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Seccion1 from "./Seccion1/seccion1";

export default function Home() {
  const isScrolling = useRef(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;

      const currentScrollY = window.scrollY;

      let currentIndex = 0;
      let minDistance = Infinity;
      sections.forEach((section, idx) => {
        const distance = Math.abs(section.offsetTop - currentScrollY);
        if (distance < minDistance) {
          minDistance = distance;
          currentIndex = idx;
        }
      });

      const isScrollingDown = event.deltaY > 0;

      let targetSection = null;
      if (isScrollingDown && currentIndex < sections.length - 1) {
        targetSection = sections[currentIndex + 1];
      } else if (!isScrollingDown && currentIndex > 0) {
        targetSection = sections[currentIndex - 1];
      }

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
        style={{ height: "100vh" }}
      >
        <div className="mainBox flex flex-col items-center justify-center h-full w-full">
          <motion.div
            className="mainText text-center"
            style={{
              maxWidth: "90vw",
              position: "relative",
              top: "0",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl"
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
              className="mainText2 mt-6 text-lg sm:text-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              ¡Viaja con nosotros y siente Marruecos como nunca antes!
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section id="rutasMarruecos">
        <Seccion1 />
      </section>
    </>
  );
}