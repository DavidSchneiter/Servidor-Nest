import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './DAO/mongo.repository';
import { Product, ProductDocument } from './schema/product.schema';
import { User, UserDocument } from './schema/user.model';

@Injectable()
export class DatabaseService {
  constructor(@InjectModel(Product.name) private ProductRepository: Model<ProductDocument>, @InjectModel(User.name) private UserRepository: Model<UserDocument>) {}

  product(): MongoGenericRepository<Product>{
      return new MongoGenericRepository<Product>(this.ProductRepository)
  }
  user(): MongoGenericRepository<User>{
    return new MongoGenericRepository<User>(this.UserRepository)
  }
}