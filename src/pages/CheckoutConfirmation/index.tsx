import { Layout } from "../../layout";
import styles from "./styles.module.scss";

export function CheckoutConfirmation() {
  return (
    <Layout>
      <section className={styles.container__checkout__confirmation}>
        <div>
          <div>
            <h1>Obrigado, seu pedido foi efetuado!</h1>
            <p>Em poucos minutos você receberá suas deliciosas pizzas.</p>
          </div>
          <img
            src="pizza-delivery-man-checkout.jpg"
            alt="pizza delicery man"
          />
        </div>
      </section>
    </Layout>
  );
}
