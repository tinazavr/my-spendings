import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {Config} from './config/conig.enum';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
  }

  getData(): { message: string } {
    return {message: 'Hello API'};
  }

  testConfig(): { message: string } {
    return {message: `Resolved value: ${this.configService.get(Config.e2eTest)}`};
  }
}
