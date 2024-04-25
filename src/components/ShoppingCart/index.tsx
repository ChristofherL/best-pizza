import { CreditCard } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { CarItem } from "../CarItem";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";

export function ShoppingCart() {
  const { cartProducts, total, totalItems } = useContext(ShoppingCartContext);

  const totalFormatted = formatCurrency(total / 100);

  return (
    <div className={styles.shopping__cart}>
      <header>
        <strong>Seu carrinho</strong>
        <span>Total: {totalFormatted}</span>
      </header>
      <ul>
        {cartProducts.map((product) => (
          <CarItem
            key={product.id}
            {...product}
          />
        ))}
        {!totalItems && (
          <>
            <ShoppingCartIcon
              size={32}
              color="#d1d5db"
            />
            <strong>Adicione produtos</strong>
            <span>Seu carrinho esta vazio</span>
          </>
        )}
      </ul>
      {totalItems !== 0 && (
        <Button
          variant="primary"
          leftIcon={() => <CreditCard size={20} />}
        >
          Finalizar pedido
        </Button>
      )}
    </div>
  );
}
