import React from 'react'
import PageWrapper from '../../components/PageWrapper';
import './ProductPage'
import  products  from '../../mockData/ListofProducts';
import { useState } from "react";
import Basket from '../Basket/Basket';
// import axios from 'axios';




export default function ProductPage (product) {
const { products } = products
const [cartItems, setCartItems] = useState([])

// useEffect((id) => {
//   axios
//    .get(
//      "http://137.184.19.52/paintings/" +
//        this.props.match.params.id +
//        "/eventcomments"
//     )
//     .then((response) => {
//       setTileData([...response.data]);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }, []);



  const addtoCart = (product) => {
     const card = localStorage.getItem('card');
     const items = [
        {
          product: {id: 0, name: 'name 1', price: 100},
          count: 1,
        },
        {
          product: {id: 1, name: 'name 2', price: 200},
          count: 2,
        },
     ]}

//  const addtoCart = (product) => {
//    const exist = cartItems.find((x) => x.id === product.id);
//    if (exist) {
//      setCartItems(
//        cartItems.map((x) =>
//        x.id === product.id ? { ...exist, qty: exist.qty + 1} : x
//      )
//      );
//    } else {
//      setCartItems([...cartItems, { ...product, qty: 1}])
//    }}
 
 
  return (
    <div>
        <PageWrapper>
          <div className='product-item'>
            <img className='product-image' src={product.image} alt={product.name}></img>
         </div>
       <div className='product-detailes'>
            <div className="product-detailes_col1">
            <span className="product-title">{product.title}</span>
            <span className="product-author ">{product.author}</span>
            <span className="product-location">{product.location}</span>
          </div>
          <div className product-item_detailes_col2>
            <span clasName="product-item_price">{product.price}</span>
          </div>
          </div>
       <div>
       <Basket cartItems={cartItems} onClick = {() => addtoCart(products)}>Добавить в корзину</Basket>
       </div>
      
        </PageWrapper>
      </div> 
  );
};

