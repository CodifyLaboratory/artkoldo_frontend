import React from 'react'
import PageWrapper from '../../components/PageWrapper';
import './ProductPage.css'
import { useEffect, useState } from "react";

import axios from 'axios';
import  { API_URL } from '../../API/api';
import { Link } from 'react-router-dom';


export default function ProductPage () {

const [product, setProduct] = useState({});
const [cartItems, setCartItems] = useState([])



useEffect(() => {
    axios
      .get(`${API_URL}/paintings/1/`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addtoCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

     const cart = localStorage.getItem('cartItems');
     const items = [
        {
          product: {id: 0, name: 'name 1', price: 100},
          count: 1,
        },
        {
          product: {id: 1, name: 'name 2', price: 200},
          count: 2,
        },
     ]

  return (
    <div>
        <PageWrapper>
          <div className='product-item'>
            <div className='product-image'>
            <img  src={product.image} alt={product.name}></img>
         </div>
       <div className='product-detailes'>
            <div className="product-detailes_col1">
            <span className="product-title">{product.title}</span>

          </div>
          <div className product-item_detailes_col2>
            <span className="product-item_price">{product.price}</span>
          </div>
          </div>
          </div>
          <>
       <Link to ='/basket'>
       <button  onClick = {() => addtoCart(product)}>Добавить в корзину</button>
       </Link>
      </>
        </PageWrapper>
      </div> 
  );
};

