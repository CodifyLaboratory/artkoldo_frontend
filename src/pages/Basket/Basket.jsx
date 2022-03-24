import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import { useState} from 'react'
import './Basket.css'


export default function Basket() {
  const [product, setProduct] = useState({});
  // const [cartItems, setCartItems] = useState([]);



  // const onAdd= (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //       x.id === product.id ? { ...exist, qty: exist.qty + 1} : x
  //     )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1}])
  //   }}
  //   const onRemove = (product) => {
  //    const exist = cartItems.find((x) => x.id === product.id);
  //    if (exist.qty === 1) {
  //      setCartItems(cartItems.filter((x) => x.id !== product.id));
  //    } else {
  //      setCartItems(
  //        cartItems.map((x) =>
  //          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //        )
  //      );
  //    }
  //  }

  return (

         <PageWrapper>
         <div className="breadcrumbs"><p>Главная/Живопись/...</p></div>
         <hr />

 <div>
         {/* {cartItems.length === 0 && <div className="basket-content">Cart is empty</div>} */}
         <div className='basket-content'>
        <div className="product_box">
            <div className="box_for_product_img">
                <div className="left_side_of_product">
                <img className='product-photo' src={product.photo_1} alt={product.name}>
            </img>
                </div>
                <div className="right_side_of_product">
                <p className="product_name">Настроение</p>
                    <p className="disc_of_product_name">Тип :</p>
                    <p className="disc_of_product_name">Тип :Ширина: </p>
                    <p className="disc_of_product_name">Тип :Высота: </p>
                    <div className="three_column_of_product">
                        <div className="first_product_name">
                            <div className="flex_in_product_name">
                           
                                <p className="disc_of_icons">Удалить</p>
                            </div>
                            <div className="flex_in_product_name">
                                {/* <div className="div_for_img_in_product_name">+</div> */}
                                <p className="disc_of_icons">Оформить заказ</p>
                            </div>
                        </div>
                        <div className="second_product_name">
                            <div className="calc_of_product_name">
                            {/* <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
                                <div className="input_of_calc">1</div>
                                <button onClick={() => onAdd())} className="add">
                +
              </button> */}
                            </div>
                        </div>
                        <div className="third_product_name">
                            <p className="price_of_product_name">700 <span>c</span></p>
                        </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
         <div>
            </div>
            </div>
      

         </PageWrapper>

  );
};