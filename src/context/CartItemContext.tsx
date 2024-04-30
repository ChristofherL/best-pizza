import { ReactNode, createContext } from "react";
import { CartProduct } from "../types/CartProducts";

type CarItemProviderProps = {
  product: CartProduct;
  children: ReactNode;
};

export const CartItemContext = createContext<CartProduct>({} as CartProduct);

export function CartItemProvider({ product, children }: CarItemProviderProps) {
  return <CartItemContext.Provider value={product}>{children}</CartItemContext.Provider>;
}
