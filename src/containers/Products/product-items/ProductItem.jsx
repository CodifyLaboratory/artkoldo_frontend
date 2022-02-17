import React from 'react';
import './ProductItem.css'

export const ProductItem = ({product})=>{
    return ( 
        <div className ="product-item">
            <img className="product-item_image" src={product.image} alt=""/>
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
    )
}
