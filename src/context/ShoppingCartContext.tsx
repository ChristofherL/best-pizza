import { ReactNode, createContext, useState } from "react";
import { CartProduct } from "../types/CartProducts";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContextProps = {
  cartProducts: CartProduct[];
  total: number;
  totalItems: number;
  addProductToCart: (product: CartProduct) => void;
  removeProductToCart: (productId: string) => void;
  increaseQuantityOfProduct: (productId: string) => void;
  reduceQuantityOfProduct: (productId: string) => void;
};

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartProducts, setCartPorducts] = useState<CartProduct[]>([]);

  const total = cartProducts.reduce((acc, value) => acc + value.price * value.quantity, 0);
  const totalItems = cartProducts.reduce((acc, value) => acc + value.quantity, 0);

  function addProductToCart(product: CartProduct) {
    if (hasThisProductInCart(product.id)) {
      increaseQuantityOfProduct(product.id);
      return;
    }
    setCartPorducts((prev) => [...prev, product]);
  }

  function hasThisProductInCart(productId: string) {
    return cartProducts.some((cartProduct) => cartProduct.id === productId);
  }

  function increaseQuantityOfProduct(productId: string) {
    setCartPorducts(
      cartProducts.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return { ...cartProduct, quantity: (cartProduct.quantity += 1) };
        }
        return cartProduct;
      })
    );
  }

  function reduceQuantityOfProduct(productId: string) {
    setCartPorducts(
      cartProducts.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return { ...cartProduct, quantity: (cartProduct.quantity -= 1) };
        }
        return cartProduct;
      })
    );
  }

  function removeProductToCart(productId: string) {
    setCartPorducts(cartProducts.filter((cartProduct) => cartProduct.id !== productId));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        total,
        totalItems,
        addProductToCart,
        removeProductToCart,
        increaseQuantityOfProduct,
        reduceQuantityOfProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
