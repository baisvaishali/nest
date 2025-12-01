import { Test, TestingModule } from '@nestjs/testing';
import { RightController } from './right.controller';

describe('RightController', () => {
  let controller: RightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RightController],
    }).compile();

    controller = module.get<RightController>(RightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
