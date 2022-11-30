import React, { useEffect, useState } from "react";
import { Product } from "../../../models/Product";
import { getAllProducts } from "../../../services/cartService";
import ProductCard from "../../ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setProducts(await getAllProducts());
  };
  return (
    <div className="home">
      <div className="container">
        <div className="title"></div>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
