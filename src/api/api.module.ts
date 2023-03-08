import { DatabaseModule } from '@app/database';
import { Module } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { ApiController } from './api.controller';

@Module({imports: [DatabaseModule],controllers: [ApiController],providers: [ProductsService],})
export class ApiModule {}
