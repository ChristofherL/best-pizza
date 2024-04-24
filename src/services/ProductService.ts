import Stripe from "stripe";
import { stripe } from "../libs/stripe";
import { Product } from "../types/Product";

class ProductService {
  async getProducts() {
    const response = await stripe.products.list({
      active: true,
      expand: ["data.default_price"],
    });

    const products: Product[] = response.data.map((product) => {
      const price = product.default_price as Stripe.Price;

      return {
        id: product.id,
        name: product.name,
        imagePath: product.images[0],
        price: price.unit_amount ?? 0,
      };
    });

    return products;
  }
}

export const productService = new ProductService();
