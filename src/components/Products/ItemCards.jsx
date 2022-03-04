import React from "react";
import { products } from "../../mockData/ListofProducts";
import "./ItemCards.css";
import { ProductItem } from "./ProductItem";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ItemCards({ items = [] }) {
  // const list = items.length > 0 ? items : products;

  return (
    <Row className="Item-Cards d-flex justify-content-between">
      {products.map((product) => (
        <Col sm={12} md={9} lg={6}>
          <ProductItem product={product} key={product.id} />
        </Col>
      ))}
    </Row>
  );
}
