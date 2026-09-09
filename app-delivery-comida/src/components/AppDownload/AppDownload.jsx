import React from 'react';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <div className='app-download-card'>
        <p className='app-download-kicker'>Atención directa en Tunja</p>
        <h3>Solicita tu venta de papa fresca hoy mismo</h3>
        <p className='app-download-copy'>
          Pedidos por arroba, bulto y papa criolla con entrega rápida en Tunja y zonas vecinas.
        </p>
        <a
          href='https://wa.me/573222325484?text=Hola,%20quisiera%20consultar%20los%20precios%20de%20la%20papa%20hoy%20en%20Tunja'
          target='_blank'
          rel='noreferrer'
          className='app-download-button'
        >
          Chatear por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
