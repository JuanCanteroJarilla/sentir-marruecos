import { useState, ReactNode } from "react";
interface AccordionProps {
  location: ReactNode;
  children: ReactNode;
}
export default function Accordion({ location, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div id="accordion-collapse" data-accordion="collapse" className="w-full mb-6">
      <div
        className="rounded-2xl shadow-xl bg-white/90 backdrop-blur-md transition-transform hover:scale-[1.01]"
        style={{ borderColor: "#e5e7eb" }}
      >
        <button
          type="button"
          className="relative flex justify-between items-center w-full px-6 py-4 text-lg font-semibold text-[#471919] focus:outline-none transition-colors hover:bg-[#fbeee6] rounded-t-2xl rounded-b-2xl bg-gradient-to-r from-[#8a5933] to-white overflow-hidden"
          aria-expanded={open}
          aria-controls="accordion-collapse-body-1"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Patrón decorativo superpuesto, opcional */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/images/vintage_pattern_5.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.08,
              zIndex: 0,
            }}
          />
          <span className="locations relative z-10">{location}</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 shrink-0 relative z-10 transition-transform"
            style={{ transform: open ? "rotate(180deg)" : undefined }}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        {open && (
          <div className="rounded-b-2xl overflow-hidden">
            <div className="p-5 border border-b-0 border-gray-200">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}