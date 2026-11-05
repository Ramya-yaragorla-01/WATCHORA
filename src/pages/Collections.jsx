
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    name: "Analog Watches",
    description: "Classic designs for everyday elegance.",
    category: "Analog",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
  },
  {
    name: "Digital Watches",
    description: "Modern technology meets everyday style.",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800",
  },
  {
    name: "Chronograph",
    description: "Precision and performance in every second.",
    category: "Chronograph",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
  },
  {
    name: "Luxury Watches",
    description: "Make every moment feel extraordinary.",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
  },
  {
    name: "Minimal Watches",
    description: "Simple designs. Timeless beauty.",
    category: "Minimal",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
  },
];

export default function Collections() {
  return (
    <div className="collections-page">
      <section className="collections-heading">
        <span className="eyebrow">CURATED FOR EVERY MOMENT</span>
        <h1>Our <em>Collections</em></h1>
        <p>Find the timepiece that reflects your personality.</p>
      </section>

      <section className="collection-grid">
        {collections.map((item) => (
          <Link
            to={`/shop?category=${encodeURIComponent(item.category)}`}
            className="collection-card"
            key={item.category}
          >
            <img src={item.image} alt={item.name} />
            <div className="collection-overlay">
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <span className="collection-arrow">
                <ArrowUpRight size={22} />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
