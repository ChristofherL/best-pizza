import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Pizza, ShoppingCart } from "lucide-react";

export function Header() {
  return (
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
          <ShoppingCart
            color="#9ca3af"
            size={24}
          />
        </div>
      </div>
    </header>
  );
}
