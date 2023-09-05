// React
import { useEffect, useState } from "react";

// LocalData
import { productsData } from "../data/productsData";

// Components
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemListContainer productsData={products} />
      )}
    </div>
  );
};

export default Home;
