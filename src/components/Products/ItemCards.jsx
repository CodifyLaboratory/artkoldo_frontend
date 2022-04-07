import React, { useState, useEffect } from "react";
import "./ItemCards.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/product-logo.jpeg";

export default function ItemCards({ products = [], category = "" }) {
  return (
    <div className="Item-Cards">
      {products?.map((product) => (
        <div className="product-item" key={product?.id}>
          <Link to={`/${product?.category}s/${product?.id}`}>
            {product?.photo_1 ? (
              <img
                className="product-item_image"
                id={product?.id}
                src={product?.photo_1}
                alt=""
              />
            ) : (
              <img
                className="product-item_logo"
                id={product?.id}
                src={`${Logo}`}
                alt=""
              />
            )}
          </Link>
          <div className="product-item-text">
            <div className="product-item-text-one">
              <div className="product-text-title">
                <span>{product?.title}</span>
              </div>
              <div className="product-text-price">
                <span>{product?.price}</span>
                <span>&nbsp;c.</span>
              </div>
            </div>
            <div className="product-item-text-two">
              <span>{product?.author?.name}</span>
            </div>
            <div className="product-item-text-three">
              <span>
                {product?.author?.region?.title},&nbsp;
                {product?.author?.region?.country?.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
