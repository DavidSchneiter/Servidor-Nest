import { Module } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { ApiController } from './api.controller';

@Module({controllers: [ApiController],providers: [ProductsService],})
export class ApiModule {}
