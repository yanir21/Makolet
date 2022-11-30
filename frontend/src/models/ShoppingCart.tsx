import { Product } from "./Product";

export interface ShoppingCart {
  products: { product: Product; quntity: number };
}
