import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
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

  async create(createFeedDto: CreateFeedDto) {
    const thumbnailUrl = [
      'https://flic.edu.vn/wp-content/uploads/2020/03/bg-student-flic-1-1-736x400.jpg',
      'https://flic.edu.vn/wp-content/uploads/2021/11/clc-600x400.jpg',
      'https://flic.edu.vn/wp-content/uploads/2021/09/cong-nghe-547x400.jpg',
    ];
    const randomThumbnail = thumbnailUrl[Math.floor(Math.random() * thumbnailUrl.length)];
    const feed = await this.feedRepository.create(createFeedDto);
    feed.thumbnail = randomThumbnail;
    return this.feedRepository.save(feed);
  }

  findAll(query?: FeedSearchRequest) {
    const { limit, page, category, s } = query;
    // Phân trang
    const offset = (page - 1) * limit;
    const skip = offset > 0 ? offset : 0;
    const take = limit > 0 ? limit : 0;
    return this.feedRepository
      .createQueryBuilder('feed')
      .where('feed.title LIKE :s AND feed.category LIKE :category', {
        // Tìm kiếm theo tiêu đề và danh mục
        s: `%${s || ''}%`,
        category: `%${category || ''}%`,
      })
      .skip(skip) // Bỏ qua bao nhiêu bản ghi
      .take(take) // Lấy bao nhiêu bản ghi
      .orderBy('feed.id', 'DESC') // Sắp xếp theo id giảm dần
      .getManyAndCount();
  }

  findOneBy(id: number) {
    // Tìm bài viết theo id và trả về bài viết đó
    return this.feedRepository.findOneBy({ id });
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return this.feedRepository.update(id, updateFeedDto);
  }

  remove(id: number) {
    return this.feedRepository.delete(id);
  }
}
