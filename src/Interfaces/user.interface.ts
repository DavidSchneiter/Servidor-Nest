import { ObjectId } from "mongoose";
import { IProduct } from "./product.interface";

export interface IUser {
    _id?: ObjectId;
    username: string;
    password: string;
    products: Array<IProduct>;
}