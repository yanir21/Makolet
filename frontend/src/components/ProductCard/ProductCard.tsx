import React from "react";
import Card from "react-bootstrap/Card";
import { Product } from "../../models/Product";

const ProductCard = (product: Product) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">+</Card.Link>
        <Card.Link href="#">-</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
