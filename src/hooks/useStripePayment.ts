import { useElements, useStripe } from "@stripe/react-stripe-js";
import { paymentService } from "../services/PaymentService";
import { CartProduct } from "../types/CartProducts";

export function useStripePayment() {
  const stripe = useStripe();
  const elements = useElements();

  async function payment(total: number, cartProducts: CartProduct[]) {
    if (!stripe || !elements) {
      return;
    }

    const { error: elementsError } = await elements.submit();

    if (elementsError) {
      return;
    }

    const clientSecret = await paymentService.makePayment(total, cartProducts);

    const { error: paymentError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://127.0.0.1:5173/checkout-confirmation",
      },
    });

    if (paymentError) {
      throw new Error(paymentError.message);
    }
  }

  return payment;
}
