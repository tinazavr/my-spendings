import {Module} from '@nestjs/common';
import {DatabaseService} from './database.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {Config} from '../config/conig.enum';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(Config.env) === 'test'
          ? configService.get<string>(Config.mongodbTestUri)
          :  configService.get<string>(Config.mongodbUri),

      }),
      inject: [ConfigService],
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {
}
