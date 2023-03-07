import { Controller, Get, Redirect, Render, Post, Body, Request, UseGuards, UseFilters} from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/passport/authenticatedGuard';
import { CreateProductDto } from 'src/products/dto/product.dto';
import { ProductsService } from 'src/products/products.service';

@UseGuards(AuthenticatedGuard)
@Controller('api')
export class ApiController {
    constructor(private readonly productsService: ProductsService) { }
    
	
	@Get()
	@Render("forms")
	async viewForm(@Request() req) {
		const products = await this.productsService.findAll()
		return {products: products, user: req.user.userName}
	}

	@Post()
	@Redirect('/api')
	async create(@Body() createProductDto: CreateProductDto) {
		return await this.productsService.create(createProductDto);
	}
}
