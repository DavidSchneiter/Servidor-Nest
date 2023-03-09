import { DatabaseService } from '@app/database';
import { Product } from '@app/database/schema/product.schema';
import { User } from '@app/database/schema/user.model';
import { Injectable } from '@nestjs/common';
import { IProduct } from 'src/Interfaces/product.interface';
import { IUser } from 'src/Interfaces/user.interface';
import * as mongoose from 'mongoose';

@Injectable()
export class UserService {
  constructor(private database: DatabaseService) { }

  async insertUser(userName: string, password: string) {
    // const products:IProduct[] = []
    const newUser = {
      username: userName.toLowerCase(),
      password: password,
      products: []
    };
    return this.database.user().create(newUser);
  }
  async getUser(userName: string) {
    const username = userName.toLowerCase();
    return await this.database.user().findOne(username);
  }

  async getUserById(id: string, path: string) {
    return this.database.user().getAndPopulate(id, path);
  }

  async updateUser(id: string, user: User) {
    return this.database.user().update(id, user);
  }
}