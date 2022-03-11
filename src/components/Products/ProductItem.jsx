import React from "react";
import "./ProductItem.css";
import { Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';




export const ProductItem = ({ product }) => {
  let navigate = useNavigate();
 
    function handleClick() {
      navigate('/productPage')

    }

  return (
    <Col sm={12} md={12} lg={12}>
      <div className="product-item" >
        <img className="product-item_image" src={product.image} onClick={handleClick} alt="" />
        <div className="product-item_detailes">
          <div className="product-item_detailes_col1">
            <span className="product-item_title">{product.title}</span>
            <span className="product-item_master">{product.master}</span>
            <span className="product-item_location">{product.location}</span>
          </div>
          <div className=" product-item_detailes_col2">
            <span className="product-item_pice">{product.price}</span>
          </div>
        </div>
      </div>
    </Col>
  
  )}