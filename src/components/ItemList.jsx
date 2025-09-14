import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",          
        justifyContent: "center",  
        gap: "20px",
        marginTop: "20px",
        padding: "0 10px"
      }}
    >
      {products.map((product) => (
        <div key={product.id} style={{ width: "200px" }}>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
