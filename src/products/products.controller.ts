import { Put, UseGuards } from '@nestjs/common';
import { Controller, Get, Post, Body, Param, Delete, Render } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/passport/authenticatedGuard';
import { CreateProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@UseGuards(AuthenticatedGuard)
@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}
	@Post()
	async create(@Body() createProductDto: CreateProductDto) {
		return await this.productsService.create(createProductDto);
	}
	
	@Render('table')
	@Get()
	async findAll() {
		const products: CreateProductDto[] = await this.productsService.findAll()
		return { products: products };
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.productsService.findOne(parseInt(id));
	}
	@Put(':id')
	updateOne(@Param('id') id: string, @Body() createProductDto: CreateProductDto) {
		return this.productsService.update(parseInt(id), createProductDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.productsService.remove(parseInt(id));
	}

	@Delete()
	removeAll() {
		return this.productsService.removeAll();
	}
}
