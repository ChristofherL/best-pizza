import { ReactNode, useContext } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import styles from "./styles.module.scss";
import { CartItemContext } from "../../context/CartItemContext";

export function CartItemRoot({ children }: { children: ReactNode }) {
  const { name, price, imagePath } = useContext(CartItemContext);

  const formattedPrice = formatCurrency(price / 100);

  return (
    <li className={styles.car__item}>
      <img
        src={imagePath}
        alt={name}
      />
      <div>
        <header>
          <strong>{name}</strong>
          <span>{formattedPrice}</span>
        </header>
        {children}
      </div>
    </li>
  );
}
