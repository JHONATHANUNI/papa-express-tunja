import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);
export const currencyFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
});

const CART_STORAGE_KEY = 'papa-express-tunja-cart';

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window === 'undefined') return {};

        try {
            const savedCart = localStorage.getItem(CART_STORAGE_KEY);
            return savedCart ? JSON.parse(savedCart) : {};
        } catch (error) {
            console.error('Error leyendo el carrito guardado:', error);
            return {};
        }
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const currentQuantity = Number(prev[itemId] || 0);
            const nextQuantity = currentQuantity - 1;

            return {
                ...prev,
                [itemId]: nextQuantity > 0 ? nextQuantity : 0
            };
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }

        return totalAmount;
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        currencyFormatter
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
