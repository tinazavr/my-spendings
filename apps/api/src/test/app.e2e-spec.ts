import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import request from 'supertest';
import {AppModule} from '../app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({message: 'Hello API'});
  });

  it('resolves config', () => {
    return request(app.getHttpServer())
      .get('/test-config')
      .expect(200)
      .expect({message: 'Resolved value: working perfectly'});
  });
});
