import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { Product, ProductSchema } from './schema/product.schema';
import { User, UserSchema } from './schema/user.model';

@Module({
  imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}, {name: User.name, schema: UserSchema}])],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}