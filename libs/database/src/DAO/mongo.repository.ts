import {Model} from 'mongoose';
import { Product } from '../schema/product.schema';
export class MongoGenericRepository<T> {
  private _repository: Model<T>;

  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().lean();
  }
  get(id: string): any {
    return this._repository.findById(id);
  }
  getAndPopulate(id: string, path: string): any {
    return this._repository.findById(id).populate({path: path}).lean();
  }
  findOne(username: string): Promise<T>{
    return this._repository.findOne({username}).lean();
  }
  create(item: T): Promise<T> {
    return this._repository.create(item);
  }
  update(id: string, item: T): any {
    return this._repository.findByIdAndUpdate(id, item);
  }
  remove(id: string): any {
    return this._repository.deleteOne({_id: id});
  }
}