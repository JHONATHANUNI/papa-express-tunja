import React from 'react';
import './WhatsAppFloat.css';

const WHATSAPP_URL = 'https://wa.me/573222325484?text=Hola,%20quisiera%20consultar%20los%20precios%20de%20la%20papa%20hoy%20en%20Tunja';

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target='_blank'
      rel='noreferrer'
      className='whatsapp-float'
      aria-label='Chatear por WhatsApp'
    >
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
        alt='WhatsApp'
        style={{ width: '35px', height: '35px' }}
      />
    </a>
  );
};

export default WhatsAppFloat;
