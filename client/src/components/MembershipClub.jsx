import { Link } from 'react-router-dom';

export default function MembershipClub() {
  return (
    <section className="membership-section container animate-on-scroll">
      <h2 className="membership-title">MEMBERSHIP CLUB</h2>
      
      <div className="membership-grid">
        <div className="membership-features">
          <div className="feature-card">
            <span className="feature-icon">⚲</span>
            <p>POINTS FOR PURCHASES</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏷</span>
            <p>EXCLUSIVE DISCOUNTS</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎁</span>
            <p>BIRTHDAY GIFTS</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👗</span>
            <p>EARLY ACCESS TO DROPS</p>
          </div>
        </div>
        
        <div className="membership-image-card">
          <img src="/images/kids3.png" alt="Membership Lifestyle" />
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/shop" className="explore-btn">
          Explore Benefits ↗
        </Link>
      </div>
    </section>
  );
}
