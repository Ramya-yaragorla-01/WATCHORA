
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <div className="logo footer-logo">
            WATCH<span>ORA</span>
            <small>TIME, REFINED.</small>
          </div>

          <p>
            Thoughtfully curated timepieces for every moment that matters.
          </p>

          <div className="socials">
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
            <a href="#youtube">YouTube</a>
          </div>
        </div>

        <div>
          <h4>EXPLORE</h4>
          <Link to="/shop">Shop all watches</Link>
          <Link to="/shop">New arrivals</Link>
          <Link to="/wishlist">Your wishlist</Link>
        </div>

        <div>
          <h4>HELP</h4>
          <a href="#shipping">Shipping information</a>
          <a href="#returns">Returns & exchanges</a>
          <a href="#contact">Contact us</a>
        </div>

        <div className="newsletter">
          <h4>THE WATCHORA NOTE</h4>
          <p>Sign up for new arrivals and thoughtful stories.</p>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for subscribing!");
          }}>
            <input
              type="email"
              placeholder="Your email address"
              required
            />
            <button type="submit">→</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 WATCHORA. DEMO STORE.</span>
        <span>PRIVACY · TERMS</span>
      </div>
    </footer>
  );
}
