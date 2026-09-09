import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home');
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='navbar'>
            <div className='brand-wrap'>
                <span className='navbar-title'>🥔 Papa Express Tunja</span>
            </div>

            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Inicio</Link>
                <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Nuestra Papa</a>
                <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Zonas en Tunja</a>
                <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contacto</a>
            </ul>

            <div className='navbar-right'>
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt='Carrito' /></Link>
                    <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Ingresar</button>
            </div>
        </div>
    );
};

export default Navbar;
