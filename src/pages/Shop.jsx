
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { products, categories, brands } from "../data";
import WatchCard from "../components/WatchCard";

export default function Shop({
  addToCart,
  wishlist,
  toggleWishlist
}) {
     const [searchParams, setSearchParams] = useSearchParams();

const selectedCategory = searchParams.get("category");
const urlSearch = searchParams.get("search") || "";
  const [category, setCategory] = useState("All Watches");
  const [brand, setBrand] = useState("All Brands");
 const [search, setSearch] = useState(urlSearch);
  const [sort, setSort] = useState("featured");

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {

      const categoryMatch = selectedCategory
        ? product.category.toLowerCase() ===
          selectedCategory.toLowerCase()
        : category === "All Watches" ||
          product.category === category;

      const brandMatch =
        brand === "All Brands" ||
        product.brand === brand;

      const searchMatch =
        `${product.name} ${product.brand} ${product.category}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && brandMatch && searchMatch;
    });

    // Sorting
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;

  }, [category, brand, search, sort, selectedCategory]);

  // Clear category from URL
  const clearCategory = () => {
    setSearchParams({});
    setCategory("All Watches");
  };

  return (
    <section className="shop-page">

      <div className="shop-banner">
        <span className="eyebrow light">
          THE WATCHORA COLLECTION
        </span>

        <h1>
          Time, <em>your way.</em>
        </h1>

        <p>
          Considered design. Everyday elegance.
          Find the one that feels like you.
        </p>
      </div>

      <div className="shop-container">

        <div className="shop-title-row">

          <div>
            <span className="eyebrow">THE COLLECTION</span>

            <h2>
              {selectedCategory
                ? `${selectedCategory} Watches`
                : category !== "All Watches"
                ? `${category} Watches`
                : "Shop all watches"}
            </h2>

            <p>Explore our edit of timeless essentials.</p>
          </div>

          <div className="shop-count">
            {filteredProducts.length} PRODUCTS
          </div>

        </div>

        <div className="shop-toolbar">

          <label className="search-box">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search watches, brands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          <label className="sort-box">
            <span>SORT BY</span>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>

        </div>

        <div className="shop-layout">

          <aside className="desktop-filters">

            <div className="filter-group">
              <h3>CATEGORIES</h3>

              {categories.map((item) => (
                <button
                  key={item}
                  className={`filter-option ${
                    (selectedCategory
                      ? selectedCategory === item
                      : category === item)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    setCategory(item);

                    if (item === "All Watches") {
                      setSearchParams({});
                    } else {
                      setSearchParams({ category: item });
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="filter-group">
              <h3>BRANDS</h3>

              {brands.map((item) => (
                <button
                  key={item}
                  className={`filter-option ${
                    brand === item ? "selected" : ""
                  }`}
                  onClick={() => setBrand(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="clear-filters"
              onClick={() => {
                setCategory("All Watches");
                setBrand("All Brands");
                setSearch("");
                setSearchParams({});
              }}
            >
              CLEAR ALL FILTERS
            </button>

          </aside>

          <div className="shop-results">

            <div className="active-filters">

              {selectedCategory && (
                <button onClick={clearCategory}>
                  {selectedCategory} <X size={13} />
                </button>
              )}

              {!selectedCategory &&
                category !== "All Watches" && (
                  <button onClick={() => setCategory("All Watches")}>
                    {category} <X size={13} />
                  </button>
                )}

              {brand !== "All Brands" && (
                <button onClick={() => setBrand("All Brands")}>
                  {brand} <X size={13} />
                </button>
              )}

            </div>

            {filteredProducts.length > 0 ? (

              <div className="product-grid">

                {filteredProducts.map((product) => (
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

            ) : (

              <div className="empty-state">
                <h3>No watches found</h3>

                <p>
                  Try a different search or clear your filters.
                </p>

                <button
                  className="button button-dark"
                  onClick={() => {
                    setCategory("All Watches");
                    setBrand("All Brands");
                    setSearch("");
                    setSearchParams({});
                  }}
                >
                  CLEAR FILTERS
                </button>
              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}
