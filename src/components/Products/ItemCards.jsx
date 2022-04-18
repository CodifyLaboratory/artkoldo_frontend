import React from "react";
import "./ItemCards.css";
import { Link } from "react-router-dom";
import Logo from "../../images/product-logo.png";
import arrow from "../../images/arrow.svg";

export default function ItemCards({ products, category, onClick }) {
  return (
    <div className="Item-Cards">
      {products?.map((product) => (
        <Link
          to={`/${category}/${product.id}`}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <div className="product-item" key={product?.id}>
            {product?.photo_1 ? (
              <img
                className="product-item_image"
                id={product?.id}
                src={product?.photo_1}
                alt={product?.title}
                onClick={onClick}
              />
            ) : (
              <img
                className="product-item_logo"
                id={product?.id}
                src={`${Logo}`}
                alt={product?.title}
                onClick={onClick}
              />
            )}
            <div className="product-item-text">
              <div className="product-item-text-one">
                <div className="product-text-title">
                  <span>{product?.title}</span>
                </div>
                {product?.discount_price ? (
                  <div className="slider-text-discount-price">
                    <span className="line-through">{product?.price}</span>
                    <span className="line-through">&nbsp;c.</span>
                    <img className="discount-arrow" src={arrow} />
                    <span className="new-price">{product?.discount_price}</span>
                    <span className="new-price">&nbsp;c.</span>
                  </div>
                ) : (
                  <div className="slider-text-price">
                    <span>{product?.price}</span>
                    <span>&nbsp;c.</span>
                  </div>
                )}
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
        </Link>
      ))}
    </div>
  );
}
