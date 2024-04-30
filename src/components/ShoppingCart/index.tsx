import { CreditCard } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItem } from "../CarItem";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { CartItemProvider } from "../../context/CartItemContext";

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
          <CartItemProvider
            key={product.id}
            product={product}
          >
            <CartItem.Root>
              <CartItem.Actions />
            </CartItem.Root>
          </CartItemProvider>
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
        <Link to={"/checkout"}>
          <Button
            variant="primary"
            leftIcon={() => <CreditCard size={20} />}
          >
            Finalizar pedido
          </Button>
        </Link>
      )}
    </div>
  );
}
