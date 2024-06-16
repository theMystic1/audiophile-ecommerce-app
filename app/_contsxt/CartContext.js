"use client";

import { createContext, useContext } from "react";
import { useLocalStorageState } from "../_lib/useLocalStorage";

const CartContext = createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useLocalStorageState([], "cart");

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartContext.Provider");
  }

  return context;
}

export { useCart, ContextProvider };
