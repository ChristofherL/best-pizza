import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Pizza, ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { Button } from "../Button";
import { useContext, useState } from "react";
import { ShoppingCart } from "../ShoppingCart";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export function Header() {
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false);

  const { totalItems } = useContext(ShoppingCartContext);

  return (
    <>
      <header className={styles.container__header}>
        <div>
          <Link to="/">
            <Pizza
              color="#ef4444"
              size={32}
            />
            <span>Best Pizza</span>
          </Link>
          <div>
            {totalItems !== 0 && <span>{totalItems}</span>}
            <Button
              variant="secondary"
              onClick={() => setShoppingCartIsOpen((prev) => !prev)}
              leftIcon={() => (
                <ShoppingCartIcon
                  color="#9ca3af"
                  size={24}
                />
              )}
            />
          </div>
        </div>
      </header>
      {shoppingCartIsOpen && <ShoppingCart />}
    </>
  );
}
