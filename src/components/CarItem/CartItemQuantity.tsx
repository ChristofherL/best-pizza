import { useContext } from "react";
import { CartItemContext } from "../../context/CartItemContext";

export function CartItemQuantity() {
  const { quantity } = useContext(CartItemContext);

  return <span>Quantidade: {quantity}</span>;
}
