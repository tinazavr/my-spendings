import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {User} from './user.shema';
import bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {encryptPassword} from '../encrypt-password';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository, private jwtService: JwtService) {
  }

  async validateUser(email: string, userPassword: string): Promise<Omit<User, 'password'> | UnauthorizedException | void> {
    const user = await this.userRepository.findOne({email});
    if (!user) {
      this.sendUnauthenticated();
      return;
    }
    const {password, ...result} = user;
    if (await bcrypt.compare(userPassword, password)) {
      return result;
    }
    this.sendUnauthenticated();
  }

  async signIn(email: string, password: string) {

    const user = await this.validateUser(email, password);
    if (!user) {
      this.sendUnauthenticated();
      return null;
    } else {
      return {
        accessToken: await this.jwtService.signAsync(user),
      };
    }

  }

  async signUp(email: string, password: string, name: string) {
    return this.userRepository.create({email, name, password: await encryptPassword(password)});
  }

  private sendUnauthenticated() {
    throw new UnauthorizedException();
  }
}
