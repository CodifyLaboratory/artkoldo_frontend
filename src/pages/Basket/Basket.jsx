import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { useState } from "react";
import "./Basket.css";

export default function Basket() {
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState([])

  localStorage.getItem("cartItems", JSON.stringify(cartItems))

  const onAdd = (product) => {
    setCartItems([...cartItems, {...product}]);
    console.log('add')
  };
  const onRemove = (productToRemove) => {
    setCartItems (
      cartItems.filter((product) => product !== productToRemove)
    )
    console.log('remove')
  }

  return (
    <PageWrapper>
      <div className="breadcrumbs">
        <span>
          <a href="/">Главная/</a>
        </span>
        <span>Корзина</span>
      </div>
      <hr />

     
        
        <div className="basket-content">
          {/* <div>{cartItems.length === 0 && <div className="empty">Cart is empty</div>}</div> */}
          <div className="product_box">
            <div className="box_for_product_img">
              <div className="left_side_of_product">
                <img
                  className="product-photo"
                  src={product.photo_1}
                  alt={product.name}
                ></img>
              </div>
              <div className="right_side_of_product">
                <p className="product_name">Название{product.title}</p>
                <p className="disc_of_product_name">Тип: {product?.type?.title}
                </p>
                <p className="disc_of_product_name">Ширина:  {product.width} </p>
                <p className="disc_of_product_name">Высота:  {product.height} </p>
                <div className="three_column_of_product">
                  <div className="first_product_name">
                    <div className="flex_in_product_name">
                      <div  onClick={() => onRemove(product)} className="remove_btn"> </div>
                      <span onClick={() => onRemove(product)} className="disc_of_icons">Удалить</span>
                    </div>
                    <div className="flex_in_product_name">
                     
                      <div  className="next_btn"> </div>
                      <p className="disc_of_icons">Оформить заказ</p>
                    </div>
                  </div>
                  <div className="second_product_name">
                    <div className="calc_of_product_name">
                      <div onClick={() => onRemove(product)} ><p className="remove">-</p>
              </div>{' '}
                                <input type="button"  className="input_of_calc" />
                                <div onClick={() => onAdd(product)}>
               <span  className="add_b">+</span>
              </div> 
                    </div>
                  </div>
                  <div className="third_product_name">
                    <p className="price_of_product_name">
                    {product.price} c </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
    
    </PageWrapper>
  );
}
