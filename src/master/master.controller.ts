import { Controller, Get } from '@nestjs/common';
import { MasterService } from './master.service';
import { Academic } from './entities/academic.entity';

@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Get('academic')
  async getAcademic(): Promise<Academic[]> {
    return this.masterService.getAllAcademic();
  }
}
