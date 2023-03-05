import { Injectable } from '@nestjs/common';
import ContainerDaoFactory from './Daos/Factory';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
	private containerProduct = ContainerDaoFactory.getDao();
	
	
	create(createProductDto: CreateProductDto) {
		return this.containerProduct.save(createProductDto);
	}

	findAll() {
		return this.containerProduct.getAll();
	}

	findOne(id: number) {
		return this.containerProduct.getById(id);
	}

	update(id: number, createProductDto: CreateProductDto) {
		return this.containerProduct.changeById(id, createProductDto);
	}

	remove(id: number) {
		return this.containerProduct.deleteById(id);;
	}

	removeAll() {
		return this.containerProduct.deleteAll();
	}
}
