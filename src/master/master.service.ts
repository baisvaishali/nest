import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Academic } from './entities/academic.entity';

@Injectable()
export class MasterService {
  constructor(
    @InjectRepository(Academic)
    private readonly academicRepository: Repository<Academic>,
  ) {}

  async getAllAcademic(): Promise<Academic[]> {
    return this.academicRepository.find({
      order: { id: 'ASC' },
    });
  }
}
