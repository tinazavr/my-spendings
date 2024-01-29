import {Controller, Get} from '@nestjs/common';
import {TestHealthService} from './test-health.service';
import {ConfigService} from '@nestjs/config';
import {Config} from '../config/conig.enum';

@Controller('test-health')
export class TestHealthController {
  constructor(private readonly testHealthService: TestHealthService,
              private readonly configService: ConfigService) {
  }

  @Get('mongodb')
  async testMongodbConnection() {
    const testItem = await this.testHealthService.findOne();
    return {message: `Resolved mongodb value: ${testItem?.test}`};
  }

  @Get('config')
  testConfig() {

    return {message: `Resolved value: ${this.configService.get(Config.e2eTest)}`};
  }
}
