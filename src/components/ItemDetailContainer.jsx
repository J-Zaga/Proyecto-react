import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando detalle del producto...</p>;
  if (!product) return <p style={{ textAlign: "center" }}>Producto no encontrado.</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
