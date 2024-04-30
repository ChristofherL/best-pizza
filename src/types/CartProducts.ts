import { Product } from "./Product";

export type CartProduct = {
  quantity: number;
} & Product;
