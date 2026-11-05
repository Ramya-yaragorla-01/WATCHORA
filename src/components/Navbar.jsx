
// import { Link, NavLink } from "react-router-dom";
// import {
//   Search,
//   Heart,
//   ShoppingBag,
//   Menu,
//   X
// } from "lucide-react";
// import { useState } from "react";

// export default function Navbar({ cartCount = 0, wishlistCount = 0 }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       <div className="announcement">
//         COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹2,999
//       </div>

//       <header className="navbar">

//         {/* LOGO */}
//         <Link to="/" className="logo" onClick={closeMenu}>
//           WATCH<span>ORA</span>
//           <small>TIME, REFINED.</small>
//         </Link>

//         {/* NAVIGATION */}
//         <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
//           <NavLink to="/" end onClick={closeMenu}>
//             HOME
//           </NavLink>
//           <NavLink to="/shop" onClick={closeMenu}>SHOP ALL</NavLink>

//           <NavLink to="/collections" onClick={closeMenu}>
//             COLLECTIONS
//           </NavLink>

//           <NavLink to="/story" onClick={closeMenu}>
//             OUR STORY
//           </NavLink>
//         </nav>

//         {/* ICONS */}
//         <div className="nav-actions">
//           <Link to="/collections" aria-label="Search watches">
//             <Search size={19} />
//           </Link>

//           <Link to="/wishlist" className="icon-count" aria-label="Wishlist">
//             <Heart size={19} />
//             <i>{wishlistCount}</i>
//           </Link>

//           <Link to="/cart" className="icon-count" aria-label="Shopping bag">
//             <ShoppingBag size={19} />
//             <i>{cartCount}</i>
//           </Link>
//         </div>

//         {/* MOBILE MENU */}
//         <button
//           className="mobile-menu"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X size={23} /> : <Menu size={23} />}
//         </button>

//       </header>
//     </>
//   );
// }



import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function Navbar({
  cartCount = 0,
  wishlistCount = 0
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(
      searchText.trim()
        ? `/shop?search=${encodeURIComponent(searchText.trim())}`
        : "/shop"
    );

    setSearchOpen(false);
    setSearchText("");
    closeMenu();
  };

  return (
    <>
      <div className="announcement">
        COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹2,999
      </div>

      <header className="navbar">

        <Link to="/" className="logo" onClick={closeMenu}>
          WATCH<span>ORA</span>
          <small>TIME, REFINED.</small>
        </Link>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>HOME</NavLink>
          <NavLink to="/shop" onClick={closeMenu}>SHOP ALL</NavLink>
          <NavLink to="/collections" onClick={closeMenu}>COLLECTIONS</NavLink>
          <NavLink to="/story" onClick={closeMenu}>OUR STORY</NavLink>
        </nav>

        <div className="nav-actions">

          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search watches"
          >
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>

          <Link to="/wishlist" className="icon-count">
            <Heart size={19} />
            <i>{wishlistCount}</i>
          </Link>

          <Link to="/cart" className="icon-count">
            <ShoppingBag size={19} />
            <i>{cartCount}</i>
          </Link>

        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </header>

      {searchOpen && (
        <form className="navbar-search" onSubmit={handleSearch}>
          <Search size={20} />

          <input
            type="text"
            placeholder="Search watches, brands..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
          />

          <button type="submit">SEARCH</button>
        </form>
      )}
    </>
  );
}
