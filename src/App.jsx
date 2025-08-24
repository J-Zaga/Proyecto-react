import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div className="main-container">
        <ItemListContainer greeting="¡Bienvenido a mi tienda ejemplo!" />
      </div>
    </div>
  );
}

export default App;

