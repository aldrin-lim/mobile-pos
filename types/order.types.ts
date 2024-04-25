import { Customer } from "./customer.types"
import { Discount } from "./discount.types"
import { Product } from "./product.types"

export type Order = {
  id: string
  product: Product
  quantity: number
  discount?: Discount
  customer?: Customer
}