import { Heart, ShoppingCart, Star } from "lucide-react";

function WatchCard({
  product,
  addToCart,
  isWishlisted,
  toggleWishlist
}) {
  return (
    <div className="watch-card">

      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
        />

        <button
          type="button"
          className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label="Add to wishlist"
        >
          <Heart
            size={19}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>

        <button
          type="button"
          className="quick-add"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={16} />
          ADD TO CART
        </button>
      </div>

      <div className="product-info">

        <span className="product-brand">
          {product.brand}
        </span>

        <h3>{product.name}</h3>

        <div className="product-bottom">

          <strong>₹{product.price}</strong>

          {product.rating && (
            <div className="rating">
              <Star size={14} fill="currentColor" />
              <span>{product.rating}</span>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default WatchCard;