import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img className='logo-white' src={assets.logo_white} alt='Papa Express Tunja' />
          <p>
            Papa Express Tunja - De la Finca a tu Hogar. Entregas directas de papa fresca en Tunja, con calidad, confianza y servicio cercano.
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
            <li>Nosotros</li>
            <li>Envíos</li>
            <li>Política</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>Zona de entrega</h2>
          <ul>
            <li>Centro</li>
            <li>Norte</li>
            <li>Maldonado</li>
            <li>Cooservicios</li>
            <li>Los Muiscas</li>
            <li>La Fuente</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Papa Express Tunja • Domicilios en Boyacá</p>
    </div>
  );
};

export default Footer;
