import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Papa Fresca en Tunja — De la Finca a tu Puerta</h2>
        <p>
          Surtimos arrobas y bultos de papa pastusa, criolla y sabanera con envío rápido a todos los barrios de Tunja.
        </p>
        <button>Ver catálogo</button>
      </div>
    </div>
  );
};

export default Header;
