// React Router DOM
import { useParams } from "react-router-dom";

// LocalData
import { productsData } from "../data/productsData";

// Components
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const { categoryId } = useParams();
  const filteredProducts = productsData.filter((product) => {
    if (categoryId === 'all') {
      return true;
    }
    return product.category === categoryId;
  });
  return <ItemListContainer productsData={filteredProducts} />;
};


export default Category;
