import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '@modules/users/typeorm/entities/User';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepositories';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    password,
  }: IRequest): Promise<User | undefined> {
    const userRespository = getCustomRepository(UsersRepository);

    const user = await userRespository.findById(id);

    if (!user) {
      throw new AppError('User not founded');
    }

    const userExists = await userRespository.findByName(name);

    if (userExists) {
      throw new AppError('There is already a user with this name');
    }

    const userEmail = await userRespository.findByEmail(email);

    if (userEmail) {
      throw new AppError('There is already a user with this email');
    }

    user.name = name;
    user.email = email;
    user.password = password;

    await userRespository.save(user);

    return user;
  }
}
