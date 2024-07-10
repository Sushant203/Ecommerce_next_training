import { Category } from "./category";
import {TReview} from "./review";
export interface IProduct{
    id: string,
    name:string,
    price:number,
    description:string,
    discount:number,
    imageURL:string[],
    category: Category,
    stockQuantity:number,
    model:string,
    reviews: TReview[],
}