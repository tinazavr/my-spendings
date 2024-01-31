import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.shema';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findOne(user: Partial<User>): Promise<User> {
    return this.userModel.findOne({ ...user }).lean() as Promise<User>;
  }

  async create({ email, password, name }: User): Promise<void> {
    const createdUser = new this.userModel({ email, password, name });
    await createdUser.save();
  }
}
