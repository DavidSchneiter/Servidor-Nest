import { Controller, Get, Redirect, Render, Post, Body, Request, UseGuards, UseFilters} from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/passport/authenticatedGuard';
import { CreateProductDto } from 'src/dto/product.dto';
import { ProductsService } from 'src/products/products.service';
import { UserService } from 'src/user/user.service';

@UseGuards(AuthenticatedGuard)
@Controller('api')
export class ApiController {
    constructor(private readonly productsService: ProductsService, private userService: UserService) { }
    
	
	@Get()
	@Render("forms")
	async viewForm(@Request() req) {
		return {user: req.user.userName}
	}

	@Post()
	@Redirect('/api')
	async create(@Request() req,@Body() createProductDto: CreateProductDto) {
		const product = await this.productsService.createProduct(createProductDto)
		const user = await this.userService.getUser(req.user.userName)
		user.products.push(product);
		return await this.userService.updateUser(req.user.userId, user);
	}
}
