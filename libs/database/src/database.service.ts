import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './DAO/mongo.repository';
import { Product } from './schema/product.schema';

@Injectable()
export class DatabaseService {
  constructor(@InjectModel(Product.name) private ProductRepository: Model<Product>) {}

    product(): MongoGenericRepository<Product>{
      return new MongoGenericRepository<Product>(this.ProductRepository)
  }
}