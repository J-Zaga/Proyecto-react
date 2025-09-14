import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center"
    }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h3>{product.title}</h3>
      <p><strong>${product.price}</strong></p>
      <Link to={`/item/${product.id}`} style={{ color: "blue" }}>
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
