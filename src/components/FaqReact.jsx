import React from 'react';
import Faq from 'react-faq-component';

const data = {
  rows: [
    {
      title: '¿Puedo traer acompañante?',
      content:
        'Intentaremos que todos estéis lo más agusto posible, para ello, habla con nosotros para ver posibilidades.',
    },
    {
      title: '¿Habrá menú especial o vegetariano?',
      content:
        '¡Claro! Indícanos tus preferencias de menú, incluso las alergias o intolerancias al confirmar tu asistencia.',
    },
    {
      title: '¿Puedo llevar a mi mascota al evento?',
      content:
        'Nos encantaría, pero lamentablemente no está permitido que las mascotas asistan al evento, ya que no se les permite la entrada ni en la iglesia ni en el parador. Si queréis traer a vuestra mascota a conocer Galicia, os recomendamos que os alojéis en el hotel Attica 21, que dispondréis de un precio cerrado si al gestionar la reserva, indicáis que asistís a la boda de Adrián y Bruna. (Está en Vigo, si queréis alojaros en Baiona consultad opciones).',
    },
  ],
};

const styles = {
  bgColor: 'transparent',
  rowTitleColor: '#384032',
  rowContentColor: '#737373',
  arrowColor: '#B3BCAF',
};

const config = {
  animate: true,
  tabFocus: true,
};

export default function FAQ() {
  return <Faq data={data} styles={styles} config={config} />;
}
