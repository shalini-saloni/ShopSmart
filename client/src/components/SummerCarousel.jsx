import { Link } from 'react-router-dom';

export default function SummerCarousel() {
  return (
    <section id="summer" className="summer-section container">
      <h2 className="summer-title animate-on-scroll">THIS SUMMER</h2>

      <div className="summer-carousel-container animate-on-scroll">
        <div className="summer-carousel">
          <Link to="/shop" className="summer-card" style={{ transitionDelay: '0ms' }}>
            <img src="/images/women_silk_dress.png" alt="Summer 1" />
          </Link>
          <Link to="/shop" className="summer-card" style={{ transitionDelay: '100ms' }}>
            <img src="/images/men.png" alt="Summer 2" />
          </Link>
          <Link to="/shop" className="summer-card" style={{ transitionDelay: '200ms' }}>
            <img src="/images/women_evening_gown.png" alt="Summer 3" />
          </Link>
          <Link to="/shop" className="summer-card" style={{ transitionDelay: '300ms' }}>
            <img src="/images/kids.png" alt="Summer 4" />
          </Link>
          <Link to="/shop" className="summer-card" style={{ transitionDelay: '400ms' }}>
            <img src="/images/women_jumpsuit.png" alt="Summer 5" />
          </Link>
          <Link to="/shop" className="summer-card" style={{ transitionDelay: '500ms' }}>
            <img src="/images/men2.png" alt="Summer 6" />
          </Link>
        </div>
      </div>

      <Link
        to="/shop"
        className="explore-btn animate-on-scroll"
        style={{ marginTop: '2rem', display: 'inline-block' }}
      >
        Explore the Collection ↗
      </Link>
    </section>
  );
}
