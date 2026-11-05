
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowUpRight,
  Truck,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import { products } from "../data";
import WatchCard from "../components/WatchCard";

export default function Home ({
  addToCart,
  wishlist,
  toggleWishlist
}) {
  const location = useLocation();

  // Scroll to the selected section when navigating from another page
  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId) {
      const timer = setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState({}, document.title);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      {/* HOME HERO SECTION */}
      <section className="hero" id="home">
        <img
          src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1800"
          alt="Luxury watch"
        />

        <div className="hero-shade"></div>

        <div className="hero-content">
          <span className="eyebrow light">
            THE ART OF EVERY SECOND
          </span>

          <h1>
            Make every<br />
            <em>moment</em> count.
          </h1>

          <p>
            Timepieces that say more without saying a word.
          </p>

          <Link to="/shop" className="button button-light">
            EXPLORE THE COLLECTION
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits">
        <div>
          <Truck />
          <span>
            <b>COMPLIMENTARY SHIPPING</b>
            <small>On orders above ₹2,999</small>
          </span>
        </div>

        <div>
          <ShieldCheck />
          <span>
            <b>QUALITY YOU CAN TRUST</b>
            <small>Curated timepieces</small>
          </span>
        </div>

        <div>
          <Clock3 />
          <span>
            <b>TIMELESS DESIGN</b>
            <small>Made for every moment</small>
          </span>
        </div>
      </section>

      {/* COLLECTIONS SECTION */}
      <section
        className="section featured-section"
        id="collections"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>

            <h2>
              Find your <em>everyday</em> icon.
            </h2>
          </div>

          <Link to="/shop" className="text-link">
            VIEW ALL WATCHES
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="product-grid home-grid">
  {products.slice(0, 4).map((product) => (
    <WatchCard
      key={product.id}
      product={product}
      addToCart={addToCart}
      isWishlisted={wishlist.some(
        (item) => item.id === product.id
      )}
      toggleWishlist={toggleWishlist}
    />
  ))}
</div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="story-strip" id="about">
        <div>
          <span className="eyebrow light">
            A LITTLE MORE THAN TIME
          </span>

          <h2>
            Designed to be<br />
            <em>remembered.</em>
          </h2>

          <p>
            From quiet mornings to milestones worth celebrating,
            find a watch that feels like yours.
          </p>

          <Link to="/shop" className="button button-outline">
            DISCOVER WATCHORA
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
