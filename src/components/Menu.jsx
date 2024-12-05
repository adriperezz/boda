import { useState } from 'react';

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Botón para abrir/cerrar el menú móvil */}
      <button
        className="block md:hidden text-verde-eucalipto focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menú móvil con transición */}
      <div
        className={`font-normal fixed inset-0 w-screen h-screen bg-arena bg-opacity-95 z-50 shadow-lg rounded-lg md:hidden flex flex-col justify-center items-center transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <a
          href="#nosotros"
          className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
        >
          Nosotros
        </a>
        <a
          href="#evento"
          className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
        >
          El Evento
        </a>
        <a
          href="#confirmar"
          className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
        >
          Confirmar Asistencia
        </a>
        <button
          className="absolute top-5 right-8 font-semibold"
          onClick={toggleMenu}
        >
          X
        </button>
      </div>
    </div>
  );
}
