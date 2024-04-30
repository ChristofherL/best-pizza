import { stripe } from "../libs/stripe";
import { CartProduct } from "../types/CartProducts";
import { productDataMapper } from "../utils/dataMapper";

class PaymetService {
  async makePayment(amount: number, cartProducts: CartProduct[]) {
    const mappedProductData = productDataMapper(cartProducts);

    const { client_secret } = await stripe.paymentIntents.create({
      amount,
      currency: "brl",
      metadata: {
        lineItems: JSON.stringify(mappedProductData),
      },
    });

    return client_secret as NonNullable<string>;
  }
}

export const paymentService = new PaymetService();
