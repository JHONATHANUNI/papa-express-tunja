import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <h2 className='footer-logo'>🥔 Papa Express Tunja</h2>
          <p>
            Papa Express Tunja: Distribución y venta directa de papa pastusa, sabanera, criolla y R-12 en arrobas y bultos. Calidad de la finca a la puerta de tu hogar o negocio en Tunja, Boyacá.
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='Facebook' />
            <img src={assets.twitter_icon} alt='Twitter' />
            <img src={assets.linkedin_icon} alt='LinkedIn' />
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>Compañía</h2>
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Envíos</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>Contacto</h2>
          <ul>
            <li>+57 3222325484</li>
            <li>soporte@papaexpresstunja.com</li>
            <li>Tunja, Boyacá</li>
            <li>Atención directa por WhatsApp</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Papa Express Tunja • Domicilios en Tunja y Boyacá</p>
    </div>
  );
};

export default Footer;
