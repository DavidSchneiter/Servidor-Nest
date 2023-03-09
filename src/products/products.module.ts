import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '@app/database';
import { UserModule } from 'src/user/user.module';

@Module({
	imports: [DatabaseModule, UserModule],
	controllers: [ProductsController],
	providers: [ProductsService],
	exports: [ProductsService]
})
export class ProductsModule {}