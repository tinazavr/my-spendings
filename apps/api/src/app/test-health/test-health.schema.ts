import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type TestHealthDocument = HydratedDocument<TestHealth>;

@Schema()
export class TestHealth {
  @Prop()
  test: string = '';
}

export const TestHealthSchema = SchemaFactory.createForClass(TestHealth);
