import { Link } from 'react-router-dom';

export default function CategoryGrid() {
  return (
    <section id="categories" className="category-section container">
      <div className="category-grid">
        <Link to="/shop/women" className="category-card animate-on-scroll">
          <img src="/images/women_pleated_skirt.png" alt="Women" />
          <div className="category-label">WOMEN</div>
        </Link>
        <Link to="/shop/men" className="category-card animate-on-scroll" style={{ transitionDelay: '150ms' }}>
          <img src="/images/men3.png" alt="Men" />
          <div className="category-label">MEN</div>
        </Link>
        <Link to="/shop/kids" className="category-card animate-on-scroll" style={{ transitionDelay: '300ms' }}>
          <img src="/images/kids2.png" alt="Kids" />
          <div className="category-label">KIDS</div>
        </Link>
      </div>
    </section>
  );
}
