import { Put, Request, UseGuards } from '@nestjs/common';
import { Controller, Get, Post, Body, Param, Delete, Render } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { AuthenticatedGuard } from 'src/auth/passport/authenticatedGuard';
import { IUser } from 'src/Interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { CreateProductDto } from '../dto/product.dto';
import { ProductsService } from './products.service';

@UseGuards(AuthenticatedGuard)
@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService,private readonly userService: UserService) {}
	@Post()
	async create(@Body() createProductDto: CreateProductDto) {
		return await this.productsService.createProduct(createProductDto);
	}
	
	@Render('table')
	@Get()
	async findAll(@Request() req) {
		const user:IUser = await this.userService.getUserById(req.user.userId, "products");
		return { products: user.products };
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.productsService.findOneProduct(id);
	}
	@Put(':id')
	updateOne(@Param('id') id: string, @Body() createProductDto: CreateProductDto) {
		return this.productsService.updateProduct(id, createProductDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.productsService.removeProduct(id);
	}
}
