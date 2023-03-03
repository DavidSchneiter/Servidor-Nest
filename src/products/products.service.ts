import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { IProduct } from './Interfaces/product.interface';

@Injectable()
export class ProductsService {
	private products: IProduct[] = [];

	create(createProductDto: CreateProductDto) {
		return 'This action adds a new product';
	}

	findAll() {
		return `This action returns all products`;
	}

	findOne(id: number) {
		return `This action returns a #${id} product`;
	}

	update(id: number, updateProductDto: CreateProductDto) {
		return `This action updates a #${id} product`;
	}

	remove(id: number) {
		return `This action removes a #${id} product`;
	}
}
