import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchRequest } from 'src/shared/search-request';
import { Repository } from 'typeorm';
import { CreateFeedDto } from './dto/create-feed.dto';
import { FeedSearchRequest } from './dto/feed-search-request.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { Feed } from './entities/feed.entity';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(Feed)
    private readonly feedRepository: Repository<Feed>,
  ) {}

  create(createFeedDto: CreateFeedDto) {
    return this.feedRepository.save(createFeedDto);
  }

  findAll(query?: FeedSearchRequest) {
    const { limit, page, category} = query;
    const where = category ? {category} : {};
    const offset = (page - 1) * limit;
    const skip = offset > 0 ? offset : 0;
    const take = limit > 0 ? limit : 0;
    return this.feedRepository.createQueryBuilder('feed').where(where).skip(skip).take(take).getMany();
  }

  findOneBy(id: number) {
    return this.feedRepository.findOneBy({id});
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return this.feedRepository.update(id, updateFeedDto);
  }

  remove(id: number) {
    return this.feedRepository.delete(id);
  }
}
