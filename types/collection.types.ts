import { Product } from "./product.types";

export type Collection = {
  id: string;
  name: string;
  description?: string;
  color?: string
  products: Product[]
}