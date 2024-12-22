export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esto habilita la transición suave
    });
  };

  return (
    <footer className="bg-verde-oscuro text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Flecha hacia arriba */}
        <div className="-mb-4">
          <button onClick={scrollToTop} className="text-arena">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7-7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Adrian y Bruna con font-windsong */}
        <div className="font-windsong text-2xl text-arena">
          <p>
            Adrián<span>&nbsp;&nbsp;</span>y<span>&nbsp;&nbsp;</span>Bruna
          </p>
        </div>

        <div>
          <p className="text-sm text-neutral-400">
            No dudes en escribirnos si tienes cualquier pregunta.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Boda de Adrián y Bruna</p>
        </div>
      </div>
    </footer>
  );
}
