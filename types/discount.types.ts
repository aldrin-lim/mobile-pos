export type DiscountType = 'percentage' | 'fixed';

export type Discount = {
  name?: string;
  type: DiscountType;
  amount: number;
}