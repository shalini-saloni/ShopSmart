import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const qs = category ? `?category=${category}` : '';
    fetch(`/api/products${qs}`)
      .then(res => res.json())
      .then(data => { setProducts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [category]);

  const sorted = [...products].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="shop-layout fade-in">
      {/* Sidebar */}
      <aside className="shop-sidebar">
        <div className="sidebar-sticky-content">
          <div className="sidebar-logo">NS</div>
          <nav className="sidebar-nav">
            <h4>Categories</h4>
            <Link to="/shop" className={!category ? 'active' : ''}>All Items</Link>
            <Link to="/shop/women" className={category === 'women' ? 'active' : ''}>Women</Link>
            <Link to="/shop/men" className={category === 'men' ? 'active' : ''}>Men</Link>
            <Link to="/shop/kids" className={category === 'kids' ? 'active' : ''}>Kids</Link>

            <h4>Sort By</h4>
            <button onClick={() => setSortBy('default')} className={sortBy === 'default' ? 'active' : ''}>Default</button>
            <button onClick={() => setSortBy('price-asc')} className={sortBy === 'price-asc' ? 'active' : ''}>Price: Low to High</button>
            <button onClick={() => setSortBy('price-desc')} className={sortBy === 'price-desc' ? 'active' : ''}>Price: High to Low</button>
            <button onClick={() => setSortBy('name')} className={sortBy === 'name' ? 'active' : ''}>Name A-Z</button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="shop-main">
        <header className="shop-header">
          <h1 className="shop-title">{category || 'Shop All'}</h1>
          <p className="shop-count">{sorted.length} items</p>
        </header>

        {loading ? (
          <p style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', padding: '4rem' }}>Loading...</p>
        ) : (
          <div className="product-grid">
            {sorted.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </main>
    </div>
  );
}
