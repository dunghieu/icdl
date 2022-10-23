import { IsNotEmpty, IsString } from "class-validator";

export class FeedDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    category: string;
}