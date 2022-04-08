import React, { createContext, useState } from "react";
export const MainContext = createContext();
export const AddCartContext = createContext();
export const RemoveCartContext = createContext();
export const SetSearch = createContext();
const basket = JSON.parse(localStorage.getItem("cart") || "[]");

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(basket);
  const [searchPaintingValue, setSearchPaintingValue] = useState("");
  const [searchHandicraftValue, setSearchHandicraftValue] = useState("");
  const [searchCeramicValue, setSearchCeramicValue] = useState("");

  return (
    <AddCartContext.Provider
      value={(product) => {
        const exist = cartItems.find(
          (x) => x.id === product.id && x.category === product.category
        );
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x === exist ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      }}
    >
      <RemoveCartContext.Provider
        value={(item) => {
          setCartItems(cartItems.filter((product) => product !== item));
        }}
      >
        <MainContext.Provider
          value={{
            valueCart: [cartItems, setCartItems],
            paintingSearch: [searchPaintingValue, setSearchPaintingValue],
            handicraftSearch: [searchHandicraftValue, setSearchHandicraftValue],
            ceramicSearch: [searchCeramicValue, setSearchCeramicValue],
          }}
        >
          {children}
        </MainContext.Provider>
      </RemoveCartContext.Provider>
    </AddCartContext.Provider>
  );
};
