import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"
import { IProduct } from "src/Interfaces/product.interface";
import { Product } from "./product.schema";

@Schema()
export class User extends mongoose.Model{
  @Prop({required: true, unique: true})
  username: string
  @Prop({ required: true })
  password: string;
  @Prop({type: [ {type: mongoose.Schema.Types.ObjectId, ref: "Product"}] })
  products: IProduct[]

}

export type UserDocument = User & mongoose.Document;
export const UserSchema = SchemaFactory.createForClass(User);

