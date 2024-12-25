import React from 'react';

const CuentaReact = () => {
  const copyToClipboard = () => {
    const accountNumber = document.getElementById('account-number').textContent;
    const btnCopy = document.getElementById('btnCopy');
    navigator.clipboard.writeText(accountNumber).then(() => {
      btnCopy.textContent = 'Copiado!';
    });
  };

  return (
    <section className="py-20 bg-verde-oscuro" id="regalo-boda">
      <div className="container mx-auto md:px-12 text-center rounded-lg p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold text-blanco text-center mb-8 lg:mb-6">
          Nuestra lista de deseos
        </h2>
        <div className="text-center">
          <p className="text-lg text-white mb-6 font-lato">
            Vuestra presencia será nuestro mejor regalo, pero si queréis
            contribuir a nuestro futuro juntos, podéis hacerlo en este número de
            cuenta:
          </p>
          <div className="tracking-widest lg:text-2xl font-thin py-4 px-6 inline-block text-white">
            <p>
              IBAN:
              <span id="account-number"> ES09 1583 0001 1491 3670 5203</span>
            </p>
          </div>
          <button
            onClick={copyToClipboard}
            className="bg-white opacity-60 hover:bg-verde-suave text-verde-oscuro font-semibold py-2 px-4 rounded-md transition duration-300"
            id="btnCopy"
          >
            Copiar
          </button>
        </div>
      </div>
    </section>
  );
};

export default CuentaReact;
