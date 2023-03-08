import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '@app/database';

@Module({
	imports: [DatabaseModule],
	controllers: [ProductsController],
	providers: [ProductsService],
})
export class ProductsModule {}