import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { data, Product } from "./data";

function App() {
  const [focusedProduct, setFocusedProduct] = useState<Product>();
  const listKeys: (keyof Product)[] = ["name", "store", "description"];

  return (
    <div className="App">
      <div className="container">
        <div className="shopping-list-header">My Shopping List</div>
        <div className="list-container">
          {focusedProduct ? (
            <div className="more-details">
              {listKeys.map((key) => (
                <div>
                  <span className="detail">{key}:</span>
                  <span className="value">{focusedProduct[key]}</span>
                </div>
              ))}
              <img
                src={focusedProduct.anotherImageUrl}
                className="product-image"
              ></img>
              <div>
                <button onClick={() => setFocusedProduct(undefined)}>
                  Back
                </button>
              </div>
            </div>
          ) : (
            data.map((product) => (
              <div
                key={product.name}
                className="product-card"
                onClick={() => setFocusedProduct(product)}
              >
                <div className="left-details">
                  <div>
                    <b>{product.name}</b>
                  </div>
                  <div>{product.price}</div>
                </div>
                <div className="right-details">
                  <img src={product.imageUrl} className="product-image" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
