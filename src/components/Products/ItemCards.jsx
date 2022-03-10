import React, { useState, useEffect } from "react";
import "./ItemCards.css";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function ItemCards({ products = [] }) {
  // const list = items.length > 0 ? items : products;

  let navigate = useNavigate();

  function handleClick(id) {
    navigate(`/paintings/${id}`);
  }

  return (
    <></>
    // <Row className="Item-Cards d-flex justify-content-between">
    //   {products.map((product) => (
    //     <Col sm={6} md={6} lg={6} key={product.id}>
    //       <div className="product-item">
    //         <img
    //           className="product-item_image"
    //           src={product.image}
    //           onClick={() => handleClick(product.id)}
    //           alt=""
    //         />
    //         <div className="product-item_detailes">
    //           <div className="product-item_detailes_col1">
    //             <span className="product-item_title">{product.title}</span>
    //             {/* <span className="product-item_aithor ">{product?.author}</span>
    //             <span className="product-item_location">
    //               {product?.location}
    //             </span> */}
    //           </div>
    //           <div className="product-item_detailes_col2">
    //             <span className="product-item_pice">{product.price}</span>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //   ))}
    // </Row>
  );
}
