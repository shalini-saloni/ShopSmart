import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-section animate-on-scroll">
      <div className="container footer-grid">
        <div className="footer-logo-col">
          <h2 className="footer-logo">
            N<span style={{ fontStyle: 'italic' }}>S</span>
          </h2>
          <p className="footer-subtext">Store</p>

          <div className="footer-lang">
            <span>EN ˅</span>
          </div>
        </div>

        <div className="footer-links-col">
          <h3>FOR CUSTOMERS</h3>
          <ul>
            <li>
              <Link to="/">Shipping</Link>
            </li>
            <li>
              <Link to="/">Returns</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h3>ABOUT COMPANY</h3>
          <ul>
            <li>
              <Link to="/">About NS Store</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div className="social-icons">
            <span>◎</span>
            <span>💬</span>
            <span>♪</span>
          </div>
        </div>

        <div className="footer-newsletter-col">
          <h3>NEWS & STYLE TIPS</h3>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>→</button>
          </div>
          <p className="newsletter-disclaimer">
            By subscribing to the newsletter, you agree to the terms of the{' '}
            <strong>Privacy Policy</strong>
          </p>

          <p className="footer-copyright">NS Store, 2026. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
