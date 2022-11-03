import { IsOptional, IsString } from 'class-validator';
import { SearchRequest } from 'src/shared/search-request';

export class FeedSearchRequest extends SearchRequest{
    @IsOptional()
    @IsString()
    category: string;
}