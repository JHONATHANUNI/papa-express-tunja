import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>
        Descarga la experiencia Papa Express <br />
        y pide tu papa fresca desde cualquier punto de Tunja.
      </p>
      <div className='app-download-platforms'>
        <img src={assets.play_store} alt='Google Play' />
        <img src={assets.app_store} alt='App Store' />
      </div>
    </div>
  );
};

export default AppDownload;
