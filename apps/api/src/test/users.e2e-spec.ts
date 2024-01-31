import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Connection } from 'mongoose';
import { AppModule } from '../app/app.module';
import request from 'supertest';
import { encryptPassword } from '../app/encrypt-password';
import {DatabaseService} from '../app/database/database.service';
import cookieParser from 'cookie-parser';


describe('users', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  const collection = 'users';
  let dbConnection: Connection;

  beforeAll(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    dbConnection = moduleFixture.get<DatabaseService>(DatabaseService).getDbHandle();

    app = moduleFixture.createNestApplication();
    app.use(cookieParser());
    await app.init();
  });

  afterAll(async () => {
    await dbConnection.close();
    await app.close();
  });

  afterEach(async () => {
    await dbConnection.collection(collection).deleteMany({});
  });

  describe('auth', () => {
    it('should return an access token when sign in', async () => {
      const password = 'mypassword';
      const user = { email: 'test@test.com', password: await encryptPassword(password) };
      await dbConnection.collection(collection).insertOne(user);
      const response = await request(app.getHttpServer())
        .post('/user/auth')
        .send({ email: 'test@test.com', password })
        .expect(200);
      console.log(response.headers);
      expect(response.headers['set-cookie'][0]).toContain('accessToken');
    });

    it('should return a 401 when sign in with wrong password', async () => {
      const password = 'mypassword1';
      const user = { email: 'test23@test.com', password: await encryptPassword(password) };
      await dbConnection.collection(collection).insertOne(user);
      await request(app.getHttpServer())
        .post('/user/auth')
        .send({ email: 'test23@test.com', password: 'mypassword2' })
        .expect(401);
    });

    it('should return a 401 when sign in with wrong email', async () => {
      const password = 'mypassword1';
      const user = { email: 'test23@test.com', password: await encryptPassword(password) };
      await dbConnection.collection(collection).insertOne(user);
      await request(app.getHttpServer())
        .post('/user/auth')
        .send({ email: 'test-wrong@test.com', password })
        .expect(401);
    });

    it(`should return a user's profile for a signed in user`, async () => {
      const password = 'mypassword';
      const email = 'test78@test.com';
      const user = { email, password: await encryptPassword(password) };
      await dbConnection.collection(collection).insertOne(user);
      const response = await request(app.getHttpServer()).post('/user/auth').send({
        email,
        password,
      });
      const cookie = response.headers['set-cookie'];
      const profileResponse = await request(app.getHttpServer())
        .get('/user/profile')
        .set('Cookie', cookie)
        .expect(200);
      expect(profileResponse.body.email).toEqual(email);
    });

    it(`should return 401 for a not signed in user`, async () => {
      await request(app.getHttpServer())
        .get('/user/profile')
        .set('Cookie', ``)
        .expect(401);
    });

    it('should create a user when sign up', async () => {
      const email = 'test170@test.com';
      const password = 'Qwerty123';
      const name = 'Test User';
      await request(app.getHttpServer()).post('/user/signup').send({ email, password, name }).expect(201);

      await request(app.getHttpServer())
        .post('/user/auth')
        .send({
          email,
          password,
        })
        .expect(200);
    });
  });
});
