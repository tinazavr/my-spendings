import {Injectable} from '@nestjs/common';
import {TestHealthRepository} from './test-health.repository';

@Injectable()
export class TestHealthService {
  constructor(private readonly testHealthRepository: TestHealthRepository) {
  }

  async findOne() {
    return this.testHealthRepository.findOne();
  }
}
