import { Link } from 'react-router-dom';

export default function MembershipClub() {
  return (
    <section className="membership-section container animate-on-scroll">
      <h2 className="membership-title">MEMBERSHIP CLUB</h2>
      
      <div className="membership-grid">
        <div className="membership-features">
          <div className="feature-card">
            <span className="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span>
            <p>POINTS FOR PURCHASES</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg></span>
            <p>EXCLUSIVE DISCOUNTS</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="14" rx="2" /><path d="M12 5a3 3 0 1 0-3 3" /><path d="M12 5a3 3 0 1 1 3 3" /><line x1="12" y1="8" x2="12" y2="22" /></svg></span>
            <p>BIRTHDAY GIFTS</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></span>
            <p>EARLY ACCESS TO DROPS</p>
          </div>
        </div>
        
        <div className="membership-image-card">
          <img src="/images/hero1.png" alt="Membership Lifestyle" />
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
