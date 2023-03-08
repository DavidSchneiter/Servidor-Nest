import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/product.dto';
import { DatabaseService } from '@app/database';
import { IProduct } from '../Interfaces/product.interface';

@Injectable()
export class ProductsService {	
	 constructor(private database: DatabaseService) {}
	 
	async createProduct(createProductDto: CreateProductDto): Promise<IProduct> {
		return this.database.product().create(createProductDto);
	}

	async findAllProduct() {
		return this.database.product().getAll();
	}

	async findOneProduct(id: string) {
		return this.database.product().get(id);
	}

	async updateProduct(id: string, createProductDto: CreateProductDto) {
		return this.database.product().update(id, createProductDto);
	}

	async removeProduct(id: string) {
		return this.database.product().remove(id);;
	}
}
