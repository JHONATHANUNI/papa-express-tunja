import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const DELIVERY_FEE = 4000;

const PlaceOrder = () => {
  const { cartItems, food_list, getTotalCartAmount, currencyFormatter } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    barrio: '',
    notas: ''
  });

  const subtotal = getTotalCartAmount();
  const total = subtotal + (subtotal === 0 ? 0 : DELIVERY_FEE);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedItems = food_list.filter((item) => cartItems[item._id] > 0);

    if (!selectedItems.length) {
      alert('Tu carrito está vacío. Agrega productos antes de confirmar el pedido.');
      return;
    }

    const nombre = formData.nombre.trim();
    const telefono = formData.telefono.trim();
    const direccion = formData.direccion.trim();
    const barrio = formData.barrio.trim();

    if (!nombre || !telefono || !direccion || !barrio) {
      alert('Por favor completa nombre, teléfono, dirección y barrio para continuar.');
      return;
    }

    const detailLines = selectedItems.map((item) => {
      const quantity = cartItems[item._id];
      return `- ${quantity}x ${item.name} (${currencyFormatter.format(item.price)})`;
    }).join('\n');

    const message = [
      '🥔 *¡Nuevo Pedido - Papa Express Tunja!*',
      `*Nombre:* ${nombre}`,
      `*Dirección en Tunja:* ${direccion}`,
      `*Barrio:* ${barrio}`,
      `*Teléfono:* ${telefono}`,
      '----------------------------------',
      '*Detalle del Pedido:*',
      detailLines,
      '----------------------------------',
      `*Domicilio (Tunja):* ${currencyFormatter.format(DELIVERY_FEE)}`,
      `*Total a pagar:* ${currencyFormatter.format(total)}`,
      '*Método de pago:* Efectivo / Nequi / Daviplata contra entrega.',
      formData.notas ? `*Notas:* ${formData.notas}` : ''
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/573222325484?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className='place-order-left'>
        <p className='title'>Datos de entrega</p>

        <input
          type='text'
          name='nombre'
          placeholder='Nombre completo'
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type='tel'
          name='telefono'
          placeholder='Teléfono'
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='direccion'
          placeholder='Dirección exacta en Tunja'
          value={formData.direccion}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='barrio'
          placeholder='Barrio / Sector'
          value={formData.barrio}
          onChange={handleChange}
          required
        />
        <textarea
          name='notas'
          rows='4'
          placeholder='Notas adicionales para la entrega'
          value={formData.notas}
          onChange={handleChange}
        />
      </div>

      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Resumen del pedido</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{currencyFormatter.format(subtotal)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Domicilio (Tunja)</p>
              <p>{currencyFormatter.format(subtotal === 0 ? 0 : DELIVERY_FEE)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{currencyFormatter.format(total)}</b>
            </div>
          </div>

          <button type='submit'>CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
