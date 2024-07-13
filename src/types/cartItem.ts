import { IProduct } from "./product";
export type TCartitem={
    id: string,
    quantity: number,
    product: IProduct,
    totalPrice: number,
    createdAt: string
}