import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {TestHealth, TestHealthDocument} from './test-health.schema';
import {Model} from 'mongoose';

@Injectable()
export class TestHealthRepository {
  constructor(@InjectModel(TestHealth.name) private testHealthModel: Model<TestHealthDocument>) {
  }

  async findOne() {
    return this.testHealthModel.findOne({});
  }
}
