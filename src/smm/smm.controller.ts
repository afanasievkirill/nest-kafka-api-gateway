import { Body, Controller, Post, Get } from '@nestjs/common';
import { SmmService } from './smm.service';

@Controller('smm')
export class SmmController {
  constructor(private readonly smmService: SmmService) {}

  @Get('')
  async getMessage() {
    return this.smmService.getMessage();
  }

  @Post('')
  async createMessage(@Body() dto) {
    return this.smmService.createMessage(dto);
  }
}
