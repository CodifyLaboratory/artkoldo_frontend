import React from "react";
import "./ProductItem.css";
import {
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
  Dropdown,
} from "react-bootstrap";
import React, { useState } from "react";

export const ProductItem = ({ product }) => {

  const [productPage, setProductPage] = useState(false);

  return (
    <Col sm={12} md={5} lg={5}>
      <div className="product-item" >
        <img className="product-item_image" src={product.image} 
        onClick={() => setProductPage(!productPage)} alt="" />
        <div className="product-item_detailes">
          <div className="product-item_detailes_col1">
            <span className="product-item_title">{product.title}</span>
            <span className="product-item_aithor ">{product.author}</span>
            <span className="product-item_location">{product.location}</span>
          </div>
          <div className product-item_detailes_col2>
            <span className="product-item_pice">{product.price}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};
