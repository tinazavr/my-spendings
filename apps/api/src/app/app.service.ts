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
}
