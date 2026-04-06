import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const liked = isFavorite(product.id);

  return (
    <div className="product-card group">
      <div className="product-card-image">
        <img src={product.imageUrl} alt={product.name} />

        <button
          className={`like-btn ${liked ? 'liked' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            if (!user) navigate('/login');
            else toggleFavorite(product);
          }}
          aria-label="Favorite"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={liked ? '#E53E3E' : 'none'}
            stroke={liked ? '#E53E3E' : 'currentColor'}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <div className="product-overlay">
          <div className="product-info-inside">
            <h3>{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
          <button
            className="add-to-cart-inside"
            onClick={(e) => {
              e.preventDefault();
              if (!user) navigate('/login');
              else addToCart(product);
            }}
          >
            <span>Add to Cart</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
