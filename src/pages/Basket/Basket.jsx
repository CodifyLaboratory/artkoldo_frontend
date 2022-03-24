import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { useState } from "react";
import "./Basket.css";

import { PresetStatusColorTypes } from "antd/lib/_util/colors";
const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("cartItems") || "[ ]"
);
export default function Basket() {
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  return (
    <PageWrapper>
      <div className="breadcrumbs">
        <p>Главная/Живопись/...</p>
      </div>
      <hr />

      <div>
        {/* {cartItems.length === 0 && <div className="basket-content">Cart is empty</div>} */}
        <div className="basket-content">
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
                <p className="product_name">Настроение</p>
                <p className="disc_of_product_name">Тип :</p>
                <p className="disc_of_product_name">Тип :Ширина: </p>
                <p className="disc_of_product_name">Тип :Высота: </p>
                <div className="three_column_of_product">
                  <div className="first_product_name">
                    <div className="flex_in_product_name">
                      {/* <div className="div_for_img_in_product_name">-</div> */}
                      <p className="disc_of_icons">Удалить</p>
                    </div>
                    <div className="flex_in_product_name">
                      {/* <div className="div_for_img_in_product_name">+</div> */}
                      <p className="disc_of_icons">Оформить заказ</p>
                    </div>
                  </div>
                  <div className="second_product_name">
                    <div className="calc_of_product_name">
                      {/* <img src={}> */}
                      <div className="input_of_calc">1</div>
                      {/* <img src={}> */}
                    </div>
                  </div>
                  <div className="third_product_name">
                    <p className="price_of_product_name">
                      700 <span>c</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </PageWrapper>
  );
}

// import React from "react";
// import PageWrapper from "../../components/PageWrapper";
// import { useState } from "react";
// import "./Basket.css";
// const cartFromLocalStorage = JSON.parse(
//   localStorage.getItem("cartItems") || "[ ]"
// );
// export default function Basket() {
//   // const {  onAdd } = props;
//   const [cartItems] = useState(cartFromLocalStorage);
//   //   const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
//   //  const onRemove = (product) => {
//   //   const exist = cartItems.find((x) => x.id === product.id);
//   //   if (exist.qty === 1) {
//   //     setCartItems(cartItems.filter((x) => x.id !== product.id));
//   //   } else {
//   //     setCartItems(
//   //       cartItems.map((x) =>
//   //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//   //       )
//   //     );
//   //   }
//   // }
//   return (
//     //  <div>
//     <PageWrapper>
//       <div className="breadcrumbs">
//         <p>Главная/Живопись/...</p>
//       </div>
//       <hr />
//       <div>
//         {cartItems.length === 0 && (
//           <div className="basket-content">Cart is empty</div>
//         )}
//         {cartItems.map((item) => (
//           <div key={item.id} className="row">
//             <div className="col-2">{item.name}</div>
//             <div className="col-2">
//               <button onClick={() => onRemove(item)} className="remove">
//                 -
//               </button>{" "}
//               <button onClick={() => onAdd(item)} className="add">
//                 +
//               </button>
//             </div>
//             <div className="col-2 text-right">
//               {item.qty} x ${item.price.toFixed(2)}
//             </div>
//           </div>
//         ))}
//         {cartItems.length !== 0 && (
//           <>
//             <hr></hr>
//             <div className="row">
//               <div className="col-2">Items Price</div>
//               <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
//             </div>
//             <div className="row">
//               <div className="col-2">Tax Price</div>
//               <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
//             </div>
//             <div className="row">
//               <div className="col-2">Shipping Price</div>
//               <div className="col-1 text-right">
//                 ${shippingPrice.toFixed(2)}
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-2">
//                 <strong>Total Price</strong>
//               </div>
//               <div className="col-1 text-right">
//                 <strong>${totalPrice.toFixed(2)}</strong>
//               </div>
//             </div>
//             <hr />
//             <div className="row">
//               <button onClick={() => alert("Implement Checkout!")}>
//                 Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </PageWrapper>
//     //  </div>
//   );
// }
