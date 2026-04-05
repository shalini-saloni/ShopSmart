import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const SearchIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
const HeartIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const UserIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const CartIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>;

export default function Header() {
  const { cartCount, favorites } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="header container">
      <nav className="nav-links">
        <Link to="/shop/women">WOMEN</Link>
        <Link to="/shop/men">MEN</Link>
        <Link to="/shop/kids">KIDS</Link>
        <Link to="/shop">SHOP ALL</Link>
      </nav>
      <Link to="/" className="logo">NS</Link>
      <div className="nav-icons">
        <span><SearchIcon /></span>
        {user ? (
          <span onClick={logout} style={{ fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer' }}>{user.name}</span>
        ) : (
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}><UserIcon /></Link>
        )}
        <Link to="/favorites" style={{ color: 'inherit', position: 'relative' }}>
          <HeartIcon />
          {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
        </Link>
        <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <CartIcon />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
}
