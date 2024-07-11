import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async getSuggestions(@Query('search') search: string) {
    return this.searchService.getSuggestions(search);
  }
}
