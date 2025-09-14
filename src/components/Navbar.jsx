import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    "tops",
    "mens-shirts",
    "mens-shoes",
    "womens-dresses",
    "womens-shoes",
    "womens-bags",
    "womens-jewellery",
    "sunglasses"
  ];

  const categoryNames = {
    "tops": "Vestidos",
    "mens-shirts": "Camisas hombre",
    "mens-shoes": "Calzado hombre",
    "womens-dresses": "Vestidos mujer",
    "womens-shoes": "Calzado mujer",
    "womens-bags": "Bolsos mujer",
    "womens-jewellery": "Joyería mujer",
    "sunglasses": "Anteojos de sol"
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 100px",
        backgroundColor: "#16032cff",
        color: "white",
        position: "relative",
      }}
    >

      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h1 style={{ margin: 0, cursor: "pointer" }}>Tienda Apor</h1>
        </Link>
      </div>

      <div ref={dropdownRef} style={{ position: "relative", marginLeft: "100px" }}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Categorías ▾
        </button>

        {dropdownOpen && (
          <ul
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              backgroundColor: "#16032cff",
              listStyle: "none",
              padding: "10px",
              margin: 0,
              borderRadius: "5px",
              minWidth: "150px",
              zIndex: 1000,
            }}
          >
            {categories.map((cat) => (
              <li key={cat} style={{ margin: "5px 0" }}>
                <Link
                  to={`/category/${cat}`}
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => setDropdownOpen(false)}
                >
                  {categoryNames[cat]}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginLeft: "auto" }}>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
