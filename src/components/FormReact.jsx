import { useState } from 'react';

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    asistencia: false,
    menuInfantil: false,
    alergia: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // Tipo de mensaje: 'success' o 'error'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://sheetdb.io/api/v1/cqjygbxee5c4j', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envía el objeto como JSON
      });

      if (response.ok) {
        setMessage('¡Gracias por tu confirmación! Te esperemos con ilusión.');
        setMessageType('success');
        setFormData({
          nombre: '',
          asistencia: false,
          menuInfantil: false,
          alergia: '',
        });
      } else {
        const error = await response.json();
        setMessage(
          'Hubo un error al enviar tu confirmación. Inténtalo de nuevo.'
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
    <div
      className="flex justify-center items-center min-h-[50vh] py-6 px-4 container mx-auto"
      id="confirmar"
    >
      <form
        onSubmit={handleSubmit} // Asignamos el onSubmit correctamente
        className="bg-white p-8 g container w-full space-y-6"
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-verde-oscuro text-center mb-12 lg:mb-6">
          Confirmación de asistencia
        </h2>
        <p className="text-neutral-500">
          *¡IMPORTANTE!
          <br />
          Rellenar un formulario por persona (Ejemplo: 2 adultos y 2 hijos
          serían 4 formularios, siendo 1 por persona)
        </p>

        {/* Mensaje de éxito o error */}
        {message && (
          <div
            className={`mb-6 p-4 text-center text-white font-bold rounded-md ${
              messageType === 'success' ? 'bg-verde-suave' : 'bg-red-300'
            }`}
          >
            {message}
          </div>
        )}

        {/* Nombre Completo */}
        <div>
          <label
            htmlFor="nombre"
            className="block text-verde-oscuro font-semibold mb-2"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-verde-suave rounded-md focus:outline-none focus:ring-2 focus:ring-verde-medio text-verde-oscuro"
            required
          />
        </div>

        {/* Menu infantil */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="menuInfantil"
            name="menuInfantil"
            checked={formData.menuInfantil}
            onChange={handleChange}
            className="h-5 w-5 border border-verde-suave focus:ring-2 focus:ring-verde-medio text-verde-oscuro"
          />
          <label
            htmlFor="menuInfantil"
            className="text-verde-oscuro font-semibold"
          >
            ¿Menú infantil?
          </label>
        </div>

        {/* Confirmar Asistencia */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="asistencia"
            name="asistencia"
            checked={formData.asistencia}
            onChange={handleChange}
            className="h-5 w-5 border border-verde-suave focus:ring-2 focus:ring-verde-medio text-verde-oscuro"
          />
          <label
            htmlFor="asistencia"
            className="text-verde-oscuro font-semibold"
          >
            ¿Confirmas asistencia?
          </label>
        </div>

        {/* Alergia o Intolerancia Alimenticia */}
        <div>
          <label
            htmlFor="alergia"
            className="block text-verde-oscuro font-semibold mb-2"
          >
            ¿Tienes alguna alergia / intolerancia / restricción alimentaria?
          </label>
          <input
            type="text"
            id="alergia"
            name="alergia"
            value={formData.alergia}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-verde-suave rounded-md focus:outline-none focus:ring-2 focus:ring-verde-medio text-verde-oscuro"
          />
        </div>
        <div>
          <p className="text-neutral-500">
            Fecha límite de confirmación: 30/4/25
          </p>
        </div>

        {/* Botón Enviar */}
        <div className="text-center">
          <button
            type="submit" // Este debe ser el tipo 'submit'
            className="px-6 py-3  w-full lg:w-1/2 bg-verde-oscuro text-white font-semibold rounded-md hover:bg-verde-oscuro focus:outline-none focus:ring-2 focus:ring-verde-medio"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
