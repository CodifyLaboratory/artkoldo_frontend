import React from "react";
import { products } from "./ListofProducts";
import "./ItemCards.css";
import { ProductItem } from "./product-items/ProductItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";

export default function ItemCards({ items = [] }) {
  const list = items.length > 0 ? items : products;

  return (
    <>
      <div className="Item-Cards">
        {list.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
