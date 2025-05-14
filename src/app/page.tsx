"use client"
import { motion } from "framer-motion";
import './mainStyles.scss';
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Header alwaysVisible={false} /> */}
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
            experiencias de viaje excepcionales. Sumérgete en la rica historia,
            los diversos paisajes y la vibrante cultura de Marruecos con
            nuestros tours cuidadosamente diseñados.
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
          <Image src="/btn-down.svg" alt="button down" width={50} height={30}></Image>
        </div>
      </div>
    </>
  );
}