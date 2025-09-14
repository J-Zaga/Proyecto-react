import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(true);

    if (categoryId) {
      fetch(`https://dummyjson.com/products/category/${categoryId}`)
        .then(res => res.json())
        .then(data => setProducts(data.products))
        .finally(() => setLoading(false));
    } else {
      Promise.all(
        categories.map(cat =>
          fetch(`https://dummyjson.com/products/category/${cat}`)
            .then(res => res.json())
            .then(data => data.products)
        )
      )
        .then(results => setProducts(results.flat()))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando productos...</p>;

  const greeting = categoryId ? categoryNames[categoryId] : "¡Bienvenido a Tienda Apor!";

  return (
    <div style={{textAlign: "center" }}>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
