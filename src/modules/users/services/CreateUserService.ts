import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '@modules/users/typeorm/entities/User';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepositories';
interface IUser {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: IUser): Promise<User | undefined> {
    const usersRepositories = getCustomRepository(UsersRepository);

    const emailExists = await usersRepositories.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const user = usersRepositories.create({
      name,
      email,
      password,
    });

    await usersRepositories.save(user);
    return user;
  }
}

export default CreateUserService;
