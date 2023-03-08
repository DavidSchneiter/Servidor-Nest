import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
// import { AuthenticateMiddleware } from './middlewares/login.middleware';
import { ProductsService } from './products/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ApiModule } from './api/api.module';

@Module({
	imports: [ConfigModule.forRoot(), MongooseModule.forRoot(
      process.env.MONGO_DB_URI 
    ), ProductsModule, UserModule, AuthModule, ApiModule],
	controllers: [AppController],
	providers: [AppService],
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(AuthenticateMiddleware)
// 		.forRoutes({ path: '/login', method: RequestMethod.GET }, { path: '/', method: RequestMethod.GET });
//   }
  export class AppModule {
}
