import { DatabaseModule } from '@app/database';
import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { UserModule } from 'src/user/user.module';
import { ApiController } from './api.controller';

@Module({
    imports: [ProductsModule, UserModule],
    controllers: [ApiController]
})
export class ApiModule {}
