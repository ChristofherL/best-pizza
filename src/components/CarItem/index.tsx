import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../Button";
import { formatCurrency } from "../../utils/formatCurrency";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import styles from "./styles.module.scss";

type CarItemProps = {
  id: string;
  imagePath: string;
  name: string;
  price: number;
  quantity: number;
};

export function CarItem({ id, imagePath, name, price, quantity }: CarItemProps) {
  const { removeProductToCart, increaseQuantityOfProduct, reduceQuantityOfProduct } =
    useContext(ShoppingCartContext);

  return (
    <li className={styles.car__item}>
      <img
        src={imagePath}
        alt={name}
      />
      <div>
        <header>
          <strong>{name}</strong>
          <span>{formatCurrency(price / 100)}</span>
        </header>
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
      </div>
    </li>
  );
}
