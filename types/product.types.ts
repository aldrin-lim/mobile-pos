import { PIECES } from "constants/measurement";

export enum ProductSoldBy {
  Pieces = PIECES,
  Weight = 'weight',
}


export type Product = {
  id: string;
  name: string;
  description?: string;
  profitAmount: number;
  profitPercentage: number;
  price: number;
  stockWarning?: number;
  images: string[];
  category?: string;
  trackStock: boolean;
  isBulkCost: boolean;
  soldBy: ProductSoldBy;
  forSale: boolean;
  allowBackOrder: boolean;
  applyTax: boolean;
  outOfStock: boolean;
  availability: string;
  totalQuantity: number;
  isExpired: boolean;
}

