import { useState, useContext, createContext, useEffect } from "react";
import { useAuth } from "./auth";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [auth] = useAuth();

  useEffect(() => {
    if (auth?.user) {
      let existingCartItem = localStorage.getItem("cart");
      if (existingCartItem) setCart(JSON.parse(existingCartItem));
    } else {
      setCart([]); // Clear cart when user logs out
    }
  }, [auth?.user]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
