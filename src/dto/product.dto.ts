import { ApiProperty } from "@nestjs/swagger";
// import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
	@ApiProperty()
	readonly title: string;
	@ApiProperty()
	readonly price: number;
	@ApiProperty()
	readonly thumbnail: string;
}
