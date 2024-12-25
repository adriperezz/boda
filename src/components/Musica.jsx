import { useState } from 'react';

const Musica = () => {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // Tipo de mensaje: 'success' o 'error'

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto de enviar el formulario.

    const data = { song, artist };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/xjaktwamp5ssz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage('¡Gracias por tu sugerencia!');
        setMessageType('success');
        setSong('');
        setArtist('');
      } else {
        const error = await response.json();
        setMessage(
          'Hubo un error al enviar tu sugerencia. Inténtalo de nuevo.'
        );
        setMessageType('error');
        console.error('Error:', error);
      }
    } catch (err) {
      setMessage(
        'Hubo un problema al conectar con el servidor. Inténtalo más tarde.'
      );
      setMessageType('error');
      console.error('Error:', err);
    }

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000);
  };

  return (
    <section className="py-16" id="musica">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl lg:text-4xl font-semibold text-verde-oscuro text-center mb-12 lg:mb-6">
          Sugerencias musicales
        </h2>
        <p className="text-lg text-verde-oscuro text-center mb-8">
          Queremos que la fiesta sea inolvidable. Por eso, nos encantaría
          incluir en ella vuestras canciones favoritas. ¡Dejadnos vuestras
          sugerencias!
        </p>

        {/* Mensaje de éxito o error */}
        {message && (
          <div
            className={`mb-6 p-4 text-center text-white font-bold rounded-md ${
              messageType === 'success' ? 'bg-verde-suave' : 'bg-red-200'
            }`}
          >
            {message}
          </div>
        )}

        <form
          className="rounded-md shadow-lg shadow-verde-suave p-6 border-2 border-verde-suave"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="song" className="block text-verde-oscuro mb-2">
              Nombre de la canción
            </label>
            <input
              type="text"
              id="song"
              name="song"
              value={song}
              onChange={(e) => setSong(e.target.value)}
              className="w-full border border-verde-suave rounded-lg p-3 text-verde-oscuro focus:outline-none focus:ring-2 focus:ring-verde-medio"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="artist" className="block text-verde-oscuro mb-2">
              Artista
            </label>
            <input
              type="text"
              id="artist"
              name="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="w-full border border-verde-suave rounded-lg p-3 text-verde-oscuro focus:outline-none focus:ring-2 focus:ring-verde-medio"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 w-full lg:w-1/2 bg-verde-oscuro text-white font-semibold rounded-md hover:bg-verde-oscuro focus:outline-none focus:ring-2 focus:ring-verde-medio"
            >
              Enviar sugerencia musical
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Musica;
