import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ns_cart')) || []; } catch { return []; }
  });
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ns_favs')) || []; } catch { return []; }
  });

  useEffect(() => { localStorage.setItem('ns_cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('ns_favs', JSON.stringify(favorites)); }, [favorites]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const toggleFavorite = (product) => {
    setFavorites(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.filter(i => i.id !== product.id);
      return [...prev, product];
    });
  };

  const isFavorite = (id) => favorites.some(i => i.id === id);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, cartCount, cartTotal, favorites, toggleFavorite, isFavorite }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
