import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '@modules/users/typeorm/entities/User';
import UserRepository from '@modules/users/typeorm/repositories/UsersRepositories';
interface IRequest {
  id: string;
}
class showProductService {
  public async execute({ id }: IRequest): Promise<User | undefined> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export default showProductService;
