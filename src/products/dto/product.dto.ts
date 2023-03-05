import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
	@ApiProperty()
	id?: number;
	@ApiProperty()
	readonly title: string;
	@ApiProperty()
	readonly price: string;
	@ApiProperty()
	readonly thumbnail: string;
}
