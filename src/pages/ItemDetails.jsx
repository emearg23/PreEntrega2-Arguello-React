// React
import React, { useEffect, useState } from "react";

// React Router DOM
import { useParams } from "react-router-dom";

// LocalData
import { productsData } from "../data/productsData";

// Components
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";


const ItemDetails = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const selectedProduct = productsData.find((product) => product.id === Number(itemId));
    setProduct(selectedProduct || {});
  }, [itemId]);

  return <ItemDetailContainer productData={product} />;
};

export default ItemDetails;
