import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterController } from './master.controller';
import { MasterService } from './master.service';
import { Academic } from './entities/academic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Academic])],
  controllers: [MasterController],
  providers: [MasterService],
})
export class MasterModule {}
