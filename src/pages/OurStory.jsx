 
// import { Link } from "react-router-dom";
// import { ArrowUpRight, Clock3, Heart, ShieldCheck } from "lucide-react";

// export default function OurStory() {
//   return (
//     <div className="our-story-page">
//       <section className="story-hero">
//         <div>
//           <span className="eyebrow light">THE STORY BEHIND WATCHORA</span>
//           <h1>More than time.<br /><em>A timeless feeling.</em></h1>
//           <p>Every second tells a story. Every watch holds a memory.</p>
//         </div>
//       </section>

//       <section className="story-content">
//         <div className="story-image">
//           <img
//             src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900"
//             alt="Elegant wristwatch"
//           />
//         </div>

//         <div className="story-text">
//           <span className="eyebrow">OUR JOURNEY</span>
//           <h2>Time deserves<br /><em>to be celebrated.</em></h2>
//           <p>
//             WATCHORA was created with one simple idea: a watch is more
//             than an accessory. It is a reflection of personality,
//             confidence and unforgettable moments.
//           </p>
//           <p>
//             We bring together timeless designs and thoughtfully
//             curated timepieces for every occasion.
//           </p>
//           <Link to="/collections" className="button button-dark">
//             EXPLORE OUR COLLECTION <ArrowUpRight size={17} />
//           </Link>
//         </div>
//       </section>

//       <section className="story-values">
//         <div>
//           <Clock3 />
//           <h3>TIMELESS DESIGN</h3>
//           <p>Styles that never go out of fashion.</p>
//         </div>
//         <div>
//           <Heart />
//           <h3>MADE WITH CARE</h3>
//           <p>Thoughtfully selected watches.</p>
//         </div>
//         <div>
//           <ShieldCheck />
//           <h3>QUALITY FIRST</h3>
//           <p>Beautiful timepieces you can trust.</p>
//         </div>
//       </section>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock3,
  Heart,
  ShieldCheck
} from "lucide-react";

export default function OurStory() {
  return (
    <div className="our-story-page">

      {/* HERO */}
      <section className="story-new-hero">
        <div className="story-hero-content">
          <span>THE WORLD OF WATCHORA</span>
          <h1>
            Every second<br />
            <em>has a story.</em>
          </h1>
          <p>
            More than watches. A reflection of who you are.
          </p>
          <Link to="/shop" className="story-explore-btn">
            DISCOVER OUR WATCHES <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="story-journey">

        <div className="journey-image">
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1000"
            alt="Elegant wristwatch"
          />
        </div>

        <div className="journey-content">
          <span className="story-label">01 — OUR JOURNEY</span>
          <h2>
            Born from a love<br />
            of <em>timeless design.</em>
          </h2>
          <p>
            At WATCHORA, we believe that a watch is more
            than something that tells time. It represents
            personality, confidence and special memories.
          </p>
          <p>
            Our collection brings together elegant designs
            and everyday functionality, helping you find
            a timepiece for every moment.
          </p>
          <Link to="/shop" className="story-text-link">
            EXPLORE THE COLLECTION <ArrowUpRight size={17} />
          </Link>
        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="story-philosophy">
        <span className="story-label">02 — OUR PHILOSOPHY</span>
        <h2>
          Time moves forward.<br />
          <em>Style stays forever.</em>
        </h2>
        <p>
          We celebrate individuality through thoughtfully
          selected timepieces that make every moment special.
        </p>
      </section>

      {/* VALUES */}
      <section className="story-values-new">

        <div className="values-heading">
          <span className="story-label">03 — WHAT DEFINES US</span>
          <h2>The WATCHORA <em>promise.</em></h2>
        </div>

        <div className="values-grid-new">

          <div className="value-item">
            <Clock3 />
            <span>01</span>
            <h3>TIMELESS DESIGN</h3>
            <p>
              Elegant styles that remain beautiful
              through every season.
            </p>
          </div>

          <div className="value-item">
            <Heart />
            <span>02</span>
            <h3>MADE WITH CARE</h3>
            <p>
              Every timepiece is thoughtfully
              selected for your lifestyle.
            </p>
          </div>

          <div className="value-item">
            <ShieldCheck />
            <span>03</span>
            <h3>QUALITY FIRST</h3>
            <p>
              We believe great design should
              meet everyday functionality.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL BANNER */}
      <section className="story-final-banner">
        <span>YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>Find your <em>moment.</em></h2>
        <Link to="/shop" className="story-explore-btn">
          SHOP ALL WATCHES <ArrowUpRight size={17} />
        </Link>
      </section>

    </div>
  );
}
