
// import { Link } from "react-router-dom";
// import { Heart, ShoppingBag, X } from "lucide-react";

// export default function Wishlist({
//   wishlist,
//   toggleWishlist,
//   addToCart
// }) {

//   return (

//     <section className="simple-page">

//       <div className="simple-heading">
//         <span className="eyebrow">SAVED FOR LATER</span>
//         <h1>Your <em>wishlist.</em></h1>
//         <p>Your favourite timepieces in one place.</p>
//       </div>

//       {wishlist.length === 0 ? (

//         <div className="empty-state">
//           <Heart size={34} />

//           <h3>Your wishlist is empty.</h3>
//           <p>Tap the heart on a watch to save it here.</p>

//           <Link to="/shop" className="button button-dark">
//             EXPLORE WATCHES
//           </Link>
//         </div>

//       ) : (

//         <div className="wishlist-grid">

//           {wishlist.map((item) => (

//             <article className="wishlist-item" key={item.id}>

//               <img src={item.image} alt={item.name} />

//               <button
//                 className="wishlist-remove"
//                 onClick={() => toggleWishlist(item)}
//               >
//                 <X size={17} />
//               </button>

//               <div>

//                 <small>{item.brand}</small>
//                 <h3>{item.name}</h3>

//                 <b>₹{item.price.toLocaleString("en-IN")}</b>

//                 <button
//                   className="button button-dark full-button"
//                   onClick={() => addToCart(item)}
//                 >
//                   <ShoppingBag size={15} />
//                   ADD TO BAG
//                 </button>

//               </div>

//             </article>

//           ))}

//         </div>

//       )}

//     </section>
//   );
// }



import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";

export default function Wishlist({
  wishlist,
  toggleWishlist,
  addToCart
}) {
  return (
    <section className="wishlist-page">

      <div className="wishlist-header">
        <span>YOUR PERSONAL COLLECTION</span>
        <h1>My <em>Wishlist.</em></h1>
        <p>Your favourite timepieces, all in one place.</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="wishlist-empty">
          <Heart size={45} />
          <h2>Your wishlist is waiting.</h2>
          <p>Save the watches you love and find them here.</p>
          <Link to="/shop" className="wishlist-shop-btn">
            EXPLORE WATCHES <ArrowRight size={17} />
          </Link>
        </div>
      ) : (
        <div className="wishlist-container">

          <div className="wishlist-count">
            {wishlist.length} SAVED WATCHES
          </div>

          <div className="wishlist-grid">
            {wishlist.map((product) => (
              <article className="wishlist-card" key={product.id}>

                <div className="wishlist-image">
                  <img src={product.image} alt={product.name} />

                  <button
                    className="wishlist-remove"
                    onClick={() => toggleWishlist(product)}
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>

                <div className="wishlist-info">
                  <span>{product.brand}</span>
                  <h3>{product.name}</h3>

                  <div className="wishlist-price">
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
                  </div>

                  <button
                    className="wishlist-add-btn"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingBag size={16} />
                    ADD TO BAG
                  </button>
                </div>

              </article>
            ))}
          </div>

        </div>
      )}
    </section>
  );
}
