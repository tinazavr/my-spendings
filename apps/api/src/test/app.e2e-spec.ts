import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import request from 'supertest';
import {AppModule} from '../app/app.module';
import {ConfigService} from '@nestjs/config';
import {Config} from '../app/config/conig.enum';
import {DatabaseService} from '../app/database/database.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;

  beforeAll(async () => {
    moduleFixture = await Test.createTestingModule({
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
      .get('/test-health/config')
      .expect(200)
      .expect({message: 'Resolved value: working perfectly'});
  });

  it('works with a test environment', () => {
    const configService = moduleFixture.get(ConfigService);
    expect(configService.get(Config.env)).toBe('test');
  });

  it('connects the mongodb', async () => {
    const collection = 'testhealths';
    const dbConnection = moduleFixture.get<DatabaseService>(DatabaseService).getDbHandle();
    const testDocument = {test: 'it works'};
    await dbConnection.collection(collection).insertOne(testDocument);
    await request(app.getHttpServer())
      .get('/test-health/mongodb')
      .expect(200)
      .expect({message: 'Resolved mongodb value: it works'});

    await dbConnection.collection(collection).deleteMany({});
    await dbConnection.close();
  });
});
