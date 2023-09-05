// React Router DOM
import { useNavigate } from "react-router-dom";

// React Button and Card
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Styles :D
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ productsData }) => {
  
  const navigate = useNavigate();

  return (
    <div className={styles.productContainer}>
      {productsData.map((product) => {
        return (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate(`/item/${product.id}`)}
              >
                Detalles
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
