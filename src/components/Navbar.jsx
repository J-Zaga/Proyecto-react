import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 100px",
        backgroundColor: "#032c14ff",
        color: "white",
        position: "relative", 
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>Tienda ejemplo</h1>
      </div>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: 0,
          padding: 0,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Ropa</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Calzado</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Accesorios</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Ofertas</a></li>
      </ul>

      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
