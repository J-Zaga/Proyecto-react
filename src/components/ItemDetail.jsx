import { useState } from "react";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  //placeholder para el boton de agregar
  const handleAdd = () => {
    console.log(`Se agregaron ${count} unidades de ${product.title} al carrito`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        gap: "20px"
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h2>{product.title}</h2>
      <p><strong>Precio: ${product.price}</strong></p>
      <p>{product.description}</p>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={decrement} style={{ padding: "5px 10px" }}>-</button>
        <span>{count}</span>
        <button onClick={increment} style={{ padding: "5px 10px" }}>+</button>
        <button
          onClick={handleAdd}
          style={{ padding: "5px 10px", backgroundColor: "#032c14ff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
