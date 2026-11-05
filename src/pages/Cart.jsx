
// import { Link } from "react-router-dom";
// import { Minus, Plus, Trash2 } from "lucide-react";

// export default function Cart({
//   cart,
//   updateQuantity,
//   removeFromCart
// }) {

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (

//     <section className="simple-page">

//       <div className="simple-heading">
//         <span className="eyebrow">YOUR SELECTION</span>
//         <h1>Shopping <em>bag.</em></h1>
//         <p>{cart.length} item(s) in your bag</p>
//       </div>

//       {cart.length === 0 ? (

//         <div className="empty-state">
//           <h3>Your shopping bag is empty.</h3>
//           <p>Find your favourite watch.</p>

//           <Link to="/shop" className="button button-dark">
//             CONTINUE SHOPPING
//           </Link>
//         </div>

//       ) : (

//         <div className="cart-layout">

//           <div className="cart-items">

//             {cart.map((item) => (

//               <div className="cart-item" key={item.id}>

//                 <img src={item.image} alt={item.name} />

//                 <div className="cart-item-info">

//                   <small>{item.brand}</small>
//                   <h3>{item.name}</h3>

//                   <b>₹{item.price.toLocaleString("en-IN")}</b>

//                   <div className="quantity">

//                     <button onClick={() => updateQuantity(item.id, -1)}>
//                       <Minus size={14} />
//                     </button>

//                     <span>{item.quantity}</span>

//                     <button onClick={() => updateQuantity(item.id, 1)}>
//                       <Plus size={14} />
//                     </button>

//                   </div>

//                 </div>

//                 <button
//                   className="remove-button"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   <Trash2 size={17} />
//                 </button>

//               </div>

//             ))}

//           </div>

//           <aside className="order-summary">

//             <h3>ORDER SUMMARY</h3>

//             <div>
//               <span>Subtotal</span>
//               <b>₹{total.toLocaleString("en-IN")}</b>
//             </div>

//             <div>
//               <span>Shipping</span>
//               <b>{total >= 2999 ? "FREE" : "₹99"}</b>
//             </div>

//             <hr />

//             <div className="summary-total">
//               <span>Total</span>
//               <b>
//                 ₹{(total + (total >= 2999 ? 0 : 99)).toLocaleString("en-IN")}
//               </b>
//             </div>

//             <button
//               className="button button-dark full-button"
//               onClick={() => alert("Demo checkout only.")}
//             >
//               PROCEED TO CHECKOUT
//             </button>

//             <p className="demo-note">
//               Demo store. No real payment is collected.
//             </p>

//           </aside>

//         </div>

//       )}

//     </section>
//   );
// }




import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight
} from "lucide-react";

export default function Cart({
  cart,
  updateQuantity,
  removeFromCart
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal === 0 || subtotal >= 2999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <section className="cart-page">

      <div className="cart-header">
        <span>YOUR WATCHORA SELECTION</span>
        <h1>Shopping <em>Bag.</em></h1>
        <p>Almost yours. Review your selected timepieces.</p>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <ShoppingBag size={48} />
          <h2>Your bag is currently empty.</h2>
          <p>Discover a timepiece that speaks to you.</p>
          <Link to="/shop" className="cart-shop-btn">
            CONTINUE SHOPPING <ArrowRight size={17} />
          </Link>
        </div>
      ) : (
        <div className="cart-container">

          <div className="cart-items">

            <div className="cart-item-heading">
              <span>PRODUCT</span>
              <span>QUANTITY</span>
              <span>TOTAL</span>
            </div>

            {cart.map((item) => (
              <div className="cart-item" key={item.id}>

                <div className="cart-product">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <span>{item.brand}</span>
                    <h3>{item.name}</h3>
                    <strong>
                      ₹{item.price.toLocaleString("en-IN")}
                    </strong>

                    <button
                      className="cart-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={14} /> REMOVE
                    </button>
                  </div>
                </div>

                <div className="cart-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="cart-line-total">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </div>

              </div>
            ))}

            <Link to="/shop" className="cart-continue">
              <ArrowRight size={16} />
              CONTINUE SHOPPING
            </Link>

          </div>

          <aside className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>
                {shipping === 0 ? "FREE" : `₹${shipping}`}
              </span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() => alert("Checkout feature coming soon!")}
            >
              PROCEED TO CHECKOUT <ArrowRight size={17} />
            </button>

            <p className="shipping-note">
              Complimentary shipping on orders above ₹2,999.
            </p>

          </aside>

        </div>
      )}
    </section>
  );
}
