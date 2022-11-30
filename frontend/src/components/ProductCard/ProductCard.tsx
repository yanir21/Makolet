import React from "react";
import Card from "react-bootstrap/Card";
import "./productCard.css";
import { Product } from "../../models/Product";
import Button from "react-bootstrap/Button";

const ProductCard = (product: Product) => {
  return (
    <Card className="card">
      <Card.Img className="image" variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Footer>
          <div className="button-section">
            <Button className="action-button">+</Button>
            <Button variant="danger" className="action-button">
              -
            </Button>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
