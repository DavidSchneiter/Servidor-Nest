import { Model } from 'mongoose';
export class MongoGenericRepository<T> {
  private _repository: Model<T>;

  constructor(respository: Model<T>) {
    this._repository = respository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().lean();
  }
  get(id: string): Promise<T> {
    return this._repository.findById(id).exec();
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