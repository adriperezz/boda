import { useState } from 'react';

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    asistencia: false,
    menuInfantil: false,
    alergia: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar el código para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <div
      className="flex justify-center items-center min-h-[50vh] py-6 px-4 container mx-auto"
      id="confirmar"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 g container w-full space-y-6"
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-verde-oscuro text-center mb-12 lg:mb-6">
          Confirmación de asistencia
        </h2>
        <p className="text-verde-medio">
          **¡IMPORTANTE!**
          <br />
          Rellenar un formulario por persona (Ejemplo: 2 adultos y 2 hijos
          serían 4 formularios, siendo 1 por persona)
        </p>

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
            className="w-full px-4 py-2 border border-verde-oscuro rounded-md focus:outline-none focus:ring-2 focus:ring-verde-medio text-verde-medio"
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
            className="h-5 w-5 border border-verde-oscuro focus:ring-2 focus:ring-verde-medio text-verde-medio"
          />
          <label
            htmlFor="asistencia"
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
            className="h-5 w-5 border border-verde-oscuro focus:ring-2 focus:ring-verde-medio text-verde-medio"
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
            className="w-full px-4 py-2 border border-verde-oscuro rounded-md focus:outline-none focus:ring-2 focus:ring-verde-medio text-verde-medio"
            rows="3"
          />
        </div>

        {/* Botón Enviar */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 w-1/2 bg-verde-oscuro text-white font-semibold rounded-md hover:bg-verde-oscuro focus:outline-none focus:ring-2 focus:ring-verde-medio"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
