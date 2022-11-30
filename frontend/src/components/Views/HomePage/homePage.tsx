import React, { useEffect, useState } from "react";
import { Product } from "../../../models/Product";
import { getAllProducts } from "../../../services/cartService";
import ProductCard from "../../ProductCard/productCard";
import "./homepage.css";

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
        <div className="title">All Products</div>
        <div className="product-list">
          <div className="row">
            {products.map((product) => (
              <div className="col-4">
                <ProductCard key={product.name} {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
