import { CartProduct } from "../types/CartProducts";

export function productDataMapper(products: CartProduct[]) {
  return products.map((product) => ({
    id: product.id,
    name: product.name,
  }));
}
