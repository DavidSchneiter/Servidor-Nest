import { ApiProperty } from "@nestjs/swagger";
import { CreateProductDto } from "./product.dto";

export class CreateUserDto {
	@ApiProperty()
	readonly username: string;
	@ApiProperty()
	readonly password: string;
}
