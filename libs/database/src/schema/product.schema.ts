import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop()
  price: number;
  @Prop()
  thumbnail: string;
}
export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);