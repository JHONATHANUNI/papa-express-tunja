import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, currencyFormatter } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 4000;
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Producto</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Quitar</p>
        </div>
        <br />
        <hr />

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{currencyFormatter.format(item.price)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{currencyFormatter.format(item.price * cartItems[item._id])}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }

          return null;
        })}
      </div>

      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Resumen del pedido</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{currencyFormatter.format(subtotal)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Domicilio Tunja</p>
              <p>{currencyFormatter.format(deliveryFee)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{currencyFormatter.format(total)}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>FINALIZAR COMPRA</button>
        </div>

        <div className='cart-promocode'>
          <div>
            <p>Si tienes un código promocional, ingrésalo aquí</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='Código promocional' />
              <button>Aplicar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
