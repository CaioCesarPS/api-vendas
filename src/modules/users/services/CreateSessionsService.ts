import { AppError } from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '@modules/users/typeorm/entities/User';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepositories';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
interface IUser {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionsService {
  public async execute({
    email,
    password,
  }: IUser): Promise<IResponse | undefined> {
    const usersRepositories = getCustomRepository(UsersRepository);

    const user = await usersRepositories.findByEmail(email);

    if (!user) {
      throw new AppError('User not founded', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Password incorrect', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default CreateSessionsService;
