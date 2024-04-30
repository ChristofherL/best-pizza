import { CreditCard, LockKeyhole, MapPin, ShoppingCart, TriangleAlert } from "lucide-react";
import { Button, CartItem, Modal } from "../../components";
import { Layout } from "../../layout";
import styles from "./styles.module.scss";
import { FormEvent, useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { AddressElement, PaymentElement } from "@stripe/react-stripe-js";
import { MoonLoader } from "react-spinners";
import { CartItemProvider } from "../../context/CartItemContext";
import { useStripePayment } from "../../hooks/useStripePayment";

export function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const payment = useStripePayment();

  const { cartProducts, total } = useContext(ShoppingCartContext);

  const DELIVERY_FEE = 5;
  const formattedSubtotal = formatCurrency(total / 100);
  const formattedDeliveryFee = formatCurrency(DELIVERY_FEE);
  const formattedTotal = formatCurrency(total / 100 + DELIVERY_FEE);

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      setIsLoading(true);
      await payment(total, cartProducts);
    } catch (error) {
      setModalIsOpen(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      <div className={styles.container__checkout}>
        <div>
          <h1>
            <LockKeyhole />
            Finalize seu pedido
          </h1>
          <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>
                  <MapPin size={28} />
                  Endereço de entrega
                </legend>
                <AddressElement options={{ mode: "shipping" }} />
              </fieldset>
              <fieldset>
                <legend>
                  <CreditCard size={28} />
                  Pagemento
                </legend>
                <PaymentElement />
                <Button
                  variant="primary"
                  leftIcon={() =>
                    isLoading ? (
                      <MoonLoader
                        size={20}
                        color="#fff"
                      />
                    ) : (
                      <CreditCard size={20} />
                    )
                  }
                >
                  {!isLoading && "Pagar"}
                </Button>
              </fieldset>
            </form>
            <section>
              <h2>
                <ShoppingCart size={28} />
                Resumo do pedido
              </h2>
              <ul>
                {cartProducts.map((cartProduct) => (
                  <CartItemProvider
                    key={cartProduct.id}
                    product={cartProduct}
                  >
                    <CartItem.Root>
                      <CartItem.Quantity />
                    </CartItem.Root>
                  </CartItemProvider>
                ))}
              </ul>
              <table>
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <td>{formattedSubtotal}</td>
                  </tr>
                  <tr>
                    <th>Taxa de entrega</th>
                    <td>{formattedDeliveryFee}</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>{formattedTotal}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
      <Modal
        title="Erro"
        isOpen={modalIsOpen}
        handleCloseModal={() => setModalIsOpen(false)}
      >
        <div className={styles.modal__content}>
          <TriangleAlert
            size={64}
            color="#ef4444"
          />
          <strong>Ooops!</strong>
          <span>Não conseguimos processar seu pedido, por favor, tente novamente mais tarde!</span>
        </div>
      </Modal>
    </Layout>
  );
}
