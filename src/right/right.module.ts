import { Module } from '@nestjs/common';
import { RightController } from './right.controller';
import { RightService } from './right.service';

@Module({
  controllers: [RightController],
  providers: [RightService]
})
export class RightModule {}
