import { useContext } from "react";
import { CartItemContext } from "../../context/CartItemContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Button } from "../Button";
import { Minus, Plus, Trash } from "lucide-react";

export function CartItemActions() {
  const { id, quantity } = useContext(CartItemContext);
  const { reduceQuantityOfProduct, increaseQuantityOfProduct, removeProductToCart } =
    useContext(ShoppingCartContext);

  return (
    <div>
      <Button
        variant="secondary"
        disabled={quantity === 1}
        onClick={() => reduceQuantityOfProduct(id)}
        leftIcon={() => <Minus size={16} />}
      />
      <span>x{quantity}</span>
      <Button 
        variant="secondary"
        onClick={() => increaseQuantityOfProduct(id)}
        leftIcon={() => <Plus size={16} />}
      />
      <Button
        variant="primary"
        onClick={() => removeProductToCart(id)}
        leftIcon={() => <Trash size={16} />}
      />
    </div>
  );
}
