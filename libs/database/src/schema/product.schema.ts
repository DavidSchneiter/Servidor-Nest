import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop()
  price: number;
  @Prop()
  thumbnail: string;
}
export type ProductDocument = Product & mongoose.Document;
export const ProductSchema = SchemaFactory.createForClass(Product);