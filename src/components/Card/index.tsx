import { ShoppingCart } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import { formatCurrency } from "../../utils/formatCurrency";

type CardProps = {
  name: string;
  imagePath: string;
  price: number;
  handleClickAddToCartButton?: () => void;
};

export function Card({ name, imagePath, price, handleClickAddToCartButton }: CardProps) {
  const formattedPrice = formatCurrency(price / 100);

  return (
    <li className={styles.card}>
      <div>
        <img
          src={imagePath}
          alt={name}
        />
      </div>
      <strong>{name}</strong>
      <span>{formattedPrice}</span>
      <Button
        variant="primary"
        leftIcon={() => <ShoppingCart size={20} />}
        onClick={handleClickAddToCartButton}
      >
        Adicionar ao Carrinho
      </Button>
    </li>
  );
}
