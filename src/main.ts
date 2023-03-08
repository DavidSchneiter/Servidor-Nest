import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as hbs from 'express-handlebars';
import * as session from 'express-session';
import * as passport from "passport"
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		logger:['error', 'warn']
	});
	const swaggerOptions = new DocumentBuilder()
		.setTitle("Products service")
		.setDescription("Api de productos")
		.setVersion("1.0")
		.addTag("products")
		.build()
	const document = SwaggerModule.createDocument(app, swaggerOptions)
	SwaggerModule.setup("swagger", app, document)
	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.setViewEngine('hbs');
	app.engine(
	"hbs",
	hbs({
		extname: ".hbs",
		defaultLayout: join(__dirname, '..', 'views/layouts/main.hbs'),
		partialsDir: join(__dirname, '..', 'views/partials'),
	})
	);
	app.use(
    session({
      secret: "keyboard",
      resave: false,
      saveUninitialized: false,
	  cookie: {maxAge: 360000}
    })
  	)
	app.use(passport.initialize())
	app.use(passport.session())
	app.setViewEngine('hbs');
	await app.listen(process.env.PORT);
}
bootstrap();
