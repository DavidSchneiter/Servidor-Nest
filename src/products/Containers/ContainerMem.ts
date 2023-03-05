import { Logger } from "@nestjs/common";
import { CreateProductDto } from '../dto/product.dto';

let instacia = null;
export class ContainerDaoMem {
  private id:number
    static instancia;
    private contain: CreateProductDto[]
     private readonly logger: Logger = new Logger()
  constructor() {
    this.contain = [];
    this.id = 0;
  }
  static getInstancia = () => {
    if (!instacia) instacia = new ContainerDaoMem();
    return instacia;
  };

  init() {
    this.logger.log("personas dao en memoria -> listo");
  }

  disconnect() {
    this.logger.log("personas dao en memoria -> cerrado");
  }

  private getIndex(id:number) {
    return this.contain.findIndex((persona:CreateProductDto) => persona.id === id);
  }

  getAll() {
    return this.contain;
  }

  getById(id) {
    return this.contain[this.getIndex(id)];
  }

  save(obj: CreateProductDto) {
    if (!obj.id) {
      this.id++;
      obj.id = this.id;
    }
    this.contain.push(obj);
    return obj;
  }

  deleteById(id:number) {
    const [borrada] = this.contain.splice(this.getIndex(id), 1);
    return borrada;
  }

  deleteAll() {
    this.contain = [];
  }

  changeById(id:number, obj:CreateProductDto) {
    const index = this.getIndex(id);
    const actualizada = { ...this.contain[index], ...obj };
    this.contain.splice(index, 1, actualizada);
    return actualizada;
  }
}