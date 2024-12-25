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
        className="block lg:hidden text-verde-eucalipto focus:outline-none"
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
        className={`fixed inset-0 w-screen h-screen bg-arena bg-opacity-95 z-50 shadow-lg rounded-lg lg:hidden transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container h-screen mx-auto font-semibold text-verde-oscuro text-lg flex flex-col justify-center items-center w-screen gap-16">
          <div className="text-3xl text-verde-oscuro font-windsong font-normal rounded-full size-24 border border-black flex justify-center items-center">
            <a href="#">AyB</a>
          </div>
          <div className="text-center">
            <a
              href="#ubicacion"
              onClick={toggleMenu}
              className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
            >
              Ubicación
            </a>
            <a
              href="#alojamientos"
              onClick={toggleMenu}
              className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
            >
              Alojamientos
            </a>
            <a
              href="#codigo"
              onClick={toggleMenu}
              className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
            >
              Código vestimenta
            </a>
            <a
              href="#musica"
              onClick={toggleMenu}
              className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
            >
              Sugerencia musical
            </a>
            <a
              href="#fotos"
              onClick={toggleMenu}
              className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
            >
              Fotos
            </a>
            <a
              href="#confirmar"
              onClick={toggleMenu}
              className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
            >
              Confirmar asistencia
            </a>
            <a
              href="#faq"
              onClick={toggleMenu}
              className="block px-4 py-2 text-verde-oscuro hover:text-verde-suave"
            >
              FAQ
            </a>
          </div>

          <button
            className="absolute top-5 right-12 font-semibold"
            onClick={toggleMenu}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
