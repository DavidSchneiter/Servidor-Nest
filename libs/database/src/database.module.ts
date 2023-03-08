import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { Product, ProductSchema } from './schema/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}