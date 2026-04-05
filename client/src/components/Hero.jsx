import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero-section animate-on-scroll">
      {/* Background Image Overlay */}
      <div className="hero-bg" style={{ backgroundImage: 'url(/images/hero.png)' }}></div>
      <div className="hero-overlay"></div>

      {/* Centered White Text */}
      <h1 className="hero-title animate-on-scroll">LOOKS YOU REMEMBER</h1>

      <div className="hero-content">
        <Link to="/shop" className="shop-now-btn animate-on-scroll">
          Shop Now ↗
        </Link>
      </div>

      <div className="hero-footer-bar animate-on-scroll">
        <Link to="/shop">LIMITED DROPS</Link>
        <Link to="/shop">ICONIC STYLING</Link>
        <Link to="/shop">THIS SEASON</Link>
        <Link to="/">NS STORY</Link>
      </div>
    </section>
  );
}
