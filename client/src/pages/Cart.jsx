import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQty, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-page fade-in container">
        <h1>Your Cart is Empty</h1>
        <p>Looks like you have not added anything to your cart yet.</p>
        <Link to="/shop" className="explore-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page fade-in container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
              <div className="qty-controls">
                <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
              </div>
            </div>
            <div className="cart-item-total">
              <p>${(item.price * item.qty).toFixed(2)}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
