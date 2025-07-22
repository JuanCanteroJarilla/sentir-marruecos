"use client";
import "./styles.scss";
import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
function Contacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  // Cambia este ID por el tuyo de Formspree
  const FORMSPREE_URL = "https://formspree.io/f/your_form_id";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch justify-center bg-[#f7fafc]">
      {/* Lado izquierdo: Texto y botón */}
      <div
        className="md:w-1/2 w-full flex flex-col justify-center items-center bg-[#1a2b49] p-10 text-white"
        style={{
          backgroundImage: 'url("/images/camel.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-md">
          <h2 className="titleDiseñamos text-4xl md:text-5xl font-bold mb-6 mt-40">
            Diseñamos tu viaje perfecto a Marruecos
          </h2>
          <p className="textDiseñamos mb-8 text-lg font-extrabold">
            ¿Sueñas con una experiencia única en Marruecos?
            <br />
            <br />
            En Sentir Marruecos, somos especialistas en crear viajes a medida
            para que vivas la magia de este país como nunca antes.
          </p>
          <div className="flex justify-center">
            <a href="#formulario">
              <button className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-3 px-8 rounded-full transition">
                <FaWhatsapp size={22} />
                haz clic aquí
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Lado derecho: Formulario */}
      <div
        className="md:w-1/2 w-full flex flex-col justify-center items-center p-10 bg-white"
        id="formulario"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#1a2b49]">
            Formulario de contacto
          </h3>
          <div className="mb-4">
            <input
              type="text"
              name="nombre"
              id="nombre"
              required
              placeholder="Nombre y apellidos"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="telefono"
              id="telefono"
              required
              placeholder="Teléfono"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="ruta"
              id="ruta"
              placeholder="Ruta de interés"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="observaciones"
              id="observaciones"
              rows={3}
              placeholder="Observaciones"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1a2b49] text-white font-bold py-3 px-8 rounded-full hover:bg-[#243a5e] transition"
            disabled={sent}
          >
            {sent ? "¡Enviado!" : "Enviar"}
          </button>
        </form>
        {sent && (
          <div className="mt-4 text-green-600 font-semibold">
            ¡Gracias! Tu mensaje ha sido enviado.
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacto;
