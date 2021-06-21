import { createContext, useContext } from "react";

const CartContext = createContext ( {
  hidden: true,
  toggleHidden: () => {}
});

export default CartContext