import { ShoppingCart } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import { formatCurrency } from "../../utils/formatCurrency";

type CardProps = {
  name: string;
  imagePath: string;
  price: number;
};

export function Card({ name, imagePath, price }: CardProps) {
  const formatedPrice = formatCurrency(price / 100);

  return (
    <li className={styles.card}>
      <div>
        <img
          src={imagePath}
          alt={name}
        />
      </div>
      <strong>{name}</strong>
      <span>{formatedPrice}</span>
      <Button leftIcon={() => <ShoppingCart size={20} />}>Adicionar ao Carrinho</Button>
    </li>
  );
}
