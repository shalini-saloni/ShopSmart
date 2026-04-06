import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function Favorites() {
  const { favorites } = useCart();

  if (favorites.length === 0) {
    return (
      <div className="empty-page fade-in container">
        <h1>No Favorites Yet</h1>
        <p>Save items you love by tapping the heart icon.</p>
        <Link to="/shop" className="explore-btn">
          Browse Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="favorites-page fade-in container">
      <h1 className="cart-title">Your Favorites</h1>
      <div className="product-grid">
        {favorites.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
