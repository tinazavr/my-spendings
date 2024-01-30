import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {TestHealth, TestHealthSchema} from './test-health.schema';
import {TestHealthController} from './test-health.controller';
import {TestHealthService} from './test-health.service';
import {TestHealthRepository} from './test-health.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TestHealth.name,
        schema: TestHealthSchema
      },
    ])
  ],
  controllers: [TestHealthController],
  providers: [TestHealthService, TestHealthRepository],
})
export class TestHealthModule {
}
